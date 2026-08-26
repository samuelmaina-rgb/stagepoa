const stages = [
  {
    id: "railways",

    stageName: "Railways",

    status: "crowded",

    saccos: [
      "NMOA SACCO",
      "Astrabell Limited",
      "Kilele Shuttles Limited"
    ],

    description:
      "One of Nairobi's major and busiest matatu termini, located near Nairobi Railway Station along Haile Selassie Avenue.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 111",
        destination: "Ngong",

        fare: {
          min: 80,
          max: 100
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 125",
        destination: "Rongai",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 46",
        destination: "Kawangware",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 110KIT",
        destination: "Kitengela",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 8",
        destination: "Kibera",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 15",
        destination: "Langata",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },

  {
    id: "otc",

    stageName: "OTC",

    status: "crowded",

    saccos: [
        "SUPER METRO SACCO",
        "KENYA MPYA",
        "44 COMPANY",
        "THIKA ROAD SACCO"

    ],

    description:
      "Located along Haile Selassie Avenue and serving many Eastlands destinations including Buruburu, Donholm, Pipeline, Kayole, Komarock and Dandora.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 58",
        destination: "Buruburu",

        fare: {
          min: 30,
          max: 50
        },

        estimatedWaitTime: "5-10 min"
      },

      {
        routeName: "Route 35/60",
        destination: "Umoja",

        fare: {
          min: 30,
          max: 50
        },

        estimatedWaitTime: "5-10 min"
      },

      {
        routeName: "Route 19C2",
        destination: "Umoja / Donholm - Komarock",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 1960",
        destination: "Kayole",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 1961C",
        destination: "Kayole",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 36",
        destination: "Dandora",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 31",
        destination: "Gikomba - Dandora",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },

  {
    id: "kencom",

    stageName: "Kencom",

    status: "crowded",

    saccos: [
      "Kenya Bus Service",
      "City Star Shuttle",
      "Citi Hoppa"
    ],

    description:
      "Located on City Hall Way outside Kencom House in Nairobi CBD. It serves western and southern destinations including Ngong Road, Kibera and Karen.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 111",
        destination: "Ngong",

        fare: {
          min: 80,
          max: 100
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 24",
        destination: "Karen",

        fare: {
          min: 70,
          max: 150
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 8",
        destination: "Kibera",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 1",
        destination: "Karen - Dagoretti",

        fare: {
          min: 60,
          max: 100
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 2",
        destination: "Dagoretti",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },


  {
    id: "odeon",

    stageName: "Odeon",

    status: "crowded",

    saccos: [
        "KBS",
        "CITI HOPPA"
    ],

    description:
      "Located along Moi Avenue in Nairobi CBD. It serves destinations towards Juja, Ruiru, Kahawa and Kenyatta University.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 145",
        destination: "Ruiru Town",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 44",
        destination: "Kahawa West",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 45",
        destination: "Githurai",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 239",
        destination: "Ruiru - Thika",

        fare: {
          min: 70,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },


  {
    id: "afya-centre",

    stageName: "Afya Centre",

    status: "crowded",

    saccos: [
        "FORWARD TRAVELERS",
        "UMBWE SACCO",
        "DOUBLE M"
    ],

    description:
      "Located along Aga Khan Road in Nairobi CBD and serving passengers travelling towards Upper Hill and Kilimani.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 14A",
        destination: "Strathmore",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 14B",
        destination: "Deep West",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 15",
        destination: "Langata",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 16",
        destination: "Highrise",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 34",
        destination: "Nairobi Hospital - Kenyatta",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },



  {
    id: "ambassador-archives",

    stageName: "Ambassador / Archives",

    status: "crowded",

    saccos: [
      "Super Metro",
      "KIAMBU ROAD SACCO",
      "CITY TRAM",
      "NANAK SACCO",
      "KILLETON SACCO"
    ],

    description:
      "Located along Haile Selassie Avenue near the Kenya National Archives. It serves Upper Hill, Kilimani, Kawangware, Kenyatta Hospital, Kabiria, Wanyee, Satellite and Yaya.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 24",
        destination: "Karen",

        fare: {
          min: 70,
          max: 150
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 46",
        destination: "Kawangware",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 46",
        destination: "Yaya",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 7C",
        destination: "KNH",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 8",
        destination: "Kibera",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 111",
        destination: "Ngong",

        fare: {
          min: 80,
          max: 100
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },


  {
    id: "muthurwa",

    stageName: "Muthurwa Market Bus Terminus",

    status: "crowded",

    saccos: [
        "FORWARD TRAVELERS",
        "UMOINNER SACCO",
        "DOUBLE M",
        "MWAMBA SACCO"
    ],

    description:
      "Located along Landhies Road and serves passengers travelling to various destinations within and outside Nairobi.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 17B",
        destination: "Mwiki",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 19C",
        destination: "Komarock",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 34B",
        destination: "Jacaranda",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 1960",
        destination: "Kayole",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },


  {
    id: "westlands",

    stageName: "Westlands Stage",

    status: "crowded",

    saccos: [
        "SUPER METRO SACCO",
        "2W SACCO",
        "KBS",
        "CITI HOPPA"
    ],

    description:
      "Westlands has several boarding points around Koja, Odeon, Strathmore School, Valley Estate, Yaya Centre and UoN Chiromo Campus.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 48",
        destination: "Kawangware",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 48A",
        destination: "Lavington",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 48C",
        destination: "Yaya",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 108",
        destination: "Redhill - Gasolina",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 107D",
        destination: "Ruaka - Marurui",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 11F",
        destination: "Ruaka",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },



  {
    id: "south-c",

    stageName: "South C",

    status: "clear",

    saccos: [
        "SOUTH C TRAVELERS SACCO",
        "ROBA SACCO",
        "CITI HOPPA"
    ],

    description:
      "South C passengers can access matatu services from Vus Station, Railways and Nyayo areas.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 12C",
        destination: "South C",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 33",
        destination: "South B / Ngumo",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },



  {
    id: "karen",

    stageName: "Karen",

    status: "clear",

    saccos: [
      "Super Metro",
      "City Star Shuttle",
      "NANAK SACCO",
      "KBS"
    ],

    description:
      "Karen is served by several boarding points including Karen Shopping Centre, Bomas of Kenya, Hardy and areas along Langata Road.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 24",
        destination: "Nairobi CBD",

        fare: {
          min: 70,
          max: 150
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 111",
        destination: "Ngong",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 1",
        destination: "Dagoretti",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },


  {
    id: "rongai",

    stageName: "Rongai Stage",

    status: "crowded",

    saccos: [
        "RONGAI ONE SACCO",
        "OROMATS SACCO",
        "KANSHUTTLE"
    ],

    description:
      "A major transport hub serving Ongata Rongai and surrounding areas along Magadi Road.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 125",
        destination: "Nairobi CBD",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 126",
        destination: "Kiserian",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 111",
        destination: "Ngong",

        fare: {
          min: 60,
          max: 100
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },



  {
    id: "kikuyu",

    stageName: "Kikuyu Stage",

    status: "crowded",

    saccos: [
        "SUPER METRO",
        "KIKUYU LINE SACCO",
        "2WQ SACCO"
    ],

    description:
      "A major stage serving Kikuyu and passengers travelling between Kikuyu and Nairobi along the Waiyaki Way corridor.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 102",
        destination: "Nairobi CBD",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 105",
        destination: "Nairobi CBD",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 129",
        destination: "Wangige - Kikuyu",

        fare: {
          min: 40,
          max: 70
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },


  {
    id: "githurai",

    stageName: "Githurai Stage",

    status: "crowded",

    saccos: [
        "SUPER METRO SACCO",
        "KENYA MPYA",
        "44 COMPANY",
        "GITHURAI 45 SACCO"
    ],

    description:
      "A major northern Nairobi transport hub serving Githurai and surrounding areas along Thika Road.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 45",
        destination: "Githurai",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 44",
        destination: "Kahawa West",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 145",
        destination: "Ruiru Town",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },



  {
    id: "ruaka-wangige",

    stageName: "Ruaka / Wangige Stage",

    status: "crowded",

    saccos: [
        "RUNKA SACCO",
        "KABETE LINE SACCO",
        "KING'EERO SACCOS"
    ],

    description:
      "The Ruaka and Wangige corridor serves passengers travelling between Nairobi, Ruaka, Wangige and nearby areas.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 11F",
        destination: "Ruaka",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 118",
        destination: "Wangige",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 119",
        destination: "Wangige",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 103",
        destination: "Wangige",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },


  {
    id: "limuru",

    stageName: "Limuru Stage",

    status: "clear",

    saccos: [
        "LIMURU TRAVELERS SACCO",
        "MUGUGA SACCO",
        "SUPER METRO SACCO"
    ],

    description:
      "A major stage serving Limuru and the surrounding Kiambu highlands along the Limuru Road corridor.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 115",
        destination: "Limuru - Nairobi",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 116",
        destination: "Limuru - Nairobi",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      }
    ]
  },



  {
    id: "kitengela",

    stageName: "Kitengela Stage",

    status: "crowded",

    saccos: [
        "KITENGELA SHUTTILES",
        "REMBO SACCO",
        "NAMANGA LINE"
    ],

    description:
      "A major transport hub along the Nairobi-Mombasa Road corridor serving Kitengela and surrounding towns.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 110KIT",
        destination: "Nairobi CBD",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 110AK",
        destination: "Athi River - Kitengela",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 34",
        destination: "JKIA",

        fare: {
          min: 80,
          max: 120
        },

        estimatedWaitTime: "15-25 min"
      }
    ]
  },

  {
    id: "kahawa-west",

    stageName: "Kahawa West",

    status: "crowded",

    saccos: [
        "SUPER METRO",
        "ZURI",
        "NAZIGI",
        "44 COMPANY"
    ],

    description:
      "A northern Nairobi stage serving Kahawa West, Zimmerman and surrounding Thika Road communities.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 44",
        destination: "Nairobi CBD",

        fare: {
          min: 50,
          max: 80
        },

        estimatedWaitTime: "10-20 min"
      },

      {
        routeName: "Route 45",
        destination: "Githurai",

        fare: {
          min: 30,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 49",
        destination: "Sunton",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  },

  {
    id: "kibera",

    stageName: "Kibera Stage",

    status: "crowded",

    saccos: [
        "KERA SACCO",
        "KBS"
    ],

    description:
      "A busy western Nairobi stage serving Kibera and connecting passengers with Ngong Road, Langata and surrounding areas.",

    googleMapsPlaceId: "",

    routes: [

      {
        routeName: "Route 8",
        destination: "Nairobi CBD",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 32",
        destination: "Ayani",

        fare: {
          min: 30,
          max: 50
        },

        estimatedWaitTime: "5-15 min"
      },

      {
        routeName: "Route 33",
        destination: "Ngumo",

        fare: {
          min: 40,
          max: 60
        },

        estimatedWaitTime: "5-15 min"
      }
    ]
  }

];

export default stages;