export function fetchData() {
  return ({
    "news":{
      "headings":[
        {
          "name":"Сейчас в СМИ",
          "id": 1
        },
        {
          "name":"в Германии",
          "id": 2
        },
        {
          "name":"Рекомендуем",
          "id": 3
        }
      ],
      "items":[
        {
          "icon":"fa-coffee",
          "name":"Банк России видит риски ипотеки с ежемесячным платежом от 1 рубля",
          "link":"link1",
          "id": 1
        },
        {
          "icon":"fa-hdd-o",
          "name":"«Аэрофлот» завершил переход на отечественную систему бронирования",
          "link":"link2",
          "id": 2
        },
        {
          "icon":"fa-suitcase",
          "name":"NYT узнала о распоряжении Маска сократить часть сотрудников Twitter",
          "link":"link3",
          "id": 3
        },
        {
          "icon":"fa-paperclip",
          "name":"Минфин Германии призвал начать добычу газа методом фрекинга",
          "link":"link4",
          "id": 4
        },
        {
          "icon":"fa-mobile-phone",
          "name":"Twitter вернул рэперу Канье Уэсту доступ к аккаунту",
          "link":"link5",
          "id": 5
        }
      ]
    },
    "assets":{
      "items":[
        {
          "title":"USD MOEX",
          "name":63.52,
          "description":"+0.09",
          "id": 1
        },
        {
          "title":"EUR MOEX",
          "name":70.86,
          "description":"+0.14",
          "id": 2
        },
        {
          "title":"НЕФТЬ",
          "name":64.90,
          "description":"+1.63%",
          "id": 3
        }
      ]
    },
    "weather":{
      "headings":[
        {
          "name":"Погода",
          "id": 1
        }
      ],
      "items":[
        {
          "icon":"fa-cloud",
          "title":"+17°",
          "id": 1,
          "name":"Утром +17, днем +20"
        }
      ]
    },
    "map":{
      "headings":[
        {
          "name":"Карта Германии",
          "id": 1
        }
      ],
      "items":[
        {
          "name":"Расписания",
          "id": 1
        }
      ]
    },
    "visited":{
      "headings":[
        {
          "name":"Посещаемое",
          "id": 1
        }
      ],
      "items":[
        {
          "title":"Недвижимость",
          "name":"— о сталинках",
          "id": 1
        },
        {
          "title":"Маркет",
          "name":"— люстры и светильники",
          "id": 2
        },
        {
          "title":"Авто.ру",
          "name":"— привод 4х4 до 500 000",
          "id": 3
        }
      ]
    },
    "tv":{
      "headings":[
        {
          "name":"Телепрограмма",
          "id": 1
        },
        {
          "name":"Эфир",
          "isButton":true,
          "id": 2,
          "icon":"fa-play"
        }
      ],
      "items":[
        {
          "time":"02:00",
          "name":"ТНТ. Best",
          "description":"ТНТ International",
          "id": 1
        },
        {
          "time":"02:15",
          "name":"Джинглики",
          "description":"Карусель INT",
          "id": 2
        },
        {
          "time":"02:25",
          "name":"Наедине со всеми",
          "description":"Первый",
          "id": 3
        }
      ]
    },
    "air":{
      "headings":[
        {
          "name":"Эфир",
          "id": 1
        }
      ],
      "items":[
        {
          "icon":"fa-play",
          "name":"Управление как искусство",
          "description":"Успех",
          "id": 1
        },
        {
          "icon":"fa-play",
          "name":"Ночь",
          "description":"earthTV",
          "id": 2
        },
        {
          "icon":"fa-play",
          "name":"Андрей Возн...",
          "description":"Совершенно секретно",
          "id": 3
        }
      ]
    }
  });
};