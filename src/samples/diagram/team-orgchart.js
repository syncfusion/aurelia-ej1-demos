export class TeamOrgChart {
    constructor() {
      let data = [
        {
          'Id': 'parent', 'Name': 'Maria Anders', 'Designation': 'Managing Director',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        },
        {
          'Id': 1, 'Name': 'Ana Trujillo', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
        },
        {
          'Id': 2, 'Name': 'Anto Moreno', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 1
        },
        {
          'Id': 3, 'Name': 'Thomas Hardy', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 2
        },
        {
          'Id': 4, 'Name': 'Christina kaff', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 3
        },
        {
          'Id': 5, 'Name': 'Hanna Moos', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'true',
          'RatingColor': '#D46E89', 'ReportingPerson': 4
        },
        {
          'Id': 6, 'Name': 'Peter Citeaux', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 4
        },
        {
          'Id': 7, 'Name': 'Mart�n Kloss', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 1
        },
        {
          'Id': 9, 'Name': 'Elizabeth Mary', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 8
        },
        {
          'Id': 10, 'Name': 'Victoria Ash', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 8
        },
        {
          'Id': 12, 'Name': 'Francisco Yang', 'Designation': 'CSR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 7
        },
        {
          'Id': 13, 'Name': 'Yang Wang', 'Designation': 'CSR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 6
        },
        {
          'Id': 27, 'Name': 'Lino Rodri', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
        },
        {
          'Id': 38, 'Name': 'Philip Cramer', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
        },
        {
          'Id': 14, 'Name': 'Pedro Afonso', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Paul.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
        },
        {
          'Id': 15, 'Name': 'Elizabeth Roel', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Maria.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 38
        },
        {
          'Id': 17, 'Name': 'Janine Labrune', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 48
        },
        {
          'Id': 18, 'Name': 'Ann Devon', 'Designation': 'CSR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 31
        },
        {
          'Id': 19, 'Name': 'Roland Mendel', 'Designation': 'CSR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 31
        },
        {
          'Id': 20, 'Name': 'Aria Cruz', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 14
        },
        {
          'Id': 22, 'Name': 'Martine Ranc�', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 21
        },
        {
          'Id': 23, 'Name': 'Maria Larsson', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'false',
          'RatingColor': '#EBB92E', 'ReportingPerson': 20
        },
        {
          'Id': 21, 'Name': 'Diego Roel', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'false',
          'RatingColor': '#D46E89', 'ReportingPerson': 20
        },
        {
          'Id': 24, 'Name': 'Peter Franken', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 23
        },
        {
          'Id': 25, 'Name': 'Carine Schmitt', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 21
        },
        {
          'Id': 26, 'Name': 'Paolo Accorti', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 21
        },
        {
          'Id': 28, 'Name': 'Eduardo Roel', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'true',
          'RatingColor': '#93B85A', 'ReportingPerson': 38
        },
        {
          'Id': 29, 'Name': 'Jos� Pedro ', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'true',
          'RatingColor': '#D46E89', 'ReportingPerson': 28
        },
        {
          'Id': 30, 'Name': 'Andr� Fonseca', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/John.png', 'IsExpand': 'true',
          'RatingColor': '#EBB92E', 'ReportingPerson': 29
        },
        {
          'Id': 31, 'Name': 'Howard Snyd', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 14
        },
        {
          'Id': 32, 'Name': 'Manu Pereira', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image56.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 8
        },
        {
          'Id': 33, 'Name': 'Mario Pontes', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 19
        },
        {
          'Id': 34, 'Name': 'Carlos Schmitt', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 19
        },
        {
          'Id': 35, 'Name': 'Yoshi Latimer', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/eric.png', 'IsExpand': 'true',
          'RatingColor': '#D46E89', 'ReportingPerson': 18
        },
        {
          'Id': 36, 'Name': 'Patricia Kenna', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Maria.png', 'IsExpand': 'true',
          'RatingColor': '#EBB92E', 'ReportingPerson': 55
        },
        {
          'Id': 37, 'Name': 'Helen Bennett', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 15
        },
        {
          'Id': 39, 'Name': 'Daniel Tonini', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'true',
          'RatingColor': '#93B85A', 'ReportingPerson': 27
        },
        {
          'Id': 40, 'Name': 'Annette Roel', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 39
        },
        {
          'Id': 41, 'Name': 'Yoshi Wilson', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'false',
          'RatingColor': '#EBB92E', 'ReportingPerson': 40
        },
        {
          'Id': 42, 'Name': 'John Steel', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Maria.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 41
        },
        {
          'Id': 43, 'Name': 'Renate Jose', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 42
        },
        {
          'Id': 44, 'Name': 'Jaime Yorres', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 42
        },
        {
          'Id': 45, 'Name': 'Carlos Nagy', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 40
        },
        {
          'Id': 46, 'Name': 'Felipe Kloss', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'false',
          'RatingColor': '#EBB92E', 'ReportingPerson': 17
        },
        {
          'Id': 47, 'Name': 'Fran Wilson', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 46
        },
        {
          'Id': 48, 'Name': 'John Rovelli', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 46
        },
        {
          'Id': 49, 'Name': 'Catherine Kaff', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 51
        },
        {
          'Id': 50, 'Name': 'Jean Fresni�re', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'false',
          'RatingColor': '#D46E89', 'ReportingPerson': 49
        },
        {
          'Id': 51, 'Name': 'Alex Feuer', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 50
        },
        {
          'Id': 52, 'Name': 'Simon Roel', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 50
        },
        {
          'Id': 53, 'Name': 'Yvonne Wong', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 50
        },
        {
          'Id': 54, 'Name': 'Rene Phillips', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 7
        },
        {
          'Id': 55, 'Name': 'Yoshi Kenna', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'false',
          'RatingColor': '#EBB92E', 'ReportingPerson': 15
        },
        {
          'Id': 56, 'Name': 'Helen Marie', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'true',
          'RatingColor': '#EBB92E', 'ReportingPerson': 55
        },
        {
          'Id': 57, 'Name': 'Joseph Kaff', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 7
        },
        {
          'Id': 58, 'Name': 'Georg Pipps', 'Designation': 'SR',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 5
        },
        {
          'Id': 60, 'Name': 'Nardo Batista', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Maria.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 59
        },
        {
          'Id': 61, 'Name': 'L�cia Carvalho', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 60
        },
        {
          'Id': 62, 'Name': 'Horst Kloss', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'None',
          'RatingColor': '#68C2DE', 'ReportingPerson': 74
        },
        {
          'Id': 63, 'Name': 'Sergio roel', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 61
        },
        {
          'Id': 64, 'Name': 'Paula Wilson', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/eric.png', 'IsExpand': 'None',
          'RatingColor': '#68C2DE', 'ReportingPerson': 7
        },
        {
          'Id': 65, 'Name': 'Mauri Moroni', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 6
        },
        {
          'Id': 66, 'Name': 'Janete Limeira', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 7
        },
        {
          'Id': 67, 'Name': 'Michael Holz', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 59
        },
        {
          'Id': 68, 'Name': 'Alej Camino', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 67
        },
        {
          'Id': 69, 'Name': 'Jonas Bergsen', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#68C2DE', 'ReportingPerson': 19
        },
        {
          'Id': 70, 'Name': 'Jose Pavarotti', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Maria.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 56
        },
        {
          'Id': 71, 'Name': 'Miguel Angel', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/eric.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 16
        },
        {
          'Id': 72, 'Name': 'Jytte Petersen', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'true',
          'RatingColor': '#68C2DE', 'ReportingPerson': 59
        },
        {
          'Id': 73, 'Name': 'Kloss Perrier', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 23
        },
        {
          'Id': 74, 'Name': 'Art Nancy', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'true',
          'RatingColor': '#D46E89', 'ReportingPerson': 29
        },
        {
          'Id': 75, 'Name': 'Pascal Cartrain', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/John.png', 'IsExpand': 'true',
          'RatingColor': '#EBB92E', 'ReportingPerson': 36
        },
        {
          'Id': 76, 'Name': 'Liz Nixon', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 72
        },
        {
          'Id': 77, 'Name': 'Liu Wong', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 75
        },
        {
          'Id': 78, 'Name': 'Karin Josephs', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 76
        },
        {
          'Id': 79, 'Name': 'Ruby Anabela ', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 23
        },
        {
          'Id': 80, 'Name': 'Helvetis Nagy', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 75
        },
        {
          'Id': 81, 'Name': 'Palle Ibsen', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 35
        },
        {
          'Id': 82, 'Name': 'Mary Saveley', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'false',
          'RatingColor': '#93B85A', 'ReportingPerson': 59
        },
        {
          'Id': 83, 'Name': 'Paul Henriot', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'false',
          'RatingColor': '#D46E89', 'ReportingPerson': 30
        },
        {
          'Id': 84, 'Name': 'Rita M�ller', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Paul.png', 'IsExpand': 'None',
          'RatingColor': '#68C2DE', 'ReportingPerson': 83
        },
        {
          'Id': 85, 'Name': 'Pirkko King', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 83
        },
        {
          'Id': 86, 'Name': 'Paula Parente', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/John.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 74
        },
        {
          'Id': 87, 'Name': 'Karl Jablonski', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 23
        },
        {
          'Id': 88, 'Name': 'Matti Kenna', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 23
        },
        {
          'Id': 89, 'Name': 'Zbyszek Yang', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 23
        },
        {
          'Id': 90, 'Name': 'Nancy', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image56.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 23
        },
        {
          'Id': 91, 'Name': 'Robert King', 'Designation': 'Project Manager',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'true',
          'RatingColor': '#D46E89', 'ReportingPerson': 59
        },
        {
          'Id': 92, 'Name': 'Laura Callahan', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Robin.png', 'IsExpand': 'false',
          'RatingColor': '#D46E89', 'ReportingPerson': 91
        },
        {
          'Id': 93, 'Name': 'Anne', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 92
        },
        {
          'Id': 94, 'Name': 'Georg Pipps', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 5
        },
        {
          'Id': 95, 'Name': 'Isabel Castro', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 93
        },
        {
          'Id': 96, 'Name': 'Nardo Batista', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'None',
          'RatingColor': '#EBB92E', 'ReportingPerson': 93
        },
        {
          'Id': 97, 'Name': 'Rene Phillips', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'false',
          'RatingColor': '#68C2DE', 'ReportingPerson': 92
        },
        {
          'Id': 98, 'Name': 'L�cia Carvalho', 'Designation': 'S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 97
        },
        {
          'Id': 99, 'Name': 'Horst Kloss', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Paul.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 56
        },
        {
          'Id': 101, 'Name': 'Simon Roel', 'Designation': 'Project Lead',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Clayton.png', 'IsExpand': 'true',
          'RatingColor': '#93B85A', 'ReportingPerson': 91
        },
        {
          'Id': 102, 'Name': 'Rita Pfalzheim', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Thomas.png', 'IsExpand': 'false',
          'RatingColor': '#D46E89', 'ReportingPerson': 101
        },
        {
          'Id': 103, 'Name': 'Paula Wilson', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/Jenny.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 750
        },
        {
          'Id': 104, 'Name': ' Jose Michael', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/eric.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 102
        },
        {
          'Id': 105, 'Name': 'Mauri Moroni', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image55.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 35
        },
        {
          'Id': 106, 'Name': 'Janete Limeira', 'Designation': 'Senior S/w Engg',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image57.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 35
        },
        {
          'Id': 107, 'Name': 'Michael Holz', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image53.png', 'IsExpand': 'None',
          'RatingColor': '#D46E89', 'ReportingPerson': 35
        },
        {
          'Id': 108, 'Name': 'Alej Camino', 'Designation': 'Project Trainee',
          'ImageUrl': 'src/samples/diagram/images/orgchart/image51.png', 'IsExpand': 'None',
          'RatingColor': '#93B85A', 'ReportingPerson': 35
        }
      ];

      this.layout =  {
        type: 'organizationalchart', marginX: 0, marginY: 50, horizontalSpacing: 30, verticalSpacing: 30,
        getLayoutInfo: getLayoutInfo
      };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.defaultSettings = {
        node: {
          width: 140, height: 50, type: 'image', borderColor: 'transparent',
          labels: [
            {
              name: 'label1', horizontalAlignment: 'left', verticalAlignment: 'top',
              margin: { left: -17, top: -17 }, fontSize: 11, bold: true, fontFamily: 'Segoe UI'
            },
            {
              name: 'label2', horizontalAlignment: 'left', verticalAlignment: 'top',
              margin: { left: -17, top: -2 }, fontSize: 10, fontFamily: 'Segoe UI'
            }
          ]
        },
        connector: { segments: [{ 'type': 'orthogonal' }], targetDecorator: { shape: 'none' } }
      };
      this.nodeTemplate = nodeTemplate;
      this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
      this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
      this.enableContextMenu = false;
      this.dataSourceSettings = {
        id: 'Id', parent: 'ReportingPerson',
        dataSource: data
      };
      function nodeTemplate(diagram, node) {
        node.source = node.ImageUrl;
        node.labels[0].text = node.Name;
        node.labels[1].text = node.Designation;
      }
      function getLayoutInfo(diagram, node, options) {
        if (! options.hasSubTree) {
          options.type = 'right';
        }
      }
    }
}
