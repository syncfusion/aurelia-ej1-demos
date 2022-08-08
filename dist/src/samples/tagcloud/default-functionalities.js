export class DefaultFunctionalities {
  websiteCollection = [
                    { text: 'Google', url: '//www.google.com', frequency: 12 },
                    { text: 'All Things Digital', url: '//allthingsd.com/', frequency: 3 },
                    { text: 'Arts Technica', url: '//arstechnica.com/', frequency: 8 },
                    { text: 'Business Week', url: '//www.businessweek.com/', frequency: 2 },
                    { text: 'Yahoo', url: '//in.yahoo.com/', frequency: 12 },
                    { text: 'Center Networks', url: '//www.centernetworks.com/', frequency: 5 },
                    { text: 'Crave', url: '//news.cnet.com/crave/', frequency: 8 },
                    { text: 'Crunch Gear', url: '//techcrunch.com/gadgets/', frequency: 20 },
                    { text: 'Daily Tech', url: '//www.dailytech.com/', frequency: 1 },
                    { text: 'Electronista', url: '//www.electronista.com/', frequency: 3 },
                    { text: 'Engadget', url: '//www.engadget.com/', frequency: 5 },
                    { text: 'Gearlog', url: '//www.gearlog.com/', frequency: 9 },
                    { text: 'Information Week', url: '//www.informationweek.com/', frequency: 0 },
                    { text: 'PCWorld', url: '//www.pcworld.com/', frequency: 11 },
                    { text: 'Tech Republic', url: '//techrepublic.com/', frequency: 3 },
                    { text: 'Valleywag', url: '//valleywag.gawker.com/', frequency: 6 },
                    { text: 'Rediff', url: '//in.rediff.com/', frequency: 9 },
                    { text: 'WebProNews', url: '//www.webpronews.com/', frequency: 2 }
  ];

  constructor() {
    this.title = 'Tech Sites';
    this.data = this.websiteCollection;
  }
}
