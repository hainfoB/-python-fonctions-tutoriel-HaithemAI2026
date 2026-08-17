window.SCENE_TRACES={
  "basics:example:0": {
    "key": "basics:example:0",
    "kind": "example",
    "chapter": "basics",
    "index": 0,
    "title": {
      "fr": "01 · Affichage",
      "en": "01 · Display"
    },
    "code": "prenom = \"Lina\"\nprint(\"Bienvenue\", prenom)",
    "status": "ok",
    "output": "Bienvenue Lina\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "prenom": "'Lina'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "prenom": "'Lina'"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:1": {
    "key": "basics:example:1",
    "kind": "example",
    "chapter": "basics",
    "index": 1,
    "title": {
      "fr": "02 · Conversion",
      "en": "02 · Conversion"
    },
    "code": "age = int(\"16\")\nprint(age + 2)",
    "status": "ok",
    "output": "18\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "16"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "age": "16"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:2": {
    "key": "basics:example:2",
    "kind": "example",
    "chapter": "basics",
    "index": 2,
    "title": {
      "fr": "03 · Prix",
      "en": "03 · Price"
    },
    "code": "a = float(\"12.5\")\nb = float(\"7.5\")\nprint(a + b)",
    "status": "ok",
    "output": "20.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "12.5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "12.5",
          "b": "7.5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "a": "12.5",
          "b": "7.5"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:3": {
    "key": "basics:example:3",
    "kind": "example",
    "chapter": "basics",
    "index": 3,
    "title": {
      "fr": "04 · Type",
      "en": "04 · Type"
    },
    "code": "valeur = 12\nprint(type(valeur).__name__)",
    "status": "ok",
    "output": "int\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeur": "12"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:4": {
    "key": "basics:example:4",
    "kind": "example",
    "chapter": "basics",
    "index": 4,
    "title": {
      "fr": "05 · Saisie sûre",
      "en": "05 · Safe input"
    },
    "code": "texte = \"42\"\nnombre = int(texte)\nprint(nombre, nombre * 2)",
    "status": "ok",
    "output": "42 84\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "texte": "'42'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "texte": "'42'",
          "nombre": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "texte": "'42'",
          "nombre": "42"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:5": {
    "key": "basics:example:5",
    "kind": "example",
    "chapter": "basics",
    "index": 5,
    "title": {
      "fr": "01 · Vitesse moyenne",
      "en": "01 · Average speed"
    },
    "code": "distance = 42\nduree = 2\nprint(distance / duree)",
    "status": "ok",
    "output": "21.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distance": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "distance": "42",
          "duree": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "distance": "42",
          "duree": "2"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:6": {
    "key": "basics:example:6",
    "kind": "example",
    "chapter": "basics",
    "index": 6,
    "title": {
      "fr": "02 · Kelvin",
      "en": "02 · Kelvin"
    },
    "code": "celsius = 25\nkelvin = celsius + 273.15\nprint(kelvin)",
    "status": "ok",
    "output": "298.15\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "celsius": "25"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "celsius": "25",
          "kelvin": "298.15"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "celsius": "25",
          "kelvin": "298.15"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:7": {
    "key": "basics:example:7",
    "kind": "example",
    "chapter": "basics",
    "index": 7,
    "title": {
      "fr": "03 · Énergie",
      "en": "03 · Energy"
    },
    "code": "masse = 2\ng = 9.81\nhauteur = 3\nprint(masse * g * hauteur)",
    "status": "ok",
    "output": "58.86\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "masse": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "masse": "2",
          "g": "9.81"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:8": {
    "key": "basics:example:8",
    "kind": "example",
    "chapter": "basics",
    "index": 8,
    "title": {
      "fr": "04 · Fréquence cardiaque",
      "en": "04 · Heart rate"
    },
    "code": "age = 16\nfcm = 220 - age\nprint(fcm)",
    "status": "ok",
    "output": "204\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "16"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "age": "16",
          "fcm": "204"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "age": "16",
          "fcm": "204"
        },
        "return": "None"
      }
    ]
  },
  "basics:example:9": {
    "key": "basics:example:9",
    "kind": "example",
    "chapter": "basics",
    "index": 9,
    "title": {
      "fr": "05 · Loi d’Ohm",
      "en": "05 · Ohm law"
    },
    "code": "tension = 12\nresistance = 6\nintensite = tension / resistance\nprint(intensite)",
    "status": "ok",
    "output": "2.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "tension": "12"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "tension": "12",
          "resistance": "6"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "tension": "12",
          "resistance": "6",
          "intensite": "2.0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "tension": "12",
          "resistance": "6",
          "intensite": "2.0"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:0": {
    "key": "basics:exercise:0",
    "kind": "exercise",
    "chapter": "basics",
    "index": 0,
    "title": {
      "fr": "01 · Ville",
      "en": "01 · City"
    },
    "code": "ville = input(\"Ville : \")\nprint(\"Bienvenue à\", ville)",
    "status": "ok",
    "output": "Bienvenue à 0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ville": "'0'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "ville": "'0'"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:1": {
    "key": "basics:exercise:1",
    "kind": "exercise",
    "chapter": "basics",
    "index": 1,
    "title": {
      "fr": "02 · Âge",
      "en": "02 · Age"
    },
    "code": "age = int(input(\"Age : \"))\nprint(age + 1)",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "age": "0"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:2": {
    "key": "basics:exercise:2",
    "kind": "exercise",
    "chapter": "basics",
    "index": 2,
    "title": {
      "fr": "03 · Celsius",
      "en": "03 · Celsius"
    },
    "code": "c = 20\nprint(c * 9 / 5 + 32)",
    "status": "ok",
    "output": "68.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "c": "20"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "c": "20"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:3": {
    "key": "basics:exercise:3",
    "kind": "exercise",
    "chapter": "basics",
    "index": 3,
    "title": {
      "fr": "04 · Rectangle",
      "en": "04 · Rectangle"
    },
    "code": "longueur, largeur = 5, 3\nprint(longueur * largeur)",
    "status": "ok",
    "output": "15\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "longueur": "5",
          "largeur": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "longueur": "5",
          "largeur": "3"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:4": {
    "key": "basics:exercise:4",
    "kind": "exercise",
    "chapter": "basics",
    "index": 4,
    "title": {
      "fr": "05 · Reste",
      "en": "05 · Remainder"
    },
    "code": "print(17 % 5)",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "basics:exercise:5": {
    "key": "basics:exercise:5",
    "kind": "exercise",
    "chapter": "basics",
    "index": 5,
    "title": {
      "fr": "06 · Texte",
      "en": "06 · Text"
    },
    "code": "print(\"Lina\" + \" · Oran\")",
    "status": "ok",
    "output": "Lina · Oran\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "basics:exercise:6": {
    "key": "basics:exercise:6",
    "kind": "exercise",
    "chapter": "basics",
    "index": 6,
    "title": {
      "fr": "07 · Arrondi",
      "en": "07 · Rounding"
    },
    "code": "print(round(12.567, 2))",
    "status": "ok",
    "output": "12.57\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "basics:exercise:7": {
    "key": "basics:exercise:7",
    "kind": "exercise",
    "chapter": "basics",
    "index": 7,
    "title": {
      "fr": "08 · Booléen",
      "en": "08 · Boolean"
    },
    "code": "print(12 > 0)",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "basics:exercise:8": {
    "key": "basics:exercise:8",
    "kind": "exercise",
    "chapter": "basics",
    "index": 8,
    "title": {
      "fr": "09 · Échange",
      "en": "09 · Swap"
    },
    "code": "a, b = 2, 5\na, b = b, a",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "2",
          "b": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "a": "5",
          "b": "2"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:9": {
    "key": "basics:exercise:9",
    "kind": "exercise",
    "chapter": "basics",
    "index": 9,
    "title": {
      "fr": "10 · Sortie",
      "en": "10 · Output"
    },
    "code": "score = 15\nprint(\"Score :\", score, \"/ 20\")",
    "status": "ok",
    "output": "Score : 15 / 20\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "score": "15"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "score": "15"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:10": {
    "key": "basics:exercise:10",
    "kind": "exercise",
    "chapter": "basics",
    "index": 10,
    "title": {
      "fr": "11 · Débit",
      "en": "11 · Flow rate"
    },
    "code": "volume = 10\nduree = 5\nprint(volume / duree)",
    "status": "ok",
    "output": "2.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "volume": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "volume": "10",
          "duree": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "volume": "10",
          "duree": "5"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:11": {
    "key": "basics:exercise:11",
    "kind": "exercise",
    "chapter": "basics",
    "index": 11,
    "title": {
      "fr": "12 · Masse volumique",
      "en": "12 · Density"
    },
    "code": "masse = 250\nvolume = 100\nprint(masse / volume)",
    "status": "ok",
    "output": "2.5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "masse": "250"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "masse": "250",
          "volume": "100"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "masse": "250",
          "volume": "100"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:12": {
    "key": "basics:exercise:12",
    "kind": "exercise",
    "chapter": "basics",
    "index": 12,
    "title": {
      "fr": "13 · Calorie MET",
      "en": "13 · MET calories"
    },
    "code": "kcal_minute = 8\nduree = 30\nprint(kcal_minute * duree)",
    "status": "ok",
    "output": "240\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "kcal_minute": "8"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "kcal_minute": "8",
          "duree": "30"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "kcal_minute": "8",
          "duree": "30"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:13": {
    "key": "basics:exercise:13",
    "kind": "exercise",
    "chapter": "basics",
    "index": 13,
    "title": {
      "fr": "14 · ADN vers ARN",
      "en": "14 · DNA to RNA"
    },
    "code": "adn = \"ATGCTT\"\nprint(adn.replace(\"T\", \"U\"))",
    "status": "ok",
    "output": "AUGCUU\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "adn": "'ATGCTT'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "adn": "'ATGCTT'"
        },
        "return": "None"
      }
    ]
  },
  "basics:exercise:14": {
    "key": "basics:exercise:14",
    "kind": "exercise",
    "chapter": "basics",
    "index": 14,
    "title": {
      "fr": "15 · Pendule",
      "en": "15 · Pendulum"
    },
    "code": "from math import pi, sqrt\nlongueur = 1\ng = 9.81\nprint(2 * pi * sqrt(longueur / g))",
    "status": "ok",
    "output": "2.0060666807106475\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>",
          "longueur": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>",
          "longueur": "1",
          "g": "9.81"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>",
          "longueur": "1",
          "g": "9.81"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:0": {
    "key": "logic:example:0",
    "kind": "example",
    "chapter": "logic",
    "index": 0,
    "title": {
      "fr": "01 · Parité",
      "en": "01 · Evenness"
    },
    "code": "n = 18\nif n % 2 == 0: print(\"pair\")\nelse: print(\"impair\")",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "18"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "n": "18"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:1": {
    "key": "logic:example:1",
    "kind": "example",
    "chapter": "logic",
    "index": 1,
    "title": {
      "fr": "02 · Seuil",
      "en": "02 · Threshold"
    },
    "code": "score = 14\nif score >= 10: print(\"réussi\")\nelse: print(\"à revoir\")",
    "status": "ok",
    "output": "réussi\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "score": "14"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "score": "14"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:2": {
    "key": "logic:example:2",
    "kind": "example",
    "chapter": "logic",
    "index": 2,
    "title": {
      "fr": "03 · Catégorie",
      "en": "03 · Category"
    },
    "code": "t = 28\nif t < 10: cat = \"froid\"\nelif t < 25: cat = \"doux\"\nelse: cat = \"chaud\"",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "t": "28"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "t": "28"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "t": "28"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "t": "28",
          "cat": "'chaud'"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:3": {
    "key": "logic:example:3",
    "kind": "example",
    "chapter": "logic",
    "index": 3,
    "title": {
      "fr": "04 · Compteur",
      "en": "04 · Counter"
    },
    "code": "compteur = 0\nfor i in range(5): compteur += 1\nprint(compteur)",
    "status": "ok",
    "output": "5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compteur": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compteur": "1",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compteur": "2",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compteur": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compteur": "4",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compteur": "5",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compteur": "5",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "compteur": "5",
          "i": "4"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:4": {
    "key": "logic:example:4",
    "kind": "example",
    "chapter": "logic",
    "index": 4,
    "title": {
      "fr": "05 · Accumulateur",
      "en": "05 · Accumulator"
    },
    "code": "total = 0\nfor n in range(1, 7):\n    if n % 2 == 0: total += n\nprint(total)",
    "status": "ok",
    "output": "12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "0",
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0",
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "0",
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "2",
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "2",
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "2",
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "2",
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "6",
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "6",
          "n": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "12",
          "n": "6"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "total": "12",
          "n": "6"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "total": "12",
          "n": "6"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:5": {
    "key": "logic:example:5",
    "kind": "example",
    "chapter": "logic",
    "index": 5,
    "title": {
      "fr": "06 · États de l’eau",
      "en": "06 · Water states"
    },
    "code": "t = -4\nif t < 0: print(\"solide\")\nelif t < 100: print(\"liquide\")\nelse: print(\"gaz\")",
    "status": "ok",
    "output": "solide\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "t": "-4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "t": "-4"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:6": {
    "key": "logic:example:6",
    "kind": "example",
    "chapter": "logic",
    "index": 6,
    "title": {
      "fr": "07 · IMC",
      "en": "07 · BMI"
    },
    "code": "imc = 27.4\nif imc < 18.5: c = \"insuffisant\"\nelif imc < 25: c = \"normal\"\nelif imc < 30: c = \"surpoids\"\nelse: c = \"obésité\"\nprint(c)",
    "status": "ok",
    "output": "surpoids\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "imc": "27.4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "imc": "27.4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "imc": "27.4"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "imc": "27.4",
          "c": "'surpoids'"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "imc": "27.4",
          "c": "'surpoids'"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:7": {
    "key": "logic:example:7",
    "kind": "example",
    "chapter": "logic",
    "index": 7,
    "title": {
      "fr": "08 · Triangle",
      "en": "08 · Triangle"
    },
    "code": "a, b, c = 3, 3, 5\nif a == b == c: print(\"équilatéral\")\nelif a == b or a == c or b == c: print(\"isocèle\")\nelse: print(\"scalène\")",
    "status": "ok",
    "output": "isocèle\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "3",
          "c": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "3",
          "c": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "a": "3",
          "b": "3",
          "c": "5"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:8": {
    "key": "logic:example:8",
    "kind": "example",
    "chapter": "logic",
    "index": 8,
    "title": {
      "fr": "09 · pH",
      "en": "09 · pH"
    },
    "code": "ph = 8.2\nif ph < 7: print(\"acide\")\nelif ph == 7: print(\"neutre\")\nelse: print(\"basique\")",
    "status": "ok",
    "output": "basique\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ph": "8.2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ph": "8.2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "ph": "8.2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "ph": "8.2"
        },
        "return": "None"
      }
    ]
  },
  "logic:example:9": {
    "key": "logic:example:9",
    "kind": "example",
    "chapter": "logic",
    "index": 9,
    "title": {
      "fr": "10 · Indice UV",
      "en": "10 · UV index"
    },
    "code": "uv = 7\nif uv <= 2: conseil = \"faible\"\nelif uv <= 5: conseil = \"modérée\"\nelse: conseil = \"forte\"\nprint(conseil)",
    "status": "ok",
    "output": "forte\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "uv": "7"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "uv": "7"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "uv": "7"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "uv": "7",
          "conseil": "'forte'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "uv": "7",
          "conseil": "'forte'"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:0": {
    "key": "logic:exercise:0",
    "kind": "exercise",
    "chapter": "logic",
    "index": 0,
    "title": {
      "fr": "01 · Positif",
      "en": "01 · Positive"
    },
    "code": "n = -2\nprint(n > 0)",
    "status": "ok",
    "output": "False\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "-2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "n": "-2"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:1": {
    "key": "logic:exercise:1",
    "kind": "exercise",
    "chapter": "logic",
    "index": 1,
    "title": {
      "fr": "02 · Mention",
      "en": "02 · Grade"
    },
    "code": "note = 11\nprint(\"admis\" if note >= 10 else \"refusé\")",
    "status": "ok",
    "output": "admis\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "note": "11"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "note": "11"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:2": {
    "key": "logic:exercise:2",
    "kind": "exercise",
    "chapter": "logic",
    "index": 2,
    "title": {
      "fr": "03 · Multiple",
      "en": "03 · Multiple"
    },
    "code": "n = 12\nprint(n % 3 == 0)",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "n": "12"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:3": {
    "key": "logic:exercise:3",
    "kind": "exercise",
    "chapter": "logic",
    "index": 3,
    "title": {
      "fr": "04 · Trois cas",
      "en": "04 · Three cases"
    },
    "code": "v = 65\nif v < 50: r=\"lente\"\nelif v <= 90: r=\"normale\"\nelse: r=\"rapide\"",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "v": "65"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "v": "65"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "v": "65",
          "r": "'normale'"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:4": {
    "key": "logic:exercise:4",
    "kind": "exercise",
    "chapter": "logic",
    "index": 4,
    "title": {
      "fr": "05 · Somme",
      "en": "05 · Sum"
    },
    "code": "total = 0\nfor n in range(1, 6): total += n",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "total": "15",
          "n": "5"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:5": {
    "key": "logic:exercise:5",
    "kind": "exercise",
    "chapter": "logic",
    "index": 5,
    "title": {
      "fr": "06 · Répétition",
      "en": "06 · Repeat"
    },
    "code": "for _ in range(3): print(\"go\")",
    "status": "ok",
    "output": "go\ngo\ngo\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "_": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "_": "1"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "_": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "_": "2"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:6": {
    "key": "logic:exercise:6",
    "kind": "exercise",
    "chapter": "logic",
    "index": 6,
    "title": {
      "fr": "07 · While",
      "en": "07 · While"
    },
    "code": "i = 1\nwhile i <= 3:\n    print(i); i += 1",
    "status": "ok",
    "output": "1\n2\n3\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "4"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:7": {
    "key": "logic:exercise:7",
    "kind": "exercise",
    "chapter": "logic",
    "index": 7,
    "title": {
      "fr": "08 · Filtre",
      "en": "08 · Filter"
    },
    "code": "compte = 0\nfor n in [8, 12, 15]:\n    if n > 10: compte += 1",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "n": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0",
          "n": "8"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "n": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "1",
          "n": "12"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "1",
          "n": "15"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "2",
          "n": "15"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "compte": "2",
          "n": "15"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:8": {
    "key": "logic:exercise:8",
    "kind": "exercise",
    "chapter": "logic",
    "index": 8,
    "title": {
      "fr": "09 · Maximum",
      "en": "09 · Maximum"
    },
    "code": "maximum = 0\nfor n in [4, 9, 2]:\n    if n > maximum: maximum = n",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "maximum": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "maximum": "0",
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "maximum": "4",
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "maximum": "4",
          "n": "9"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "maximum": "9",
          "n": "9"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "maximum": "9",
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "maximum": "9",
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "maximum": "9",
          "n": "2"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:9": {
    "key": "logic:exercise:9",
    "kind": "exercise",
    "chapter": "logic",
    "index": 9,
    "title": {
      "fr": "10 · Arrêt",
      "en": "10 · Stop"
    },
    "code": "for n in [1, 4, 7]:\n    if n == 4: break",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "n": "4"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:10": {
    "key": "logic:exercise:10",
    "kind": "exercise",
    "chapter": "logic",
    "index": 10,
    "title": {
      "fr": "11 · Archimède",
      "en": "11 · Archimedes"
    },
    "code": "densite = 0.8\nprint(\"flotte\" if densite < 1 else \"coule\")",
    "status": "ok",
    "output": "flotte\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "densite": "0.8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "densite": "0.8"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:11": {
    "key": "logic:exercise:11",
    "kind": "exercise",
    "chapter": "logic",
    "index": 11,
    "title": {
      "fr": "12 · Année bissextile",
      "en": "12 · Leap year"
    },
    "code": "annee = 2024\nprint(annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "annee": "2024"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "annee": "2024"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:12": {
    "key": "logic:exercise:12",
    "kind": "exercise",
    "chapter": "logic",
    "index": 12,
    "title": {
      "fr": "13 · Lentille",
      "en": "13 · Lens"
    },
    "code": "vergence = -2\nprint(\"convergente\" if vergence > 0 else \"divergente\")",
    "status": "ok",
    "output": "divergente\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "vergence": "-2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "vergence": "-2"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:13": {
    "key": "logic:exercise:13",
    "kind": "exercise",
    "chapter": "logic",
    "index": 13,
    "title": {
      "fr": "14 · Tension artérielle",
      "en": "14 · Blood pressure"
    },
    "code": "systolique = 145\nif systolique > 140: print(\"à surveiller\")\nelse: print(\"dans la zone\")",
    "status": "ok",
    "output": "à surveiller\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "systolique": "145"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "systolique": "145"
        },
        "return": "None"
      }
    ]
  },
  "logic:exercise:14": {
    "key": "logic:exercise:14",
    "kind": "exercise",
    "chapter": "logic",
    "index": 14,
    "title": {
      "fr": "15 · Pythagore",
      "en": "15 · Pythagorean theorem"
    },
    "code": "a, b, c = 3, 4, 5\nprint(a*a + b*b == c*c)",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:0": {
    "key": "vectors:example:0",
    "kind": "example",
    "chapter": "vectors",
    "index": 0,
    "title": {
      "fr": "01 · Somme des ventes",
      "en": "01 · Sales total"
    },
    "code": "ventes = [12, 8, 15]\ntotal = sum(ventes)\nprint(total)",
    "status": "ok",
    "output": "35\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ventes": "[12, 8, 15]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ventes": "[12, 8, 15]",
          "total": "35"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "ventes": "[12, 8, 15]",
          "total": "35"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:1": {
    "key": "vectors:example:1",
    "kind": "example",
    "chapter": "vectors",
    "index": 1,
    "title": {
      "fr": "02 · Maximum de température",
      "en": "02 · Maximum temperature"
    },
    "code": "temperatures = [18, 22, 19, 25]\nmaximum = temperatures[0]\nfor t in temperatures:\n    if t > maximum: maximum = t\nprint(maximum)",
    "status": "ok",
    "output": "25\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18",
          "t": "18"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18",
          "t": "18"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18",
          "t": "22"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "22"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "19"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "19"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "25"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "25",
          "t": "25"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "25",
          "t": "25"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "25",
          "t": "25"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:2": {
    "key": "vectors:example:2",
    "kind": "example",
    "chapter": "vectors",
    "index": 2,
    "title": {
      "fr": "03 · Filtrer les reçus",
      "en": "03 · Filter passes"
    },
    "code": "notes = [8, 12, 15, 9]\nreussites = []\nfor note in notes:\n    if note >= 10: reussites.append(note)\nprint(reussites)",
    "status": "ok",
    "output": "[12, 15]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]",
          "note": "8"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]",
          "note": "8"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]",
          "note": "12"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12]",
          "note": "12"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12]",
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:3": {
    "key": "vectors:example:3",
    "kind": "example",
    "chapter": "vectors",
    "index": 3,
    "title": {
      "fr": "04 · Inverser un trajet",
      "en": "04 · Reverse a route"
    },
    "code": "etapes = [\"A\", \"B\", \"C\"]\nprint(etapes[::-1])",
    "status": "ok",
    "output": "['C', 'B', 'A']\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "etapes": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "etapes": "['A', 'B', 'C']"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:4": {
    "key": "vectors:example:4",
    "kind": "example",
    "chapter": "vectors",
    "index": 4,
    "title": {
      "fr": "05 · Moyenne contrôlée",
      "en": "05 · Checked mean"
    },
    "code": "notes = []\nif notes:\n    print(sum(notes) / len(notes))\nelse:\n    print(\"Aucune note\")",
    "status": "ok",
    "output": "Aucune note\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[]"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "notes": "[]"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "notes": "[]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:5": {
    "key": "vectors:example:5",
    "kind": "example",
    "chapter": "vectors",
    "index": 5,
    "title": {
      "fr": "06 · Vitesse par jour",
      "en": "06 · Daily speed"
    },
    "code": "distances = [12, 18, 15, 21]\nfor d in distances: print(d / 2)",
    "status": "ok",
    "output": "6.0\n9.0\n7.5\n10.5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distances": "[12, 18, 15, 21]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "18"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "15"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "21"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "21"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:6": {
    "key": "vectors:example:6",
    "kind": "example",
    "chapter": "vectors",
    "index": 6,
    "title": {
      "fr": "07 · Températures filtrées",
      "en": "07 · Filtered temperatures"
    },
    "code": "mesures = [18, 22, 25, 19]\nchaudes = [t for t in mesures if t > 20]\nprint(chaudes)",
    "status": "ok",
    "output": "[22, 25]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[18, 22, 25, 19]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "18"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "22"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "25"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "19"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "chaudes": "[22, 25]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "chaudes": "[22, 25]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:7": {
    "key": "vectors:example:7",
    "kind": "example",
    "chapter": "vectors",
    "index": 7,
    "title": {
      "fr": "08 · Energie totale",
      "en": "08 · Total energy"
    },
    "code": "energies = [3.2, 4.1, 2.7]\nprint(sum(energies))",
    "status": "ok",
    "output": "10.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "energies": "[3.2, 4.1, 2.7]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "energies": "[3.2, 4.1, 2.7]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:8": {
    "key": "vectors:example:8",
    "kind": "example",
    "chapter": "vectors",
    "index": 8,
    "title": {
      "fr": "09 · Position du pic",
      "en": "09 · Peak position"
    },
    "code": "temperatures = [19, 24, 22, 27]\nprint(temperatures.index(max(temperatures)))",
    "status": "ok",
    "output": "3\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "temperatures": "[19, 24, 22, 27]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "temperatures": "[19, 24, 22, 27]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:example:9": {
    "key": "vectors:example:9",
    "kind": "example",
    "chapter": "vectors",
    "index": 9,
    "title": {
      "fr": "10 · Normalisation",
      "en": "10 · Normalization"
    },
    "code": "mesures = [10, 20, 30]\nmini, maxi = min(mesures), max(mesures)\nprint([(x-mini)/(maxi-mini) for x in mesures])",
    "status": "ok",
    "output": "[0.0, 0.5, 1.0]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[10, 20, 30]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30",
          "x": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30",
          "x": "20"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30",
          "x": "30"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:0": {
    "key": "vectors:exercise:0",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 0,
    "title": {
      "fr": "01 · Compter",
      "en": "01 · Count"
    },
    "code": "valeurs = [2, 5, 8]\nprint(sum(n % 2 == 0 for n in valeurs))",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[2, 5, 8]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "2"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "5"
        },
        "return": "False"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "8"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd160b0>",
          "n": "8"
        },
        "return": "None"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[2, 5, 8]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:1": {
    "key": "vectors:exercise:1",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 1,
    "title": {
      "fr": "02 · Minimum",
      "en": "02 · Minimum"
    },
    "code": "valeurs = [7, 3, 9]\nminimum = valeurs[0]\nfor v in valeurs:\n    if v < minimum: minimum = v\nprint(minimum)",
    "status": "ok",
    "output": "3\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7",
          "v": "7"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7",
          "v": "7"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7",
          "v": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:2": {
    "key": "vectors:exercise:2",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 2,
    "title": {
      "fr": "03 · Indices",
      "en": "03 · Indices"
    },
    "code": "for i in range(len(valeurs)):\n    print(i, valeurs[i])",
    "status": "NameError: name 'valeurs' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "vectors:exercise:3": {
    "key": "vectors:exercise:3",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 3,
    "title": {
      "fr": "04 · Décalage",
      "en": "04 · Shift"
    },
    "code": "valeurs = [1, 4, 7]\nmodifiees = [v + 2 for v in valeurs]",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[1, 4, 7]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[1, 4, 7]",
          "v": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[1, 4, 7]",
          "v": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[1, 4, 7]",
          "v": "7"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[1, 4, 7]",
          "modifiees": "[3, 6, 9]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:4": {
    "key": "vectors:exercise:4",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 4,
    "title": {
      "fr": "05 · Doublons",
      "en": "05 · Duplicates"
    },
    "code": "sortie = []\nfor v in [2, 2, 3, 2]:\n    if v not in sortie: sortie.append(v)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "sortie": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "sortie": "[]",
          "v": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "sortie": "[2]",
          "v": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "sortie": "[2]",
          "v": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "sortie": "[2]",
          "v": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "sortie": "[2]",
          "v": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "sortie": "[2, 3]",
          "v": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "sortie": "[2, 3]",
          "v": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "sortie": "[2, 3]",
          "v": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "sortie": "[2, 3]",
          "v": "2"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:5": {
    "key": "vectors:exercise:5",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 5,
    "title": {
      "fr": "06 · Rotation",
      "en": "06 · Rotation"
    },
    "code": "valeurs = [\"A\", \"B\", \"C\"]\nvaleurs = valeurs[1:] + valeurs[:1]",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "['B', 'C', 'A']"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:6": {
    "key": "vectors:exercise:6",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 6,
    "title": {
      "fr": "07 · Somme filtrée",
      "en": "07 · Filtered sum"
    },
    "code": "total = 0\nfor v in [-2, 4, -1, 6]:\n    if v > 0: total += v",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "0",
          "v": "-2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0",
          "v": "-2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "0",
          "v": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "4",
          "v": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "4",
          "v": "-1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "4",
          "v": "-1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "4",
          "v": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "v": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "total": "10",
          "v": "6"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:7": {
    "key": "vectors:exercise:7",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 7,
    "title": {
      "fr": "08 · Recherche indice",
      "en": "08 · Search index"
    },
    "code": "valeurs = [4, 9, 2]\nfor i, v in enumerate(valeurs):\n    if v == 9: print(i); break",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "0",
          "v": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "0",
          "v": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "1",
          "v": "9"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "1",
          "v": "9"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:8": {
    "key": "vectors:exercise:8",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 8,
    "title": {
      "fr": "09 · Tri",
      "en": "09 · Sorting"
    },
    "code": "temperatures = [23, 18, 25]\nprint(sorted(temperatures))",
    "status": "ok",
    "output": "[18, 23, 25]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "temperatures": "[23, 18, 25]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "temperatures": "[23, 18, 25]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:9": {
    "key": "vectors:exercise:9",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 9,
    "title": {
      "fr": "10 · Écart",
      "en": "10 · Spread"
    },
    "code": "valeurs = [4, 10, 7]\nprint(max(valeurs) - min(valeurs))",
    "status": "ok",
    "output": "6\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, 10, 7]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[4, 10, 7]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:10": {
    "key": "vectors:exercise:10",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 10,
    "title": {
      "fr": "11 · Vitesse moyenne",
      "en": "11 · Average speed"
    },
    "code": "vitesses = [8, 10, 12, 10]\nprint(sum(vitesses) / len(vitesses))",
    "status": "ok",
    "output": "10.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "vitesses": "[8, 10, 12, 10]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "vitesses": "[8, 10, 12, 10]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:11": {
    "key": "vectors:exercise:11",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 11,
    "title": {
      "fr": "12 · Valeurs négatives",
      "en": "12 · Negative values"
    },
    "code": "temperatures = [-2, 4, -1, 3]\nprint(sum(t < 0 for t in temperatures))",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "temperatures": "[-2, 4, -1, 3]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "-2"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "-2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "4"
        },
        "return": "False"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "-1"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "-1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "3"
        },
        "return": "False"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd177c0>",
          "t": "3"
        },
        "return": "None"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "temperatures": "[-2, 4, -1, 3]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:12": {
    "key": "vectors:exercise:12",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 12,
    "title": {
      "fr": "13 · Accumulation",
      "en": "13 · Accumulation"
    },
    "code": "distances = [2, 3, 4]\ncumul = 0\nfor d in distances:\n    cumul += d\nprint(cumul)",
    "status": "ok",
    "output": "9\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "0",
          "d": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "2",
          "d": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "2",
          "d": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "5",
          "d": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "5",
          "d": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "9",
          "d": "4"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "9",
          "d": "4"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "9",
          "d": "4"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:13": {
    "key": "vectors:exercise:13",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 13,
    "title": {
      "fr": "14 · Index du maximum",
      "en": "14 · Maximum index"
    },
    "code": "courants = [2.1, 3.4, 2.8]\nprint(courants.index(max(courants)))",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "courants": "[2.1, 3.4, 2.8]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "courants": "[2.1, 3.4, 2.8]"
        },
        "return": "None"
      }
    ]
  },
  "vectors:exercise:14": {
    "key": "vectors:exercise:14",
    "kind": "exercise",
    "chapter": "vectors",
    "index": 14,
    "title": {
      "fr": "15 · Unités",
      "en": "15 · Units"
    },
    "code": "longueurs = [30, 45, 120]\nprint([x / 100 for x in longueurs])",
    "status": "ok",
    "output": "[0.3, 0.45, 1.2]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "longueurs": "[30, 45, 120]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "longueurs": "[30, 45, 120]",
          "x": "30"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "longueurs": "[30, 45, 120]",
          "x": "45"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "longueurs": "[30, 45, 120]",
          "x": "120"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "longueurs": "[30, 45, 120]"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:0": {
    "key": "dictionaries:example:0",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 0,
    "title": {
      "fr": "01 · Profil",
      "en": "01 · Profile"
    },
    "code": "profil = {\"nom\": \"Lina\", \"ville\": \"Oran\", \"age\": 16}\nprint(profil[\"ville\"])",
    "status": "ok",
    "output": "Oran\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "profil": "{'nom': 'Lina', 'ville': 'Oran', 'age': 16}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "profil": "{'nom': 'Lina', 'ville': 'Oran', 'age': 16}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:1": {
    "key": "dictionaries:example:1",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 1,
    "title": {
      "fr": "02 · Stock",
      "en": "02 · Inventory"
    },
    "code": "stock = {\"clavier\": 8, \"souris\": 12}\nstock[\"clavier\"] -= 1",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "{'clavier': 8, 'souris': 12}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "stock": "{'clavier': 7, 'souris': 12}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:2": {
    "key": "dictionaries:example:2",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 2,
    "title": {
      "fr": "03 · Contact sûr",
      "en": "03 · Safe contact"
    },
    "code": "contact = {\"nom\": \"Ali\"}\nprint(contact.get(\"telephone\", \"Absent\"))",
    "status": "ok",
    "output": "Absent\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "contact": "{'nom': 'Ali'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "contact": "{'nom': 'Ali'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:3": {
    "key": "dictionaries:example:3",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 3,
    "title": {
      "fr": "04 · Notes par matière",
      "en": "04 · Subject grades"
    },
    "code": "notes = {\"maths\": 15, \"python\": 17}\nfor matiere, note in notes.items():\n    print(matiere, note)",
    "status": "ok",
    "output": "maths 15\npython 17\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "{'maths': 15, 'python': 17}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'maths'",
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'maths'",
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'python'",
          "note": "17"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'python'",
          "note": "17"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'python'",
          "note": "17"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:4": {
    "key": "dictionaries:example:4",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 4,
    "title": {
      "fr": "05 · Inventaire total",
      "en": "05 · Total inventory"
    },
    "code": "stock = {\"livres\": 4, \"cahiers\": 9}\nprint(sum(stock.values()))",
    "status": "ok",
    "output": "13\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "{'livres': 4, 'cahiers': 9}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "stock": "{'livres': 4, 'cahiers': 9}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:5": {
    "key": "dictionaries:example:5",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 5,
    "title": {
      "fr": "06 · Mesure scientifique",
      "en": "06 · Scientific measurement"
    },
    "code": "mesure = {\"valeur\": 21.4, \"unite\": \"°C\", \"capteur\": \"S1\"}\nprint(mesure[\"valeur\"], mesure[\"unite\"])",
    "status": "ok",
    "output": "21.4 °C\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesure": "{'valeur': 21.4, 'unite': '°C', 'capteur': 'S1'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "mesure": "{'valeur': 21.4, 'unite': '°C', 'capteur': 'S1'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:6": {
    "key": "dictionaries:example:6",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 6,
    "title": {
      "fr": "07 · Fréquence par sport",
      "en": "07 · Frequency by sport"
    },
    "code": "fc = {\"repos\": 65, \"course\": 154}\nprint(fc.get(\"natation\", \"non mesurée\"))",
    "status": "ok",
    "output": "non mesurée\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "fc": "{'repos': 65, 'course': 154}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "fc": "{'repos': 65, 'course': 154}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:7": {
    "key": "dictionaries:example:7",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 7,
    "title": {
      "fr": "08 · Composition chimique",
      "en": "08 · Chemical composition"
    },
    "code": "proportions = {\"eau\": 70, \"sel\": 5, \"solvant\": 25}\nprint(sum(proportions.values()))",
    "status": "ok",
    "output": "100\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "proportions": "{'eau': 70, 'sel': 5, 'solvant': 25}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "proportions": "{'eau': 70, 'sel': 5, 'solvant': 25}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:8": {
    "key": "dictionaries:example:8",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 8,
    "title": {
      "fr": "09 · Compter des catégories",
      "en": "09 · Count categories"
    },
    "code": "compte = {}\nfor etat in [\"solide\", \"liquide\", \"liquide\"]:\n    compte[etat] = compte.get(etat, 0) + 1\nprint(compte)",
    "status": "ok",
    "output": "{'solide': 1, 'liquide': 2}\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "{}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "{}",
          "etat": "'solide'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "{'solide': 1}",
          "etat": "'solide'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "{'solide': 1}",
          "etat": "'liquide'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "{'solide': 1, 'liquide': 1}",
          "etat": "'liquide'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "{'solide': 1, 'liquide': 1}",
          "etat": "'liquide'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "{'solide': 1, 'liquide': 2}",
          "etat": "'liquide'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "compte": "{'solide': 1, 'liquide': 2}",
          "etat": "'liquide'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "compte": "{'solide': 1, 'liquide': 2}",
          "etat": "'liquide'"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:example:9": {
    "key": "dictionaries:example:9",
    "kind": "example",
    "chapter": "dictionaries",
    "index": 9,
    "title": {
      "fr": "10 · Configuration",
      "en": "10 · Configuration"
    },
    "code": "protocole = {\"duree\": 60, \"temperature\": 25, \"agitation\": True}\nfor cle, valeur in protocole.items(): print(cle, valeur)",
    "status": "ok",
    "output": "duree 60\ntemperature 25\nagitation True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'duree'",
          "valeur": "60"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'temperature'",
          "valeur": "25"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'agitation'",
          "valeur": "True"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'agitation'",
          "valeur": "True"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:0": {
    "key": "dictionaries:exercise:0",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 0,
    "title": {
      "fr": "01 · Ajouter",
      "en": "01 · Add"
    },
    "code": "profil = {\"nom\": \"Sara\"}\nprofil[\"email\"] = \"sara@mail.test\"",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "profil": "{'nom': 'Sara'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "profil": "{'nom': 'Sara', 'email': 'sara@mail.test'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:1": {
    "key": "dictionaries:exercise:1",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 1,
    "title": {
      "fr": "02 · Supprimer",
      "en": "02 · Delete"
    },
    "code": "donnees = {\"nom\": \"Ali\", \"temp\": True}\ndel donnees[\"temp\"]",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "donnees": "{'nom': 'Ali', 'temp': True}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "donnees": "{'nom': 'Ali'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:2": {
    "key": "dictionaries:exercise:2",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 2,
    "title": {
      "fr": "03 · Compter occurrences",
      "en": "03 · Count occurrences"
    },
    "code": "votes = {}\nfor nom in [\"A\", \"B\", \"A\"]:\n    votes[nom] = votes.get(nom, 0) + 1",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "votes": "{}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "votes": "{}",
          "nom": "'A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "votes": "{'A': 1}",
          "nom": "'A'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "votes": "{'A': 1}",
          "nom": "'B'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "votes": "{'A': 1, 'B': 1}",
          "nom": "'B'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "votes": "{'A': 1, 'B': 1}",
          "nom": "'A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "votes": "{'A': 2, 'B': 1}",
          "nom": "'A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "votes": "{'A': 2, 'B': 1}",
          "nom": "'A'"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:3": {
    "key": "dictionaries:exercise:3",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 3,
    "title": {
      "fr": "04 · Recherche conditionnelle",
      "en": "04 · Conditional lookup"
    },
    "code": "stock = {\"A\": 2, \"B\": 8}\nfor nom, quantite in stock.items():\n    if quantite < 5: print(nom)",
    "status": "ok",
    "output": "A\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "{'A': 2, 'B': 8}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'A'",
          "quantite": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'A'",
          "quantite": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'B'",
          "quantite": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'B'",
          "quantite": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'B'",
          "quantite": "8"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:4": {
    "key": "dictionaries:exercise:4",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 4,
    "title": {
      "fr": "05 · Copie contrôlée",
      "en": "05 · Controlled copy"
    },
    "code": "source = {\"nom\": \"Lina\", \"age\": 16, \"secret\": 1}\ncible = {k: source[k] for k in [\"nom\", \"age\"]}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}",
          "k": "'nom'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}",
          "k": "'age'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}",
          "cible": "{'nom': 'Lina', 'age': 16}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:5": {
    "key": "dictionaries:exercise:5",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 5,
    "title": {
      "fr": "06 · Inversion",
      "en": "06 · Inversion"
    },
    "code": "codes = {\"Oran\": 31, \"Alger\": 16}\ninverse = {code: ville for ville, code in codes.items()}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}",
          "ville": "'Oran'",
          "code": "31"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}",
          "ville": "'Alger'",
          "code": "16"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}",
          "inverse": "{31: 'Oran', 16: 'Alger'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:6": {
    "key": "dictionaries:exercise:6",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 6,
    "title": {
      "fr": "07 · Somme de notes",
      "en": "07 · Sum grades"
    },
    "code": "notes = {\"A\": 12, \"B\": 16}\nprint(sum(notes.values()) / len(notes))",
    "status": "ok",
    "output": "14.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "{'A': 12, 'B': 16}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "{'A': 12, 'B': 16}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:7": {
    "key": "dictionaries:exercise:7",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 7,
    "title": {
      "fr": "08 · Clé absente",
      "en": "08 · Missing key"
    },
    "code": "profil = {\"nom\": \"Maya\"}\nprint(profil.get(\"ville\", \"inconnue\"))",
    "status": "ok",
    "output": "inconnue\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "profil": "{'nom': 'Maya'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "profil": "{'nom': 'Maya'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:8": {
    "key": "dictionaries:exercise:8",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 8,
    "title": {
      "fr": "09 · Groupement",
      "en": "09 · Grouping"
    },
    "code": "classes = {}\nfor nom, classe in [(\"A\", \"2A\"), (\"B\", \"2A\")]:\n    classes.setdefault(classe, []).append(nom)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "classes": "{}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "classes": "{}",
          "nom": "'A'",
          "classe": "'2A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "classes": "{'2A': ['A']}",
          "nom": "'A'",
          "classe": "'2A'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "classes": "{'2A': ['A']}",
          "nom": "'B'",
          "classe": "'2A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "classes": "{'2A': ['A', 'B']}",
          "nom": "'B'",
          "classe": "'2A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "classes": "{'2A': ['A', 'B']}",
          "nom": "'B'",
          "classe": "'2A'"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:9": {
    "key": "dictionaries:exercise:9",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 9,
    "title": {
      "fr": "10 · Rapport",
      "en": "10 · Report"
    },
    "code": "fiche = {\"id\": \"S1\", \"nom\": \"Lina\"}\nfor cle, valeur in fiche.items(): print(cle, \":\", valeur)",
    "status": "ok",
    "output": "id : S1\nnom : Lina\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}",
          "cle": "'id'",
          "valeur": "'S1'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}",
          "cle": "'nom'",
          "valeur": "'Lina'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}",
          "cle": "'nom'",
          "valeur": "'Lina'"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:10": {
    "key": "dictionaries:exercise:10",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 10,
    "title": {
      "fr": "11 · Score par élève",
      "en": "11 · Score per student"
    },
    "code": "scores = {\"Lina\": 16, \"Ali\": 12}\nprint(scores[\"Lina\"])",
    "status": "ok",
    "output": "16\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "scores": "{'Lina': 16, 'Ali': 12}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "scores": "{'Lina': 16, 'Ali': 12}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:11": {
    "key": "dictionaries:exercise:11",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 11,
    "title": {
      "fr": "12 · Stock sécurisé",
      "en": "12 · Safe inventory"
    },
    "code": "stock = {\"cahier\": 12}\nif \"cahier\" in stock: stock[\"cahier\"] -= 1",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "{'cahier': 12}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "stock": "{'cahier': 11}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:12": {
    "key": "dictionaries:exercise:12",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 12,
    "title": {
      "fr": "13 · Moyenne matières",
      "en": "13 · Subject mean"
    },
    "code": "notes = {\"maths\": 14, \"python\": 18}\nprint(sum(notes.values()) / len(notes))",
    "status": "ok",
    "output": "16.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "{'maths': 14, 'python': 18}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "{'maths': 14, 'python': 18}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:13": {
    "key": "dictionaries:exercise:13",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 13,
    "title": {
      "fr": "14 · Inverser clé-valeur",
      "en": "14 · Invert key-value"
    },
    "code": "noms = {\"Na\": \"sodium\", \"O\": \"oxygene\"}\ninverse = {nom: code for code, nom in noms.items()}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}",
          "code": "'Na'",
          "nom": "'sodium'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}",
          "code": "'O'",
          "nom": "'oxygene'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}",
          "inverse": "{'sodium': 'Na', 'oxygene': 'O'}"
        },
        "return": "None"
      }
    ]
  },
  "dictionaries:exercise:14": {
    "key": "dictionaries:exercise:14",
    "kind": "exercise",
    "chapter": "dictionaries",
    "index": 14,
    "title": {
      "fr": "15 · Présence d’un champ",
      "en": "15 · Field presence"
    },
    "code": "mesure = {\"temperature\": 20}\nprint(mesure.get(\"pression\", \"absente\"))",
    "status": "ok",
    "output": "absente\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesure": "{'temperature': 20}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "mesure": "{'temperature': 20}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:0": {
    "key": "records:example:0",
    "kind": "example",
    "chapter": "records",
    "index": 0,
    "title": {
      "fr": "01 · Fiche élève",
      "en": "01 · Student record"
    },
    "code": "eleve = {\"id\": \"S1\", \"nom\": \"Maya\", \"notes\": [12, 15]}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "eleve": "{'id': 'S1', 'nom': 'Maya', 'notes': [12, 15]}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:1": {
    "key": "records:example:1",
    "kind": "example",
    "chapter": "records",
    "index": 1,
    "title": {
      "fr": "02 · Validation note",
      "en": "02 · Grade validation"
    },
    "code": "note = 18\nvalide = 0 <= note <= 20\nprint(valide)",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "note": "18"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "note": "18",
          "valide": "True"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "note": "18",
          "valide": "True"
        },
        "return": "None"
      }
    ]
  },
  "records:example:2": {
    "key": "records:example:2",
    "kind": "example",
    "chapter": "records",
    "index": 2,
    "title": {
      "fr": "03 · Liste de fiches",
      "en": "03 · Record list"
    },
    "code": "eleves = [{\"nom\":\"A\",\"note\":12},{\"nom\":\"B\",\"note\":8}]\nfor eleve in eleves: print(eleve[\"nom\"])",
    "status": "ok",
    "output": "A\nB\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]",
          "eleve": "{'nom': 'A', 'note': 12}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]",
          "eleve": "{'nom': 'B', 'note': 8}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]",
          "eleve": "{'nom': 'B', 'note': 8}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:3": {
    "key": "records:example:3",
    "kind": "example",
    "chapter": "records",
    "index": 3,
    "title": {
      "fr": "04 · Champ calculé",
      "en": "04 · Computed field"
    },
    "code": "eleve = {\"nom\":\"Lina\", \"notes\":[14, 16]}\neleve[\"moyenne\"] = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleve": "{'nom': 'Lina', 'notes': [14, 16]}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "eleve": "{'nom': 'Lina', 'notes': [14, 16], 'moyenne': 15.0}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:4": {
    "key": "records:example:4",
    "kind": "example",
    "chapter": "records",
    "index": 4,
    "title": {
      "fr": "05 · Recherche id",
      "en": "05 · Search by id"
    },
    "code": "eleves = [{\"id\":\"S1\"},{\"id\":\"S2\"}]\nfor e in eleves:\n    if e[\"id\"] == \"S2\": print(e)",
    "status": "ok",
    "output": "{'id': 'S2'}\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S1'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S1'}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S2'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S2'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S2'}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:5": {
    "key": "records:example:5",
    "kind": "example",
    "chapter": "records",
    "index": 5,
    "title": {
      "fr": "06 · Athlète",
      "en": "06 · Athlete"
    },
    "code": "athlete = {\"nom\": \"Nora\", \"distance\": 5, \"temps\": 28}\nprint(athlete[\"distance\"] / (athlete[\"temps\"] / 60))",
    "status": "ok",
    "output": "10.714285714285714\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "athlete": "{'nom': 'Nora', 'distance': 5, 'temps': 28}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "athlete": "{'nom': 'Nora', 'distance': 5, 'temps': 28}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:6": {
    "key": "records:example:6",
    "kind": "example",
    "chapter": "records",
    "index": 6,
    "title": {
      "fr": "07 · Expérience",
      "en": "07 · Experiment"
    },
    "code": "experience = {\"temperature\": 25, \"masse\": 12.4, \"resultat\": \"stable\"}\nif experience[\"resultat\"] == \"stable\": print(\"valider\")",
    "status": "ok",
    "output": "valider\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "experience": "{'temperature': 25, 'masse': 12.4, 'resultat': 'stable'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "experience": "{'temperature': 25, 'masse': 12.4, 'resultat': 'stable'}"
        },
        "return": "None"
      }
    ]
  },
  "records:example:7": {
    "key": "records:example:7",
    "kind": "example",
    "chapter": "records",
    "index": 7,
    "title": {
      "fr": "08 · Validation d’un dossier",
      "en": "08 · File validation"
    },
    "code": "dossier = {\"nom\": \"Samir\", \"email\": \"samir@example.com\"}\nobligatoires = [\"nom\", \"email\"]\nprint(all(cle in dossier for cle in obligatoires))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "dossier": "{'nom': 'Samir', 'email': 'samir@example.com'}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "dossier": "{'nom': 'Samir', 'email': 'samir@example.com'}",
          "obligatoires": "['nom', 'email']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd3c940>"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd3c940>",
          "cle": "'nom'"
        },
        "return": "True"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd3c940>",
          "cle": "'nom'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd3c940>",
          "cle": "'email'"
        },
        "return": "True"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd3c940>",
          "cle": "'email'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd3c940>",
          "cle": "'email'"
        },
        "return": "None"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "dossier": "{'nom': 'Samir', 'email': 'samir@example.com'}",
          "obligatoires": "['nom', 'email']"
        },
        "return": "None"
      }
    ]
  },
  "records:example:8": {
    "key": "records:example:8",
    "kind": "example",
    "chapter": "records",
    "index": 8,
    "title": {
      "fr": "09 · Liste de mesures",
      "en": "09 · Measurement records"
    },
    "code": "mesures = [{\"id\": 1, \"valeur\": 18}, {\"id\": 2, \"valeur\": 22}]\nprint([m[\"valeur\"] for m in mesures])",
    "status": "ok",
    "output": "[18, 22]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]",
          "m": "{'id': 1, 'valeur': 18}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]",
          "m": "{'id': 2, 'valeur': 22}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]"
        },
        "return": "None"
      }
    ]
  },
  "records:example:9": {
    "key": "records:example:9",
    "kind": "example",
    "chapter": "records",
    "index": 9,
    "title": {
      "fr": "10 · Rapport",
      "en": "10 · Report"
    },
    "code": "eleve = {\"prenom\": \"Lina\", \"notes\": [14, 16]}\nmoy = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])\nprint(f\"{eleve[\"prenom\"]}: {moy}\")",
    "status": "ok",
    "output": "Lina: 15.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleve": "{'prenom': 'Lina', 'notes': [14, 16]}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "eleve": "{'prenom': 'Lina', 'notes': [14, 16]}",
          "moy": "15.0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "eleve": "{'prenom': 'Lina', 'notes': [14, 16]}",
          "moy": "15.0"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:0": {
    "key": "records:exercise:0",
    "kind": "exercise",
    "chapter": "records",
    "index": 0,
    "title": {
      "fr": "01 · Livre",
      "en": "01 · Book"
    },
    "code": "livre = {\"titre\":\"Python\", \"annee\":2026}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "livre": "{'titre': 'Python', 'annee': 2026}"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:1": {
    "key": "records:exercise:1",
    "kind": "exercise",
    "chapter": "records",
    "index": 1,
    "title": {
      "fr": "02 · Validation",
      "en": "02 · Validation"
    },
    "code": "fiche = {\"nom\":\"\"}\nprint(bool(fiche.get(\"nom\")))",
    "status": "ok",
    "output": "False\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "fiche": "{'nom': ''}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "fiche": "{'nom': ''}"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:2": {
    "key": "records:exercise:2",
    "kind": "exercise",
    "chapter": "records",
    "index": 2,
    "title": {
      "fr": "03 · Moyenne fiche",
      "en": "03 · Record mean"
    },
    "code": "for e in eleves: e[\"moyenne\"] = sum(e[\"notes\"]) / len(e[\"notes\"])",
    "status": "NameError: name 'eleves' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "records:exercise:3": {
    "key": "records:exercise:3",
    "kind": "exercise",
    "chapter": "records",
    "index": 3,
    "title": {
      "fr": "04 · Filtrer fiches",
      "en": "04 · Filter records"
    },
    "code": "admis = [e for e in eleves if e[\"moyenne\"] >= 10]",
    "status": "NameError: name 'eleves' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "records:exercise:4": {
    "key": "records:exercise:4",
    "kind": "exercise",
    "chapter": "records",
    "index": 4,
    "title": {
      "fr": "05 · Identifiant",
      "en": "05 · Identifier"
    },
    "code": "ids = [e[\"id\"] for e in eleves]\nprint(len(ids) == len(set(ids)))",
    "status": "NameError: name 'eleves' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "records:exercise:5": {
    "key": "records:exercise:5",
    "kind": "exercise",
    "chapter": "records",
    "index": 5,
    "title": {
      "fr": "06 · Capteur",
      "en": "06 · Sensor"
    },
    "code": "capteur = {\"nom\":\"T1\", \"unite\":\"°C\", \"mesure\":21.4}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "capteur": "{'nom': 'T1', 'unite': '°C', 'mesure': 21.4}"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:6": {
    "key": "records:exercise:6",
    "kind": "exercise",
    "chapter": "records",
    "index": 6,
    "title": {
      "fr": "07 · Bornes",
      "en": "07 · Bounds"
    },
    "code": "m = 21.4\nprint(0 <= m <= 50)",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "m": "21.4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "m": "21.4"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:7": {
    "key": "records:exercise:7",
    "kind": "exercise",
    "chapter": "records",
    "index": 7,
    "title": {
      "fr": "08 · Tableau",
      "en": "08 · Table"
    },
    "code": "for e in eleves: print(e.get(\"nom\", \"inconnu\"))",
    "status": "NameError: name 'eleves' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "records:exercise:8": {
    "key": "records:exercise:8",
    "kind": "exercise",
    "chapter": "records",
    "index": 8,
    "title": {
      "fr": "09 · Recherche id",
      "en": "09 · ID lookup"
    },
    "code": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
    "status": "NameError: name 'eleves' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "records:exercise:9": {
    "key": "records:exercise:9",
    "kind": "exercise",
    "chapter": "records",
    "index": 9,
    "title": {
      "fr": "10 · Bilan",
      "en": "10 · Summary"
    },
    "code": "valides = [e for e in eleves if e.get(\"moyenne\", 0) >= 10]\nprint(len(valides))",
    "status": "NameError: name 'eleves' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "records:exercise:10": {
    "key": "records:exercise:10",
    "kind": "exercise",
    "chapter": "records",
    "index": 10,
    "title": {
      "fr": "11 · Fiche pression",
      "en": "11 · Pressure record"
    },
    "code": "mesure = {\"systolique\": 120, \"diastolique\": 80, \"date\": \"2026-06-01\"}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "mesure": "{'systolique': 120, 'diastolique': 80, 'date': '2026-06-01'}"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:11": {
    "key": "records:exercise:11",
    "kind": "exercise",
    "chapter": "records",
    "index": 11,
    "title": {
      "fr": "12 · Filtrer fiches",
      "en": "12 · Filter records"
    },
    "code": "mesures = [{\"valeur\": 18}, {\"valeur\": 24}]\nprint([m for m in mesures if m[\"valeur\"] > 20])",
    "status": "ok",
    "output": "[{'valeur': 24}]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]",
          "m": "{'valeur': 18}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]",
          "m": "{'valeur': 24}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:12": {
    "key": "records:exercise:12",
    "kind": "exercise",
    "chapter": "records",
    "index": 12,
    "title": {
      "fr": "13 · Complétude",
      "en": "13 · Completeness"
    },
    "code": "eleves = [{\"id\": 1}, {\"id\": 2}]\nprint(all(\"id\" in e for e in eleves))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 1}, {'id': 2}]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1bd30>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1bd30>",
          "e": "{'id': 1}"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1bd30>",
          "e": "{'id': 1}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1bd30>",
          "e": "{'id': 2}"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1bd30>",
          "e": "{'id': 2}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1bd30>",
          "e": "{'id': 2}"
        },
        "return": "None"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "eleves": "[{'id': 1}, {'id': 2}]"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:13": {
    "key": "records:exercise:13",
    "kind": "exercise",
    "chapter": "records",
    "index": 13,
    "title": {
      "fr": "14 · Mise à jour",
      "en": "14 · Update"
    },
    "code": "produit = {\"nom\": \"Tube\", \"stock\": 4}\nproduit[\"stock\"] += 6",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "produit": "{'nom': 'Tube', 'stock': 4}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "produit": "{'nom': 'Tube', 'stock': 10}"
        },
        "return": "None"
      }
    ]
  },
  "records:exercise:14": {
    "key": "records:exercise:14",
    "kind": "exercise",
    "chapter": "records",
    "index": 14,
    "title": {
      "fr": "15 · Recherche identifiant",
      "en": "15 · Search identifier"
    },
    "code": "eleves = [{\"id\": 1, \"nom\": \"Ali\"}, {\"id\": 2, \"nom\": \"Nora\"}]\nprint(next(e for e in eleves if e[\"id\"] == 2))",
    "status": "ok",
    "output": "{'id': 2, 'nom': 'Nora'}\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "eleves": "[{'id': 1, 'nom': 'Ali'}, {'id': 2, 'nom': 'Nora'}]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1b550>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1b550>",
          "e": "{'id': 1, 'nom': 'Ali'}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          ".0": "<list_iterator object at 0x7fcd1dd1b550>",
          "e": "{'id': 2, 'nom': 'Nora'}"
        },
        "return": "{'id': 2, 'nom': 'Nora'}"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "eleves": "[{'id': 1, 'nom': 'Ali'}, {'id': 2, 'nom': 'Nora'}]"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:0": {
    "key": "stacks:example:0",
    "kind": "example",
    "chapter": "stacks",
    "index": 0,
    "title": {
      "fr": "01 · Annuler",
      "en": "01 · Undo"
    },
    "code": "pile = [\"titre\", \"image\"]\nprint(pile.pop())",
    "status": "ok",
    "output": "image\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['titre', 'image']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "pile": "['titre']"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:1": {
    "key": "stacks:example:1",
    "kind": "example",
    "chapter": "stacks",
    "index": 1,
    "title": {
      "fr": "02 · Historique",
      "en": "02 · History"
    },
    "code": "historique = [\"accueil\", \"cours\", \"quiz\"]\npage = historique.pop()\nprint(page, historique[-1])",
    "status": "ok",
    "output": "quiz cours\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "historique": "['accueil', 'cours', 'quiz']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "historique": "['accueil', 'cours']",
          "page": "'quiz'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "historique": "['accueil', 'cours']",
          "page": "'quiz'"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:2": {
    "key": "stacks:example:2",
    "kind": "example",
    "chapter": "stacks",
    "index": 2,
    "title": {
      "fr": "03 · Parenthèses",
      "en": "03 · Parentheses"
    },
    "code": "pile = []\nfor symbole in \"(()\":\n    if symbole == \"(\": pile.append(symbole)\nprint(len(pile))",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "[]",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:3": {
    "key": "stacks:example:3",
    "kind": "example",
    "chapter": "stacks",
    "index": 3,
    "title": {
      "fr": "04 · Vide",
      "en": "04 · Empty"
    },
    "code": "pile = []\nif pile: print(pile.pop())\nelse: print(\"Rien à annuler\")",
    "status": "ok",
    "output": "Rien à annuler\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "pile": "[]"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:4": {
    "key": "stacks:example:4",
    "kind": "example",
    "chapter": "stacks",
    "index": 4,
    "title": {
      "fr": "05 · Deux retours",
      "en": "05 · Two undos"
    },
    "code": "actions = [\"A\", \"B\", \"C\"]\nfor _ in range(2): print(actions.pop())",
    "status": "ok",
    "output": "C\nB\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "actions": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "actions": "['A', 'B']",
          "_": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "actions": "['A']",
          "_": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "actions": "['A']",
          "_": "1"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:5": {
    "key": "stacks:example:5",
    "kind": "example",
    "chapter": "stacks",
    "index": 5,
    "title": {
      "fr": "06 · Parenthèses",
      "en": "06 · Parentheses"
    },
    "code": "pile = []\nfor symbole in \"(()\":\n    if symbole == \"(\": pile.append(symbole)\nprint(len(pile))",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "[]",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "'('"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:6": {
    "key": "stacks:example:6",
    "kind": "example",
    "chapter": "stacks",
    "index": 6,
    "title": {
      "fr": "07 · ADN inverse",
      "en": "07 · Reverse DNA"
    },
    "code": "pile = list(\"ATGC\")\nretour = \"\"\nwhile pile: retour += pile.pop()\nprint(retour)",
    "status": "ok",
    "output": "CGTA\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['A', 'T', 'G', 'C']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['A', 'T', 'G', 'C']",
          "retour": "''"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['A', 'T', 'G']",
          "retour": "'C'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['A', 'T']",
          "retour": "'CG'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "['A']",
          "retour": "'CGT'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "pile": "[]",
          "retour": "'CGTA'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "pile": "[]",
          "retour": "'CGTA'"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:7": {
    "key": "stacks:example:7",
    "kind": "example",
    "chapter": "stacks",
    "index": 7,
    "title": {
      "fr": "08 · Historique scientifique",
      "en": "08 · Scientific history"
    },
    "code": "historique = [\"filtre\", \"normalisation\", \"arrondi\"]\nprint(\"annuler\", historique.pop())",
    "status": "ok",
    "output": "annuler arrondi\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "historique": "['filtre', 'normalisation', 'arrondi']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "historique": "['filtre', 'normalisation']"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:8": {
    "key": "stacks:example:8",
    "kind": "example",
    "chapter": "stacks",
    "index": 8,
    "title": {
      "fr": "09 · Appels imbriqués",
      "en": "09 · Nested calls"
    },
    "code": "appels = [\"main\", \"analyser\", \"moyenne\"]\nprint(appels[-1])\nappels.pop()",
    "status": "ok",
    "output": "moyenne\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "appels": "['main', 'analyser', 'moyenne']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "appels": "['main', 'analyser', 'moyenne']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "appels": "['main', 'analyser']"
        },
        "return": "None"
      }
    ]
  },
  "stacks:example:9": {
    "key": "stacks:example:9",
    "kind": "example",
    "chapter": "stacks",
    "index": 9,
    "title": {
      "fr": "10 · Expression postfixée",
      "en": "10 · Postfix expression"
    },
    "code": "pile = [3, 4]\nb = pile.pop(); a = pile.pop()\nprint(a + b)",
    "status": "ok",
    "output": "7\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[3, 4]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "[]",
          "b": "4",
          "a": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "pile": "[]",
          "b": "4",
          "a": "3"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:0": {
    "key": "stacks:exercise:0",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 0,
    "title": {
      "fr": "01 · Push",
      "en": "01 · Push"
    },
    "code": "pile = []\nfor action in [\"A\", \"B\", \"C\"]: pile.append(action)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['A']",
          "action": "'A'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['A', 'B']",
          "action": "'B'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['A', 'B', 'C']",
          "action": "'C'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "pile": "['A', 'B', 'C']",
          "action": "'C'"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:1": {
    "key": "stacks:exercise:1",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 1,
    "title": {
      "fr": "02 · Pop",
      "en": "02 · Pop"
    },
    "code": "if pile: resultat = pile.pop()",
    "status": "NameError: name 'pile' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "stacks:exercise:2": {
    "key": "stacks:exercise:2",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 2,
    "title": {
      "fr": "03 · Sommet",
      "en": "03 · Peek"
    },
    "code": "sommet = pile[-1] if pile else None",
    "status": "NameError: name 'pile' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "stacks:exercise:3": {
    "key": "stacks:exercise:3",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 3,
    "title": {
      "fr": "04 · Taille",
      "en": "04 · Size"
    },
    "code": "print(len(pile))",
    "status": "NameError: name 'pile' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "stacks:exercise:4": {
    "key": "stacks:exercise:4",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 4,
    "title": {
      "fr": "05 · Vider",
      "en": "05 · Empty"
    },
    "code": "while pile: pile.pop()",
    "status": "NameError: name 'pile' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "stacks:exercise:5": {
    "key": "stacks:exercise:5",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 5,
    "title": {
      "fr": "06 · Inverser",
      "en": "06 · Reverse"
    },
    "code": "pile = list(\"PY\")\nprint(pile.pop() + pile.pop())",
    "status": "ok",
    "output": "YP\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "['P', 'Y']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "pile": "[]"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:6": {
    "key": "stacks:exercise:6",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 6,
    "title": {
      "fr": "07 · Trace",
      "en": "07 · Trace"
    },
    "code": "pile = []\nfor x in [1,2]:\n    pile.append(x); print(pile)",
    "status": "ok",
    "output": "[1]\n[1, 2]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "[]",
          "x": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[1]",
          "x": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pile": "[1]",
          "x": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[1, 2]",
          "x": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "pile": "[1, 2]",
          "x": "2"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:7": {
    "key": "stacks:exercise:7",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 7,
    "title": {
      "fr": "08 · Dernier",
      "en": "08 · Latest"
    },
    "code": "page = historique[-1] if historique else \"aucune\"",
    "status": "NameError: name 'historique' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "stacks:exercise:8": {
    "key": "stacks:exercise:8",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 8,
    "title": {
      "fr": "09 · Limite",
      "en": "09 · Limit"
    },
    "code": "if len(pile) < 3: pile.append(\"nouveau\")",
    "status": "NameError: name 'pile' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "stacks:exercise:9": {
    "key": "stacks:exercise:9",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 9,
    "title": {
      "fr": "10 · Fonction",
      "en": "10 · Function"
    },
    "code": "def depiler(pile):\n    return pile.pop() if pile else None",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "depiler": "<function depiler at 0x7fcd1dd1d300>"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:10": {
    "key": "stacks:exercise:10",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 10,
    "title": {
      "fr": "11 · Annulation sûre",
      "en": "11 · Safe undo"
    },
    "code": "def annuler(pile):\n    return pile.pop() if pile else None",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "annuler": "<function annuler at 0x7fcd1dd1d080>"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:11": {
    "key": "stacks:exercise:11",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 11,
    "title": {
      "fr": "12 · Historique de deux actions",
      "en": "12 · Two-action history"
    },
    "code": "actions = [\"A\", \"B\", \"C\"]\nfor _ in range(2): print(actions.pop())",
    "status": "ok",
    "output": "C\nB\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "actions": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "actions": "['A', 'B']",
          "_": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "actions": "['A']",
          "_": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "actions": "['A']",
          "_": "1"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:12": {
    "key": "stacks:exercise:12",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 12,
    "title": {
      "fr": "13 · Palindrome",
      "en": "13 · Palindrome"
    },
    "code": "mot = \"kayak\"\npile = list(mot)\nprint(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mot": "'kayak'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'kayak'",
          "pile": "['k', 'a', 'y', 'a', 'k']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "0"
        },
        "return": "'k'"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "1"
        },
        "return": "'a'"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "2"
        },
        "return": "'y'"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "3"
        },
        "return": "'a'"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "4"
        },
        "return": "'k'"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<range_iterator object at 0x7fcd1dd3e880>",
          "_": "4"
        },
        "return": "None"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "mot": "'kayak'",
          "pile": "[]"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:13": {
    "key": "stacks:exercise:13",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 13,
    "title": {
      "fr": "14 · Sommet",
      "en": "14 · Peek"
    },
    "code": "pile = [10, 20, 30]\nprint(pile[-1])",
    "status": "ok",
    "output": "30\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[10, 20, 30]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "pile": "[10, 20, 30]"
        },
        "return": "None"
      }
    ]
  },
  "stacks:exercise:14": {
    "key": "stacks:exercise:14",
    "kind": "exercise",
    "chapter": "stacks",
    "index": 14,
    "title": {
      "fr": "15 · Vider",
      "en": "15 · Empty"
    },
    "code": "pile = [1, 2, 3]\nwhile pile: print(pile.pop())",
    "status": "ok",
    "output": "3\n2\n1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[1, 2, 3]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[1, 2]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pile": "[1]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "pile": "[]"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:0": {
    "key": "queues:example:0",
    "kind": "example",
    "chapter": "queues",
    "index": 0,
    "title": {
      "fr": "01 · Impression",
      "en": "01 · Printing"
    },
    "code": "file = [\"A.pdf\", \"B.pdf\"]\nprint(file.pop(0))",
    "status": "ok",
    "output": "A.pdf\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['A.pdf', 'B.pdf']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file": "['B.pdf']"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:1": {
    "key": "queues:example:1",
    "kind": "example",
    "chapter": "queues",
    "index": 1,
    "title": {
      "fr": "02 · Guichet",
      "en": "02 · Desk"
    },
    "code": "file = [\"Nora\", \"Ali\", \"Maya\"]\nservie = file.pop(0)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['Nora', 'Ali', 'Maya']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file": "['Ali', 'Maya']",
          "servie": "'Nora'"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:2": {
    "key": "queues:example:2",
    "kind": "example",
    "chapter": "queues",
    "index": 2,
    "title": {
      "fr": "03 · Vide",
      "en": "03 · Empty"
    },
    "code": "file = []\nif file: print(file.pop(0))\nelse: print(\"Attente vide\")",
    "status": "ok",
    "output": "Attente vide\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "[]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "file": "[]"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:3": {
    "key": "queues:example:3",
    "kind": "example",
    "chapter": "queues",
    "index": 3,
    "title": {
      "fr": "04 · Compteur",
      "en": "04 · Counter"
    },
    "code": "file = [\"A\", \"B\"]\ncompteur = 0\nwhile file:\n    file.pop(0); compteur += 1\nprint(compteur)",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['A', 'B']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "['A', 'B']",
          "compteur": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "file": "['A', 'B']",
          "compteur": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "['B']",
          "compteur": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "file": "['B']",
          "compteur": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "[]",
          "compteur": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "file": "[]",
          "compteur": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "file": "[]",
          "compteur": "2"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:4": {
    "key": "queues:example:4",
    "kind": "example",
    "chapter": "queues",
    "index": 4,
    "title": {
      "fr": "05 · Enfiler",
      "en": "05 · Enqueue"
    },
    "code": "file = [\"A\", \"B\"]\nfile.append(\"C\")\nprint(file)",
    "status": "ok",
    "output": "['A', 'B', 'C']\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['A', 'B']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "file": "['A', 'B', 'C']"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:5": {
    "key": "queues:example:5",
    "kind": "example",
    "chapter": "queues",
    "index": 5,
    "title": {
      "fr": "06 · Échantillons",
      "en": "06 · Samples"
    },
    "code": "file = [\"S1\", \"S2\", \"S3\"]\nprint(file.pop(0))",
    "status": "ok",
    "output": "S1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['S1', 'S2', 'S3']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file": "['S2', 'S3']"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:6": {
    "key": "queues:example:6",
    "kind": "example",
    "chapter": "queues",
    "index": 6,
    "title": {
      "fr": "07 · Marathon",
      "en": "07 · Marathon"
    },
    "code": "file = [\"dossard 12\", \"dossard 18\"]\nfile.append(\"dossard 24\")\nprint(file.pop(0))",
    "status": "ok",
    "output": "dossard 12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['dossard 12', 'dossard 18']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "['dossard 12', 'dossard 18', 'dossard 24']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "file": "['dossard 18', 'dossard 24']"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:7": {
    "key": "queues:example:7",
    "kind": "example",
    "chapter": "queues",
    "index": 7,
    "title": {
      "fr": "08 · Capteurs",
      "en": "08 · Sensor messages"
    },
    "code": "messages = [\"T=20\", \"T=21\"]\nwhile messages:\n    print(\"analyse\", messages.pop(0))",
    "status": "ok",
    "output": "analyse T=20\nanalyse T=21\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "messages": "['T=20', 'T=21']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "messages": "['T=20', 'T=21']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "messages": "['T=21']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "messages": "['T=21']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "messages": "[]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "messages": "[]"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:8": {
    "key": "queues:example:8",
    "kind": "example",
    "chapter": "queues",
    "index": 8,
    "title": {
      "fr": "09 · Service patient",
      "en": "09 · Patient service"
    },
    "code": "demandes = [\"A\", \"B\", \"C\"]\nprochaine = demandes.pop(0)\nprint(prochaine)",
    "status": "ok",
    "output": "A\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "demandes": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "demandes": "['B', 'C']",
          "prochaine": "'A'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "demandes": "['B', 'C']",
          "prochaine": "'A'"
        },
        "return": "None"
      }
    ]
  },
  "queues:example:9": {
    "key": "queues:example:9",
    "kind": "example",
    "chapter": "queues",
    "index": 9,
    "title": {
      "fr": "10 · Documents",
      "en": "10 · Documents"
    },
    "code": "documents = []\nfor nom in [\"a.pdf\", \"b.pdf\"]: documents.append(nom)\nprint(documents.pop(0))",
    "status": "ok",
    "output": "a.pdf\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "documents": "[]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "documents": "['a.pdf']",
          "nom": "'a.pdf'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "documents": "['a.pdf', 'b.pdf']",
          "nom": "'b.pdf'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "documents": "['a.pdf', 'b.pdf']",
          "nom": "'b.pdf'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "documents": "['b.pdf']",
          "nom": "'b.pdf'"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:0": {
    "key": "queues:exercise:0",
    "kind": "exercise",
    "chapter": "queues",
    "index": 0,
    "title": {
      "fr": "01 · Ajouter",
      "en": "01 · Enqueue"
    },
    "code": "file = []\nfile.append(\"T1\"); file.append(\"T2\")",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file": "['T1', 'T2']"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:1": {
    "key": "queues:exercise:1",
    "kind": "exercise",
    "chapter": "queues",
    "index": 1,
    "title": {
      "fr": "02 · Servir",
      "en": "02 · Serve"
    },
    "code": "ticket = file.pop(0) if file else None",
    "status": "NameError: name 'file' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "queues:exercise:2": {
    "key": "queues:exercise:2",
    "kind": "exercise",
    "chapter": "queues",
    "index": 2,
    "title": {
      "fr": "03 · Boucle",
      "en": "03 · Loop"
    },
    "code": "while file:\n    print(file.pop(0))",
    "status": "NameError: name 'file' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "queues:exercise:3": {
    "key": "queues:exercise:3",
    "kind": "exercise",
    "chapter": "queues",
    "index": 3,
    "title": {
      "fr": "04 · Taille",
      "en": "04 · Size"
    },
    "code": "print(len(file))",
    "status": "NameError: name 'file' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "queues:exercise:4": {
    "key": "queues:exercise:4",
    "kind": "exercise",
    "chapter": "queues",
    "index": 4,
    "title": {
      "fr": "05 · Priorité",
      "en": "05 · Priority"
    },
    "code": "file.insert(0, \"URGENT\")",
    "status": "NameError: name 'file' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "queues:exercise:5": {
    "key": "queues:exercise:5",
    "kind": "exercise",
    "chapter": "queues",
    "index": 5,
    "title": {
      "fr": "06 · Bilan",
      "en": "06 · Summary"
    },
    "code": "servis = 0\nwhile file:\n    file.pop(0); servis += 1",
    "status": "NameError: name 'file' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "servis": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "servis": "0"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:6": {
    "key": "queues:exercise:6",
    "kind": "exercise",
    "chapter": "queues",
    "index": 6,
    "title": {
      "fr": "07 · Fonction",
      "en": "07 · Function"
    },
    "code": "def servir(file):\n    return file.pop(0) if file else None",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "servir": "<function servir at 0x7fcd1dd1ca40>"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:7": {
    "key": "queues:exercise:7",
    "kind": "exercise",
    "chapter": "queues",
    "index": 7,
    "title": {
      "fr": "08 · Rotation",
      "en": "08 · Rotation"
    },
    "code": "file.append(file.pop(0))",
    "status": "NameError: name 'file' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "queues:exercise:8": {
    "key": "queues:exercise:8",
    "kind": "exercise",
    "chapter": "queues",
    "index": 8,
    "title": {
      "fr": "09 · Attente",
      "en": "09 · Waiting"
    },
    "code": "temps = [4, 7, 5]\nprint(sum(temps) / len(temps))",
    "status": "ok",
    "output": "5.333333333333333\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "temps": "[4, 7, 5]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "temps": "[4, 7, 5]"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:9": {
    "key": "queues:exercise:9",
    "kind": "exercise",
    "chapter": "queues",
    "index": 9,
    "title": {
      "fr": "10 · Deux files",
      "en": "10 · Two queues"
    },
    "code": "file1 = [\"A\",\"B\"]; file2 = [\"C\",\"D\"]\nfile = file1 + file2",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file1": "['A', 'B']",
          "file2": "['C', 'D']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file1": "['A', 'B']",
          "file2": "['C', 'D']",
          "file": "['A', 'B', 'C', 'D']"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:10": {
    "key": "queues:exercise:10",
    "kind": "exercise",
    "chapter": "queues",
    "index": 10,
    "title": {
      "fr": "11 · Enfiler",
      "en": "11 · Enqueue"
    },
    "code": "file = [\"T1\"]\nfile.append(\"T2\")",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['T1']"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file": "['T1', 'T2']"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:11": {
    "key": "queues:exercise:11",
    "kind": "exercise",
    "chapter": "queues",
    "index": 11,
    "title": {
      "fr": "12 · Servir cinq",
      "en": "12 · Serve five"
    },
    "code": "file = [1, 2, 3, 4, 5]\nwhile file: print(file.pop(0))",
    "status": "ok",
    "output": "1\n2\n3\n4\n5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[1, 2, 3, 4, 5]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[2, 3, 4, 5]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[3, 4, 5]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[4, 5]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[5]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "file": "[]"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:12": {
    "key": "queues:exercise:12",
    "kind": "exercise",
    "chapter": "queues",
    "index": 12,
    "title": {
      "fr": "13 · Temps d’attente",
      "en": "13 · Waiting time"
    },
    "code": "file = [3, 4, 2]\ntotal = 0\nwhile file: total += file.pop(0)\nprint(total)",
    "status": "ok",
    "output": "9\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "[3, 4, 2]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "[3, 4, 2]",
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "[4, 2]",
          "total": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "[2]",
          "total": "7"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "file": "[]",
          "total": "9"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "file": "[]",
          "total": "9"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:13": {
    "key": "queues:exercise:13",
    "kind": "exercise",
    "chapter": "queues",
    "index": 13,
    "title": {
      "fr": "14 · Priorité simple",
      "en": "14 · Simple priority"
    },
    "code": "file = [\"normal\"]\nfile.insert(0, \"urgent\")\nprint(file.pop(0))",
    "status": "ok",
    "output": "urgent\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['normal']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "['urgent', 'normal']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "file": "['normal']"
        },
        "return": "None"
      }
    ]
  },
  "queues:exercise:14": {
    "key": "queues:exercise:14",
    "kind": "exercise",
    "chapter": "queues",
    "index": 14,
    "title": {
      "fr": "15 · Longueur",
      "en": "15 · Length"
    },
    "code": "file = [\"A\", \"B\", \"C\"]\nfile.pop(0)\nprint(len(file))",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "file": "['A', 'B', 'C']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "file": "['B', 'C']"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "file": "['B', 'C']"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:0": {
    "key": "trees:example:0",
    "kind": "example",
    "chapter": "trees",
    "index": 0,
    "title": {
      "fr": "01 · Racine",
      "en": "01 · Root"
    },
    "code": "arbre = {\"valeur\":\"Projet\", \"enfants\":[]}\nprint(arbre[\"valeur\"])",
    "status": "ok",
    "output": "Projet\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "arbre": "{'valeur': 'Projet', 'enfants': []}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "arbre": "{'valeur': 'Projet', 'enfants': []}"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:1": {
    "key": "trees:example:1",
    "kind": "example",
    "chapter": "trees",
    "index": 1,
    "title": {
      "fr": "02 · Feuilles",
      "en": "02 · Leaves"
    },
    "code": "noeud = {\"valeur\":\"README\", \"enfants\":[]}\nprint(noeud[\"enfants\"] == [])",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "noeud": "{'valeur': 'README', 'enfants': []}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "noeud": "{'valeur': 'README', 'enfants': []}"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:2": {
    "key": "trees:example:2",
    "kind": "example",
    "chapter": "trees",
    "index": 2,
    "title": {
      "fr": "03 · Parcours",
      "en": "03 · Traversal"
    },
    "code": "def visiter(n):\n    print(n[\"valeur\"])\n    for enfant in n[\"enfants\"]: visiter(enfant)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "visiter": "<function visiter at 0x7fcd1de8f240>"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:3": {
    "key": "trees:example:3",
    "kind": "example",
    "chapter": "trees",
    "index": 3,
    "title": {
      "fr": "04 · Hauteur",
      "en": "04 · Height"
    },
    "code": "def hauteur(n):\n    if not n[\"enfants\"]: return 1\n    return 1 + max(hauteur(e) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "hauteur": "<function hauteur at 0x7fcd1de8f380>"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:4": {
    "key": "trees:example:4",
    "kind": "example",
    "chapter": "trees",
    "index": 4,
    "title": {
      "fr": "05 · Recherche",
      "en": "05 · Search"
    },
    "code": "def contient(n, cible):\n    return n[\"valeur\"] == cible or any(contient(e, cible) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "contient": "<function contient at 0x7fcd1de8f560>"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:5": {
    "key": "trees:example:5",
    "kind": "example",
    "chapter": "trees",
    "index": 5,
    "title": {
      "fr": "06 · Classification du vivant",
      "en": "06 · Living classification"
    },
    "code": "arbre = {\"valeur\":\"Animal\", \"enfants\":[{\"valeur\":\"Mammifère\", \"enfants\":[]}] }\nprint(arbre[\"valeur\"])",
    "status": "ok",
    "output": "Animal\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "arbre": "{'valeur': 'Animal', 'enfants': [{'valeur': 'Mammifère', 'enfants': []}]}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "arbre": "{'valeur': 'Animal', 'enfants': [{'valeur': 'Mammifère', 'enfants': []}]}"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:6": {
    "key": "trees:example:6",
    "kind": "example",
    "chapter": "trees",
    "index": 6,
    "title": {
      "fr": "07 · Dossiers",
      "en": "07 · Folders"
    },
    "code": "racine = {\"nom\":\"cours\", \"enfants\":[{\"nom\":\"python\", \"enfants\":[]}, {\"nom\":\"data\", \"enfants\":[]}] }\nprint(len(racine[\"enfants\"]))",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "racine": "{'nom': 'cours', 'enfants': [{'nom': 'python', 'enfants': []}, {'nom': 'data', 'enfants': []}]}"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "racine": "{'nom': 'cours', 'enfants': [{'nom': 'python', 'enfants': []}, {'nom': 'data', 'enfants': []}]}"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:7": {
    "key": "trees:example:7",
    "kind": "example",
    "chapter": "trees",
    "index": 7,
    "title": {
      "fr": "08 · Décision",
      "en": "08 · Decision"
    },
    "code": "def decision(note):\n    return {\"valeur\":\"reussi\" if note >= 10 else \"a_reprendre\", \"enfants\":[]}\nprint(decision(14))",
    "status": "ok",
    "output": "{'valeur': 'reussi', 'enfants': []}\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "decision": "<function decision at 0x7fcd1dd1d8a0>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "note": "14"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "note": "14"
        },
        "return": "{'valeur': 'reussi', 'enfants': []}"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "decision": "<function decision at 0x7fcd1dd1d8a0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:8": {
    "key": "trees:example:8",
    "kind": "example",
    "chapter": "trees",
    "index": 8,
    "title": {
      "fr": "09 · Compter les feuilles",
      "en": "09 · Count leaves"
    },
    "code": "def feuilles(n):\n    if not n[\"enfants\"]: return 1\n    return sum(feuilles(e) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "feuilles": "<function feuilles at 0x7fcd1dd1d940>"
        },
        "return": "None"
      }
    ]
  },
  "trees:example:9": {
    "key": "trees:example:9",
    "kind": "example",
    "chapter": "trees",
    "index": 9,
    "title": {
      "fr": "10 · Parcours profondeur",
      "en": "10 · Depth traversal"
    },
    "code": "def afficher(n, niveau=0):\n    print(\"  \" * niveau + n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher(e, niveau + 1)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "afficher": "<function afficher at 0x7fcd1dd1c5e0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:0": {
    "key": "trees:exercise:0",
    "kind": "exercise",
    "chapter": "trees",
    "index": 0,
    "title": {
      "fr": "01 · Construire",
      "en": "01 · Build"
    },
    "code": "arbre = {\"valeur\":\"A\", \"enfants\":[{\"valeur\":\"B\",\"enfants\":[]},{\"valeur\":\"C\",\"enfants\":[]}]}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "arbre": "{'valeur': 'A', 'enfants': [{'valeur': 'B', 'enfants': []}, {'valeur': 'C', 'enfants': []}]}"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:1": {
    "key": "trees:exercise:1",
    "kind": "exercise",
    "chapter": "trees",
    "index": 1,
    "title": {
      "fr": "02 · Afficher",
      "en": "02 · Display"
    },
    "code": "def afficher(n):\n    print(n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher(e)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "afficher": "<function afficher at 0x7fcd1dd1c900>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:2": {
    "key": "trees:exercise:2",
    "kind": "exercise",
    "chapter": "trees",
    "index": 2,
    "title": {
      "fr": "03 · Compter",
      "en": "03 · Count"
    },
    "code": "def compter(n):\n    return 1 + sum(compter(e) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "compter": "<function compter at 0x7fcd1dd1c2c0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:3": {
    "key": "trees:exercise:3",
    "kind": "exercise",
    "chapter": "trees",
    "index": 3,
    "title": {
      "fr": "04 · Feuille",
      "en": "04 · Leaf"
    },
    "code": "def feuille(n): return len(n[\"enfants\"]) == 0",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "feuille": "<function feuille at 0x7fcd1dd1c360>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:4": {
    "key": "trees:exercise:4",
    "kind": "exercise",
    "chapter": "trees",
    "index": 4,
    "title": {
      "fr": "05 · Hauteur",
      "en": "05 · Height"
    },
    "code": "def h(n):\n    return 1 if not n[\"enfants\"] else 1 + max(h(e) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "h": "<function h at 0x7fcd1dd1c9a0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:5": {
    "key": "trees:exercise:5",
    "kind": "exercise",
    "chapter": "trees",
    "index": 5,
    "title": {
      "fr": "06 · Recherche",
      "en": "06 · Search"
    },
    "code": "trouve = contient(arbre, \"Cours\")",
    "status": "NameError: name 'contient' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "trees:exercise:6": {
    "key": "trees:exercise:6",
    "kind": "exercise",
    "chapter": "trees",
    "index": 6,
    "title": {
      "fr": "07 · Niveaux",
      "en": "07 · Levels"
    },
    "code": "def afficher(n, niveau=0):\n    print(\"  \" * niveau + n[\"valeur\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "afficher": "<function afficher at 0x7fcd1dd1cd60>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:7": {
    "key": "trees:exercise:7",
    "kind": "exercise",
    "chapter": "trees",
    "index": 7,
    "title": {
      "fr": "08 · Feuilles",
      "en": "08 · Leaves"
    },
    "code": "def feuilles(n):\n    if not n[\"enfants\"]: return 1\n    return sum(feuilles(e) for e in n[\"enfants\"] )",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "feuilles": "<function feuilles at 0x7fcd1dd1cea0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:8": {
    "key": "trees:exercise:8",
    "kind": "exercise",
    "chapter": "trees",
    "index": 8,
    "title": {
      "fr": "09 · Filtrer",
      "en": "09 · Filter"
    },
    "code": "def ok(n): return n[\"valeur\"].startswith(\"C\")",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "ok": "<function ok at 0x7fcd1dd1ce00>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:9": {
    "key": "trees:exercise:9",
    "kind": "exercise",
    "chapter": "trees",
    "index": 9,
    "title": {
      "fr": "10 · Arbre vide",
      "en": "10 · Empty tree"
    },
    "code": "def afficher(n):\n    if n is None: return\n    print(n[\"valeur\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "afficher": "<function afficher at 0x7fcd1dd1cfe0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:10": {
    "key": "trees:exercise:10",
    "kind": "exercise",
    "chapter": "trees",
    "index": 10,
    "title": {
      "fr": "11 · Créer un nœud",
      "en": "11 · Create a node"
    },
    "code": "noeud = {\"valeur\": \"racine\", \"enfants\": []}",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "noeud": "{'valeur': 'racine', 'enfants': []}"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:11": {
    "key": "trees:exercise:11",
    "kind": "exercise",
    "chapter": "trees",
    "index": 11,
    "title": {
      "fr": "12 · Compter nœuds",
      "en": "12 · Count nodes"
    },
    "code": "def compter(n):\n    return 1 + sum(compter(e) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "compter": "<function compter at 0x7fcd1dd1d1c0>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:12": {
    "key": "trees:exercise:12",
    "kind": "exercise",
    "chapter": "trees",
    "index": 12,
    "title": {
      "fr": "13 · Chercher valeur",
      "en": "13 · Search value"
    },
    "code": "def contient(n, cible):\n    return n[\"valeur\"] == cible or any(contient(e, cible) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "contient": "<function contient at 0x7fcd1dd1d300>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:13": {
    "key": "trees:exercise:13",
    "kind": "exercise",
    "chapter": "trees",
    "index": 13,
    "title": {
      "fr": "14 · Hauteur",
      "en": "14 · Height"
    },
    "code": "def hauteur(n):\n    if not n[\"enfants\"]: return 0\n    return 1 + max(hauteur(e) for e in n[\"enfants\"])",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "hauteur": "<function hauteur at 0x7fcd1dd1d580>"
        },
        "return": "None"
      }
    ]
  },
  "trees:exercise:14": {
    "key": "trees:exercise:14",
    "kind": "exercise",
    "chapter": "trees",
    "index": 14,
    "title": {
      "fr": "15 · Afficher feuilles",
      "en": "15 · Display leaves"
    },
    "code": "def afficher_feuilles(n):\n    if not n[\"enfants\"]: print(n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher_feuilles(e)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "afficher_feuilles": "<function afficher_feuilles at 0x7fcd1dd1d6c0>"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:0": {
    "key": "statistics:example:0",
    "kind": "example",
    "chapter": "statistics",
    "index": 0,
    "title": {
      "fr": "01 · Moyenne",
      "en": "01 · Mean"
    },
    "code": "notes = [8, 12, 14, 15, 19]\nprint(sum(notes) / len(notes))",
    "status": "ok",
    "output": "13.6\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[8, 12, 14, 15, 19]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "[8, 12, 14, 15, 19]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:1": {
    "key": "statistics:example:1",
    "kind": "example",
    "chapter": "statistics",
    "index": 1,
    "title": {
      "fr": "02 · Médiane",
      "en": "02 · Median"
    },
    "code": "temps = [18, 25, 20, 22, 35]\ntries = sorted(temps)\nprint(tries[len(tries)//2])",
    "status": "ok",
    "output": "22\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "temps": "[18, 25, 20, 22, 35]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "temps": "[18, 25, 20, 22, 35]",
          "tries": "[18, 20, 22, 25, 35]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "temps": "[18, 25, 20, 22, 35]",
          "tries": "[18, 20, 22, 25, 35]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:2": {
    "key": "statistics:example:2",
    "kind": "example",
    "chapter": "statistics",
    "index": 2,
    "title": {
      "fr": "03 · Étendue",
      "en": "03 · Range"
    },
    "code": "mesures = [4, 8, 10]\nprint(max(mesures) - min(mesures))",
    "status": "ok",
    "output": "6\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[4, 8, 10]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "mesures": "[4, 8, 10]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:3": {
    "key": "statistics:example:3",
    "kind": "example",
    "chapter": "statistics",
    "index": 3,
    "title": {
      "fr": "04 · Minimum et maximum",
      "en": "04 · Minimum and maximum"
    },
    "code": "mesures = [12.5, 9.8, 15.2]\nprint(min(mesures), max(mesures))",
    "status": "ok",
    "output": "9.8 15.2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mesures": "[12.5, 9.8, 15.2]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "mesures": "[12.5, 9.8, 15.2]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:4": {
    "key": "statistics:example:4",
    "kind": "example",
    "chapter": "statistics",
    "index": 4,
    "title": {
      "fr": "05 · Valeur extrême",
      "en": "05 · Outlier"
    },
    "code": "notes = [10, 10, 10, 20]\nprint(sum(notes)/len(notes))",
    "status": "ok",
    "output": "12.5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 10, 10, 20]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "[10, 10, 10, 20]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:5": {
    "key": "statistics:example:5",
    "kind": "example",
    "chapter": "statistics",
    "index": 5,
    "title": {
      "fr": "06 · Fréquence cardiaque",
      "en": "06 · Heart rate"
    },
    "code": "fc = [62, 70, 78, 66]\nprint(sum(fc)/len(fc), max(fc)-min(fc))",
    "status": "ok",
    "output": "69.0 16\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "fc": "[62, 70, 78, 66]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "fc": "[62, 70, 78, 66]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:6": {
    "key": "statistics:example:6",
    "kind": "example",
    "chapter": "statistics",
    "index": 6,
    "title": {
      "fr": "07 · Population bactérienne",
      "en": "07 · Bacterial population"
    },
    "code": "pop = [100, 120, 150, 190]\nvariations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]\nprint(variations)",
    "status": "ok",
    "output": "[20, 30, 40]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pop": "[100, 120, 150, 190]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "variations": "[20, 30, 40]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "variations": "[20, 30, 40]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:7": {
    "key": "statistics:example:7",
    "kind": "example",
    "chapter": "statistics",
    "index": 7,
    "title": {
      "fr": "08 · Quartiles simples",
      "en": "08 · Simple quartiles"
    },
    "code": "valeurs = sorted([2, 4, 5, 8, 10, 12])\nprint(valeurs[:3], valeurs[3:])",
    "status": "ok",
    "output": "[2, 4, 5] [8, 10, 12]\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[2, 4, 5, 8, 10, 12]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[2, 4, 5, 8, 10, 12]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:8": {
    "key": "statistics:example:8",
    "kind": "example",
    "chapter": "statistics",
    "index": 8,
    "title": {
      "fr": "09 · Fréquences",
      "en": "09 · Frequencies"
    },
    "code": "notes = [10, 12, 10, 15, 12, 10]\nprint({n: notes.count(n) for n in set(notes)})",
    "status": "ok",
    "output": "{10: 3, 12: 2, 15: 1}\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]",
          "n": "10"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]",
          "n": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]",
          "n": "15"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:example:9": {
    "key": "statistics:example:9",
    "kind": "example",
    "chapter": "statistics",
    "index": 9,
    "title": {
      "fr": "10 · Interprétation",
      "en": "10 · Interpretation"
    },
    "code": "moyenne = 13.4\nobjectif = 12\nprint(\"objectif atteint\" if moyenne >= objectif else \"notion à retravailler\")",
    "status": "ok",
    "output": "objectif atteint\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "moyenne": "13.4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "moyenne": "13.4",
          "objectif": "12"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "moyenne": "13.4",
          "objectif": "12"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:0": {
    "key": "statistics:exercise:0",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 0,
    "title": {
      "fr": "01 · Moyenne",
      "en": "01 · Mean"
    },
    "code": "notes = [10,12,14]\nprint(sum(notes)/len(notes))",
    "status": "ok",
    "output": "12.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 12, 14]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "notes": "[10, 12, 14]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:1": {
    "key": "statistics:exercise:1",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 1,
    "title": {
      "fr": "02 · Médiane paire",
      "en": "02 · Even median"
    },
    "code": "valeurs = sorted([2, 8, 4, 6])\nmediane = (valeurs[1] + valeurs[2]) / 2",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[2, 4, 6, 8]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[2, 4, 6, 8]",
          "mediane": "5.0"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:2": {
    "key": "statistics:exercise:2",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 2,
    "title": {
      "fr": "03 · Étendue",
      "en": "03 · Range"
    },
    "code": "valeurs = [3, 11, 7]\nprint(max(valeurs)-min(valeurs))",
    "status": "ok",
    "output": "8\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[3, 11, 7]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[3, 11, 7]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:3": {
    "key": "statistics:exercise:3",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 3,
    "title": {
      "fr": "04 · Données propres",
      "en": "04 · Clean data"
    },
    "code": "valeurs = [4, None, 6]\npropres = [v for v in valeurs if v is not None]",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, None, 6]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, None, 6]",
          "v": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, None, 6]",
          "v": "None"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, None, 6]",
          "v": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[4, None, 6]",
          "propres": "[4, 6]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:4": {
    "key": "statistics:exercise:4",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 4,
    "title": {
      "fr": "05 · Compter",
      "en": "05 · Count"
    },
    "code": "donnees = [2, 4, 6, 8]\nprint(len(donnees))",
    "status": "ok",
    "output": "4\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "donnees": "[2, 4, 6, 8]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "donnees": "[2, 4, 6, 8]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:5": {
    "key": "statistics:exercise:5",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 5,
    "title": {
      "fr": "06 · Au-dessus",
      "en": "06 · Above mean"
    },
    "code": "m = sum(notes)/len(notes)\nprint([n for n in notes if n > m])",
    "status": "NameError: name 'notes' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "statistics:exercise:6": {
    "key": "statistics:exercise:6",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 6,
    "title": {
      "fr": "07 · Comparer",
      "en": "07 · Compare"
    },
    "code": "a = [10, 12]; b = [14, 16]\nprint(sum(a)/len(a) < sum(b)/len(b))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[10, 12]",
          "b": "[14, 16]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "a": "[10, 12]",
          "b": "[14, 16]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:7": {
    "key": "statistics:exercise:7",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 7,
    "title": {
      "fr": "08 · Distribution",
      "en": "08 · Distribution"
    },
    "code": "notes = [10, 10, 12]\nfrequences = {}\nfor n in notes: frequences[n] = frequences.get(n, 0) + 1",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 10, 12]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{}"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 1}",
          "n": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 2}",
          "n": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 2, 12: 1}",
          "n": "12"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 2, 12: 1}",
          "n": "12"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:8": {
    "key": "statistics:exercise:8",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 8,
    "title": {
      "fr": "09 · Bilan",
      "en": "09 · Report"
    },
    "code": "v = sorted([4, 8, 10, 12, 16])\nprint(sum(v)/len(v), v[len(v)//2], max(v)-min(v))",
    "status": "ok",
    "output": "10.0 10 12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "v": "[4, 8, 10, 12, 16]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "v": "[4, 8, 10, 12, 16]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:9": {
    "key": "statistics:exercise:9",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 9,
    "title": {
      "fr": "10 · Interpréter",
      "en": "10 · Interpret"
    },
    "code": "m = sum(notes)/len(notes)\nprint(\"niveau global satisfaisant\" if m >= 10 else \"à retravailler\")",
    "status": "NameError: name 'notes' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "statistics:exercise:10": {
    "key": "statistics:exercise:10",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 10,
    "title": {
      "fr": "11 · Moyenne pondérée",
      "en": "11 · Weighted mean"
    },
    "code": "notes = [12, 16]\ncoeffs = [1, 2]\nprint(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
    "status": "ok",
    "output": "14.666666666666666\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[12, 16]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[12, 16]",
          "coeffs": "[1, 2]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<zip object at 0x7fcd1dd789c0>"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<zip object at 0x7fcd1dd789c0>",
          "n": "12",
          "c": "1"
        },
        "return": "12"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<zip object at 0x7fcd1dd789c0>",
          "n": "12",
          "c": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<zip object at 0x7fcd1dd789c0>",
          "n": "16",
          "c": "2"
        },
        "return": "32"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          ".0": "<zip object at 0x7fcd1dd789c0>",
          "n": "16",
          "c": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          ".0": "<zip object at 0x7fcd1dd789c0>",
          "n": "16",
          "c": "2"
        },
        "return": "None"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "notes": "[12, 16]",
          "coeffs": "[1, 2]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:11": {
    "key": "statistics:exercise:11",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 11,
    "title": {
      "fr": "12 · Taux d’évolution",
      "en": "12 · Growth rate"
    },
    "code": "ancien, nouveau = 100, 125\nprint((nouveau - ancien) / ancien * 100)",
    "status": "ok",
    "output": "25.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ancien": "100",
          "nouveau": "125"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "ancien": "100",
          "nouveau": "125"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:12": {
    "key": "statistics:exercise:12",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 12,
    "title": {
      "fr": "13 · Médiane impaire",
      "en": "13 · Odd median"
    },
    "code": "valeurs = sorted([9, 2, 7, 4, 5])\nprint(valeurs[len(valeurs)//2])",
    "status": "ok",
    "output": "5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[2, 4, 5, 7, 9]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valeurs": "[2, 4, 5, 7, 9]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:13": {
    "key": "statistics:exercise:13",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 13,
    "title": {
      "fr": "14 · Données manquantes",
      "en": "14 · Missing data"
    },
    "code": "valeurs = [10, None, 14]\npropres = [v for v in valeurs if v is not None]\nprint(sum(propres)/len(propres))",
    "status": "ok",
    "output": "12.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[10, None, 14]"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[10, None, 14]",
          "v": "10"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[10, None, 14]",
          "v": "None"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[10, None, 14]",
          "v": "14"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[10, None, 14]",
          "propres": "[10, 14]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "valeurs": "[10, None, 14]",
          "propres": "[10, 14]"
        },
        "return": "None"
      }
    ]
  },
  "statistics:exercise:14": {
    "key": "statistics:exercise:14",
    "kind": "exercise",
    "chapter": "statistics",
    "index": 14,
    "title": {
      "fr": "15 · Comparaison de groupes",
      "en": "15 · Compare groups"
    },
    "code": "a, b = [12, 14], [15, 16]\nma, mb = sum(a)/len(a), sum(b)/len(b)\nprint(\"B\" if mb > ma else \"A\")",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[12, 14]",
          "b": "[15, 16]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "[12, 14]",
          "b": "[15, 16]",
          "ma": "13.0",
          "mb": "15.5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "a": "[12, 14]",
          "b": "[15, 16]",
          "ma": "13.0",
          "mb": "15.5"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:0": {
    "key": "functions:example:0",
    "kind": "example",
    "chapter": "functions",
    "index": 0,
    "title": {
      "fr": "01 · Saluer",
      "en": "01 · Greet"
    },
    "code": "def saluer(nom):\n    return \"Bonjour \" + nom\nprint(saluer(\"Lina\"))",
    "status": "ok",
    "output": "Bonjour Lina\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "saluer": "<function saluer at 0x7fcd1de8f2e0>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "nom": "'Lina'"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "nom": "'Lina'"
        },
        "return": "'Bonjour Lina'"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "saluer": "<function saluer at 0x7fcd1de8f2e0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:1": {
    "key": "functions:example:1",
    "kind": "example",
    "chapter": "functions",
    "index": 1,
    "title": {
      "fr": "02 · Carré",
      "en": "02 · Square"
    },
    "code": "def carre(n): return n * n\nprint(carre(6))",
    "status": "ok",
    "output": "36\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "carre": "<function carre at 0x7fcd1de8f380>"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "n": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "n": "6"
        },
        "return": "36"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "carre": "<function carre at 0x7fcd1de8f380>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:2": {
    "key": "functions:example:2",
    "kind": "example",
    "chapter": "functions",
    "index": 2,
    "title": {
      "fr": "03 · TVA",
      "en": "03 · VAT"
    },
    "code": "def ttc(prix, taux=0.2): return prix * (1+taux)\nprint(ttc(100))",
    "status": "ok",
    "output": "120.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ttc": "<function ttc at 0x7fcd1de8f1a0>"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "prix": "100",
          "taux": "0.2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "prix": "100",
          "taux": "0.2"
        },
        "return": "120.0"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "ttc": "<function ttc at 0x7fcd1de8f1a0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:3": {
    "key": "functions:example:3",
    "kind": "example",
    "chapter": "functions",
    "index": 3,
    "title": {
      "fr": "04 · Validation",
      "en": "04 · Validation"
    },
    "code": "def valide(note): return 0 <= note <= 20\nprint(valide(18))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valide": "<function valide at 0x7fcd1de8f240>"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "note": "18"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "note": "18"
        },
        "return": "True"
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "valide": "<function valide at 0x7fcd1de8f240>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:4": {
    "key": "functions:example:4",
    "kind": "example",
    "chapter": "functions",
    "index": 4,
    "title": {
      "fr": "05 · Composition",
      "en": "05 · Composition"
    },
    "code": "def c_to_f(c): return c * 9 / 5 + 32\ndef chaud(f): return f >= 77\nprint(chaud(c_to_f(25)))",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "c_to_f": "<function c_to_f at 0x7fcd1de8eca0>"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "c_to_f": "<function c_to_f at 0x7fcd1de8eca0>",
          "chaud": "<function chaud at 0x7fcd1de8eac0>"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "c": "25"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "c": "25"
        },
        "return": "77.0"
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "f": "77.0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "f": "77.0"
        },
        "return": "True"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "c_to_f": "<function c_to_f at 0x7fcd1de8eca0>",
          "chaud": "<function chaud at 0x7fcd1de8eac0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:5": {
    "key": "functions:example:5",
    "kind": "example",
    "chapter": "functions",
    "index": 5,
    "title": {
      "fr": "06 · Aire d’un disque",
      "en": "06 · Circle area"
    },
    "code": "from math import pi\ndef aire_disque(r):\n    return pi * r ** 2\nprint(aire_disque(3))",
    "status": "ok",
    "output": "28.274333882308138\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pi": "3.141592653589793"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "pi": "3.141592653589793",
          "aire_disque": "<function aire_disque at 0x7fcd1dd1e840>"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "r": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "r": "3"
        },
        "return": "28.274333882308138"
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "pi": "3.141592653589793",
          "aire_disque": "<function aire_disque at 0x7fcd1dd1e840>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:6": {
    "key": "functions:example:6",
    "kind": "example",
    "chapter": "functions",
    "index": 6,
    "title": {
      "fr": "07 · Vitesse",
      "en": "07 · Speed"
    },
    "code": "def vitesse(distance_km, temps_h):\n    return distance_km / temps_h\nprint(vitesse(42, 2))",
    "status": "ok",
    "output": "21.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "vitesse": "<function vitesse at 0x7fcd1dd1e8e0>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "distance_km": "42",
          "temps_h": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "distance_km": "42",
          "temps_h": "2"
        },
        "return": "21.0"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "vitesse": "<function vitesse at 0x7fcd1dd1e8e0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:7": {
    "key": "functions:example:7",
    "kind": "example",
    "chapter": "functions",
    "index": 7,
    "title": {
      "fr": "08 · Énergie",
      "en": "08 · Energy"
    },
    "code": "def energie(masse, g, hauteur):\n    return masse * g * hauteur\nprint(energie(2, 9.81, 3))",
    "status": "ok",
    "output": "58.86\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "energie": "<function energie at 0x7fcd1dd1e700>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "return": "58.86"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "energie": "<function energie at 0x7fcd1dd1e700>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:8": {
    "key": "functions:example:8",
    "kind": "example",
    "chapter": "functions",
    "index": 8,
    "title": {
      "fr": "09 · Concentration",
      "en": "09 · Concentration"
    },
    "code": "def concentration(masse, volume):\n    return masse / volume\nprint(concentration(12, 0.5))",
    "status": "ok",
    "output": "24.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "concentration": "<function concentration at 0x7fcd1dd1e200>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "masse": "12",
          "volume": "0.5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "masse": "12",
          "volume": "0.5"
        },
        "return": "24.0"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "concentration": "<function concentration at 0x7fcd1dd1e200>"
        },
        "return": "None"
      }
    ]
  },
  "functions:example:9": {
    "key": "functions:example:9",
    "kind": "example",
    "chapter": "functions",
    "index": 9,
    "title": {
      "fr": "10 · Pression",
      "en": "10 · Pressure"
    },
    "code": "def zone_pression(valeur):\n    if valeur < 90: return \"basse\"\n    if valeur <= 120: return \"habituelle\"\n    return \"élevée\"\nprint(zone_pression(128))",
    "status": "ok",
    "output": "élevée\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "zone_pression": "<function zone_pression at 0x7fcd1dd1e2a0>"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "128"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "128"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeur": "128"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "valeur": "128"
        },
        "return": "'élevée'"
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "zone_pression": "<function zone_pression at 0x7fcd1dd1e2a0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:0": {
    "key": "functions:exercise:0",
    "kind": "exercise",
    "chapter": "functions",
    "index": 0,
    "title": {
      "fr": "01 · Pair",
      "en": "01 · Even"
    },
    "code": "def est_pair(n): return n % 2 == 0",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "est_pair": "<function est_pair at 0x7fcd1dd1e0c0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:1": {
    "key": "functions:exercise:1",
    "kind": "exercise",
    "chapter": "functions",
    "index": 1,
    "title": {
      "fr": "02 · Moyenne",
      "en": "02 · Mean"
    },
    "code": "def moyenne(a,b): return (a+b)/2",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "moyenne": "<function moyenne at 0x7fcd1dd1dd00>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:2": {
    "key": "functions:exercise:2",
    "kind": "exercise",
    "chapter": "functions",
    "index": 2,
    "title": {
      "fr": "03 · Maximum",
      "en": "03 · Maximum"
    },
    "code": "def plus_grand(a,b): return a if a >= b else b",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "plus_grand": "<function plus_grand at 0x7fcd1dd1df80>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:3": {
    "key": "functions:exercise:3",
    "kind": "exercise",
    "chapter": "functions",
    "index": 3,
    "title": {
      "fr": "04 · Défaut",
      "en": "04 · Default"
    },
    "code": "def remise(prix, taux=10): return prix*(1-taux/100)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "remise": "<function remise at 0x7fcd1dd1dc60>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:4": {
    "key": "functions:exercise:4",
    "kind": "exercise",
    "chapter": "functions",
    "index": 4,
    "title": {
      "fr": "05 · Texte",
      "en": "05 · Text"
    },
    "code": "def phrase(nom, ville): return f\"{nom} habite à {ville}.\"",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "phrase": "<function phrase at 0x7fcd1dd1de40>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:5": {
    "key": "functions:exercise:5",
    "kind": "exercise",
    "chapter": "functions",
    "index": 5,
    "title": {
      "fr": "06 · Conversion",
      "en": "06 · Conversion"
    },
    "code": "def secondes(minutes): return minutes*60",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "secondes": "<function secondes at 0x7fcd1dd1d4e0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:6": {
    "key": "functions:exercise:6",
    "kind": "exercise",
    "chapter": "functions",
    "index": 6,
    "title": {
      "fr": "07 · Condition",
      "en": "07 · Condition"
    },
    "code": "def categorie(age):\n    if age < 18: return \"mineur\"\n    return \"majeur\"",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "categorie": "<function categorie at 0x7fcd1dd1d3a0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:7": {
    "key": "functions:exercise:7",
    "kind": "exercise",
    "chapter": "functions",
    "index": 7,
    "title": {
      "fr": "08 · Liste",
      "en": "08 · List"
    },
    "code": "def total(valeurs): return sum(valeurs)",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "total": "<function total at 0x7fcd1dd1d120>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:8": {
    "key": "functions:exercise:8",
    "kind": "exercise",
    "chapter": "functions",
    "index": 8,
    "title": {
      "fr": "09 · Test",
      "en": "09 · Test"
    },
    "code": "assert est_pair(4)\nassert not est_pair(5)",
    "status": "NameError: name 'est_pair' is not defined",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {},
        "return": "None"
      }
    ]
  },
  "functions:exercise:9": {
    "key": "functions:exercise:9",
    "kind": "exercise",
    "chapter": "functions",
    "index": 9,
    "title": {
      "fr": "10 · Doc",
      "en": "10 · Documentation"
    },
    "code": "def carre(n):\n    \"\"\"Renvoie le carré de n.\"\"\"\n    return n*n",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "carre": "<function carre at 0x7fcd1dd1d080>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:10": {
    "key": "functions:exercise:10",
    "kind": "exercise",
    "chapter": "functions",
    "index": 10,
    "title": {
      "fr": "11 · FCM",
      "en": "11 · Max heart rate"
    },
    "code": "def fcm(age):\n    return 220 - age",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "fcm": "<function fcm at 0x7fcd1dd1d1c0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:11": {
    "key": "functions:exercise:11",
    "kind": "exercise",
    "chapter": "functions",
    "index": 11,
    "title": {
      "fr": "12 · Kelvin",
      "en": "12 · Kelvin"
    },
    "code": "def celsius_vers_kelvin(c):\n    return c + 273.15",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "celsius_vers_kelvin": "<function celsius_vers_kelvin at 0x7fcd1dd1ccc0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:12": {
    "key": "functions:exercise:12",
    "kind": "exercise",
    "chapter": "functions",
    "index": 12,
    "title": {
      "fr": "13 · Loi d’Ohm",
      "en": "13 · Ohm law"
    },
    "code": "def intensite(u, r):\n    return u / r",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "intensite": "<function intensite at 0x7fcd1dd1cc20>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:13": {
    "key": "functions:exercise:13",
    "kind": "exercise",
    "chapter": "functions",
    "index": 13,
    "title": {
      "fr": "14 · Parité",
      "en": "14 · Parity"
    },
    "code": "def est_pair(n):\n    return n % 2 == 0",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "est_pair": "<function est_pair at 0x7fcd1dd1cae0>"
        },
        "return": "None"
      }
    ]
  },
  "functions:exercise:14": {
    "key": "functions:exercise:14",
    "kind": "exercise",
    "chapter": "functions",
    "index": 14,
    "title": {
      "fr": "15 · Deux appels",
      "en": "15 · Two calls"
    },
    "code": "def vitesse(d, t): return d / t\nassert vitesse(100, 2) == 50\nassert vitesse(30, 1.5) == 20",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "vitesse": "<function vitesse at 0x7fcd1dd1cb80>"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "d": "100",
          "t": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "d": "100",
          "t": "2"
        },
        "return": "50.0"
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "vitesse": "<function vitesse at 0x7fcd1dd1cb80>"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "d": "30",
          "t": "1.5"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "d": "30",
          "t": "1.5"
        },
        "return": "20.0"
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "vitesse": "<function vitesse at 0x7fcd1dd1cb80>"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:0": {
    "key": "conditions_nested:example:0",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 0,
    "title": {
      "fr": "01 · Température",
      "en": "01 · Temperature"
    },
    "code": "t = 18\nif t < 0:\n    etat = \"solide\"\nelif t < 100:\n    etat = \"liquide\"\nelse:\n    etat = \"gaz\"\nprint(etat)",
    "status": "ok",
    "output": "liquide\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "t": "18"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "t": "18"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "t": "18"
        },
        "return": ""
      },
      {
        "line": 8,
        "event": "line",
        "locals": {
          "t": "18",
          "etat": "'liquide'"
        },
        "return": ""
      },
      {
        "line": 8,
        "event": "return",
        "locals": {
          "t": "18",
          "etat": "'liquide'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:1": {
    "key": "conditions_nested:example:1",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 1,
    "title": {
      "fr": "02 · Âge et autorisation",
      "en": "02 · Age and permission"
    },
    "code": "age = 16\nparent = True\nif age >= 18:\n    autorise = True\nelif age >= 14 and parent:\n    autorise = True\nelse:\n    autorise = False\nprint(autorise)",
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "16"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "age": "16",
          "parent": "True"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "age": "16",
          "parent": "True"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "age": "16",
          "parent": "True"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "line",
        "locals": {
          "age": "16",
          "parent": "True",
          "autorise": "True"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "return",
        "locals": {
          "age": "16",
          "parent": "True",
          "autorise": "True"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:2": {
    "key": "conditions_nested:example:2",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 2,
    "title": {
      "fr": "03 · Note et mention",
      "en": "03 · Grade and distinction"
    },
    "code": "note = 15\nif note >= 10:\n    if note >= 16:\n        mention = \"très bien\"\n    else:\n        mention = \"réussite\"\nelse:\n    mention = \"à revoir\"\nprint(mention)",
    "status": "ok",
    "output": "réussite\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "note": "15"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "line",
        "locals": {
          "note": "15",
          "mention": "'réussite'"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "return",
        "locals": {
          "note": "15",
          "mention": "'réussite'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:3": {
    "key": "conditions_nested:example:3",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 3,
    "title": {
      "fr": "04 · Feu tricolore",
      "en": "04 · Traffic light"
    },
    "code": "couleur = \"orange\"\nurgence = False\nif couleur == \"rouge\":\n    action = \"arrêt\"\nelif couleur == \"orange\":\n    if urgence:\n        action = \"prudence renforcée\"\n    else:\n        action = \"ralentir\"\nelse:\n    action = \"avancer\"\nprint(action)",
    "status": "ok",
    "output": "ralentir\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "couleur": "'orange'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "line",
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "return": ""
      },
      {
        "line": 12,
        "event": "line",
        "locals": {
          "couleur": "'orange'",
          "urgence": "False",
          "action": "'ralentir'"
        },
        "return": ""
      },
      {
        "line": 12,
        "event": "return",
        "locals": {
          "couleur": "'orange'",
          "urgence": "False",
          "action": "'ralentir'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:4": {
    "key": "conditions_nested:example:4",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 4,
    "title": {
      "fr": "05 · Triangle valide",
      "en": "05 · Valid triangle"
    },
    "code": "a, b, c = 3, 4, 5\nif a + b > c and a + c > b and b + c > a:\n    if a*a + b*b == c*c:\n        nature = \"rectangle\"\n    else:\n        nature = \"valide\"\nelse:\n    nature = \"impossible\"\nprint(nature)",
    "status": "ok",
    "output": "rectangle\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "line",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5",
          "nature": "'rectangle'"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "return",
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5",
          "nature": "'rectangle'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:5": {
    "key": "conditions_nested:example:5",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 5,
    "title": {
      "fr": "06 · Batterie",
      "en": "06 · Battery"
    },
    "code": "niveau = 22\nchargeur = True\nif niveau < 20:\n    if chargeur:\n        message = \"charger\"\n    else:\n        message = \"chercher une prise\"\nelse:\n    message = \"continuer\"\nprint(message)",
    "status": "ok",
    "output": "continuer\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "niveau": "22"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "niveau": "22",
          "chargeur": "True"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "line",
        "locals": {
          "niveau": "22",
          "chargeur": "True"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "line",
        "locals": {
          "niveau": "22",
          "chargeur": "True",
          "message": "'continuer'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "return",
        "locals": {
          "niveau": "22",
          "chargeur": "True",
          "message": "'continuer'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:6": {
    "key": "conditions_nested:example:6",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 6,
    "title": {
      "fr": "07 · Vitesse et route",
      "en": "07 · Speed and road"
    },
    "code": "vitesse = 72\nroute = \"ville\"\nif route == \"ville\":\n    if vitesse > 50:\n        message = \"ralentir\"\n    else:\n        message = \"correct\"\nelse:\n    message = \"route à analyser\"\nprint(message)",
    "status": "ok",
    "output": "ralentir\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "vitesse": "72"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "vitesse": "72",
          "route": "'ville'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "vitesse": "72",
          "route": "'ville'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "vitesse": "72",
          "route": "'ville'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "line",
        "locals": {
          "vitesse": "72",
          "route": "'ville'",
          "message": "'ralentir'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "return",
        "locals": {
          "vitesse": "72",
          "route": "'ville'",
          "message": "'ralentir'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:7": {
    "key": "conditions_nested:example:7",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 7,
    "title": {
      "fr": "08 · Accès sécurisé",
      "en": "08 · Secure access"
    },
    "code": "code = \"A7\"\nactif = True\nif actif:\n    if len(code) >= 2:\n        acces = \"autorisé\"\n    else:\n        acces = \"code trop court\"\nelse:\n    acces = \"compte inactif\"\nprint(acces)",
    "status": "ok",
    "output": "autorisé\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "code": "'A7'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "code": "'A7'",
          "actif": "True"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "code": "'A7'",
          "actif": "True"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "code": "'A7'",
          "actif": "True"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "line",
        "locals": {
          "code": "'A7'",
          "actif": "True",
          "acces": "'autorisé'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "return",
        "locals": {
          "code": "'A7'",
          "actif": "True",
          "acces": "'autorisé'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:8": {
    "key": "conditions_nested:example:8",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 8,
    "title": {
      "fr": "09 · Stock et commande",
      "en": "09 · Stock and order"
    },
    "code": "stock = 8\ncommande = 5\nif commande > 0:\n    if commande <= stock:\n        resultat = \"préparer\"\n    else:\n        resultat = \"stock insuffisant\"\nelse:\n    resultat = \"commande invalide\"\nprint(resultat)",
    "status": "ok",
    "output": "préparer\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "stock": "8"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "stock": "8",
          "commande": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "stock": "8",
          "commande": "5"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "stock": "8",
          "commande": "5"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "line",
        "locals": {
          "stock": "8",
          "commande": "5",
          "resultat": "'préparer'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "return",
        "locals": {
          "stock": "8",
          "commande": "5",
          "resultat": "'préparer'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:example:9": {
    "key": "conditions_nested:example:9",
    "kind": "example",
    "chapter": "conditions_nested",
    "index": 9,
    "title": {
      "fr": "10 · Moyenne et présence",
      "en": "10 · Average and attendance"
    },
    "code": "moyenne = 13\npresents = 4\nif presents > 0:\n    if moyenne >= 10:\n        decision = \"validé\"\n    else:\n        decision = \"remédiation\"\nelse:\n    decision = \"aucune décision\"\nprint(decision)",
    "status": "ok",
    "output": "validé\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "moyenne": "13"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "moyenne": "13",
          "presents": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "moyenne": "13",
          "presents": "4"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "moyenne": "13",
          "presents": "4"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "line",
        "locals": {
          "moyenne": "13",
          "presents": "4",
          "decision": "'validé'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "return",
        "locals": {
          "moyenne": "13",
          "presents": "4",
          "decision": "'validé'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:0": {
    "key": "conditions_nested:exercise:0",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 0,
    "title": {
      "fr": "01 · Exercice Condition",
      "en": "01 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:1": {
    "key": "conditions_nested:exercise:1",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 1,
    "title": {
      "fr": "02 · Exercice Seuil",
      "en": "02 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:2": {
    "key": "conditions_nested:exercise:2",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 2,
    "title": {
      "fr": "03 · Exercice Validation",
      "en": "03 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:3": {
    "key": "conditions_nested:exercise:3",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 3,
    "title": {
      "fr": "04 · Exercice Condition",
      "en": "04 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:4": {
    "key": "conditions_nested:exercise:4",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 4,
    "title": {
      "fr": "05 · Exercice Seuil",
      "en": "05 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:5": {
    "key": "conditions_nested:exercise:5",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 5,
    "title": {
      "fr": "06 · Exercice Validation",
      "en": "06 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:6": {
    "key": "conditions_nested:exercise:6",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 6,
    "title": {
      "fr": "07 · Exercice Condition",
      "en": "07 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:7": {
    "key": "conditions_nested:exercise:7",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 7,
    "title": {
      "fr": "08 · Exercice Seuil",
      "en": "08 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:8": {
    "key": "conditions_nested:exercise:8",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 8,
    "title": {
      "fr": "09 · Exercice Validation",
      "en": "09 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:9": {
    "key": "conditions_nested:exercise:9",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 9,
    "title": {
      "fr": "10 · Exercice Condition",
      "en": "10 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:10": {
    "key": "conditions_nested:exercise:10",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 10,
    "title": {
      "fr": "11 · Exercice Seuil",
      "en": "11 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:11": {
    "key": "conditions_nested:exercise:11",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 11,
    "title": {
      "fr": "12 · Exercice Validation",
      "en": "12 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:12": {
    "key": "conditions_nested:exercise:12",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 12,
    "title": {
      "fr": "13 · Exercice Condition",
      "en": "13 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:13": {
    "key": "conditions_nested:exercise:13",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 13,
    "title": {
      "fr": "14 · Exercice Seuil",
      "en": "14 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_nested:exercise:14": {
    "key": "conditions_nested:exercise:14",
    "kind": "exercise",
    "chapter": "conditions_nested",
    "index": 14,
    "title": {
      "fr": "15 · Exercice Validation",
      "en": "15 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:0": {
    "key": "conditions_multiple:example:0",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 0,
    "title": {
      "fr": "01 · Météo",
      "en": "01 · Weather"
    },
    "code": "pluie = False\nvent = 12\ntemperature = 9\nif pluie:\n    conseil = \"imperméable\"\nelif vent > 30:\n    conseil = \"vêtement coupe-vent\"\nelif temperature < 10:\n    conseil = \"veste chaude\"\nelse:\n    conseil = \"tenue légère\"\nprint(conseil)",
    "status": "ok",
    "output": "veste chaude\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "pluie": "False"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "pluie": "False",
          "vent": "12"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "return": ""
      },
      {
        "line": 8,
        "event": "line",
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "return": ""
      },
      {
        "line": 9,
        "event": "line",
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "return": ""
      },
      {
        "line": 12,
        "event": "line",
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9",
          "conseil": "'veste chaude'"
        },
        "return": ""
      },
      {
        "line": 12,
        "event": "return",
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9",
          "conseil": "'veste chaude'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:1": {
    "key": "conditions_multiple:example:1",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 1,
    "title": {
      "fr": "02 · Tarif transport",
      "en": "02 · Transport fare"
    },
    "code": "age = 17\nif age < 6:\n    tarif = 0\nelif age < 18:\n    tarif = 2\nelif age < 65:\n    tarif = 3\nelse:\n    tarif = 1",
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "17"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "age": "17"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "age": "17"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "age": "17",
          "tarif": "2"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:2": {
    "key": "conditions_multiple:example:2",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 2,
    "title": {
      "fr": "03 · Score sportif",
      "en": "03 · Sports score"
    },
    "code": "score = 74\nif score >= 90:\n    niveau = \"élite\"\nelif score >= 75:\n    niveau = \"avancé\"\nelif score >= 50:\n    niveau = \"intermédiaire\"\nelse:\n    niveau = \"débutant\"\nprint(niveau)",
    "status": "ok",
    "output": "intermédiaire\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "score": "74"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "score": "74"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "score": "74"
        },
        "return": ""
      },
      {
        "line": 7,
        "event": "line",
        "locals": {
          "score": "74"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "line",
        "locals": {
          "score": "74",
          "niveau": "'intermédiaire'"
        },
        "return": ""
      },
      {
        "line": 10,
        "event": "return",
        "locals": {
          "score": "74",
          "niveau": "'intermédiaire'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:3": {
    "key": "conditions_multiple:example:3",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 3,
    "title": {
      "fr": "04 · Qualité de l’air",
      "en": "04 · Air quality"
    },
    "code": "indice = 82\nif indice <= 25: niveau = \"bon\"\nelif indice <= 50: niveau = \"modéré\"\nelif indice <= 100: niveau = \"dégradé\"\nelse: niveau = \"critique\"\nprint(niveau)",
    "status": "ok",
    "output": "dégradé\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "indice": "82"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "indice": "82"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "indice": "82"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "indice": "82",
          "niveau": "'dégradé'"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "indice": "82",
          "niveau": "'dégradé'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:4": {
    "key": "conditions_multiple:example:4",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 4,
    "title": {
      "fr": "05 · Calculatrice",
      "en": "05 · Calculator"
    },
    "code": "a, b, op = 12, 4, \"/\"\nif op == \"+\": resultat = a + b\nelif op == \"-\": resultat = a - b\nelif op == \"*\": resultat = a * b\nelif op == \"/\" and b != 0: resultat = a / b\nelse: resultat = \"erreur\"\nprint(resultat)",
    "status": "ok",
    "output": "3.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "return": ""
      },
      {
        "line": 7,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'",
          "resultat": "3.0"
        },
        "return": ""
      },
      {
        "line": 7,
        "event": "return",
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'",
          "resultat": "3.0"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:5": {
    "key": "conditions_multiple:example:5",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 5,
    "title": {
      "fr": "06 · Taille de fichier",
      "en": "06 · File size"
    },
    "code": "ko = 840\nif ko < 100:\n    classe = \"petit\"\nelif ko < 1000:\n    classe = \"moyen\"\nelse:\n    classe = \"grand\"\nprint(classe)",
    "status": "ok",
    "output": "moyen\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ko": "840"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "ko": "840"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "ko": "840"
        },
        "return": ""
      },
      {
        "line": 8,
        "event": "line",
        "locals": {
          "ko": "840",
          "classe": "'moyen'"
        },
        "return": ""
      },
      {
        "line": 8,
        "event": "return",
        "locals": {
          "ko": "840",
          "classe": "'moyen'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:6": {
    "key": "conditions_multiple:example:6",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 6,
    "title": {
      "fr": "07 · Température ressentie",
      "en": "07 · Feels-like temperature"
    },
    "code": "ressentie = 4\nif ressentie < 0: risque = \"gel\"\nelif ressentie < 8: risque = \"froid\"\nelif ressentie < 18: risque = \"frais\"\nelse: risque = \"doux\"\nprint(risque)",
    "status": "ok",
    "output": "froid\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ressentie": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ressentie": "4"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "ressentie": "4",
          "risque": "'froid'"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "ressentie": "4",
          "risque": "'froid'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:7": {
    "key": "conditions_multiple:example:7",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 7,
    "title": {
      "fr": "08 · Énergie restante",
      "en": "08 · Remaining energy"
    },
    "code": "energie = 38\nif energie <= 10: etat = \"critique\"\nelif energie <= 30: etat = \"faible\"\nelif energie <= 60: etat = \"correcte\"\nelse: etat = \"haute\"\nprint(etat)",
    "status": "ok",
    "output": "correcte\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "energie": "38"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "energie": "38"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "energie": "38"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "energie": "38",
          "etat": "'correcte'"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "energie": "38",
          "etat": "'correcte'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:8": {
    "key": "conditions_multiple:example:8",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 8,
    "title": {
      "fr": "09 · Priorité ticket",
      "en": "09 · Ticket priority"
    },
    "code": "attente = 48\nif attente > 120: priorite = \"urgente\"\nelif attente > 60: priorite = \"haute\"\nelif attente > 20: priorite = \"normale\"\nelse: priorite = \"basse\"\nprint(priorite)",
    "status": "ok",
    "output": "normale\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "attente": "48"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "attente": "48"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "attente": "48"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "attente": "48",
          "priorite": "'normale'"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "attente": "48",
          "priorite": "'normale'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:example:9": {
    "key": "conditions_multiple:example:9",
    "kind": "example",
    "chapter": "conditions_multiple",
    "index": 9,
    "title": {
      "fr": "10 · Indice de masse",
      "en": "10 · Mass index"
    },
    "code": "imc = 24.2\nif imc < 18.5: categorie = \"bas\"\nelif imc < 25: categorie = \"référence\"\nelif imc < 30: categorie = \"haut\"\nelse: categorie = \"très haut\"\nprint(categorie)",
    "status": "ok",
    "output": "référence\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "imc": "24.2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "imc": "24.2"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "imc": "24.2",
          "categorie": "'référence'"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "imc": "24.2",
          "categorie": "'référence'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:0": {
    "key": "conditions_multiple:exercise:0",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 0,
    "title": {
      "fr": "01 · Exercice Condition",
      "en": "01 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:1": {
    "key": "conditions_multiple:exercise:1",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 1,
    "title": {
      "fr": "02 · Exercice Seuil",
      "en": "02 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:2": {
    "key": "conditions_multiple:exercise:2",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 2,
    "title": {
      "fr": "03 · Exercice Validation",
      "en": "03 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:3": {
    "key": "conditions_multiple:exercise:3",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 3,
    "title": {
      "fr": "04 · Exercice Condition",
      "en": "04 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:4": {
    "key": "conditions_multiple:exercise:4",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 4,
    "title": {
      "fr": "05 · Exercice Seuil",
      "en": "05 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:5": {
    "key": "conditions_multiple:exercise:5",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 5,
    "title": {
      "fr": "06 · Exercice Validation",
      "en": "06 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:6": {
    "key": "conditions_multiple:exercise:6",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 6,
    "title": {
      "fr": "07 · Exercice Condition",
      "en": "07 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:7": {
    "key": "conditions_multiple:exercise:7",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 7,
    "title": {
      "fr": "08 · Exercice Seuil",
      "en": "08 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:8": {
    "key": "conditions_multiple:exercise:8",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 8,
    "title": {
      "fr": "09 · Exercice Validation",
      "en": "09 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:9": {
    "key": "conditions_multiple:exercise:9",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 9,
    "title": {
      "fr": "10 · Exercice Condition",
      "en": "10 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:10": {
    "key": "conditions_multiple:exercise:10",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 10,
    "title": {
      "fr": "11 · Exercice Seuil",
      "en": "11 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:11": {
    "key": "conditions_multiple:exercise:11",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 11,
    "title": {
      "fr": "12 · Exercice Validation",
      "en": "12 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:12": {
    "key": "conditions_multiple:exercise:12",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 12,
    "title": {
      "fr": "13 · Exercice Condition",
      "en": "13 · Exercise Condition"
    },
    "code": "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)",
    "status": "ok",
    "output": "pair\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "14"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:13": {
    "key": "conditions_multiple:exercise:13",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 13,
    "title": {
      "fr": "14 · Exercice Seuil",
      "en": "14 · Exercise Threshold"
    },
    "code": "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)",
    "status": "ok",
    "output": "B\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "x": "42"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return": "None"
      }
    ]
  },
  "conditions_multiple:exercise:14": {
    "key": "conditions_multiple:exercise:14",
    "kind": "exercise",
    "chapter": "conditions_multiple",
    "index": 14,
    "title": {
      "fr": "15 · Exercice Validation",
      "en": "15 · Exercise Validation"
    },
    "code": "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")",
    "status": "ok",
    "output": "ok\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "x": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "x": "12"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:0": {
    "key": "for_range:example:0",
    "kind": "example",
    "chapter": "for_range",
    "index": 0,
    "title": {
      "fr": "01 · Compter de 0 à 4",
      "en": "01 · Count from 0 to 4"
    },
    "code": "for i in range(5):\n    print(i)",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "4"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:1": {
    "key": "for_range:example:1",
    "kind": "example",
    "chapter": "for_range",
    "index": 1,
    "title": {
      "fr": "02 · Somme des entiers",
      "en": "02 · Sum integers"
    },
    "code": "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)",
    "status": "ok",
    "output": "15\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "0",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:2": {
    "key": "for_range:example:2",
    "kind": "example",
    "chapter": "for_range",
    "index": 2,
    "title": {
      "fr": "03 · Carrés",
      "en": "03 · Squares"
    },
    "code": "for i in range(1, 5):\n    print(i * i)",
    "status": "ok",
    "output": "1\n4\n9\n16\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "4"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:3": {
    "key": "for_range:example:3",
    "kind": "example",
    "chapter": "for_range",
    "index": 3,
    "title": {
      "fr": "04 · Pairs",
      "en": "04 · Even numbers"
    },
    "code": "for i in range(0, 11, 2):\n    print(i)",
    "status": "ok",
    "output": "0\n2\n4\n6\n8\n10\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "10"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:4": {
    "key": "for_range:example:4",
    "kind": "example",
    "chapter": "for_range",
    "index": 4,
    "title": {
      "fr": "05 · Table de multiplication",
      "en": "05 · Multiplication table"
    },
    "code": "n = 7\nfor i in range(1, 6):\n    print(n * i)",
    "status": "ok",
    "output": "7\n14\n21\n28\n35\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "7"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "7",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "n": "7",
          "i": "5"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:5": {
    "key": "for_range:example:5",
    "kind": "example",
    "chapter": "for_range",
    "index": 5,
    "title": {
      "fr": "06 · Compter les voyelles",
      "en": "06 · Count vowels"
    },
    "code": "mot = \"python\"\ncompte = 0\nfor i in range(len(mot)):\n    if mot[i] in \"aeiouy\":\n        compte += 1\nprint(compte)",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "mot": "'python'"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:6": {
    "key": "for_range:example:6",
    "kind": "example",
    "chapter": "for_range",
    "index": 6,
    "title": {
      "fr": "07 · Maximum borné",
      "en": "07 · Bounded maximum"
    },
    "code": "valeurs = [4, 9, 2, 7]\nmaximum = valeurs[0]\nfor i in range(1, len(valeurs)):\n    if valeurs[i] > maximum:\n        maximum = valeurs[i]\nprint(maximum)",
    "status": "ok",
    "output": "9\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "4",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "4",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:7": {
    "key": "for_range:example:7",
    "kind": "example",
    "chapter": "for_range",
    "index": 7,
    "title": {
      "fr": "08 · Grille simple",
      "en": "08 · Simple grid"
    },
    "code": "for ligne in range(2):\n    for colonne in range(3):\n        print(ligne, colonne)",
    "status": "ok",
    "output": "0 0\n0 1\n0 2\n1 0\n1 1\n1 2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "ligne": "0",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:8": {
    "key": "for_range:example:8",
    "kind": "example",
    "chapter": "for_range",
    "index": 8,
    "title": {
      "fr": "09 · Moyenne",
      "en": "09 · Average"
    },
    "code": "notes = [12, 15, 9]\ntotal = 0\nfor i in range(len(notes)):\n    total += notes[i]\nprint(total / len(notes))",
    "status": "ok",
    "output": "12.0\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "12",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "12",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "27",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "27",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "36",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "36",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "36",
          "i": "2"
        },
        "return": "None"
      }
    ]
  },
  "for_range:example:9": {
    "key": "for_range:example:9",
    "kind": "example",
    "chapter": "for_range",
    "index": 9,
    "title": {
      "fr": "10 · Compte à rebours",
      "en": "10 · Countdown"
    },
    "code": "for i in range(5, 0, -1):\n    print(i)",
    "status": "ok",
    "output": "5\n4\n3\n2\n1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "1"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:0": {
    "key": "for_range:exercise:0",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 0,
    "title": {
      "fr": "01 · Exercice Somme",
      "en": "01 · Exercise Sum"
    },
    "code": "total = 0\nfor i in range(1, 11): total += i\nprint(total)",
    "status": "ok",
    "output": "55\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "21",
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "28",
          "i": "7"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "36",
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "45",
          "i": "9"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:1": {
    "key": "for_range:exercise:1",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 1,
    "title": {
      "fr": "02 · Exercice Pairs",
      "en": "02 · Exercise Evens"
    },
    "code": "for i in range(0, 21, 2): print(i)",
    "status": "ok",
    "output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "12"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "14"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "16"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "18"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "20"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "20"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:2": {
    "key": "for_range:exercise:2",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 2,
    "title": {
      "fr": "03 · Exercice Grille",
      "en": "03 · Exercise Grid"
    },
    "code": "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)",
    "status": "ok",
    "output": "12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:3": {
    "key": "for_range:exercise:3",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 3,
    "title": {
      "fr": "04 · Exercice Somme",
      "en": "04 · Exercise Sum"
    },
    "code": "total = 0\nfor i in range(1, 11): total += i\nprint(total)",
    "status": "ok",
    "output": "55\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "21",
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "28",
          "i": "7"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "36",
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "45",
          "i": "9"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:4": {
    "key": "for_range:exercise:4",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 4,
    "title": {
      "fr": "05 · Exercice Pairs",
      "en": "05 · Exercise Evens"
    },
    "code": "for i in range(0, 21, 2): print(i)",
    "status": "ok",
    "output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "12"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "14"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "16"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "18"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "20"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "20"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:5": {
    "key": "for_range:exercise:5",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 5,
    "title": {
      "fr": "06 · Exercice Grille",
      "en": "06 · Exercise Grid"
    },
    "code": "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)",
    "status": "ok",
    "output": "12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:6": {
    "key": "for_range:exercise:6",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 6,
    "title": {
      "fr": "07 · Exercice Somme",
      "en": "07 · Exercise Sum"
    },
    "code": "total = 0\nfor i in range(1, 11): total += i\nprint(total)",
    "status": "ok",
    "output": "55\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "21",
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "28",
          "i": "7"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "36",
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "45",
          "i": "9"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:7": {
    "key": "for_range:exercise:7",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 7,
    "title": {
      "fr": "08 · Exercice Pairs",
      "en": "08 · Exercise Evens"
    },
    "code": "for i in range(0, 21, 2): print(i)",
    "status": "ok",
    "output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "12"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "14"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "16"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "18"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "20"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "20"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:8": {
    "key": "for_range:exercise:8",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 8,
    "title": {
      "fr": "09 · Exercice Grille",
      "en": "09 · Exercise Grid"
    },
    "code": "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)",
    "status": "ok",
    "output": "12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:9": {
    "key": "for_range:exercise:9",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 9,
    "title": {
      "fr": "10 · Exercice Somme",
      "en": "10 · Exercise Sum"
    },
    "code": "total = 0\nfor i in range(1, 11): total += i\nprint(total)",
    "status": "ok",
    "output": "55\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "21",
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "28",
          "i": "7"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "36",
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "45",
          "i": "9"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:10": {
    "key": "for_range:exercise:10",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 10,
    "title": {
      "fr": "11 · Exercice Pairs",
      "en": "11 · Exercise Evens"
    },
    "code": "for i in range(0, 21, 2): print(i)",
    "status": "ok",
    "output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "12"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "14"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "16"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "18"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "20"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "20"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:11": {
    "key": "for_range:exercise:11",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 11,
    "title": {
      "fr": "12 · Exercice Grille",
      "en": "12 · Exercise Grid"
    },
    "code": "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)",
    "status": "ok",
    "output": "12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:12": {
    "key": "for_range:exercise:12",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 12,
    "title": {
      "fr": "13 · Exercice Somme",
      "en": "13 · Exercise Sum"
    },
    "code": "total = 0\nfor i in range(1, 11): total += i\nprint(total)",
    "status": "ok",
    "output": "55\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "15",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "21",
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "28",
          "i": "7"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "36",
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "45",
          "i": "9"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "return",
        "locals": {
          "total": "55",
          "i": "10"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:13": {
    "key": "for_range:exercise:13",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 13,
    "title": {
      "fr": "14 · Exercice Pairs",
      "en": "14 · Exercise Evens"
    },
    "code": "for i in range(0, 21, 2): print(i)",
    "status": "ok",
    "output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "8"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "10"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "12"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "14"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "16"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "18"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "line",
        "locals": {
          "i": "20"
        },
        "return": ""
      },
      {
        "line": 1,
        "event": "return",
        "locals": {
          "i": "20"
        },
        "return": "None"
      }
    ]
  },
  "for_range:exercise:14": {
    "key": "for_range:exercise:14",
    "kind": "exercise",
    "chapter": "for_range",
    "index": 14,
    "title": {
      "fr": "15 · Exercice Grille",
      "en": "15 · Exercise Grid"
    },
    "code": "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)",
    "status": "ok",
    "output": "12\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:0": {
    "key": "while_loop:example:0",
    "kind": "example",
    "chapter": "while_loop",
    "index": 0,
    "title": {
      "fr": "01 · Compter jusqu’à 4",
      "en": "01 · Count to 4"
    },
    "code": "i = 0\nwhile i < 5:\n    print(i)\n    i += 1",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "5"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:1": {
    "key": "while_loop:example:1",
    "kind": "example",
    "chapter": "while_loop",
    "index": 1,
    "title": {
      "fr": "02 · Somme jusqu’à un seuil",
      "en": "02 · Sum to a threshold"
    },
    "code": "total = 0\ni = 1\nwhile total < 10:\n    total += i\n    i += 1\nprint(total)",
    "status": "ok",
    "output": "10\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "0",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "total": "0",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "total": "1",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "total": "3",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "total": "6",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "total": "10",
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "return",
        "locals": {
          "total": "10",
          "i": "5"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:2": {
    "key": "while_loop:example:2",
    "kind": "example",
    "chapter": "while_loop",
    "index": 2,
    "title": {
      "fr": "03 · Saisie contrôlée",
      "en": "03 · Validated input"
    },
    "code": "age = 0\nwhile age < 1 or age > 120:\n    age = 18\nprint(age)",
    "status": "ok",
    "output": "18\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "age": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "age": "18"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "age": "18"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "age": "18"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:3": {
    "key": "while_loop:example:3",
    "kind": "example",
    "chapter": "while_loop",
    "index": 3,
    "title": {
      "fr": "04 · Décompte",
      "en": "04 · Countdown"
    },
    "code": "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1",
    "status": "ok",
    "output": "5\n4\n3\n2\n1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "n": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:4": {
    "key": "while_loop:example:4",
    "kind": "example",
    "chapter": "while_loop",
    "index": 4,
    "title": {
      "fr": "05 · Recherche séquentielle",
      "en": "05 · Sequential search"
    },
    "code": "valeurs = [3, 8, 5, 9]\ni = 0\nwhile i < len(valeurs) and valeurs[i] != 5:\n    i += 1\nprint(i)",
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "return",
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "2"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:5": {
    "key": "while_loop:example:5",
    "kind": "example",
    "chapter": "while_loop",
    "index": 5,
    "title": {
      "fr": "06 · Puissance de deux",
      "en": "06 · Power of two"
    },
    "code": "valeur = 1\nwhile valeur < 100:\n    valeur *= 2\nprint(valeur)",
    "status": "ok",
    "output": "128\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "8"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "8"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "16"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "16"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "32"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "32"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "64"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "valeur": "64"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "valeur": "128"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "valeur": "128"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "valeur": "128"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:6": {
    "key": "while_loop:example:6",
    "kind": "example",
    "chapter": "while_loop",
    "index": 6,
    "title": {
      "fr": "07 · Menu",
      "en": "07 · Menu"
    },
    "code": "choix = \"q\"\nwhile choix != \"q\":\n    choix = \"q\"\nprint(\"fin\")",
    "status": "ok",
    "output": "fin\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "choix": "'q'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "choix": "'q'"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "choix": "'q'"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:7": {
    "key": "while_loop:example:7",
    "kind": "example",
    "chapter": "while_loop",
    "index": 7,
    "title": {
      "fr": "08 · Euclide",
      "en": "08 · Euclid"
    },
    "code": "a, b = 48, 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)",
    "status": "ok",
    "output": "6\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "48",
          "b": "18"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "48",
          "b": "18"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "18",
          "b": "12"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "18",
          "b": "12"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "6"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "12",
          "b": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "6",
          "b": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "6",
          "b": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "a": "6",
          "b": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:8": {
    "key": "while_loop:example:8",
    "kind": "example",
    "chapter": "while_loop",
    "index": 8,
    "title": {
      "fr": "09 · Accumuler des notes",
      "en": "09 · Accumulate grades"
    },
    "code": "notes = [10, 14, 16]\ni = 0\ntotal = 0\nwhile i < len(notes):\n    total += notes[i]\n    i += 1\nprint(total)",
    "status": "ok",
    "output": "40\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0",
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0",
          "total": "0"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0",
          "total": "10"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "1",
          "total": "10"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "1",
          "total": "10"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "1",
          "total": "24"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "2",
          "total": "24"
        },
        "return": ""
      },
      {
        "line": 5,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "2",
          "total": "24"
        },
        "return": ""
      },
      {
        "line": 6,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "2",
          "total": "40"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "3",
          "total": "40"
        },
        "return": ""
      },
      {
        "line": 7,
        "event": "line",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "3",
          "total": "40"
        },
        "return": ""
      },
      {
        "line": 7,
        "event": "return",
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "3",
          "total": "40"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:example:9": {
    "key": "while_loop:example:9",
    "kind": "example",
    "chapter": "while_loop",
    "index": 9,
    "title": {
      "fr": "10 · Fenêtre de temps",
      "en": "10 · Time window"
    },
    "code": "minute = 0\nwhile minute <= 30:\n    minute += 10\nprint(minute)",
    "status": "ok",
    "output": "40\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "minute": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "minute": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "minute": "10"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "minute": "10"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "minute": "20"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "minute": "20"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "minute": "30"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "minute": "30"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "minute": "40"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "minute": "40"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "minute": "40"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:0": {
    "key": "while_loop:exercise:0",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 0,
    "title": {
      "fr": "01 · Exercice Compteur",
      "en": "01 · Exercise Counter"
    },
    "code": "i = 0\nwhile i < 6:\n    print(i)\n    i += 1",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "6"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:1": {
    "key": "while_loop:exercise:1",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 1,
    "title": {
      "fr": "02 · Exercice Sentinelle",
      "en": "02 · Exercise Sentinel"
    },
    "code": "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")",
    "status": "ok",
    "output": "fin\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:2": {
    "key": "while_loop:exercise:2",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 2,
    "title": {
      "fr": "03 · Exercice Recherche",
      "en": "03 · Exercise Search"
    },
    "code": "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:3": {
    "key": "while_loop:exercise:3",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 3,
    "title": {
      "fr": "04 · Exercice Compteur",
      "en": "04 · Exercise Counter"
    },
    "code": "i = 0\nwhile i < 6:\n    print(i)\n    i += 1",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "6"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:4": {
    "key": "while_loop:exercise:4",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 4,
    "title": {
      "fr": "05 · Exercice Sentinelle",
      "en": "05 · Exercise Sentinel"
    },
    "code": "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")",
    "status": "ok",
    "output": "fin\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:5": {
    "key": "while_loop:exercise:5",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 5,
    "title": {
      "fr": "06 · Exercice Recherche",
      "en": "06 · Exercise Search"
    },
    "code": "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:6": {
    "key": "while_loop:exercise:6",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 6,
    "title": {
      "fr": "07 · Exercice Compteur",
      "en": "07 · Exercise Counter"
    },
    "code": "i = 0\nwhile i < 6:\n    print(i)\n    i += 1",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "6"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:7": {
    "key": "while_loop:exercise:7",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 7,
    "title": {
      "fr": "08 · Exercice Sentinelle",
      "en": "08 · Exercise Sentinel"
    },
    "code": "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")",
    "status": "ok",
    "output": "fin\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:8": {
    "key": "while_loop:exercise:8",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 8,
    "title": {
      "fr": "09 · Exercice Recherche",
      "en": "09 · Exercise Search"
    },
    "code": "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:9": {
    "key": "while_loop:exercise:9",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 9,
    "title": {
      "fr": "10 · Exercice Compteur",
      "en": "10 · Exercise Counter"
    },
    "code": "i = 0\nwhile i < 6:\n    print(i)\n    i += 1",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "6"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:10": {
    "key": "while_loop:exercise:10",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 10,
    "title": {
      "fr": "11 · Exercice Sentinelle",
      "en": "11 · Exercise Sentinel"
    },
    "code": "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")",
    "status": "ok",
    "output": "fin\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:11": {
    "key": "while_loop:exercise:11",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 11,
    "title": {
      "fr": "12 · Exercice Recherche",
      "en": "12 · Exercise Search"
    },
    "code": "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:12": {
    "key": "while_loop:exercise:12",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 12,
    "title": {
      "fr": "13 · Exercice Compteur",
      "en": "13 · Exercise Counter"
    },
    "code": "i = 0\nwhile i < 6:\n    print(i)\n    i += 1",
    "status": "ok",
    "output": "0\n1\n2\n3\n4\n5\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "4"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "i": "5"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "i": "6"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "return",
        "locals": {
          "i": "6"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:13": {
    "key": "while_loop:exercise:13",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 13,
    "title": {
      "fr": "14 · Exercice Sentinelle",
      "en": "14 · Exercise Sentinel"
    },
    "code": "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")",
    "status": "ok",
    "output": "fin\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "3"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "2"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "n": "1"
        },
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "n": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "n": "0"
        },
        "return": "None"
      }
    ]
  },
  "while_loop:exercise:14": {
    "key": "while_loop:exercise:14",
    "kind": "exercise",
    "chapter": "while_loop",
    "index": 14,
    "title": {
      "fr": "15 · Exercice Recherche",
      "en": "15 · Exercise Search"
    },
    "code": "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)",
    "status": "ok",
    "output": "1\n",
    "states": [
      {
        "line": 1,
        "event": "line",
        "locals": {},
        "return": ""
      },
      {
        "line": 2,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]"
        },
        "return": ""
      },
      {
        "line": 3,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "line",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": ""
      },
      {
        "line": 4,
        "event": "return",
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return": "None"
      }
    ]
  }
};