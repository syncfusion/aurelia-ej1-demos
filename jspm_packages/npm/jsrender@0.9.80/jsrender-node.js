/* */ 
(function(global) {
  "use strict";
  if (typeof exports !== 'object') {
    throw "Outside Node.js use //jsviews.com/download/jsrender.js";
  }
  var versionNumber = "v0.9.80",
      $,
      jsvStoreName,
      rTag,
      rTmplString,
      topView,
      $views,
      $isFunction,
      $isArray,
      $templates,
      $converters,
      $helpers,
      $tags,
      $sub,
      $subSettings,
      $subSettingsAdvanced,
      $viewsSettings,
      delimOpenChar0,
      delimOpenChar1,
      delimCloseChar0,
      delimCloseChar1,
      linkChar,
      setting,
      baseOnError,
      rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
      rParams = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      isRenderCall,
      rNewLine = /[ \t]*(\r\n|\n|\r)/g,
      rUnescapeQuotes = /\\(['"])/g,
      rEscapeQuotes = /['"\\]/g,
      rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
      rTestElseIf = /^if\s/,
      rFirstElem = /<(\w+)[>\s]/,
      rAttrEncode = /[\x00`><"'&=]/g,
      rIsHtml = /[\x00`><\"'&=]/,
      rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
      rHtmlEncode = rAttrEncode,
      viewId = 0,
      charEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\x00": "&#0;",
        "'": "&#39;",
        '"': "&#34;",
        "`": "&#96;",
        "=": "&#61;"
      },
      HTML = "html",
      OBJECT = "object",
      tmplAttr = "data-jsv-tmpl",
      jsvTmpl = "jsvTmpl",
      indexStr = "For #index in nested block use #getIndex().",
      $render = {},
      jsvStores = {
        template: {compile: compileTmpl},
        tag: {compile: compileTag},
        viewModel: {compile: compileViewModel},
        helper: {},
        converter: {}
      };
  $views = {
    jsviews: versionNumber,
    sub: {
      View: View,
      Err: JsViewsError,
      tmplFn: tmplFn,
      parse: parseParams,
      extend: $extend,
      extendCtx: extendCtx,
      syntaxErr: syntaxError,
      onStore: {},
      addSetting: addSetting,
      settings: {allowCode: false},
      advSet: noop,
      _ths: tagHandlersFromProps,
      _tg: function() {},
      _cnvt: convertVal,
      _tag: renderTag,
      _er: error,
      _err: onRenderError,
      _html: htmlEncode,
      _cp: retVal,
      _sq: function(token) {
        if (token === "constructor") {
          syntaxError("");
        }
        return token;
      }
    },
    settings: {
      delimiters: $viewsDelimiters,
      advanced: function(value) {
        return value ? ($extend($subSettingsAdvanced, value), $sub.advSet(), $viewsSettings) : $subSettingsAdvanced;
      }
    },
    getCtx: retVal,
    map: dataMap
  };
  function getDerivedMethod(baseMethod, method) {
    return function() {
      var ret,
          tag = this,
          prevBase = tag.base;
      tag.base = baseMethod;
      ret = method.apply(tag, arguments);
      tag.base = prevBase;
      return ret;
    };
  }
  function getMethod(baseMethod, method) {
    if ($isFunction(method)) {
      method = getDerivedMethod(!baseMethod ? noop : baseMethod._d ? baseMethod : getDerivedMethod(noop, baseMethod), method);
      method._d = 1;
    }
    return method;
  }
  function tagHandlersFromProps(tag, tagCtx) {
    for (var prop in tagCtx.props) {
      if (rHasHandlers.test(prop)) {
        tag[prop] = getMethod(tag[prop], tagCtx.props[prop]);
      }
    }
  }
  function retVal(val) {
    return val;
  }
  function noop() {
    return "";
  }
  function dbgBreak(val) {
    try {
      console.log("JsRender dbg breakpoint: " + val);
      throw "dbg breakpoint";
    } catch (e) {}
    return this.base ? this.baseApply(arguments) : val;
  }
  function JsViewsError(message) {
    this.name = ($.link ? "JsViews" : "JsRender") + " Error";
    this.message = message || this.name;
  }
  function $extend(target, source) {
    for (var name in source) {
      target[name] = source[name];
    }
    return target;
  }
  (JsViewsError.prototype = new Error()).constructor = JsViewsError;
  function $viewsDelimiters(openChars, closeChars, link) {
    if (!openChars) {
      return $subSettings.delimiters;
    }
    if ($isArray(openChars)) {
      return $viewsDelimiters.apply($views, openChars);
    }
    $subSettings.delimiters = [openChars, closeChars, linkChar = link ? link.charAt(0) : linkChar];
    delimOpenChar0 = openChars.charAt(0);
    delimOpenChar1 = openChars.charAt(1);
    delimCloseChar0 = closeChars.charAt(0);
    delimCloseChar1 = closeChars.charAt(1);
    openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1;
    closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;
    rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";
    $sub.rTag = "(?:" + rTag + ")";
    rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g");
    $sub.rTmpl = new RegExp("<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
    return $viewsSettings;
  }
  function getView(inner, type) {
    if (!type && inner !== true) {
      type = inner;
      inner = undefined;
    }
    var views,
        i,
        l,
        found,
        view = this,
        root = !type || type === "root";
    if (inner) {
      found = type && view.type === type && view;
      if (!found) {
        views = view.views;
        if (view._.useKey) {
          for (i in views) {
            if (found = type ? views[i].get(inner, type) : views[i]) {
              break;
            }
          }
        } else {
          for (i = 0, l = views.length; !found && i < l; i++) {
            found = type ? views[i].get(inner, type) : views[i];
          }
        }
      }
    } else if (root) {
      while (view.parent) {
        found = view;
        view = view.parent;
      }
    } else {
      while (view && !found) {
        found = view.type === type ? view : undefined;
        view = view.parent;
      }
    }
    return found;
  }
  function getNestedIndex() {
    var view = this.get("item");
    return view ? view.index : undefined;
  }
  getNestedIndex.depends = function() {
    return [this.get("item"), "index"];
  };
  function getIndex() {
    return this.index;
  }
  getIndex.depends = "index";
  function getHelper(helper, isContextCb) {
    var wrapped,
        deps,
        view = this,
        res = view.ctx;
    if (res) {
      res = res[helper];
    }
    if (res === undefined) {
      res = $helpers[helper];
    }
    if (res && res._cp) {
      if (isContextCb) {
        deps = $sub._ceo(res[1].deps);
        deps.unshift(res[0].data);
        deps._cp = true;
        return deps;
      }
      res = $views.getCtx(res);
    }
    if (res) {
      if ($isFunction(res) && !res._wrp) {
        wrapped = function() {
          return res.apply((!this || this === global) ? view : this, arguments);
        };
        wrapped._wrp = view;
        $extend(wrapped, res);
      }
    }
    return wrapped || res;
  }
  function getTemplate(tmpl) {
    return tmpl && (tmpl.fn ? tmpl : this.getRsc("templates", tmpl) || $templates(tmpl));
  }
  function convertVal(converter, view, tagCtx, onError) {
    var tag,
        value,
        boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx - 1],
        linkCtx = view.linkCtx;
    if (onError !== undefined) {
      tagCtx = onError = {
        props: {},
        args: [onError]
      };
    } else if (boundTag) {
      tagCtx = boundTag(view.data, view, $sub);
    }
    value = tagCtx.args[0];
    if (converter || boundTag) {
      tag = linkCtx && linkCtx.tag;
      if (!tag) {
        tag = $extend(new $sub._tg(), {
          _: {
            inline: !linkCtx,
            bnd: boundTag,
            unlinked: true
          },
          tagName: ":",
          cvt: converter,
          flow: true,
          tagCtx: tagCtx
        });
        if (linkCtx) {
          linkCtx.tag = tag;
          tag.linkCtx = linkCtx;
        }
        tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
      }
      tag._er = onError && value;
      tagHandlersFromProps(tag, tagCtx);
      tagCtx.view = view;
      tag.ctx = tagCtx.ctx || tag.ctx || {};
      tagCtx.ctx = undefined;
      value = tag.cvtArgs(converter !== "true" && converter)[0];
      value = boundTag && view._.onRender ? view._.onRender(value, view, tag) : value;
    }
    return value != undefined ? value : "";
  }
  function convertArgs(converter) {
    var tag = this,
        tagCtx = tag.tagCtx,
        view = tagCtx.view,
        args = tagCtx.args;
    converter = converter || tag.convert;
    converter = converter && ("" + converter === converter ? (view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'")) : converter);
    args = !args.length && !tagCtx.index ? [view.data] : converter ? args.slice() : args;
    if (converter) {
      if (converter.depends) {
        tag.depends = $sub.getDeps(tag.depends, tag, converter.depends, converter);
      }
      args[0] = converter.apply(tag, args);
    }
    return args;
  }
  function getResource(resourceType, itemName) {
    var res,
        store,
        view = this;
    while ((res === undefined) && view) {
      store = view.tmpl && view.tmpl[resourceType];
      res = store && store[itemName];
      view = view.parent;
    }
    return res || $views[resourceType][itemName];
  }
  function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
    parentView = parentView || topView;
    var tag,
        tag_,
        tagDef,
        template,
        tags,
        attr,
        parentTag,
        i,
        l,
        itemRet,
        tagCtx,
        tagCtxCtx,
        content,
        callInit,
        mapDef,
        thisMap,
        args,
        props,
        initialTmpl,
        tagDataMap,
        ret = "",
        linkCtx = parentView.linkCtx || 0,
        ctx = parentView.ctx,
        parentTmpl = tmpl || parentView.tmpl,
        boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs - 1];
    if (tagName._is === "tag") {
      tag = tagName;
      tagName = tag.tagName;
      tagCtxs = tag.tagCtxs;
      template = tag.template;
    } else {
      tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
      template = tagDef.template;
    }
    if (onError !== undefined) {
      ret += onError;
      tagCtxs = onError = [{
        props: {},
        args: []
      }];
    } else if (boundTag) {
      tagCtxs = boundTag(parentView.data, parentView, $sub);
    }
    l = tagCtxs.length;
    for (i = 0; i < l; i++) {
      tagCtx = tagCtxs[i];
      if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag._.inline || tag._er) {
        if (content = parentTmpl.tmpls && tagCtx.tmpl) {
          content = tagCtx.content = parentTmpl.tmpls[content - 1];
        }
        tagCtx.index = i;
        tagCtx.tmpl = content;
        tagCtx.render = renderContent;
        tagCtx.view = parentView;
        tagCtx.ctx = extendCtx(tagCtx.ctx, ctx);
      }
      if (tmpl = tagCtx.props.tmpl) {
        tagCtx.tmpl = parentView.getTmpl(tmpl);
      }
      if (!tag) {
        tag = new tagDef._ctr();
        callInit = !!tag.init;
        tag.parent = parentTag = ctx && ctx.tag;
        tag.tagCtxs = tagCtxs;
        tagDataMap = tag.dataMap;
        if (linkCtx) {
          tag._.inline = false;
          linkCtx.tag = tag;
          tag.linkCtx = linkCtx;
        }
        if (tag._.bnd = boundTag || linkCtx.fn) {
          tag._.arrVws = {};
        } else if (tag.dataBoundOnly) {
          error("{^{" + tagName + "}} tag must be data-bound");
        }
      }
      tagCtxs = tag.tagCtxs;
      tagDataMap = tag.dataMap;
      tagCtx.tag = tag;
      if (tagDataMap && tagCtxs) {
        tagCtx.map = tagCtxs[i].map;
      }
      if (!tag.flow) {
        tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {};
        tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};
        if (parentTag) {
          tags[parentTag.tagName] = parentTag;
        }
        tags[tag.tagName] = tagCtxCtx.tag = tag;
      }
    }
    if (!(tag._er = onError)) {
      tagHandlersFromProps(tag, tagCtxs[0]);
      tag.rendering = {};
      for (i = 0; i < l; i++) {
        tagCtx = tag.tagCtx = tagCtxs[i];
        props = tagCtx.props;
        args = tag.cvtArgs();
        if (mapDef = props.dataMap || tagDataMap) {
          if (args.length || props.dataMap) {
            thisMap = tagCtx.map;
            if (!thisMap || thisMap.src !== args[0] || isUpdate) {
              if (thisMap && thisMap.src) {
                thisMap.unmap();
              }
              thisMap = tagCtx.map = mapDef.map(args[0], props, undefined, !tag._.bnd);
            }
            args = [thisMap.tgt];
          }
        }
        tag.ctx = tagCtx.ctx;
        if (!i) {
          if (callInit) {
            initialTmpl = tag.template;
            tag.init(tagCtx, linkCtx, tag.ctx);
            callInit = undefined;
          }
          if (linkCtx) {
            linkCtx.attr = tag.attr = linkCtx.attr || tag.attr;
          }
          attr = tag.attr;
          tag._.noVws = attr && attr !== HTML;
        }
        itemRet = undefined;
        if (tag.render) {
          itemRet = tag.render.apply(tag, args);
        }
        if (!args.length) {
          args = [parentView];
        }
        if (itemRet === undefined) {
          itemRet = tagCtx.render(args[0], true) || (isUpdate ? undefined : "");
        }
        ret = ret ? ret + (itemRet || "") : itemRet;
      }
      tag.rendering = undefined;
    }
    tag.tagCtx = tagCtxs[0];
    tag.ctx = tag.tagCtx.ctx;
    if (tag._.noVws) {
      if (tag._.inline) {
        ret = attr === "text" ? $converters.html(ret) : "";
      }
    }
    return boundTag && parentView._.onRender ? parentView._.onRender(ret, parentView, tag) : ret;
  }
  function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
    var views,
        parentView_,
        tag,
        self_,
        self = this,
        isArray = type === "array";
    self.content = contentTmpl;
    self.views = isArray ? [] : {};
    self.parent = parentView;
    self.type = type || "top";
    self.data = data;
    self.tmpl = template;
    self_ = self._ = {
      key: 0,
      useKey: isArray ? 0 : 1,
      id: "" + viewId++,
      onRender: onRender,
      bnds: {}
    };
    self.linked = !!onRender;
    if (parentView) {
      views = parentView.views;
      parentView_ = parentView._;
      if (parentView_.useKey) {
        views[self_.key = "_" + parentView_.useKey++] = self;
        self.index = indexStr;
        self.getIndex = getNestedIndex;
      } else if (views.length === (self_.key = self.index = key)) {
        views.push(self);
      } else {
        views.splice(key, 0, self);
      }
      self.ctx = context || parentView.ctx;
    } else {
      self.ctx = context;
    }
  }
  View.prototype = {
    get: getView,
    getIndex: getIndex,
    getRsc: getResource,
    getTmpl: getTemplate,
    hlp: getHelper,
    _is: "view"
  };
  function compileChildResources(parentTmpl) {
    var storeName,
        storeNames,
        resources;
    for (storeName in jsvStores) {
      storeNames = storeName + "s";
      if (parentTmpl[storeNames]) {
        resources = parentTmpl[storeNames];
        parentTmpl[storeNames] = {};
        $views[storeNames](resources, parentTmpl);
      }
    }
  }
  function compileTag(name, tagDef, parentTmpl) {
    var tmpl,
        baseTag,
        prop,
        compiledDef = new $sub._tg();
    function Tag() {
      var tag = this;
      tag._ = {
        inline: true,
        unlinked: true
      };
      tag.tagName = name;
    }
    if ($isFunction(tagDef)) {
      tagDef = {
        depends: tagDef.depends,
        render: tagDef
      };
    } else if ("" + tagDef === tagDef) {
      tagDef = {template: tagDef};
    }
    if (baseTag = tagDef.baseTag) {
      tagDef.flow = !!tagDef.flow;
      tagDef.baseTag = baseTag = "" + baseTag === baseTag ? (parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag]) : baseTag;
      compiledDef = $extend(compiledDef, baseTag);
      for (prop in tagDef) {
        compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
      }
    } else {
      compiledDef = $extend(compiledDef, tagDef);
    }
    if ((tmpl = compiledDef.template) !== undefined) {
      compiledDef.template = "" + tmpl === tmpl ? ($templates[tmpl] || $templates(tmpl)) : tmpl;
    }
    if (compiledDef.init !== false) {
      (Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;
    }
    if (parentTmpl) {
      compiledDef._parentTmpl = parentTmpl;
    }
    return compiledDef;
  }
  function baseApply(args) {
    return this.base.apply(this, args);
  }
  function compileTmpl(name, tmpl, parentTmpl, options) {
    function lookupTemplate(value) {
      var currentName,
          tmpl;
      if (("" + value === value) || value.nodeType > 0 && (elem = value)) {
        if (!elem) {
          if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
            if (tmpl = $templates[name = name || value]) {
              value = tmpl;
            } else {
              try {
                value = nodeFs.readFileSync(value, "utf8");
              } catch (e) {
                if (e && e.code == 'ENOENT') {
                  error("Template '" + value + "' not found at '" + e.path + "'. Use path relative to '" + rootDirPath + "'.");
                }
              }
              value = compileTmpl(name, value.replace(/^\uFEFF/, ''), parentTmpl, options);
              if (!options) {
                $templates[name] = value;
              }
            }
          }
        }
        elem = undefined;
      } else if (!value.fn) {
        value = undefined;
      }
      return value;
    }
    var elem,
        compiledTmpl,
        tmplOrMarkup = tmpl = tmpl || "";
    if (options === 0) {
      options = undefined;
      tmplOrMarkup = lookupTemplate(tmplOrMarkup);
    }
    options = options || (tmpl.markup ? tmpl : {});
    options.tmplName = name;
    if (parentTmpl) {
      options._parentTmpl = parentTmpl;
    }
    if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup))) {
      if (tmplOrMarkup.fn) {
        tmplOrMarkup = tmplOrMarkup.markup;
      }
    }
    if (tmplOrMarkup !== undefined) {
      if (tmplOrMarkup.fn || tmpl.fn) {
        if (tmplOrMarkup.fn) {
          compiledTmpl = tmplOrMarkup;
        }
      } else {
        tmpl = tmplObject(tmplOrMarkup, options);
        tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
      }
      if (!compiledTmpl) {
        compiledTmpl = $extend(function() {
          return compiledTmpl.render.apply(compiledTmpl, arguments);
        }, tmpl);
        compileChildResources(compiledTmpl);
      }
      if (name && !parentTmpl && name !== jsvTmpl) {
        $render[name] = compiledTmpl;
      }
      return compiledTmpl;
    }
  }
  function getDefaultVal(defaultVal, data) {
    return $.isFunction(defaultVal) ? defaultVal.call(data) : defaultVal;
  }
  function unmapArray(modelArr) {
    var i,
        arr = [],
        l = modelArr.length;
    for (i = 0; i < l; i++) {
      arr.push(modelArr[i].unmap());
    }
    return arr;
  }
  function compileViewModel(name, type) {
    var i,
        constructor,
        viewModels = this,
        getters = type.getters,
        extend = type.extend,
        id = type.id,
        proto = $.extend({
          _is: name || "unnamed",
          unmap: unmap,
          merge: merge
        }, extend),
        args = "",
        body = "",
        l = getters ? getters.length : 0,
        $observable = $.observable,
        getterNames = {};
    function GetNew(args) {
      constructor.apply(this, args);
    }
    function vm() {
      return new GetNew(arguments);
    }
    function iterate(data, action) {
      var j,
          getterType,
          defaultVal,
          prop,
          ob,
          m = getters.length;
      for (j = 0; j < m; j++) {
        prop = getters[j];
        getterType = undefined;
        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
        }
        if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
          ob = getDefaultVal(defaultVal, data);
        }
        action(ob, getterType && viewModels[getterType.type], prop);
      }
    }
    function map(data) {
      data = data + "" === data ? JSON.parse(data) : data;
      var i,
          j,
          l,
          m,
          prop,
          ob = data,
          arr = [];
      if ($isArray(data)) {
        data = data || [];
        l = data.length;
        for (i = 0; i < l; i++) {
          arr.push(this.map(data[i]));
        }
        arr._is = name;
        arr.unmap = unmap;
        arr.merge = merge;
        return arr;
      }
      if (data) {
        iterate(data, function(ob, viewModel) {
          if (viewModel) {
            ob = viewModel.map(ob);
          }
          arr.push(ob);
        });
        ob = this.apply(this, arr);
        for (prop in data) {
          if (!getterNames[prop]) {
            ob[prop] = data[prop];
          }
        }
      }
      return ob;
    }
    function merge(data) {
      data = data + "" === data ? JSON.parse(data) : data;
      var i,
          j,
          l,
          m,
          prop,
          mod,
          found,
          assigned,
          ob,
          newModArr,
          model = this;
      if ($isArray(model)) {
        assigned = {};
        newModArr = [];
        l = data.length;
        m = model.length;
        for (i = 0; i < l; i++) {
          ob = data[i];
          found = false;
          for (j = 0; j < m && !found; j++) {
            if (assigned[j]) {
              continue;
            }
            mod = model[j];
            if (id) {
              assigned[j] = found = id + "" === id ? (ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id]) : id(mod, ob);
            }
          }
          if (found) {
            mod.merge(ob);
            newModArr.push(mod);
          } else {
            newModArr.push(vm.map(ob));
          }
        }
        if ($observable) {
          $observable(model).refresh(newModArr, true);
        } else {
          model.splice.apply(model, [0, model.length].concat(newModArr));
        }
        return;
      }
      iterate(data, function(ob, viewModel, getter) {
        if (viewModel) {
          model[getter]().merge(ob);
        } else {
          model[getter](ob);
        }
      });
      for (prop in data) {
        if (!getterNames[prop]) {
          model[prop] = data[prop];
        }
      }
    }
    function unmap() {
      var ob,
          prop,
          i,
          l,
          getterType,
          arr,
          value,
          model = this;
      if ($isArray(model)) {
        return unmapArray(model);
      }
      ob = {};
      l = getters.length;
      for (i = 0; i < l; i++) {
        prop = getters[i];
        getterType = undefined;
        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
        }
        value = model[prop]();
        ob[prop] = getterType && value && viewModels[getterType.type] ? $isArray(value) ? unmapArray(value) : value.unmap() : value;
      }
      for (prop in model) {
        if (prop !== "_is" && !getterNames[prop] && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && !$.isFunction(model[prop])) {
          ob[prop] = model[prop];
        }
      }
      return ob;
    }
    GetNew.prototype = proto;
    for (i = 0; i < l; i++) {
      (function(getter) {
        getter = getter.getter || getter;
        getterNames[getter] = i + 1;
        var privField = "_" + getter;
        args += (args ? "," : "") + getter;
        body += "this." + privField + " = " + getter + ";\n";
        proto[getter] = proto[getter] || function(val) {
          if (!arguments.length) {
            return this[privField];
          }
          if ($observable) {
            $observable(this).setProperty(getter, val);
          } else {
            this[privField] = val;
          }
        };
        if ($observable) {
          proto[getter].set = proto[getter].set || function(val) {
            this[privField] = val;
          };
        }
      })(getters[i]);
    }
    constructor = new Function(args, body.slice(0, -1));
    constructor.prototype = proto;
    proto.constructor = constructor;
    vm.map = map;
    vm.getters = getters;
    vm.extend = extend;
    vm.id = id;
    return vm;
  }
  function tmplObject(markup, options) {
    var htmlTag,
        wrapMap = $subSettingsAdvanced._wm || {},
        tmpl = $extend({
          tmpls: [],
          links: {},
          bnds: [],
          _is: "template",
          render: renderContent
        }, options);
    tmpl.markup = markup;
    if (!options.htmlTag) {
      htmlTag = rFirstElem.exec(markup);
      tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
    }
    htmlTag = wrapMap[tmpl.htmlTag];
    if (htmlTag && htmlTag !== wrapMap.div) {
      tmpl.markup = $.trim(tmpl.markup);
    }
    return tmpl;
  }
  function registerStore(storeName, storeSettings) {
    function theStore(name, item, parentTmpl) {
      var onStore,
          compile,
          itemName,
          thisStore;
      if (name && typeof name === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
        for (itemName in name) {
          theStore(itemName, name[itemName], item);
        }
        return item || $views;
      }
      if (item === undefined) {
        item = name;
        name = undefined;
      }
      if (name && "" + name !== name) {
        parentTmpl = item;
        item = name;
        name = undefined;
      }
      thisStore = parentTmpl ? storeName === "viewModel" ? parentTmpl : (parentTmpl[storeNames] = parentTmpl[storeNames] || {}) : theStore;
      compile = storeSettings.compile;
      if (item === null) {
        if (name) {
          delete thisStore[name];
        }
      } else {
        item = compile ? compile.call(thisStore, name, item, parentTmpl, 0) : item;
        if (name) {
          thisStore[name] = item;
        }
      }
      if (compile && item) {
        item._is = storeName;
      }
      if (item && (onStore = $sub.onStore[storeName])) {
        onStore(name, item, compile);
      }
      return item;
    }
    var storeNames = storeName + "s";
    $views[storeNames] = theStore;
  }
  function addSetting(st) {
    $viewsSettings[st] = function(value) {
      return arguments.length ? ($subSettings[st] = value, $viewsSettings) : $subSettings[st];
    };
  }
  function dataMap(mapDef) {
    function Map(source, options) {
      this.tgt = mapDef.getTgt(source, options);
    }
    if ($isFunction(mapDef)) {
      mapDef = {getTgt: mapDef};
    }
    if (mapDef.baseMap) {
      mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
    }
    mapDef.map = function(source, options) {
      return new Map(source, options);
    };
    return mapDef;
  }
  function renderContent(data, context, noIteration, parentView, key, onRender) {
    var i,
        l,
        tag,
        tmpl,
        tagCtx,
        isTopRenderCall,
        prevData,
        prevIndex,
        view = parentView,
        result = "";
    if (context === true) {
      noIteration = context;
      context = undefined;
    } else if (typeof context !== OBJECT) {
      context = undefined;
    }
    if (tag = this.tag) {
      tagCtx = this;
      view = view || tagCtx.view;
      tmpl = view.getTmpl(tag.template || tagCtx.tmpl);
      if (!arguments.length) {
        data = view;
      }
    } else {
      tmpl = this;
    }
    if (tmpl) {
      if (!view && data && data._is === "view") {
        view = data;
      }
      if (view) {
        if (data === view) {
          data = view.data;
        }
      }
      isTopRenderCall = !view;
      isRenderCall = isRenderCall || isTopRenderCall;
      if (!view) {
        (context = context || {}).root = data;
      }
      if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
        result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
      } else {
        if (view) {
          prevData = view.data;
          prevIndex = view.index;
          view.index = indexStr;
        } else {
          view = topView;
          view.data = data;
          view.ctx = context;
        }
        if ($isArray(data) && !noIteration) {
          for (i = 0, l = data.length; i < l; i++) {
            view.index = i;
            view.data = data[i];
            result += tmpl.fn(data[i], view, $sub);
          }
        } else {
          view.data = data;
          result += tmpl.fn(data, view, $sub);
        }
        view.data = prevData;
        view.index = prevIndex;
      }
      if (isTopRenderCall) {
        isRenderCall = undefined;
      }
    }
    return result;
  }
  function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
    function setItemVar(item) {
      newCtx = $extend({}, context);
      newCtx[itemVar] = item;
    }
    var i,
        l,
        newView,
        childView,
        itemResult,
        swapContent,
        contentTmpl,
        outerOnRender,
        tmplName,
        itemVar,
        newCtx,
        tagCtx,
        result = "";
    if (tag) {
      tmplName = tag.tagName;
      tagCtx = tag.tagCtx;
      context = context ? extendCtx(context, tag.ctx) : tag.ctx;
      if (tmpl === view.content) {
        contentTmpl = tmpl !== view.ctx._wrp ? view.ctx._wrp : undefined;
      } else if (tmpl !== tagCtx.content) {
        if (tmpl === tag.template) {
          contentTmpl = tagCtx.tmpl;
          context._wrp = tagCtx.content;
        } else {
          contentTmpl = tagCtx.content || view.content;
        }
      } else {
        contentTmpl = view.content;
      }
      if (tagCtx.props.link === false) {
        context = context || {};
        context.link = false;
      }
      if (itemVar = tagCtx.props.itemVar) {
        if (itemVar.charAt(0) !== "~") {
          syntaxError("Use itemVar='~myItem'");
        }
        itemVar = itemVar.slice(1);
      }
    }
    if (view) {
      onRender = onRender || view._.onRender;
      context = extendCtx(context, view.ctx);
    }
    if (key === true) {
      swapContent = true;
      key = 0;
    }
    if (onRender && (context && context.link === false || tag && tag._.noVws)) {
      onRender = undefined;
    }
    outerOnRender = onRender;
    if (onRender === true) {
      outerOnRender = undefined;
      onRender = view._.onRender;
    }
    context = tmpl.helpers ? extendCtx(tmpl.helpers, context) : context;
    newCtx = context;
    if ($isArray(data) && !noIteration) {
      newView = swapContent ? view : (key !== undefined && view) || new View(context, "array", view, data, tmpl, key, onRender);
      if (view && view._.useKey) {
        newView._.bnd = !tag || tag._.bnd && tag;
      }
      if (itemVar) {
        newView.it = itemVar;
      }
      itemVar = newView.it;
      for (i = 0, l = data.length; i < l; i++) {
        if (itemVar) {
          setItemVar(data[i]);
        }
        childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, contentTmpl);
        itemResult = tmpl.fn(data[i], childView, $sub);
        result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
      }
    } else {
      if (itemVar) {
        setItemVar(data);
      }
      newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);
      if (tag && !tag.flow) {
        newView.tag = tag;
      }
      result += tmpl.fn(data, newView, $sub);
    }
    return outerOnRender ? outerOnRender(result, newView) : result;
  }
  function onRenderError(e, view, fallback) {
    var message = fallback !== undefined ? $isFunction(fallback) ? fallback.call(view.data, e, view) : fallback || "" : "{Error: " + e.message + "}";
    if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
      message = fallback;
    }
    return view && !view.linkCtx ? $converters.html(message) : message;
  }
  function error(message) {
    throw new $sub.Err(message);
  }
  function syntaxError(message) {
    error("Syntax error\n" + message);
  }
  function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
    function pushprecedingContent(shift) {
      shift -= loc;
      if (shift) {
        content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
      }
    }
    function blockTagCheck(tagName, block) {
      if (tagName) {
        tagName += '}}';
        syntaxError((block ? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName : 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
      }
    }
    function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
      if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
        syntaxError(all);
      }
      if (html) {
        colon = ":";
        converter = HTML;
      }
      slash = slash || isLinkExpr && !hasElse;
      var pathBindings = (bind || isLinkExpr) && [[]],
          props = "",
          args = "",
          ctxProps = "",
          paramsArgs = "",
          paramsProps = "",
          paramsCtxProps = "",
          onError = "",
          useTrigger = "",
          block = !slash && !colon;
      tagName = tagName || (params = params || "#data", colon);
      pushprecedingContent(index);
      loc = index + all.length;
      if (codeTag) {
        if (allowCode) {
          content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
        }
      } else if (tagName) {
        if (tagName === "else") {
          if (rTestElseIf.test(params)) {
            syntaxError('for "{{else if expr}}" use "{{else expr}}"');
          }
          pathBindings = current[7] && [[]];
          current[8] = markup.substring(current[8], index);
          current = stack.pop();
          content = current[2];
          block = true;
        }
        if (params) {
          parseParams(params.replace(rNewLine, " "), pathBindings, tmpl).replace(rBuildHash, function(all, onerror, isCtx, key, keyToken, keyValue, arg, param) {
            key = "'" + keyToken + "':";
            if (arg) {
              args += keyValue + ",";
              paramsArgs += "'" + param + "',";
            } else if (isCtx) {
              ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),';
              paramsCtxProps += key + "'" + param + "',";
            } else if (onerror) {
              onError += keyValue;
            } else {
              if (keyToken === "trigger") {
                useTrigger += keyValue;
              }
              props += key + keyValue + ",";
              paramsProps += key + "'" + param + "',";
              hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
            }
            return "";
          }).slice(0, -1);
        }
        if (pathBindings && pathBindings[0]) {
          pathBindings.pop();
        }
        newNode = [tagName, converter || !!convertBack || hasHandlers || "", block && [], parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps), onError, useTrigger, pathBindings || 0];
        content.push(newNode);
        if (block) {
          stack.push(current);
          current = newNode;
          current[8] = loc;
        }
      } else if (closeBlock) {
        blockTagCheck(closeBlock !== current[0] && current[0] !== "else" && closeBlock, current[0]);
        current[8] = markup.substring(current[8], index);
        current = stack.pop();
      }
      blockTagCheck(!current && closeBlock);
      content = current[2];
    }
    var i,
        result,
        newNode,
        hasHandlers,
        bindings,
        allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode || $viewsSettings.allowCode === true,
        astTop = [],
        loc = 0,
        stack = [],
        content = astTop,
        current = [, , astTop];
    if (allowCode && tmpl._is) {
      tmpl.allowCode = allowCode;
    }
    if (isLinkExpr) {
      if (convertBack !== undefined) {
        markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar1;
      }
      markup = delimOpenChar0 + markup + delimCloseChar1;
    }
    blockTagCheck(stack[0] && stack[0][2].pop()[0]);
    markup.replace(rTag, parseTag);
    pushprecedingContent(markup.length);
    if (loc = astTop[astTop.length - 1]) {
      blockTagCheck("" + loc !== loc && (+loc[8] === loc[8]) && loc[0]);
    }
    if (isLinkExpr) {
      result = buildCode(astTop, markup, isLinkExpr);
      bindings = [];
      i = astTop.length;
      while (i--) {
        bindings.unshift(astTop[i][7]);
      }
      setPaths(result, bindings);
    } else {
      result = buildCode(astTop, tmpl);
    }
    return result;
  }
  function setPaths(fn, pathsArr) {
    var key,
        paths,
        i = 0,
        l = pathsArr.length;
    fn.deps = [];
    for (; i < l; i++) {
      paths = pathsArr[i];
      for (key in paths) {
        if (key !== "_jsvto" && paths[key].length) {
          fn.deps = fn.deps.concat(paths[key]);
        }
      }
    }
    fn.paths = paths;
  }
  function parsedParam(args, props, ctx) {
    return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
  }
  function paramStructure(parts, type) {
    return '\n\t' + (type ? type + ':{' : '') + 'args:[' + parts[0] + ']' + (parts[1] || !type ? ',\n\tprops:{' + parts[1] + '}' : "") + (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
  }
  function parseParams(params, pathBindings, tmpl) {
    function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
      function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
        var subPath = object === ".";
        if (object) {
          path = path.slice(not.length);
          if (/^\.?constructor$/.test(leafToken || path)) {
            syntaxError(allPath);
          }
          if (!subPath) {
            allPath = (helper ? 'view.hlp("' + helper + '")' : view ? "view" : "data") + (leafToken ? (viewProperty ? "." + viewProperty : helper ? "" : (view ? "" : "." + object)) + (pathTokens || "") : (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));
            allPath = allPath + (leafToken ? "." + leafToken : "");
            allPath = not + (allPath.slice(0, 9) === "view.data" ? allPath.slice(5) : allPath);
          }
          if (bindings) {
            binds = named === "linkTo" ? (bindto = pathBindings._jsvto = pathBindings._jsvto || []) : bndCtx.bd;
            if (theOb = subPath && binds[binds.length - 1]) {
              if (theOb._jsv) {
                while (theOb.sb) {
                  theOb = theOb.sb;
                }
                if (theOb.bnd) {
                  path = "^" + path.slice(1);
                }
                theOb.sb = path;
                theOb.bnd = theOb.bnd || path.charAt(0) === "^";
              }
            } else {
              binds.push(path);
            }
            pathStart[parenDepth] = index + (subPath ? 1 : 0);
          }
        }
        return allPath;
      }
      if (bound && !eq) {
        path = bound + path;
      }
      operator = operator || "";
      lftPrn = lftPrn || lftPrn0 || lftPrn2;
      path = path || path2;
      prn = prn || prn2 || "";
      var expr,
          exprFn,
          binds,
          theOb,
          newOb,
          rtSq = ")";
      if (prn === "[") {
        prn = "[j._sq(";
        rtSq = ")]";
      }
      if (err && !aposed && !quoted) {
        syntaxError(params);
      } else {
        if (bindings && rtPrnDot && !aposed && !quoted) {
          if (!named || boundName || bindto) {
            expr = pathStart[parenDepth - 1];
            if (full.length - 1 > index - (expr || 0)) {
              expr = full.slice(expr, index + all.length);
              if (exprFn !== true) {
                binds = bindto || bndStack[parenDepth - 1].bd;
                theOb = binds[binds.length - 1];
                if (theOb && theOb.prm) {
                  while (theOb.sb && theOb.sb.prm) {
                    theOb = theOb.sb;
                  }
                  newOb = theOb.sb = {
                    path: theOb.sb,
                    bnd: theOb.bnd
                  };
                } else {
                  binds.push(newOb = {path: binds.pop()});
                }
              }
              rtPrnDot = delimOpenChar1 + ":" + expr + " onerror=''" + delimCloseChar0;
              exprFn = tmplLinks[rtPrnDot];
              if (!exprFn) {
                tmplLinks[rtPrnDot] = true;
                tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true);
              }
              if (exprFn !== true && newOb) {
                newOb._jsv = exprFn;
                newOb.prm = bndCtx.bd;
                newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
              }
            }
          }
        }
        return (aposed ? (aposed = !apos, (aposed ? all : lftPrn2 + '"')) : quoted ? (quoted = !quot, (quoted ? all : lftPrn2 + '"')) : ((lftPrn ? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {bd: []}, lftPrn) : "") + (space ? (parenDepth ? "" : (paramIndex = full.slice(paramIndex, index), named ? (named = boundName = bindto = false, "\b") : "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b")) : eq ? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = path, boundName = bound, paramIndex = index + all.length, bound && (bindings = bndCtx.bd = pathBindings[named] = []), path + ':') : path ? (path.split("^").join(".").replace(rPath, parsePath) + (prn ? (bndCtx = bndStack[++parenDepth] = {bd: []}, fnCall[parenDepth] = rtSq, prn) : operator)) : operator ? operator : rtPrn ? ((rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn) + (prn ? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn) : "")) : comma ? (fnCall[parenDepth] || syntaxError(params), ",") : lftPrn0 ? "" : (aposed = apos, quoted = quot, '"'))));
      }
    }
    var named,
        bindto,
        boundName,
        quoted,
        aposed,
        bindings = pathBindings && pathBindings[0],
        bndCtx = {bd: bindings},
        bndStack = {0: bndCtx},
        paramIndex = 0,
        tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
        parenDepth = 0,
        fnCall = {},
        pathStart = {},
        result = (params + (tmpl ? " " : "")).replace(rParams, parseTokens);
    return !parenDepth && result || syntaxError(params);
  }
  function buildCode(ast, tmpl, isLinkExpr) {
    var i,
        node,
        tagName,
        converter,
        tagCtx,
        hasTag,
        hasEncoder,
        getsVal,
        hasCnvt,
        useCnvt,
        tmplBindings,
        pathBindings,
        params,
        boundOnErrStart,
        boundOnErrEnd,
        tagRender,
        nestedTmpls,
        tmplName,
        nestedTmpl,
        tagAndElses,
        content,
        markup,
        nextIsElse,
        oldCode,
        isElse,
        isGetVal,
        tagCtxFn,
        onError,
        tagStart,
        trigger,
        tmplBindingKey = 0,
        useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
        code = "",
        tmplOptions = {},
        l = ast.length;
    if ("" + tmpl === tmpl) {
      tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
      tmpl = 0;
    } else {
      tmplName = tmpl.tmplName || "unnamed";
      if (tmpl.allowCode) {
        tmplOptions.allowCode = true;
      }
      if (tmpl.debug) {
        tmplOptions.debug = true;
      }
      tmplBindings = tmpl.bnds;
      nestedTmpls = tmpl.tmpls;
    }
    for (i = 0; i < l; i++) {
      node = ast[i];
      if ("" + node === node) {
        code += '\n+"' + node + '"';
      } else {
        tagName = node[0];
        if (tagName === "*") {
          code += ";\n" + node[1] + "\nret=ret";
        } else {
          converter = node[1];
          content = !isLinkExpr && node[2];
          tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
          var prm = params[1];
          if (prm && /^'tmpl':"\.\/[^\:*?"<>]*"$/.test(prm)) {
            tmpl.refs = tmpl.refs || {};
            tmpl.refs[prm.slice(8, -1)] = 1;
          }
          onError = node[5];
          trigger = node[6];
          markup = node[8] && node[8].replace(rUnescapeQuotes, "$1");
          if (isElse = tagName === "else") {
            if (pathBindings) {
              pathBindings.push(node[7]);
            }
          } else {
            tmplBindingKey = 0;
            if (tmplBindings && (pathBindings = node[7])) {
              pathBindings = [pathBindings];
              tmplBindingKey = tmplBindings.push(1);
            }
          }
          useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]);
          if (isGetVal = tagName === ":") {
            if (converter) {
              tagName = converter === HTML ? ">" : converter + tagName;
            }
          } else {
            if (content) {
              nestedTmpl = tmplObject(markup, tmplOptions);
              nestedTmpl.tmplName = tmplName + "/" + tagName;
              nestedTmpl.useViews = nestedTmpl.useViews || useViews;
              buildCode(content, nestedTmpl);
              useViews = nestedTmpl.useViews;
              nestedTmpls.push(nestedTmpl);
            }
            if (!isElse) {
              tagAndElses = tagName;
              useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow);
              oldCode = code;
              code = "";
            }
            nextIsElse = ast[i + 1];
            nextIsElse = nextIsElse && nextIsElse[0] === "else";
          }
          tagStart = onError ? ";\ntry{\nret+=" : "\n+";
          boundOnErrStart = "";
          boundOnErrEnd = "";
          if (isGetVal && (pathBindings || trigger || converter && converter !== HTML)) {
            tagCtxFn = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagName + "\nreturn {" + tagCtx + "};");
            tagCtxFn._er = onError;
            tagCtxFn._tag = tagName;
            if (isLinkExpr) {
              return tagCtxFn;
            }
            setPaths(tagCtxFn, pathBindings);
            tagRender = 'c("' + converter + '",view,';
            useCnvt = true;
            boundOnErrStart = tagRender + tmplBindingKey + ",";
            boundOnErrEnd = ")";
          }
          code += (isGetVal ? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt ? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (pathBindings ? ((tmplBindings[tmplBindingKey - 1] = tagCtxFn), tmplBindingKey) : "{" + tagCtx + "}") + ")") : tagName === ">" ? (hasEncoder = true, "h(" + params[0] + ")") : (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")'))) : (hasTag = true, "\n{view:view,tmpl:" + (content ? nestedTmpls.length : "0") + "," + tagCtx + "},"));
          if (tagAndElses && !nextIsElse) {
            code = "[" + code.slice(0, -1) + "]";
            tagRender = 't("' + tagAndElses + '",view,this,';
            if (isLinkExpr || pathBindings) {
              code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + "\nreturn " + code + ";");
              code._er = onError;
              code._tag = tagAndElses;
              if (pathBindings) {
                setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
              }
              if (isLinkExpr) {
                return code;
              }
              boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
              boundOnErrEnd = ")";
            }
            code = oldCode + tagStart + tagRender + (tmplBindingKey || code) + ")";
            pathBindings = 0;
            tagAndElses = 0;
          }
          if (onError) {
            useViews = true;
            code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
          }
        }
      }
    }
    code = "// " + tmplName + "\nvar v" + (hasTag ? ",t=j._tag" : "") + (hasCnvt ? ",c=j._cnvt" : "") + (hasEncoder ? ",h=j._html" : "") + (isLinkExpr ? ";\n" : ',ret=""\n') + (tmplOptions.debug ? "debugger;" : "") + code + (isLinkExpr ? "\n" : ";\nreturn ret;");
    if ($subSettings.debugMode !== false) {
      code = "try {\n" + code + "\n}catch(e){\nreturn j._err(e, view);\n}";
    }
    try {
      code = new Function("data,view,j,u", code);
    } catch (e) {
      syntaxError("Compiled template code:\n\n" + code + '\n: "' + e.message + '"');
    }
    if (tmpl) {
      tmpl.fn = code;
      tmpl.useViews = !!useViews;
    }
    return code;
  }
  function extendCtx(context, parentContext) {
    return context && context !== parentContext ? (parentContext ? $extend($extend({}, parentContext), context) : context) : parentContext && $extend({}, parentContext);
  }
  function getCharEntity(ch) {
    return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
  }
  function getTargetProps(source) {
    var key,
        prop,
        props = [];
    if (typeof source === OBJECT) {
      for (key in source) {
        prop = source[key];
        if (!$isFunction(prop)) {
          props.push({
            key: key,
            prop: prop
          });
        }
      }
    }
    return props;
  }
  function $fnRender(data, context, noIteration) {
    var tmplElem = this.jquery && (this[0] || error('Unknown template: "' + this.selector + '"')),
        tmpl = tmplElem.getAttribute(tmplAttr);
    return renderContent.call(tmpl ? $.data(tmplElem)[jsvTmpl] : $templates(tmplElem), data, context, noIteration);
  }
  function htmlEncode(text) {
    return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
  }
  $sub = $views.sub;
  $viewsSettings = $views.settings;
  {
    for (jsvStoreName in jsvStores) {
      registerStore(jsvStoreName, jsvStores[jsvStoreName]);
    }
    $converters = $views.converters;
    $helpers = $views.helpers;
    $tags = $views.tags;
    $sub._tg.prototype = {
      baseApply: baseApply,
      cvtArgs: convertArgs
    };
    topView = $sub.topView = new View();
    {
      $ = {};
      $.isFunction = function(ob) {
        return typeof ob === "function";
      };
      $.isArray = Array.isArray || function(obj) {
        return ({}.toString).call(obj) === "[object Array]";
      };
      $.jsrender = versionNumber;
    }
    $subSettings = $sub.settings;
    $subSettings.allowCode = false;
    $isFunction = $.isFunction;
    $.render = $render;
    $.views = $views;
    $.templates = $templates = $views.templates;
    $.compile = function(markup, options) {
      options = options || {};
      options.markup = markup;
      return $templates(options);
    };
    for (setting in $subSettings) {
      addSetting(setting);
    }
    ($viewsSettings.debugMode = function(debugMode) {
      return debugMode === undefined ? $subSettings.debugMode : ($subSettings.debugMode = debugMode, $subSettings.onError = debugMode + "" === debugMode ? new Function("", "return '" + debugMode + "';") : $isFunction(debugMode) ? debugMode : undefined, $viewsSettings);
    })(false);
    $subSettingsAdvanced = $subSettings.advanced = {
      useViews: false,
      _jsv: false
    };
    $tags({
      "if": {
        render: function(val) {
          var self = this,
              tagCtx = self.tagCtx,
              ret = (self.rendering.done || !val && (arguments.length || !tagCtx.index)) ? "" : (self.rendering.done = true, self.selected = tagCtx.index, tagCtx.render(tagCtx.view, true));
          return ret;
        },
        flow: true
      },
      "for": {
        render: function(val) {
          var finalElse = !arguments.length,
              value,
              self = this,
              tagCtx = self.tagCtx,
              result = "",
              done = 0;
          if (!self.rendering.done) {
            value = finalElse ? tagCtx.view.data : val;
            if (value !== undefined) {
              result += tagCtx.render(value, finalElse);
              done += $isArray(value) ? value.length : 1;
            }
            if (self.rendering.done = done) {
              self.selected = tagCtx.index;
            }
          }
          return result;
        },
        flow: true
      },
      props: {
        baseTag: "for",
        dataMap: dataMap(getTargetProps),
        flow: true
      },
      include: {flow: true},
      "*": {
        render: retVal,
        flow: true
      },
      ":*": {
        render: retVal,
        flow: true
      },
      dbg: $helpers.dbg = $converters.dbg = dbgBreak
    });
    $converters({
      html: htmlEncode,
      attr: htmlEncode,
      url: function(text) {
        return text != undefined ? encodeURI("" + text) : text === null ? text : "";
      }
    });
  }
  $subSettings = $sub.settings;
  $isArray = $.isArray;
  $viewsSettings.delimiters("{{", "}}", "^");
  var nodeFs = require('fs'),
      nodePath = require('path'),
      nodePathSep = nodePath.sep,
      rootDirPath = nodePath.resolve("./"),
      rootDirPathLen = rootDirPath.length + 1;
  $.renderFile = $.__express = function(filepath, data, callback) {
    filepath = './' + nodeFs.realpathSync(filepath).slice(rootDirPathLen).split(nodePathSep).join('/');
    var html = $templates(filepath).render(data);
    if (callback) {
      callback(null, html);
    }
    return html;
  };
  $views.tags("clientTemplate", function(path) {
    return '<script id="' + path + '" type="text/x-jsrender">' + $templates(path).markup + '</script>';
  });
  module.exports = $;
}(this));
