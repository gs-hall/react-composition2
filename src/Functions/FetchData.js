export function fetchData() {
  return ({
    "news":{
      "sections":[{
          "name":"Сейчас в СМИ",
          "isActive":true
      },        {
        "name":"в Германии",
        "isActive":false
      },
      {
        "name":"Рекомендуем",
        "isActive":false
      }],

      "items":[
            {
              "icon":"1",
              "name":"news1",
              "link":"link1"
            },
            {
              "icon":"2",
              "name":"news2",
              "link":"link2"
            },
            {
              "icon":"3",
              "name":"news3",
              "link":"link3"
            },
            {
              "icon":"4",
              "name":"news4",
              "link":"link4"
            },
            {
              "icon":"5",
              "name":"news5",
              "link":"link5"
            }
          ]
    },
    "assetPrices":{
      "items":[
      {
        "name":"USD MOEX",
        "price":63.52,
        "priceDelta":0.09
      },
      {
        "asset":"EUR MOEX",
        "price":70.86,
        "priceDelta":0.14
      },
      {
        "asset":"НЕФТЬ",
        "price":64.90,
        "priceDelta":1.63,
        "priceDeltaUnit":'%'
      },
    ]},
    "weather":{
      "sections": [{"name": "Погода"}],
      "items": [{"icon":"rain3","temperature":17,"unit": "°", details: [{name: "Утром", value: 17},{name: "днем", value: 20}]}]
    },
    "visited":{
      "sections": [{"name": "Посещаемое"}],
      "items": [
        {"title":"Недвижимость","name":"о сталинках"},
        {"title":"Маркет","name":"люстры и светильники"},
        {"title":"Авто.ру","name":"привод 4х4 до 500 000"}]
    },
    "map":{
      "sections": [{"name": "Карта Германии"}],
      "items": [
        {"name":"Расписания"}],
    },
    "tv":{
      "sections": [{"name": "Телепрограмма", "isActive": true},{"name": "Эфир", "isButton": true}],
      "items": [
        {"time": "02:00","name":"ТНТ. Best", "description": "ТНТ International"},
        {"time": "02:15","name":"Джинглики", "description": "Карусель INT"},
        {"time": "02:25","name":"Наедине со всеми", "description": "Первый"}],
    },
    "air":{
      "sections": [{"name": "Телепрограмма", "isActive": true},{"name": "Эфир", "isButton": true}],
      "items": [
        {"icon": "play","name":"Управление как искусство", "description": "Успех"},
        {"icon": "play","name":"Ночь", "description": "earthTV"},
        {"icon": "play","name":"Андрей возн...", "description": "Совершенно секретно"},],
    },    
  });
};