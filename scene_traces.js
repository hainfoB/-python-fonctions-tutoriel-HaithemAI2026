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
        "source_line": "prenom = \"Lina\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"Bienvenue\", prenom)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "prenom": "'Lina'"
        },
        "after_locals": {
          "prenom": "'Lina'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Bienvenue Lina\n"
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
        "source_line": "age = int(\"16\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(age + 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "age": "16"
        },
        "after_locals": {
          "age": "16"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "18\n"
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
        "source_line": "a = float(\"12.5\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "b = float(\"7.5\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "12.5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(a + b)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "12.5",
          "b": "7.5"
        },
        "after_locals": {
          "a": "12.5",
          "b": "7.5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "20.0\n"
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
        "source_line": "valeur = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(type(valeur).__name__)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeur": "12"
        },
        "after_locals": {
          "valeur": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "int\n"
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
        "source_line": "texte = \"42\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "nombre = int(texte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "texte": "'42'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(nombre, nombre * 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "texte": "'42'",
          "nombre": "42"
        },
        "after_locals": {
          "texte": "'42'",
          "nombre": "42"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "42 84\n"
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
        "source_line": "distance = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "duree = 2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "distance": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(distance / duree)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "distance": "42",
          "duree": "2"
        },
        "after_locals": {
          "distance": "42",
          "duree": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "21.0\n"
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
        "source_line": "celsius = 25",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "kelvin = celsius + 273.15",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "celsius": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(kelvin)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "celsius": "25",
          "kelvin": "298.15"
        },
        "after_locals": {
          "celsius": "25",
          "kelvin": "298.15"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "298.15\n"
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
        "source_line": "masse = 2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "g = 9.81",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "masse": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "hauteur = 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "masse": "2",
          "g": "9.81"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(masse * g * hauteur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "after_locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "58.86\n"
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
        "source_line": "age = 16",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "fcm = 220 - age",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "age": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(fcm)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "age": "16",
          "fcm": "204"
        },
        "after_locals": {
          "age": "16",
          "fcm": "204"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "204\n"
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
        "source_line": "tension = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "resistance = 6",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "tension": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "intensite = tension / resistance",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "tension": "12",
          "resistance": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(intensite)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "tension": "12",
          "resistance": "6",
          "intensite": "2.0"
        },
        "after_locals": {
          "tension": "12",
          "resistance": "6",
          "intensite": "2.0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2.0\n"
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
        "source_line": "ville = input(\"Ville : \")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"Bienvenue à\", ville)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ville": "'0'"
        },
        "after_locals": {
          "ville": "'0'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Bienvenue à 0\n"
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
        "source_line": "age = int(input(\"Age : \"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(age + 1)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "age": "0"
        },
        "after_locals": {
          "age": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
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
        "source_line": "c = 20",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(c * 9 / 5 + 32)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "c": "20"
        },
        "after_locals": {
          "c": "20"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "68.0\n"
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
        "source_line": "longueur, largeur = 5, 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(longueur * largeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "longueur": "5",
          "largeur": "3"
        },
        "after_locals": {
          "longueur": "5",
          "largeur": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "15\n"
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
        "source_line": "print(17 % 5)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "print(\"Lina\" + \" · Oran\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "Lina · Oran\n"
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
        "source_line": "print(round(12.567, 2))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "12.57\n"
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
        "source_line": "print(12 > 0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "a, b = 2, 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "a, b = b, a",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "2",
          "b": "5"
        },
        "after_locals": {
          "a": "5",
          "b": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "score = 15",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"Score :\", score, \"/ 20\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "score": "15"
        },
        "after_locals": {
          "score": "15"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Score : 15 / 20\n"
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
        "source_line": "volume = 10",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "duree = 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "volume": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(volume / duree)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "volume": "10",
          "duree": "5"
        },
        "after_locals": {
          "volume": "10",
          "duree": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2.0\n"
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
        "source_line": "masse = 250",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "volume = 100",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "masse": "250"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(masse / volume)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "masse": "250",
          "volume": "100"
        },
        "after_locals": {
          "masse": "250",
          "volume": "100"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2.5\n"
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
        "source_line": "kcal_minute = 8",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "duree = 30",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "kcal_minute": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(kcal_minute * duree)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "kcal_minute": "8",
          "duree": "30"
        },
        "after_locals": {
          "kcal_minute": "8",
          "duree": "30"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "240\n"
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
        "source_line": "adn = \"ATGCTT\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(adn.replace(\"T\", \"U\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "adn": "'ATGCTT'"
        },
        "after_locals": {
          "adn": "'ATGCTT'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "AUGCUU\n"
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
        "source_line": "from math import pi, sqrt",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "longueur = 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "g = 9.81",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>",
          "longueur": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(2 * pi * sqrt(longueur / g))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>",
          "longueur": "1",
          "g": "9.81"
        },
        "after_locals": {
          "pi": "3.141592653589793",
          "sqrt": "<built-in function sqrt>",
          "longueur": "1",
          "g": "9.81"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2.0060666807106475\n"
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
        "source_line": "n = 18",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: print(\"pair\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "18"
        },
        "after_locals": {
          "n": "18"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n",
        "branch_taken": false
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
        "source_line": "score = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if score >= 10: print(\"réussi\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "score": "14"
        },
        "after_locals": {
          "score": "14"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "réussi\n",
        "branch_taken": false
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
        "source_line": "t = 28",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if t < 10: cat = \"froid\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "t": "28"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif t < 25: cat = \"doux\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "t": "28"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "else: cat = \"chaud\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "t": "28"
        },
        "after_locals": {
          "t": "28",
          "cat": "'chaud'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "",
        "branch_taken": false
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
        "source_line": "compteur = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(5): compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compteur": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(5): compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compteur": "1",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(5): compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compteur": "2",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(5): compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compteur": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(5): compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "compteur": "4",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(5): compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "compteur": "5",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(compteur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compteur": "5",
          "i": "4"
        },
        "after_locals": {
          "compteur": "5",
          "i": "4"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "5\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n % 2 == 0: total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "0",
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "0",
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n % 2 == 0: total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "0",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "2",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n % 2 == 0: total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "2",
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "2",
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n % 2 == 0: total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "2",
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "6",
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n % 2 == 0: total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "6",
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "6",
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n % 2 == 0: total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "6",
          "n": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 7):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "total": "12",
          "n": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "12",
          "n": "6"
        },
        "after_locals": {
          "total": "12",
          "n": "6"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12\n"
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
        "source_line": "t = -4",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if t < 0: print(\"solide\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "t": "-4"
        },
        "after_locals": {
          "t": "-4"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "solide\n",
        "branch_taken": false
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
        "source_line": "imc = 27.4",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if imc < 18.5: c = \"insuffisant\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "imc": "27.4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif imc < 25: c = \"normal\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "imc": "27.4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif imc < 30: c = \"surpoids\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "imc": "27.4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "print(c)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "imc": "27.4",
          "c": "'surpoids'"
        },
        "after_locals": {
          "imc": "27.4",
          "c": "'surpoids'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "surpoids\n"
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
        "source_line": "a, b, c = 3, 3, 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if a == b == c: print(\"équilatéral\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "3",
          "c": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif a == b or a == c or b == c: print(\"isocèle\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "3",
          "c": "5"
        },
        "after_locals": {
          "a": "3",
          "b": "3",
          "c": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "isocèle\n",
        "branch_taken": false
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
        "source_line": "ph = 8.2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if ph < 7: print(\"acide\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ph": "8.2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif ph == 7: print(\"neutre\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ph": "8.2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "else: print(\"basique\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ph": "8.2"
        },
        "after_locals": {
          "ph": "8.2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "basique\n",
        "branch_taken": false
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
        "source_line": "uv = 7",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if uv <= 2: conseil = \"faible\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "uv": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif uv <= 5: conseil = \"modérée\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "uv": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "else: conseil = \"forte\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "uv": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(conseil)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "uv": "7",
          "conseil": "'forte'"
        },
        "after_locals": {
          "uv": "7",
          "conseil": "'forte'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "forte\n"
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
        "source_line": "n = -2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(n > 0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "-2"
        },
        "after_locals": {
          "n": "-2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "False\n"
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
        "source_line": "note = 11",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"admis\" if note >= 10 else \"refusé\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "note": "11"
        },
        "after_locals": {
          "note": "11"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "admis\n"
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
        "source_line": "n = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(n % 3 == 0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "12"
        },
        "after_locals": {
          "n": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "v = 65",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if v < 50: r=\"lente\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "v": "65"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif v <= 90: r=\"normale\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "v": "65"
        },
        "after_locals": {
          "v": "65",
          "r": "'normale'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "",
        "branch_taken": false
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 6): total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 6): total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 6): total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 6): total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 6): total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in range(1, 6): total += n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "n": "5"
        },
        "after_locals": {
          "total": "15",
          "n": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "for _ in range(3): print(\"go\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for _ in range(3): print(\"go\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "_": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "go\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for _ in range(3): print(\"go\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "_": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "go\ngo\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for _ in range(3): print(\"go\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "_": "2"
        },
        "after_locals": {
          "_": "2"
        },
        "return_value": "",
        "output_so_far": "go\ngo\ngo\n",
        "after_output": "go\ngo\ngo\n"
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
        "source_line": "i = 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i <= 3:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i); i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i <= 3:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i); i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i <= 3:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i); i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i <= 3:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": {
          "i": "4"
        },
        "return_value": "",
        "output_so_far": "1\n2\n3\n",
        "after_output": "1\n2\n3\n"
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
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in [8, 12, 15]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n > 10: compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "compte": "0",
          "n": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in [8, 12, 15]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "0",
          "n": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n > 10: compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "compte": "0",
          "n": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in [8, 12, 15]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "1",
          "n": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n > 10: compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "compte": "1",
          "n": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in [8, 12, 15]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "2",
          "n": "15"
        },
        "after_locals": {
          "compte": "2",
          "n": "15"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "maximum = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for n in [4, 9, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "maximum": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n > maximum: maximum = n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "maximum": "0",
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in [4, 9, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "maximum": "4",
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n > maximum: maximum = n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "maximum": "4",
          "n": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in [4, 9, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "maximum": "9",
          "n": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if n > maximum: maximum = n",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "maximum": "9",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for n in [4, 9, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "maximum": "9",
          "n": "2"
        },
        "after_locals": {
          "maximum": "9",
          "n": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "for n in [1, 4, 7]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    if n == 4: break",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 1,
        "source_line": "for n in [1, 4, 7]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    if n == 4: break",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "4"
        },
        "after_locals": {
          "n": "4"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "",
        "branch_taken": false
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
        "source_line": "densite = 0.8",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"flotte\" if densite < 1 else \"coule\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "densite": "0.8"
        },
        "after_locals": {
          "densite": "0.8"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "flotte\n"
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
        "source_line": "annee = 2024",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "annee": "2024"
        },
        "after_locals": {
          "annee": "2024"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "vergence = -2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"convergente\" if vergence > 0 else \"divergente\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "vergence": "-2"
        },
        "after_locals": {
          "vergence": "-2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "divergente\n"
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
        "source_line": "systolique = 145",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if systolique > 140: print(\"à surveiller\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "systolique": "145"
        },
        "after_locals": {
          "systolique": "145"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "à surveiller\n",
        "branch_taken": false
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
        "source_line": "a, b, c = 3, 4, 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(a*a + b*b == c*c)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "after_locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "ventes = [12, 8, 15]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "total = sum(ventes)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "ventes": "[12, 8, 15]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ventes": "[12, 8, 15]",
          "total": "35"
        },
        "after_locals": {
          "ventes": "[12, 8, 15]",
          "total": "35"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "35\n"
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
        "source_line": "temperatures = [18, 22, 19, 25]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "maximum = temperatures[0]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "temperatures": "[18, 22, 19, 25]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for t in temperatures:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if t > maximum: maximum = t",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18",
          "t": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for t in temperatures:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18",
          "t": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if t > maximum: maximum = t",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "18",
          "t": "22"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for t in temperatures:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "22"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if t > maximum: maximum = t",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "19"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for t in temperatures:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "19"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if t > maximum: maximum = t",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "22",
          "t": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for t in temperatures:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "25",
          "t": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(maximum)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "25",
          "t": "25"
        },
        "after_locals": {
          "temperatures": "[18, 22, 19, 25]",
          "maximum": "25",
          "t": "25"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "25\n"
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
        "source_line": "notes = [8, 12, 15, 9]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "reussites = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 15, 9]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for note in notes:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if note >= 10: reussites.append(note)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]",
          "note": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for note in notes:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]",
          "note": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if note >= 10: reussites.append(note)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[]",
          "note": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for note in notes:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12]",
          "note": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if note >= 10: reussites.append(note)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12]",
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for note in notes:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if note >= 10: reussites.append(note)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for note in notes:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(reussites)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "after_locals": {
          "notes": "[8, 12, 15, 9]",
          "reussites": "[12, 15]",
          "note": "9"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[12, 15]\n"
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
        "source_line": "etapes = [\"A\", \"B\", \"C\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(etapes[::-1])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "etapes": "['A', 'B', 'C']"
        },
        "after_locals": {
          "etapes": "['A', 'B', 'C']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "['C', 'B', 'A']\n"
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
        "source_line": "notes = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if notes:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "notes": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "    print(\"Aucune note\")",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[]"
        },
        "after_locals": {
          "notes": "[]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Aucune note\n"
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
        "source_line": "distances = [12, 18, 15, 21]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for d in distances: print(d / 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "distances": "[12, 18, 15, 21]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for d in distances: print(d / 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "6.0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for d in distances: print(d / 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "6.0\n9.0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for d in distances: print(d / 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "6.0\n9.0\n7.5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for d in distances: print(d / 2)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "21"
        },
        "after_locals": {
          "distances": "[12, 18, 15, 21]",
          "d": "21"
        },
        "return_value": "",
        "output_so_far": "6.0\n9.0\n7.5\n10.5\n",
        "after_output": "6.0\n9.0\n7.5\n10.5\n"
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
        "source_line": "mesures = [18, 22, 25, 19]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "chaudes = [t for t in mesures if t > 20]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mesures": "[18, 22, 25, 19]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "chaudes = [t for t in mesures if t > 20]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "chaudes = [t for t in mesures if t > 20]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "22"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "chaudes = [t for t in mesures if t > 20]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "chaudes = [t for t in mesures if t > 20]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "t": "19"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(chaudes)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[18, 22, 25, 19]",
          "chaudes": "[22, 25]"
        },
        "after_locals": {
          "mesures": "[18, 22, 25, 19]",
          "chaudes": "[22, 25]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[22, 25]\n"
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
        "source_line": "energies = [3.2, 4.1, 2.7]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(energies))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "energies": "[3.2, 4.1, 2.7]"
        },
        "after_locals": {
          "energies": "[3.2, 4.1, 2.7]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "10.0\n"
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
        "source_line": "temperatures = [19, 24, 22, 27]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(temperatures.index(max(temperatures)))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "temperatures": "[19, 24, 22, 27]"
        },
        "after_locals": {
          "temperatures": "[19, 24, 22, 27]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "3\n"
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
        "source_line": "mesures = [10, 20, 30]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "mini, maxi = min(mesures), max(mesures)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mesures": "[10, 20, 30]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print([(x-mini)/(maxi-mini) for x in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print([(x-mini)/(maxi-mini) for x in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30",
          "x": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print([(x-mini)/(maxi-mini) for x in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30",
          "x": "20"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print([(x-mini)/(maxi-mini) for x in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30",
          "x": "30"
        },
        "after_locals": {
          "mesures": "[10, 20, 30]",
          "mini": "10",
          "maxi": "30"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[0.0, 0.5, 1.0]\n"
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
        "source_line": "valeurs = [2, 5, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[2, 5, 8]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "5"
        },
        "after_locals": null,
        "return_value": "False",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "8"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(n % 2 == 0 for n in valeurs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda21a50>",
          "n": "8"
        },
        "after_locals": {
          "valeurs": "[2, 5, 8]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "valeurs = [7, 3, 9]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "minimum = valeurs[0]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[7, 3, 9]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for v in valeurs:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if v < minimum: minimum = v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7",
          "v": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for v in valeurs:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7",
          "v": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if v < minimum: minimum = v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "7",
          "v": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for v in valeurs:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if v < minimum: minimum = v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for v in valeurs:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(minimum)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "after_locals": {
          "valeurs": "[7, 3, 9]",
          "minimum": "3",
          "v": "9"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "3\n"
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
    "status": "ok",
    "output": "0 4\n1 7\n2 2\n3 9\n",
    "states": [
      {
        "line": 1,
        "source_line": "for i in range(len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i, valeurs[i])",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i, valeurs[i])",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 4\n1 7\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i, valeurs[i])",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 4\n1 7\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 4\n1 7\n2 2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i, valeurs[i])",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 4\n1 7\n2 2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "3"
        },
        "after_locals": {
          "i": "3"
        },
        "return_value": "",
        "output_so_far": "0 4\n1 7\n2 2\n3 9\n",
        "after_output": "0 4\n1 7\n2 2\n3 9\n"
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
        "source_line": "valeurs = [1, 4, 7]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "modifiees = [v + 2 for v in valeurs]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[1, 4, 7]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "modifiees = [v + 2 for v in valeurs]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[1, 4, 7]",
          "v": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "modifiees = [v + 2 for v in valeurs]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[1, 4, 7]",
          "v": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "modifiees = [v + 2 for v in valeurs]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[1, 4, 7]",
          "v": "7"
        },
        "after_locals": {
          "valeurs": "[1, 4, 7]",
          "modifiees": "[3, 6, 9]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "sortie = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for v in [2, 2, 3, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "sortie": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v not in sortie: sortie.append(v)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "sortie": "[]",
          "v": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [2, 2, 3, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "sortie": "[2]",
          "v": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v not in sortie: sortie.append(v)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "sortie": "[2]",
          "v": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [2, 2, 3, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "sortie": "[2]",
          "v": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v not in sortie: sortie.append(v)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "sortie": "[2]",
          "v": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [2, 2, 3, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "sortie": "[2, 3]",
          "v": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v not in sortie: sortie.append(v)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "sortie": "[2, 3]",
          "v": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [2, 2, 3, 2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "sortie": "[2, 3]",
          "v": "2"
        },
        "after_locals": {
          "sortie": "[2, 3]",
          "v": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "valeurs = [\"A\", \"B\", \"C\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "valeurs = valeurs[1:] + valeurs[:1]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "['A', 'B', 'C']"
        },
        "after_locals": {
          "valeurs": "['B', 'C', 'A']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for v in [-2, 4, -1, 6]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v > 0: total += v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "0",
          "v": "-2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [-2, 4, -1, 6]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "0",
          "v": "-2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v > 0: total += v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "0",
          "v": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [-2, 4, -1, 6]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "4",
          "v": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v > 0: total += v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "4",
          "v": "-1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [-2, 4, -1, 6]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "4",
          "v": "-1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v > 0: total += v",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "total": "4",
          "v": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for v in [-2, 4, -1, 6]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "v": "6"
        },
        "after_locals": {
          "total": "10",
          "v": "6"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "valeurs = [4, 9, 2]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i, v in enumerate(valeurs):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "valeurs": "[4, 9, 2]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v == 9: print(i); break",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "0",
          "v": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for i, v in enumerate(valeurs):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "0",
          "v": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if v == 9: print(i); break",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2]",
          "i": "1",
          "v": "9"
        },
        "after_locals": {
          "valeurs": "[4, 9, 2]",
          "i": "1",
          "v": "9"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n",
        "branch_taken": false
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
        "source_line": "temperatures = [23, 18, 25]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sorted(temperatures))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "temperatures": "[23, 18, 25]"
        },
        "after_locals": {
          "temperatures": "[23, 18, 25]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[18, 23, 25]\n"
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
        "source_line": "valeurs = [4, 10, 7]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(max(valeurs) - min(valeurs))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 10, 7]"
        },
        "after_locals": {
          "valeurs": "[4, 10, 7]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "6\n"
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
        "source_line": "vitesses = [8, 10, 12, 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(vitesses) / len(vitesses))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "vitesses": "[8, 10, 12, 10]"
        },
        "after_locals": {
          "vitesses": "[8, 10, 12, 10]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "10.0\n"
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
        "source_line": "temperatures = [-2, 4, -1, 3]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "temperatures": "[-2, 4, -1, 3]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "-2"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "-2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "-2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "4"
        },
        "after_locals": null,
        "return_value": "False",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "-1"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "-1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "-1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "3"
        },
        "after_locals": null,
        "return_value": "False",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(t < 0 for t in temperatures))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda23eb0>",
          "t": "3"
        },
        "after_locals": {
          "temperatures": "[-2, 4, -1, 3]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "distances = [2, 3, 4]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "cumul = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "distances": "[2, 3, 4]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for d in distances:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    cumul += d",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "0",
          "d": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for d in distances:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "2",
          "d": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    cumul += d",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "2",
          "d": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for d in distances:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "5",
          "d": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    cumul += d",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "5",
          "d": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for d in distances:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "9",
          "d": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(cumul)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "distances": "[2, 3, 4]",
          "cumul": "9",
          "d": "4"
        },
        "after_locals": {
          "distances": "[2, 3, 4]",
          "cumul": "9",
          "d": "4"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "9\n"
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
        "source_line": "courants = [2.1, 3.4, 2.8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(courants.index(max(courants)))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "courants": "[2.1, 3.4, 2.8]"
        },
        "after_locals": {
          "courants": "[2.1, 3.4, 2.8]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
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
        "source_line": "longueurs = [30, 45, 120]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([x / 100 for x in longueurs])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "longueurs": "[30, 45, 120]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([x / 100 for x in longueurs])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "longueurs": "[30, 45, 120]",
          "x": "30"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([x / 100 for x in longueurs])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "longueurs": "[30, 45, 120]",
          "x": "45"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([x / 100 for x in longueurs])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "longueurs": "[30, 45, 120]",
          "x": "120"
        },
        "after_locals": {
          "longueurs": "[30, 45, 120]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[0.3, 0.45, 1.2]\n"
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
        "source_line": "profil = {\"nom\": \"Lina\", \"ville\": \"Oran\", \"age\": 16}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(profil[\"ville\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "profil": "{'nom': 'Lina', 'ville': 'Oran', 'age': 16}"
        },
        "after_locals": {
          "profil": "{'nom': 'Lina', 'ville': 'Oran', 'age': 16}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Oran\n"
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
        "source_line": "stock = {\"clavier\": 8, \"souris\": 12}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "stock[\"clavier\"] -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "stock": "{'clavier': 8, 'souris': 12}"
        },
        "after_locals": {
          "stock": "{'clavier': 7, 'souris': 12}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "contact = {\"nom\": \"Ali\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(contact.get(\"telephone\", \"Absent\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "contact": "{'nom': 'Ali'}"
        },
        "after_locals": {
          "contact": "{'nom': 'Ali'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Absent\n"
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
        "source_line": "notes = {\"maths\": 15, \"python\": 17}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for matiere, note in notes.items():",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "notes": "{'maths': 15, 'python': 17}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(matiere, note)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'maths'",
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for matiere, note in notes.items():",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'maths'",
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "maths 15\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(matiere, note)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'python'",
          "note": "17"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "maths 15\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for matiere, note in notes.items():",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'python'",
          "note": "17"
        },
        "after_locals": {
          "notes": "{'maths': 15, 'python': 17}",
          "matiere": "'python'",
          "note": "17"
        },
        "return_value": "",
        "output_so_far": "maths 15\npython 17\n",
        "after_output": "maths 15\npython 17\n"
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
        "source_line": "stock = {\"livres\": 4, \"cahiers\": 9}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(stock.values()))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "stock": "{'livres': 4, 'cahiers': 9}"
        },
        "after_locals": {
          "stock": "{'livres': 4, 'cahiers': 9}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "13\n"
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
        "source_line": "mesure = {\"valeur\": 21.4, \"unite\": \"°C\", \"capteur\": \"S1\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(mesure[\"valeur\"], mesure[\"unite\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesure": "{'valeur': 21.4, 'unite': '°C', 'capteur': 'S1'}"
        },
        "after_locals": {
          "mesure": "{'valeur': 21.4, 'unite': '°C', 'capteur': 'S1'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "21.4 °C\n"
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
        "source_line": "fc = {\"repos\": 65, \"course\": 154}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(fc.get(\"natation\", \"non mesurée\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "fc": "{'repos': 65, 'course': 154}"
        },
        "after_locals": {
          "fc": "{'repos': 65, 'course': 154}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "non mesurée\n"
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
        "source_line": "proportions = {\"eau\": 70, \"sel\": 5, \"solvant\": 25}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(proportions.values()))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "proportions": "{'eau': 70, 'sel': 5, 'solvant': 25}"
        },
        "after_locals": {
          "proportions": "{'eau': 70, 'sel': 5, 'solvant': 25}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "100\n"
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
        "source_line": "compte = {}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for etat in [\"solide\", \"liquide\", \"liquide\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "{}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    compte[etat] = compte.get(etat, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "compte": "{}",
          "etat": "'solide'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for etat in [\"solide\", \"liquide\", \"liquide\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "{'solide': 1}",
          "etat": "'solide'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    compte[etat] = compte.get(etat, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "compte": "{'solide': 1}",
          "etat": "'liquide'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for etat in [\"solide\", \"liquide\", \"liquide\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "{'solide': 1, 'liquide': 1}",
          "etat": "'liquide'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    compte[etat] = compte.get(etat, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "compte": "{'solide': 1, 'liquide': 1}",
          "etat": "'liquide'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for etat in [\"solide\", \"liquide\", \"liquide\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "{'solide': 1, 'liquide': 2}",
          "etat": "'liquide'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compte": "{'solide': 1, 'liquide': 2}",
          "etat": "'liquide'"
        },
        "after_locals": {
          "compte": "{'solide': 1, 'liquide': 2}",
          "etat": "'liquide'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "{'solide': 1, 'liquide': 2}\n"
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
        "source_line": "protocole = {\"duree\": 60, \"temperature\": 25, \"agitation\": True}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in protocole.items(): print(cle, valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in protocole.items(): print(cle, valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'duree'",
          "valeur": "60"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "duree 60\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in protocole.items(): print(cle, valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'temperature'",
          "valeur": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "duree 60\ntemperature 25\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in protocole.items(): print(cle, valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'agitation'",
          "valeur": "True"
        },
        "after_locals": {
          "protocole": "{'duree': 60, 'temperature': 25, 'agitation': True}",
          "cle": "'agitation'",
          "valeur": "True"
        },
        "return_value": "",
        "output_so_far": "duree 60\ntemperature 25\nagitation True\n",
        "after_output": "duree 60\ntemperature 25\nagitation True\n"
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
        "source_line": "profil = {\"nom\": \"Sara\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "profil[\"email\"] = \"sara@mail.test\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "profil": "{'nom': 'Sara'}"
        },
        "after_locals": {
          "profil": "{'nom': 'Sara', 'email': 'sara@mail.test'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "donnees = {\"nom\": \"Ali\", \"temp\": True}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "del donnees[\"temp\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "donnees": "{'nom': 'Ali', 'temp': True}"
        },
        "after_locals": {
          "donnees": "{'nom': 'Ali'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "votes = {}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"A\", \"B\", \"A\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "votes": "{}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    votes[nom] = votes.get(nom, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "votes": "{}",
          "nom": "'A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"A\", \"B\", \"A\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "votes": "{'A': 1}",
          "nom": "'A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    votes[nom] = votes.get(nom, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "votes": "{'A': 1}",
          "nom": "'B'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"A\", \"B\", \"A\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "votes": "{'A': 1, 'B': 1}",
          "nom": "'B'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    votes[nom] = votes.get(nom, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "votes": "{'A': 1, 'B': 1}",
          "nom": "'A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"A\", \"B\", \"A\"]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "votes": "{'A': 2, 'B': 1}",
          "nom": "'A'"
        },
        "after_locals": {
          "votes": "{'A': 2, 'B': 1}",
          "nom": "'A'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "stock = {\"A\": 2, \"B\": 8}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom, quantite in stock.items():",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "stock": "{'A': 2, 'B': 8}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if quantite < 5: print(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'A'",
          "quantite": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for nom, quantite in stock.items():",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'A'",
          "quantite": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "A\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if quantite < 5: print(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'B'",
          "quantite": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "A\n",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for nom, quantite in stock.items():",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'B'",
          "quantite": "8"
        },
        "after_locals": {
          "stock": "{'A': 2, 'B': 8}",
          "nom": "'B'",
          "quantite": "8"
        },
        "return_value": "",
        "output_so_far": "A\n",
        "after_output": "A\n"
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
        "source_line": "source = {\"nom\": \"Lina\", \"age\": 16, \"secret\": 1}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "cible = {k: source[k] for k in [\"nom\", \"age\"]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "cible = {k: source[k] for k in [\"nom\", \"age\"]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}",
          "k": "'nom'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "cible = {k: source[k] for k in [\"nom\", \"age\"]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}",
          "k": "'age'"
        },
        "after_locals": {
          "source": "{'nom': 'Lina', 'age': 16, 'secret': 1}",
          "cible": "{'nom': 'Lina', 'age': 16}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "codes = {\"Oran\": 31, \"Alger\": 16}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "inverse = {code: ville for ville, code in codes.items()}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "inverse = {code: ville for ville, code in codes.items()}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}",
          "ville": "'Oran'",
          "code": "31"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "inverse = {code: ville for ville, code in codes.items()}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "codes": "{'Oran': 31, 'Alger': 16}",
          "ville": "'Alger'",
          "code": "16"
        },
        "after_locals": {
          "codes": "{'Oran': 31, 'Alger': 16}",
          "inverse": "{31: 'Oran', 16: 'Alger'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "notes = {\"A\": 12, \"B\": 16}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(notes.values()) / len(notes))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "{'A': 12, 'B': 16}"
        },
        "after_locals": {
          "notes": "{'A': 12, 'B': 16}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "14.0\n"
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
        "source_line": "profil = {\"nom\": \"Maya\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(profil.get(\"ville\", \"inconnue\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "profil": "{'nom': 'Maya'}"
        },
        "after_locals": {
          "profil": "{'nom': 'Maya'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "inconnue\n"
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
        "source_line": "classes = {}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom, classe in [(\"A\", \"2A\"), (\"B\", \"2A\")]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "classes": "{}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    classes.setdefault(classe, []).append(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "classes": "{}",
          "nom": "'A'",
          "classe": "'2A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom, classe in [(\"A\", \"2A\"), (\"B\", \"2A\")]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "classes": "{'2A': ['A']}",
          "nom": "'A'",
          "classe": "'2A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    classes.setdefault(classe, []).append(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "classes": "{'2A': ['A']}",
          "nom": "'B'",
          "classe": "'2A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom, classe in [(\"A\", \"2A\"), (\"B\", \"2A\")]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "classes": "{'2A': ['A', 'B']}",
          "nom": "'B'",
          "classe": "'2A'"
        },
        "after_locals": {
          "classes": "{'2A': ['A', 'B']}",
          "nom": "'B'",
          "classe": "'2A'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "fiche = {\"id\": \"S1\", \"nom\": \"Lina\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in fiche.items(): print(cle, \":\", valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in fiche.items(): print(cle, \":\", valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}",
          "cle": "'id'",
          "valeur": "'S1'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "id : S1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for cle, valeur in fiche.items(): print(cle, \":\", valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}",
          "cle": "'nom'",
          "valeur": "'Lina'"
        },
        "after_locals": {
          "fiche": "{'id': 'S1', 'nom': 'Lina'}",
          "cle": "'nom'",
          "valeur": "'Lina'"
        },
        "return_value": "",
        "output_so_far": "id : S1\nnom : Lina\n",
        "after_output": "id : S1\nnom : Lina\n"
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
        "source_line": "scores = {\"Lina\": 16, \"Ali\": 12}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(scores[\"Lina\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "scores": "{'Lina': 16, 'Ali': 12}"
        },
        "after_locals": {
          "scores": "{'Lina': 16, 'Ali': 12}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "16\n"
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
        "source_line": "stock = {\"cahier\": 12}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if \"cahier\" in stock: stock[\"cahier\"] -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "stock": "{'cahier': 12}"
        },
        "after_locals": {
          "stock": "{'cahier': 11}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "",
        "branch_taken": false
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
        "source_line": "notes = {\"maths\": 14, \"python\": 18}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(notes.values()) / len(notes))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "{'maths': 14, 'python': 18}"
        },
        "after_locals": {
          "notes": "{'maths': 14, 'python': 18}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "16.0\n"
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
        "source_line": "noms = {\"Na\": \"sodium\", \"O\": \"oxygene\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "inverse = {nom: code for code, nom in noms.items()}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "inverse = {nom: code for code, nom in noms.items()}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}",
          "code": "'Na'",
          "nom": "'sodium'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "inverse = {nom: code for code, nom in noms.items()}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}",
          "code": "'O'",
          "nom": "'oxygene'"
        },
        "after_locals": {
          "noms": "{'Na': 'sodium', 'O': 'oxygene'}",
          "inverse": "{'sodium': 'Na', 'oxygene': 'O'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "mesure = {\"temperature\": 20}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(mesure.get(\"pression\", \"absente\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesure": "{'temperature': 20}"
        },
        "after_locals": {
          "mesure": "{'temperature': 20}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "absente\n"
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
        "source_line": "eleve = {\"id\": \"S1\", \"nom\": \"Maya\", \"notes\": [12, 15]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "eleve": "{'id': 'S1', 'nom': 'Maya', 'notes': [12, 15]}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "note = 18",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "valide = 0 <= note <= 20",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "note": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(valide)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "note": "18",
          "valide": "True"
        },
        "after_locals": {
          "note": "18",
          "valide": "True"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "eleves = [{\"nom\":\"A\",\"note\":12},{\"nom\":\"B\",\"note\":8}]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for eleve in eleves: print(eleve[\"nom\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for eleve in eleves: print(eleve[\"nom\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]",
          "eleve": "{'nom': 'A', 'note': 12}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "A\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for eleve in eleves: print(eleve[\"nom\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]",
          "eleve": "{'nom': 'B', 'note': 8}"
        },
        "after_locals": {
          "eleves": "[{'nom': 'A', 'note': 12}, {'nom': 'B', 'note': 8}]",
          "eleve": "{'nom': 'B', 'note': 8}"
        },
        "return_value": "",
        "output_so_far": "A\nB\n",
        "after_output": "A\nB\n"
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
        "source_line": "eleve = {\"nom\":\"Lina\", \"notes\":[14, 16]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "eleve[\"moyenne\"] = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "eleve": "{'nom': 'Lina', 'notes': [14, 16]}"
        },
        "after_locals": {
          "eleve": "{'nom': 'Lina', 'notes': [14, 16], 'moyenne': 15.0}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "eleves = [{\"id\":\"S1\"},{\"id\":\"S2\"}]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for e in eleves:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if e[\"id\"] == \"S2\": print(e)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S1'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for e in eleves:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S1'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if e[\"id\"] == \"S2\": print(e)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S2'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for e in eleves:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S2'}"
        },
        "after_locals": {
          "eleves": "[{'id': 'S1'}, {'id': 'S2'}]",
          "e": "{'id': 'S2'}"
        },
        "return_value": "",
        "output_so_far": "{'id': 'S2'}\n",
        "after_output": "{'id': 'S2'}\n"
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
        "source_line": "athlete = {\"nom\": \"Nora\", \"distance\": 5, \"temps\": 28}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(athlete[\"distance\"] / (athlete[\"temps\"] / 60))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "athlete": "{'nom': 'Nora', 'distance': 5, 'temps': 28}"
        },
        "after_locals": {
          "athlete": "{'nom': 'Nora', 'distance': 5, 'temps': 28}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "10.714285714285714\n"
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
        "source_line": "experience = {\"temperature\": 25, \"masse\": 12.4, \"resultat\": \"stable\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if experience[\"resultat\"] == \"stable\": print(\"valider\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "experience": "{'temperature': 25, 'masse': 12.4, 'resultat': 'stable'}"
        },
        "after_locals": {
          "experience": "{'temperature': 25, 'masse': 12.4, 'resultat': 'stable'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "valider\n",
        "branch_taken": false
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
        "source_line": "dossier = {\"nom\": \"Samir\", \"email\": \"samir@example.com\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "obligatoires = [\"nom\", \"email\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "dossier": "{'nom': 'Samir', 'email': 'samir@example.com'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "dossier": "{'nom': 'Samir', 'email': 'samir@example.com'}",
          "obligatoires": "['nom', 'email']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'nom'"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'nom'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'nom'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'email'"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'email'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'email'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(all(cle in dossier for cle in obligatoires))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b4f0>",
          "cle": "'email'"
        },
        "after_locals": {
          "dossier": "{'nom': 'Samir', 'email': 'samir@example.com'}",
          "obligatoires": "['nom', 'email']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "mesures = [{\"id\": 1, \"valeur\": 18}, {\"id\": 2, \"valeur\": 22}]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([m[\"valeur\"] for m in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([m[\"valeur\"] for m in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]",
          "m": "{'id': 1, 'valeur': 18}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([m[\"valeur\"] for m in mesures])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]",
          "m": "{'id': 2, 'valeur': 22}"
        },
        "after_locals": {
          "mesures": "[{'id': 1, 'valeur': 18}, {'id': 2, 'valeur': 22}]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[18, 22]\n"
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
        "source_line": "eleve = {\"prenom\": \"Lina\", \"notes\": [14, 16]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "moy = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "eleve": "{'prenom': 'Lina', 'notes': [14, 16]}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(f\"{eleve[\"prenom\"]}: {moy}\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "eleve": "{'prenom': 'Lina', 'notes': [14, 16]}",
          "moy": "15.0"
        },
        "after_locals": {
          "eleve": "{'prenom': 'Lina', 'notes': [14, 16]}",
          "moy": "15.0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Lina: 15.0\n"
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
        "source_line": "livre = {\"titre\":\"Python\", \"annee\":2026}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "livre": "{'titre': 'Python', 'annee': 2026}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "fiche = {\"nom\":\"\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(bool(fiche.get(\"nom\")))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "fiche": "{'nom': ''}"
        },
        "after_locals": {
          "fiche": "{'nom': ''}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "False\n"
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "for e in eleves: e[\"moyenne\"] = sum(e[\"notes\"]) / len(e[\"notes\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for e in eleves: e[\"moyenne\"] = sum(e[\"notes\"]) / len(e[\"notes\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "eleves": "[{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14.0}, {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}]",
          "e": "{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14.0}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for e in eleves: e[\"moyenne\"] = sum(e[\"notes\"]) / len(e[\"notes\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "eleves": "[{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14.0}, {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11.0}]",
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11.0}"
        },
        "after_locals": {
          "eleves": "[{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14.0}, {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11.0}]",
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11.0}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "admis = [e for e in eleves if e[\"moyenne\"] >= 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "admis = [e for e in eleves if e[\"moyenne\"] >= 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "e": "{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "admis = [e for e in eleves if e[\"moyenne\"] >= 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "after_locals": {
          "admis": "[{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}, {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "True\n",
    "states": [
      {
        "line": 1,
        "source_line": "ids = [e[\"id\"] for e in eleves]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "ids = [e[\"id\"] for e in eleves]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "e": "{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "ids = [e[\"id\"] for e in eleves]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(len(ids) == len(set(ids)))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ids": "[1, 2]"
        },
        "after_locals": {
          "ids": "[1, 2]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "capteur = {\"nom\":\"T1\", \"unite\":\"°C\", \"mesure\":21.4}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "capteur": "{'nom': 'T1', 'unite': '°C', 'mesure': 21.4}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "m = 21.4",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(0 <= m <= 50)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "21.4"
        },
        "after_locals": {
          "m": "21.4"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
    "status": "ok",
    "output": "Amina\nYanis\n",
    "states": [
      {
        "line": 1,
        "source_line": "for e in eleves: print(e.get(\"nom\", \"inconnu\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for e in eleves: print(e.get(\"nom\", \"inconnu\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "e": "{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "Amina\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for e in eleves: print(e.get(\"nom\", \"inconnu\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "after_locals": {
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "return_value": "",
        "output_so_far": "Amina\nYanis\n",
        "after_output": "Amina\nYanis\n"
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b550>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b550>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b550>",
          "e": "{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b550>",
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3b550>",
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "after_locals": {
          "trouve": "None"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "2\n",
    "states": [
      {
        "line": 1,
        "source_line": "valides = [e for e in eleves if e.get(\"moyenne\", 0) >= 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "valides = [e for e in eleves if e.get(\"moyenne\", 0) >= 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "e": "{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "valides = [e for e in eleves if e.get(\"moyenne\", 0) >= 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "e": "{'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(len(valides))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valides": "[{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}, {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}]"
        },
        "after_locals": {
          "valides": "[{'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14}, {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11}]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "mesure = {\"systolique\": 120, \"diastolique\": 80, \"date\": \"2026-06-01\"}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "mesure": "{'systolique': 120, 'diastolique': 80, 'date': '2026-06-01'}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "mesures = [{\"valeur\": 18}, {\"valeur\": 24}]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([m for m in mesures if m[\"valeur\"] > 20])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([m for m in mesures if m[\"valeur\"] > 20])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]",
          "m": "{'valeur': 18}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([m for m in mesures if m[\"valeur\"] > 20])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]",
          "m": "{'valeur': 24}"
        },
        "after_locals": {
          "mesures": "[{'valeur': 18}, {'valeur': 24}]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[{'valeur': 24}]\n"
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
        "source_line": "eleves = [{\"id\": 1}, {\"id\": 2}]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "eleves": "[{'id': 1}, {'id': 2}]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 1}"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 1}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 1}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 2}"
        },
        "after_locals": null,
        "return_value": "True",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 2}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 2}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(all(\"id\" in e for e in eleves))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3abf0>",
          "e": "{'id': 2}"
        },
        "after_locals": {
          "eleves": "[{'id': 1}, {'id': 2}]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "produit = {\"nom\": \"Tube\", \"stock\": 4}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "produit[\"stock\"] += 6",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "produit": "{'nom': 'Tube', 'stock': 4}"
        },
        "after_locals": {
          "produit": "{'nom': 'Tube', 'stock': 10}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "eleves = [{\"id\": 1, \"nom\": \"Ali\"}, {\"id\": 2, \"nom\": \"Nora\"}]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(next(e for e in eleves if e[\"id\"] == 2))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "eleves": "[{'id': 1, 'nom': 'Ali'}, {'id': 2, 'nom': 'Nora'}]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(next(e for e in eleves if e[\"id\"] == 2))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3a530>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(next(e for e in eleves if e[\"id\"] == 2))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3a530>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(next(e for e in eleves if e[\"id\"] == 2))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3a530>",
          "e": "{'id': 1, 'nom': 'Ali'}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(next(e for e in eleves if e[\"id\"] == 2))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<list_iterator object at 0x7fd1eda3a530>",
          "e": "{'id': 2, 'nom': 'Nora'}"
        },
        "after_locals": {
          "eleves": "[{'id': 1, 'nom': 'Ali'}, {'id': 2, 'nom': 'Nora'}]"
        },
        "return_value": "{'id': 2, 'nom': 'Nora'}",
        "output_so_far": "",
        "after_output": "{'id': 2, 'nom': 'Nora'}\n"
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
        "source_line": "pile = [\"titre\", \"image\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(pile.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "['titre', 'image']"
        },
        "after_locals": {
          "pile": "['titre']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "image\n"
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
        "source_line": "historique = [\"accueil\", \"cours\", \"quiz\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "page = historique.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "historique": "['accueil', 'cours', 'quiz']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(page, historique[-1])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "historique": "['accueil', 'cours']",
          "page": "'quiz'"
        },
        "after_locals": {
          "historique": "['accueil', 'cours']",
          "page": "'quiz'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "quiz cours\n"
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
        "source_line": "pile = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "pile": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if symbole == \"(\": pile.append(symbole)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "[]",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if symbole == \"(\": pile.append(symbole)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if symbole == \"(\": pile.append(symbole)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(len(pile))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "after_locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "pile = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if pile: print(pile.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "else: print(\"Rien à annuler\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "[]"
        },
        "after_locals": {
          "pile": "[]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Rien à annuler\n",
        "branch_taken": false
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
        "source_line": "actions = [\"A\", \"B\", \"C\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for _ in range(2): print(actions.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "actions": "['A', 'B', 'C']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for _ in range(2): print(actions.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "actions": "['A', 'B']",
          "_": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "C\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for _ in range(2): print(actions.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "actions": "['A']",
          "_": "1"
        },
        "after_locals": {
          "actions": "['A']",
          "_": "1"
        },
        "return_value": "",
        "output_so_far": "C\nB\n",
        "after_output": "C\nB\n"
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
        "source_line": "pile = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "pile": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if symbole == \"(\": pile.append(symbole)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "[]",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if symbole == \"(\": pile.append(symbole)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "['(']",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "'('"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    if symbole == \"(\": pile.append(symbole)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 2,
        "source_line": "for symbole in \"(()\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(len(pile))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "after_locals": {
          "pile": "['(', '(']",
          "symbole": "')'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "pile = list(\"ATGC\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "retour = \"\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pile": "['A', 'T', 'G', 'C']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while pile: retour += pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "pile": "['A', 'T', 'G', 'C']",
          "retour": "''"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while pile: retour += pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "['A', 'T', 'G']",
          "retour": "'C'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while pile: retour += pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "['A', 'T']",
          "retour": "'CG'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while pile: retour += pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "pile": "['A']",
          "retour": "'CGT'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(retour)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "[]",
          "retour": "'CGTA'"
        },
        "after_locals": {
          "pile": "[]",
          "retour": "'CGTA'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "CGTA\n"
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
        "source_line": "historique = [\"filtre\", \"normalisation\", \"arrondi\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"annuler\", historique.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "historique": "['filtre', 'normalisation', 'arrondi']"
        },
        "after_locals": {
          "historique": "['filtre', 'normalisation']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "annuler arrondi\n"
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
        "source_line": "appels = [\"main\", \"analyser\", \"moyenne\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(appels[-1])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "appels": "['main', 'analyser', 'moyenne']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "appels.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "appels": "['main', 'analyser', 'moyenne']"
        },
        "after_locals": {
          "appels": "['main', 'analyser']"
        },
        "return_value": "",
        "output_so_far": "moyenne\n",
        "after_output": "moyenne\n"
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
        "source_line": "pile = [3, 4]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "b = pile.pop(); a = pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pile": "[3, 4]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(a + b)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "[]",
          "b": "4",
          "a": "3"
        },
        "after_locals": {
          "pile": "[]",
          "b": "4",
          "a": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "7\n"
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
        "source_line": "pile = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for action in [\"A\", \"B\", \"C\"]: pile.append(action)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "pile": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for action in [\"A\", \"B\", \"C\"]: pile.append(action)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "['A']",
          "action": "'A'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for action in [\"A\", \"B\", \"C\"]: pile.append(action)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "['A', 'B']",
          "action": "'B'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for action in [\"A\", \"B\", \"C\"]: pile.append(action)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "pile": "['A', 'B', 'C']",
          "action": "'C'"
        },
        "after_locals": {
          "pile": "['A', 'B', 'C']",
          "action": "'C'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "if pile: resultat = pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "pile": "[1, 2]",
          "resultat": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "",
        "branch_taken": false
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "sommet = pile[-1] if pile else None",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "sommet": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "3\n",
    "states": [
      {
        "line": 1,
        "source_line": "print(len(pile))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "3\n"
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "while pile: pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "while pile: pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "[1, 2]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "while pile: pile.pop()",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "[1]"
        },
        "after_locals": {
          "pile": "[]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "pile = list(\"PY\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(pile.pop() + pile.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "['P', 'Y']"
        },
        "after_locals": {
          "pile": "[]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "YP\n"
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
        "source_line": "pile = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for x in [1,2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "pile": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    pile.append(x); print(pile)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "pile": "[]",
          "x": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for x in [1,2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "[1]",
          "x": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "[1]\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    pile.append(x); print(pile)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "pile": "[1]",
          "x": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "[1]\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for x in [1,2]:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "[1, 2]",
          "x": "2"
        },
        "after_locals": {
          "pile": "[1, 2]",
          "x": "2"
        },
        "return_value": "",
        "output_so_far": "[1]\n[1, 2]\n",
        "after_output": "[1]\n[1, 2]\n"
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "page = historique[-1] if historique else \"aucune\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "page": "'aucune'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "if len(pile) < 3: pile.append(\"nouveau\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "",
        "branch_taken": false
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
        "source_line": "def depiler(pile):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "depiler": "<function depiler at 0x7fd1ed9ee200>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def annuler(pile):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "annuler": "<function annuler at 0x7fd1ed9ef1a0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "actions = [\"A\", \"B\", \"C\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for _ in range(2): print(actions.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "actions": "['A', 'B', 'C']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for _ in range(2): print(actions.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "actions": "['A', 'B']",
          "_": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "C\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for _ in range(2): print(actions.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "actions": "['A']",
          "_": "1"
        },
        "after_locals": {
          "actions": "['A']",
          "_": "1"
        },
        "return_value": "",
        "output_so_far": "C\nB\n",
        "after_output": "C\nB\n"
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
        "source_line": "mot = \"kayak\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "pile = list(mot)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mot": "'kayak'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "['k', 'a', 'y', 'a', 'k']",
          "mot": "'kayak'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "0"
        },
        "after_locals": null,
        "return_value": "'k'",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "1"
        },
        "after_locals": null,
        "return_value": "'a'",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "2"
        },
        "after_locals": null,
        "return_value": "'y'",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "3"
        },
        "after_locals": null,
        "return_value": "'a'",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "4"
        },
        "after_locals": null,
        "return_value": "'k'",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(mot == \"\".join(pile.pop() for _ in range(len(pile))))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<range_iterator object at 0x7fd1ed9e2e20>",
          "_": "4"
        },
        "after_locals": {
          "pile": "[]",
          "mot": "'kayak'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "pile = [10, 20, 30]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(pile[-1])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pile": "[10, 20, 30]"
        },
        "after_locals": {
          "pile": "[10, 20, 30]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "30\n"
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
        "source_line": "pile = [1, 2, 3]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while pile: print(pile.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while pile: print(pile.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "pile": "[1, 2]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while pile: print(pile.pop())",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "pile": "[1]"
        },
        "after_locals": {
          "pile": "[]"
        },
        "return_value": "",
        "output_so_far": "3\n2\n",
        "after_output": "3\n2\n1\n"
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
        "source_line": "file = [\"A.pdf\", \"B.pdf\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "['A.pdf', 'B.pdf']"
        },
        "after_locals": {
          "file": "['B.pdf']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "A.pdf\n"
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
        "source_line": "file = [\"Nora\", \"Ali\", \"Maya\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "servie = file.pop(0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "['Nora', 'Ali', 'Maya']"
        },
        "after_locals": {
          "file": "['Ali', 'Maya']",
          "servie": "'Nora'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "file = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if file: print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "file": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "else: print(\"Attente vide\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "file": "[]"
        },
        "after_locals": {
          "file": "[]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Attente vide\n",
        "branch_taken": false
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
        "source_line": "file = [\"A\", \"B\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "compteur = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "['A', 'B']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "file": "['A', 'B']",
          "compteur": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    file.pop(0); compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "['A', 'B']",
          "compteur": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "file": "['B']",
          "compteur": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    file.pop(0); compteur += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "['B']",
          "compteur": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "file": "[]",
          "compteur": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(compteur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "[]",
          "compteur": "2"
        },
        "after_locals": {
          "file": "[]",
          "compteur": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "file = [\"A\", \"B\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file.append(\"C\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "file": "['A', 'B']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(file)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "['A', 'B', 'C']"
        },
        "after_locals": {
          "file": "['A', 'B', 'C']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "['A', 'B', 'C']\n"
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
        "source_line": "file = [\"S1\", \"S2\", \"S3\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "['S1', 'S2', 'S3']"
        },
        "after_locals": {
          "file": "['S2', 'S3']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "S1\n"
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
        "source_line": "file = [\"dossard 12\", \"dossard 18\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file.append(\"dossard 24\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "file": "['dossard 12', 'dossard 18']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "['dossard 12', 'dossard 18', 'dossard 24']"
        },
        "after_locals": {
          "file": "['dossard 18', 'dossard 24']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "dossard 12\n"
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
        "source_line": "messages = [\"T=20\", \"T=21\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while messages:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "messages": "['T=20', 'T=21']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(\"analyse\", messages.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "messages": "['T=20', 'T=21']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while messages:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "messages": "['T=21']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "analyse T=20\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(\"analyse\", messages.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "messages": "['T=21']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "analyse T=20\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while messages:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "messages": "[]"
        },
        "after_locals": {
          "messages": "[]"
        },
        "return_value": "",
        "output_so_far": "analyse T=20\nanalyse T=21\n",
        "after_output": "analyse T=20\nanalyse T=21\n"
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
        "source_line": "demandes = [\"A\", \"B\", \"C\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "prochaine = demandes.pop(0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "demandes": "['A', 'B', 'C']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(prochaine)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "demandes": "['B', 'C']",
          "prochaine": "'A'"
        },
        "after_locals": {
          "demandes": "['B', 'C']",
          "prochaine": "'A'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "A\n"
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
        "source_line": "documents = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"a.pdf\", \"b.pdf\"]: documents.append(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "documents": "[]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"a.pdf\", \"b.pdf\"]: documents.append(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "documents": "['a.pdf']",
          "nom": "'a.pdf'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for nom in [\"a.pdf\", \"b.pdf\"]: documents.append(nom)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "documents": "['a.pdf', 'b.pdf']",
          "nom": "'b.pdf'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(documents.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "documents": "['a.pdf', 'b.pdf']",
          "nom": "'b.pdf'"
        },
        "after_locals": {
          "documents": "['b.pdf']",
          "nom": "'b.pdf'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "a.pdf\n"
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
        "source_line": "file = []",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file.append(\"T1\"); file.append(\"T2\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "file": "[]"
        },
        "after_locals": {
          "file": "['T1', 'T2']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "ticket = file.pop(0) if file else None",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "file": "[2, 3]",
          "ticket": "1"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "1\n2\n3\n",
    "states": [
      {
        "line": 1,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "file": "[2, 3]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "[2, 3]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "file": "[3]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "[3]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "file": "[]"
        },
        "after_locals": {
          "file": "[]"
        },
        "return_value": "",
        "output_so_far": "1\n2\n3\n",
        "after_output": "1\n2\n3\n"
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
    "status": "ok",
    "output": "3\n",
    "states": [
      {
        "line": 1,
        "source_line": "print(len(file))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": "3\n"
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "file.insert(0, \"URGENT\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "file": "['URGENT', 1, 2, 3]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "servis = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "servis": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    file.pop(0); servis += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "servis": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "file": "[2, 3]",
          "servis": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    file.pop(0); servis += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "[2, 3]",
          "servis": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "file": "[3]",
          "servis": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    file.pop(0); servis += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "[3]",
          "servis": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "file": "[]",
          "servis": "3"
        },
        "after_locals": {
          "file": "[]",
          "servis": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def servir(file):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "servir": "<function servir at 0x7fd1ed9ec5e0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "file.append(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "file": "[2, 3, 1]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "temps = [4, 7, 5]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(temps) / len(temps))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "temps": "[4, 7, 5]"
        },
        "after_locals": {
          "temps": "[4, 7, 5]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "5.333333333333333\n"
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
        "source_line": "file1 = [\"A\",\"B\"]; file2 = [\"C\",\"D\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file = file1 + file2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file1": "['A', 'B']",
          "file2": "['C', 'D']"
        },
        "after_locals": {
          "file": "['A', 'B', 'C', 'D']",
          "file1": "['A', 'B']",
          "file2": "['C', 'D']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "file = [\"T1\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file.append(\"T2\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "file": "['T1']"
        },
        "after_locals": {
          "file": "['T1', 'T2']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "file = [1, 2, 3, 4, 5]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file: print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "file": "[1, 2, 3, 4, 5]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file: print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "file": "[2, 3, 4, 5]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file: print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "file": "[3, 4, 5]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file: print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "file": "[4, 5]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while file: print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "file": "[5]"
        },
        "after_locals": {
          "file": "[]"
        },
        "return_value": "",
        "output_so_far": "1\n2\n3\n4\n",
        "after_output": "1\n2\n3\n4\n5\n"
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
        "source_line": "file = [3, 4, 2]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "file": "[3, 4, 2]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while file: total += file.pop(0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "file": "[3, 4, 2]",
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while file: total += file.pop(0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "file": "[4, 2]",
          "total": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while file: total += file.pop(0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "file": "[2]",
          "total": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "[]",
          "total": "9"
        },
        "after_locals": {
          "file": "[]",
          "total": "9"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "9\n"
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
        "source_line": "file = [\"normal\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file.insert(0, \"urgent\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "file": "['normal']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(file.pop(0))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "['urgent', 'normal']"
        },
        "after_locals": {
          "file": "['normal']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "urgent\n"
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
        "source_line": "file = [\"A\", \"B\", \"C\"]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "file.pop(0)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {
          "file": "['A', 'B', 'C']"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(len(file))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "file": "['B', 'C']"
        },
        "after_locals": {
          "file": "['B', 'C']"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "arbre = {\"valeur\":\"Projet\", \"enfants\":[]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(arbre[\"valeur\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "arbre": "{'valeur': 'Projet', 'enfants': []}"
        },
        "after_locals": {
          "arbre": "{'valeur': 'Projet', 'enfants': []}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Projet\n"
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
        "source_line": "noeud = {\"valeur\":\"README\", \"enfants\":[]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(noeud[\"enfants\"] == [])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "noeud": "{'valeur': 'README', 'enfants': []}"
        },
        "after_locals": {
          "noeud": "{'valeur': 'README', 'enfants': []}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "def visiter(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "visiter": "<function visiter at 0x7fd1ed9eee80>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def hauteur(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "hauteur": "<function hauteur at 0x7fd1ed9eede0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def contient(n, cible):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "contient": "<function contient at 0x7fd1edb61800>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "arbre = {\"valeur\":\"Animal\", \"enfants\":[{\"valeur\":\"Mammifère\", \"enfants\":[]}] }",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(arbre[\"valeur\"])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "arbre": "{'valeur': 'Animal', 'enfants': [{'valeur': 'Mammifère', 'enfants': []}]}"
        },
        "after_locals": {
          "arbre": "{'valeur': 'Animal', 'enfants': [{'valeur': 'Mammifère', 'enfants': []}]}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "Animal\n"
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
        "source_line": "racine = {\"nom\":\"cours\", \"enfants\":[{\"nom\":\"python\", \"enfants\":[]}, {\"nom\":\"data\", \"enfants\":[]}] }",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(len(racine[\"enfants\"]))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "racine": "{'nom': 'cours', 'enfants': [{'nom': 'python', 'enfants': []}, {'nom': 'data', 'enfants': []}]}"
        },
        "after_locals": {
          "racine": "{'nom': 'cours', 'enfants': [{'nom': 'python', 'enfants': []}, {'nom': 'data', 'enfants': []}]}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "def decision(note):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(decision(14))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "decision": "<function decision at 0x7fd1ed9eeac0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def decision(note):",
        "event": "call",
        "frame": "decision",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "note": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return {\"valeur\":\"reussi\" if note >= 10 else \"a_reprendre\", \"enfants\":[]}",
        "event": "line",
        "frame": "decision",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "note": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return {\"valeur\":\"reussi\" if note >= 10 else \"a_reprendre\", \"enfants\":[]}",
        "event": "return",
        "frame": "decision",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "note": "14"
        },
        "after_locals": {
          "decision": "<function decision at 0x7fd1ed9eeac0>"
        },
        "return_value": "{'valeur': 'reussi', 'enfants': []}",
        "output_so_far": "",
        "after_output": "{'valeur': 'reussi', 'enfants': []}\n"
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
        "source_line": "def feuilles(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "feuilles": "<function feuilles at 0x7fd1ed9ed260>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def afficher(n, niveau=0):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "afficher": "<function afficher at 0x7fd1ed9ee7a0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "arbre = {\"valeur\":\"A\", \"enfants\":[{\"valeur\":\"B\",\"enfants\":[]},{\"valeur\":\"C\",\"enfants\":[]}]}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "arbre": "{'valeur': 'A', 'enfants': [{'valeur': 'B', 'enfants': []}, {'valeur': 'C', 'enfants': []}]}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def afficher(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "afficher": "<function afficher at 0x7fd1ed9ecfe0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def compter(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "compter": "<function compter at 0x7fd1ed9ec400>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def feuille(n): return len(n[\"enfants\"]) == 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "feuille": "<function feuille at 0x7fd1ed9ec680>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def h(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "h": "<function h at 0x7fd1ed9ec360>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "trouve = contient(arbre, \"Cours\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "trouve": "False"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def afficher(n, niveau=0):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "afficher": "<function afficher at 0x7fd1ed9ed800>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def feuilles(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "feuilles": "<function feuilles at 0x7fd1ed9ed760>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def ok(n): return n[\"valeur\"].startswith(\"C\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "ok": "<function ok at 0x7fd1ed9edda0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def afficher(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "afficher": "<function afficher at 0x7fd1ed9edee0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "noeud = {\"valeur\": \"racine\", \"enfants\": []}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "noeud": "{'valeur': 'racine', 'enfants': []}"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def compter(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "compter": "<function compter at 0x7fd1ed9ef100>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def contient(n, cible):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "contient": "<function contient at 0x7fd1ed9ef7e0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def hauteur(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "hauteur": "<function hauteur at 0x7fd1ed9efa60>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def afficher_feuilles(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "afficher_feuilles": "<function afficher_feuilles at 0x7fd1ed9efd80>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "notes = [8, 12, 14, 15, 19]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(notes) / len(notes))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[8, 12, 14, 15, 19]"
        },
        "after_locals": {
          "notes": "[8, 12, 14, 15, 19]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "13.6\n"
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
        "source_line": "temps = [18, 25, 20, 22, 35]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "tries = sorted(temps)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "temps": "[18, 25, 20, 22, 35]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(tries[len(tries)//2])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "temps": "[18, 25, 20, 22, 35]",
          "tries": "[18, 20, 22, 25, 35]"
        },
        "after_locals": {
          "temps": "[18, 25, 20, 22, 35]",
          "tries": "[18, 20, 22, 25, 35]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "22\n"
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
        "source_line": "mesures = [4, 8, 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(max(mesures) - min(mesures))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[4, 8, 10]"
        },
        "after_locals": {
          "mesures": "[4, 8, 10]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "6\n"
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
        "source_line": "mesures = [12.5, 9.8, 15.2]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(min(mesures), max(mesures))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mesures": "[12.5, 9.8, 15.2]"
        },
        "after_locals": {
          "mesures": "[12.5, 9.8, 15.2]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "9.8 15.2\n"
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
        "source_line": "notes = [10, 10, 10, 20]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(notes)/len(notes))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 10, 10, 20]"
        },
        "after_locals": {
          "notes": "[10, 10, 10, 20]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12.5\n"
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
        "source_line": "fc = [62, 70, 78, 66]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(fc)/len(fc), max(fc)-min(fc))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "fc": "[62, 70, 78, 66]"
        },
        "after_locals": {
          "fc": "[62, 70, 78, 66]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "69.0 16\n"
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
        "source_line": "pop = [100, 120, 150, 190]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "variations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pop": "[100, 120, 150, 190]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "variations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "variations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "variations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(variations)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pop": "[100, 120, 150, 190]",
          "variations": "[20, 30, 40]"
        },
        "after_locals": {
          "pop": "[100, 120, 150, 190]",
          "variations": "[20, 30, 40]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[20, 30, 40]\n"
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
        "source_line": "valeurs = sorted([2, 4, 5, 8, 10, 12])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(valeurs[:3], valeurs[3:])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[2, 4, 5, 8, 10, 12]"
        },
        "after_locals": {
          "valeurs": "[2, 4, 5, 8, 10, 12]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[2, 4, 5] [8, 10, 12]\n"
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
        "source_line": "notes = [10, 12, 10, 15, 12, 10]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print({n: notes.count(n) for n in set(notes)})",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print({n: notes.count(n) for n in set(notes)})",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]",
          "n": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print({n: notes.count(n) for n in set(notes)})",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]",
          "n": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print({n: notes.count(n) for n in set(notes)})",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 12, 10, 15, 12, 10]",
          "n": "15"
        },
        "after_locals": {
          "notes": "[10, 12, 10, 15, 12, 10]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "{10: 3, 12: 2, 15: 1}\n"
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
        "source_line": "moyenne = 13.4",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "objectif = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "moyenne": "13.4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(\"objectif atteint\" if moyenne >= objectif else \"notion à retravailler\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "moyenne": "13.4",
          "objectif": "12"
        },
        "after_locals": {
          "moyenne": "13.4",
          "objectif": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "objectif atteint\n"
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
        "source_line": "notes = [10,12,14]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(notes)/len(notes))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 12, 14]"
        },
        "after_locals": {
          "notes": "[10, 12, 14]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12.0\n"
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
        "source_line": "valeurs = sorted([2, 8, 4, 6])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "mediane = (valeurs[1] + valeurs[2]) / 2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[2, 4, 6, 8]"
        },
        "after_locals": {
          "valeurs": "[2, 4, 6, 8]",
          "mediane": "5.0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "valeurs = [3, 11, 7]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(max(valeurs)-min(valeurs))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[3, 11, 7]"
        },
        "after_locals": {
          "valeurs": "[3, 11, 7]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "8\n"
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
        "source_line": "valeurs = [4, None, 6]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[4, None, 6]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[4, None, 6]",
          "v": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[4, None, 6]",
          "v": "None"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[4, None, 6]",
          "v": "6"
        },
        "after_locals": {
          "valeurs": "[4, None, 6]",
          "propres": "[4, 6]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "donnees = [2, 4, 6, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(len(donnees))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "donnees": "[2, 4, 6, 8]"
        },
        "after_locals": {
          "donnees": "[2, 4, 6, 8]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "4\n"
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
    "status": "ok",
    "output": "[14, 16]\n",
    "states": [
      {
        "line": 1,
        "source_line": "m = sum(notes)/len(notes)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([n for n in notes if n > m])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "13.0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([n for n in notes if n > m])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "13.0",
          "n": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([n for n in notes if n > m])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "13.0",
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([n for n in notes if n > m])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "13.0",
          "n": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print([n for n in notes if n > m])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "13.0",
          "n": "10"
        },
        "after_locals": {
          "m": "13.0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "[14, 16]\n"
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
        "source_line": "a = [10, 12]; b = [14, 16]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(a)/len(a) < sum(b)/len(b))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[10, 12]",
          "b": "[14, 16]"
        },
        "after_locals": {
          "a": "[10, 12]",
          "b": "[14, 16]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "notes = [10, 10, 12]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "frequences = {}",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 10, 12]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for n in notes: frequences[n] = frequences.get(n, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{}"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for n in notes: frequences[n] = frequences.get(n, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 1}",
          "n": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for n in notes: frequences[n] = frequences.get(n, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 2}",
          "n": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for n in notes: frequences[n] = frequences.get(n, 0) + 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 2, 12: 1}",
          "n": "12"
        },
        "after_locals": {
          "notes": "[10, 10, 12]",
          "frequences": "{10: 2, 12: 1}",
          "n": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "v = sorted([4, 8, 10, 12, 16])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(sum(v)/len(v), v[len(v)//2], max(v)-min(v))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "v": "[4, 8, 10, 12, 16]"
        },
        "after_locals": {
          "v": "[4, 8, 10, 12, 16]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "10.0 10 12\n"
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
    "status": "ok",
    "output": "niveau global satisfaisant\n",
    "states": [
      {
        "line": 1,
        "source_line": "m = sum(notes)/len(notes)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(\"niveau global satisfaisant\" if m >= 10 else \"à retravailler\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "m": "13.0"
        },
        "after_locals": {
          "m": "13.0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "niveau global satisfaisant\n"
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
        "source_line": "notes = [12, 16]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "coeffs = [1, 2]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[12, 16]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[12, 16]",
          "coeffs": "[1, 2]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "12",
          "c": "1"
        },
        "after_locals": null,
        "return_value": "12",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "12",
          "c": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "12",
          "c": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "16",
          "c": "2"
        },
        "after_locals": null,
        "return_value": "32",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "call",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "16",
          "c": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "line",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "16",
          "c": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))",
        "event": "return",
        "frame": "<genexpr>",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          ".0": "<zip object at 0x7fd1eda881c0>",
          "n": "16",
          "c": "2"
        },
        "after_locals": {
          "notes": "[12, 16]",
          "coeffs": "[1, 2]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "14.666666666666666\n"
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
        "source_line": "ancien, nouveau = 100, 125",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print((nouveau - ancien) / ancien * 100)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ancien": "100",
          "nouveau": "125"
        },
        "after_locals": {
          "ancien": "100",
          "nouveau": "125"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "25.0\n"
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
        "source_line": "valeurs = sorted([9, 2, 7, 4, 5])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(valeurs[len(valeurs)//2])",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[2, 4, 5, 7, 9]"
        },
        "after_locals": {
          "valeurs": "[2, 4, 5, 7, 9]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "5\n"
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
        "source_line": "valeurs = [10, None, 14]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[10, None, 14]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[10, None, 14]",
          "v": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[10, None, 14]",
          "v": "None"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "propres = [v for v in valeurs if v is not None]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[10, None, 14]",
          "v": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(sum(propres)/len(propres))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[10, None, 14]",
          "propres": "[10, 14]"
        },
        "after_locals": {
          "valeurs": "[10, None, 14]",
          "propres": "[10, 14]"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12.0\n"
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
        "source_line": "a, b = [12, 14], [15, 16]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "ma, mb = sum(a)/len(a), sum(b)/len(b)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "[12, 14]",
          "b": "[15, 16]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(\"B\" if mb > ma else \"A\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[12, 14]",
          "b": "[15, 16]",
          "ma": "13.0",
          "mb": "15.5"
        },
        "after_locals": {
          "a": "[12, 14]",
          "b": "[15, 16]",
          "ma": "13.0",
          "mb": "15.5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "def saluer(nom):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(saluer(\"Lina\"))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "saluer": "<function saluer at 0x7fd1ed9ed1c0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def saluer(nom):",
        "event": "call",
        "frame": "saluer",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "nom": "'Lina'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return \"Bonjour \" + nom",
        "event": "line",
        "frame": "saluer",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "nom": "'Lina'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return \"Bonjour \" + nom",
        "event": "return",
        "frame": "saluer",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "nom": "'Lina'"
        },
        "after_locals": {
          "saluer": "<function saluer at 0x7fd1ed9ed1c0>"
        },
        "return_value": "'Bonjour Lina'",
        "output_so_far": "",
        "after_output": "Bonjour Lina\n"
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
        "source_line": "def carre(n): return n * n",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(carre(6))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "carre": "<function carre at 0x7fd1ed9ec360>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def carre(n): return n * n",
        "event": "call",
        "frame": "carre",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "n": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def carre(n): return n * n",
        "event": "line",
        "frame": "carre",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "n": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def carre(n): return n * n",
        "event": "return",
        "frame": "carre",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "n": "6"
        },
        "after_locals": {
          "carre": "<function carre at 0x7fd1ed9ec360>"
        },
        "return_value": "36",
        "output_so_far": "",
        "after_output": "36\n"
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
        "source_line": "def ttc(prix, taux=0.2): return prix * (1+taux)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(ttc(100))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ttc": "<function ttc at 0x7fd1ed9ecae0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def ttc(prix, taux=0.2): return prix * (1+taux)",
        "event": "call",
        "frame": "ttc",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "prix": "100",
          "taux": "0.2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def ttc(prix, taux=0.2): return prix * (1+taux)",
        "event": "line",
        "frame": "ttc",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "prix": "100",
          "taux": "0.2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def ttc(prix, taux=0.2): return prix * (1+taux)",
        "event": "return",
        "frame": "ttc",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "prix": "100",
          "taux": "0.2"
        },
        "after_locals": {
          "ttc": "<function ttc at 0x7fd1ed9ecae0>"
        },
        "return_value": "120.0",
        "output_so_far": "",
        "after_output": "120.0\n"
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
        "source_line": "def valide(note): return 0 <= note <= 20",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "print(valide(18))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valide": "<function valide at 0x7fd1ed9ec400>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def valide(note): return 0 <= note <= 20",
        "event": "call",
        "frame": "valide",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "note": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def valide(note): return 0 <= note <= 20",
        "event": "line",
        "frame": "valide",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "note": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def valide(note): return 0 <= note <= 20",
        "event": "return",
        "frame": "valide",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "note": "18"
        },
        "after_locals": {
          "valide": "<function valide at 0x7fd1ed9ec400>"
        },
        "return_value": "True",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "def c_to_f(c): return c * 9 / 5 + 32",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "def chaud(f): return f >= 77",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "c_to_f": "<function c_to_f at 0x7fd1ed9ecfe0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(chaud(c_to_f(25)))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "c_to_f": "<function c_to_f at 0x7fd1ed9ecfe0>",
          "chaud": "<function chaud at 0x7fd1ed9ee8e0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def c_to_f(c): return c * 9 / 5 + 32",
        "event": "call",
        "frame": "c_to_f",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "c": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def c_to_f(c): return c * 9 / 5 + 32",
        "event": "line",
        "frame": "c_to_f",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "c": "25"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def c_to_f(c): return c * 9 / 5 + 32",
        "event": "return",
        "frame": "c_to_f",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "c": "25"
        },
        "after_locals": null,
        "return_value": "77.0",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "def chaud(f): return f >= 77",
        "event": "call",
        "frame": "chaud",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "f": "77.0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "def chaud(f): return f >= 77",
        "event": "line",
        "frame": "chaud",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "f": "77.0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "def chaud(f): return f >= 77",
        "event": "return",
        "frame": "chaud",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "f": "77.0"
        },
        "after_locals": {
          "c_to_f": "<function c_to_f at 0x7fd1ed9ecfe0>",
          "chaud": "<function chaud at 0x7fd1ed9ee8e0>"
        },
        "return_value": "True",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "from math import pi",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "def aire_disque(r):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "pi": "3.141592653589793"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(aire_disque(3))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pi": "3.141592653589793",
          "aire_disque": "<function aire_disque at 0x7fd1ed9ee7a0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "def aire_disque(r):",
        "event": "call",
        "frame": "aire_disque",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "r": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    return pi * r ** 2",
        "event": "line",
        "frame": "aire_disque",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "r": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    return pi * r ** 2",
        "event": "return",
        "frame": "aire_disque",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "r": "3"
        },
        "after_locals": {
          "pi": "3.141592653589793",
          "aire_disque": "<function aire_disque at 0x7fd1ed9ee7a0>"
        },
        "return_value": "28.274333882308138",
        "output_so_far": "",
        "after_output": "28.274333882308138\n"
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
        "source_line": "def vitesse(distance_km, temps_h):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(vitesse(42, 2))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "vitesse": "<function vitesse at 0x7fd1ed9ed580>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(distance_km, temps_h):",
        "event": "call",
        "frame": "vitesse",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "distance_km": "42",
          "temps_h": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return distance_km / temps_h",
        "event": "line",
        "frame": "vitesse",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "distance_km": "42",
          "temps_h": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return distance_km / temps_h",
        "event": "return",
        "frame": "vitesse",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "distance_km": "42",
          "temps_h": "2"
        },
        "after_locals": {
          "vitesse": "<function vitesse at 0x7fd1ed9ed580>"
        },
        "return_value": "21.0",
        "output_so_far": "",
        "after_output": "21.0\n"
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
        "source_line": "def energie(masse, g, hauteur):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(energie(2, 9.81, 3))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "energie": "<function energie at 0x7fd1ed9ee980>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def energie(masse, g, hauteur):",
        "event": "call",
        "frame": "energie",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return masse * g * hauteur",
        "event": "line",
        "frame": "energie",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return masse * g * hauteur",
        "event": "return",
        "frame": "energie",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "masse": "2",
          "g": "9.81",
          "hauteur": "3"
        },
        "after_locals": {
          "energie": "<function energie at 0x7fd1ed9ee980>"
        },
        "return_value": "58.86",
        "output_so_far": "",
        "after_output": "58.86\n"
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
        "source_line": "def concentration(masse, volume):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(concentration(12, 0.5))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "concentration": "<function concentration at 0x7fd1edb63ba0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def concentration(masse, volume):",
        "event": "call",
        "frame": "concentration",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "masse": "12",
          "volume": "0.5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return masse / volume",
        "event": "line",
        "frame": "concentration",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "masse": "12",
          "volume": "0.5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    return masse / volume",
        "event": "return",
        "frame": "concentration",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "masse": "12",
          "volume": "0.5"
        },
        "after_locals": {
          "concentration": "<function concentration at 0x7fd1edb63ba0>"
        },
        "return_value": "24.0",
        "output_so_far": "",
        "after_output": "24.0\n"
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
        "source_line": "def zone_pression(valeur):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(zone_pression(128))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "zone_pression": "<function zone_pression at 0x7fd1ed9eede0>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def zone_pression(valeur):",
        "event": "call",
        "frame": "zone_pression",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "valeur": "128"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    if valeur < 90: return \"basse\"",
        "event": "line",
        "frame": "zone_pression",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeur": "128"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "    if valeur <= 120: return \"habituelle\"",
        "event": "line",
        "frame": "zone_pression",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeur": "128"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "    return \"élevée\"",
        "event": "line",
        "frame": "zone_pression",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "valeur": "128"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    return \"élevée\"",
        "event": "return",
        "frame": "zone_pression",
        "indent": 4,
        "kind": "return",
        "iteration": null,
        "locals": {
          "valeur": "128"
        },
        "after_locals": {
          "zone_pression": "<function zone_pression at 0x7fd1ed9eede0>"
        },
        "return_value": "'élevée'",
        "output_so_far": "",
        "after_output": "élevée\n"
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
        "source_line": "def est_pair(n): return n % 2 == 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "est_pair": "<function est_pair at 0x7fd1ed9ee840>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def moyenne(a,b): return (a+b)/2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "moyenne": "<function moyenne at 0x7fd1ed9ee520>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def plus_grand(a,b): return a if a >= b else b",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "plus_grand": "<function plus_grand at 0x7fd1ed9ecfe0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def remise(prix, taux=10): return prix*(1-taux/100)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "remise": "<function remise at 0x7fd1ed9ec040>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def phrase(nom, ville): return f\"{nom} habite à {ville}.\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "phrase": "<function phrase at 0x7fd1ed9ecae0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def secondes(minutes): return minutes*60",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "secondes": "<function secondes at 0x7fd1ed9ec360>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def categorie(age):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "categorie": "<function categorie at 0x7fd1ed9ed1c0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def total(valeurs): return sum(valeurs)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "total": "<function total at 0x7fd1ed9ed620>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
    "status": "ok",
    "output": "",
    "states": [
      {
        "line": 1,
        "source_line": "assert est_pair(4)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "assert not est_pair(5)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "statement",
        "iteration": null,
        "locals": {},
        "after_locals": {},
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def carre(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "carre": "<function carre at 0x7fd1ed9ed8a0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def fcm(age):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "fcm": "<function fcm at 0x7fd1ed9ee0c0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def celsius_vers_kelvin(c):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "celsius_vers_kelvin": "<function celsius_vers_kelvin at 0x7fd1ed9ef1a0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def intensite(u, r):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "intensite": "<function intensite at 0x7fd1ed9ef600>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def est_pair(n):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": {
          "est_pair": "<function est_pair at 0x7fd1ed9efba0>"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "def vitesse(d, t): return d / t",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "assert vitesse(100, 2) == 50",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "vitesse": "<function vitesse at 0x7fd1ed9ef920>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(d, t): return d / t",
        "event": "call",
        "frame": "vitesse",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "d": "100",
          "t": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(d, t): return d / t",
        "event": "line",
        "frame": "vitesse",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "d": "100",
          "t": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(d, t): return d / t",
        "event": "return",
        "frame": "vitesse",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "d": "100",
          "t": "2"
        },
        "after_locals": null,
        "return_value": "50.0",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "assert vitesse(30, 1.5) == 20",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "vitesse": "<function vitesse at 0x7fd1ed9ef920>"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(d, t): return d / t",
        "event": "call",
        "frame": "vitesse",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "d": "30",
          "t": "1.5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(d, t): return d / t",
        "event": "line",
        "frame": "vitesse",
        "indent": 0,
        "kind": "definition",
        "iteration": null,
        "locals": {
          "d": "30",
          "t": "1.5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "def vitesse(d, t): return d / t",
        "event": "return",
        "frame": "vitesse",
        "indent": 0,
        "kind": "return",
        "iteration": null,
        "locals": {
          "d": "30",
          "t": "1.5"
        },
        "after_locals": {
          "vitesse": "<function vitesse at 0x7fd1ed9ef920>"
        },
        "return_value": "20.0",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "t = 18",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if t < 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "t": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif t < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "t": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "    etat = \"liquide\"",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "t": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 8,
        "source_line": "print(etat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "t": "18",
          "etat": "'liquide'"
        },
        "after_locals": {
          "t": "18",
          "etat": "'liquide'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "liquide\n"
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
        "source_line": "age = 16",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "parent = True",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "age": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if age >= 18:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "age": "16",
          "parent": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "elif age >= 14 and parent:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "age": "16",
          "parent": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 6,
        "source_line": "    autorise = True",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "age": "16",
          "parent": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 9,
        "source_line": "print(autorise)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "age": "16",
          "parent": "True",
          "autorise": "True"
        },
        "after_locals": {
          "age": "16",
          "parent": "True",
          "autorise": "True"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "True\n"
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
        "source_line": "note = 15",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if note >= 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 3,
        "source_line": "    if note >= 16:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 6,
        "source_line": "        mention = \"réussite\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "note": "15"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 9,
        "source_line": "print(mention)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "note": "15",
          "mention": "'réussite'"
        },
        "after_locals": {
          "note": "15",
          "mention": "'réussite'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "réussite\n"
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
        "source_line": "couleur = \"orange\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "urgence = False",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "couleur": "'orange'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if couleur == \"rouge\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "elif couleur == \"orange\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 6,
        "source_line": "    if urgence:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 9,
        "source_line": "        action = \"ralentir\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "couleur": "'orange'",
          "urgence": "False"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 12,
        "source_line": "print(action)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "couleur": "'orange'",
          "urgence": "False",
          "action": "'ralentir'"
        },
        "after_locals": {
          "couleur": "'orange'",
          "urgence": "False",
          "action": "'ralentir'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ralentir\n"
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
        "source_line": "a, b, c = 3, 4, 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if a + b > c and a + c > b and b + c > a:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 3,
        "source_line": "    if a*a + b*b == c*c:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 4,
        "source_line": "        nature = \"rectangle\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 9,
        "source_line": "print(nature)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "3",
          "b": "4",
          "c": "5",
          "nature": "'rectangle'"
        },
        "after_locals": {
          "a": "3",
          "b": "4",
          "c": "5",
          "nature": "'rectangle'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "rectangle\n"
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
        "source_line": "niveau = 22",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "chargeur = True",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "niveau": "22"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if niveau < 20:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "niveau": "22",
          "chargeur": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 9,
        "source_line": "    message = \"continuer\"",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "niveau": "22",
          "chargeur": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 10,
        "source_line": "print(message)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "niveau": "22",
          "chargeur": "True",
          "message": "'continuer'"
        },
        "after_locals": {
          "niveau": "22",
          "chargeur": "True",
          "message": "'continuer'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "continuer\n"
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
        "source_line": "vitesse = 72",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "route = \"ville\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "vitesse": "72"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if route == \"ville\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "vitesse": "72",
          "route": "'ville'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 4,
        "source_line": "    if vitesse > 50:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "vitesse": "72",
          "route": "'ville'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        message = \"ralentir\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "vitesse": "72",
          "route": "'ville'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 10,
        "source_line": "print(message)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "vitesse": "72",
          "route": "'ville'",
          "message": "'ralentir'"
        },
        "after_locals": {
          "vitesse": "72",
          "route": "'ville'",
          "message": "'ralentir'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ralentir\n"
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
        "source_line": "code = \"A7\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "actif = True",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "code": "'A7'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if actif:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "code": "'A7'",
          "actif": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 4,
        "source_line": "    if len(code) >= 2:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "code": "'A7'",
          "actif": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        acces = \"autorisé\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "code": "'A7'",
          "actif": "True"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 10,
        "source_line": "print(acces)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "code": "'A7'",
          "actif": "True",
          "acces": "'autorisé'"
        },
        "after_locals": {
          "code": "'A7'",
          "actif": "True",
          "acces": "'autorisé'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "autorisé\n"
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
        "source_line": "stock = 8",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "commande = 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "stock": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if commande > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "stock": "8",
          "commande": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 4,
        "source_line": "    if commande <= stock:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "stock": "8",
          "commande": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        resultat = \"préparer\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "stock": "8",
          "commande": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 10,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "stock": "8",
          "commande": "5",
          "resultat": "'préparer'"
        },
        "after_locals": {
          "stock": "8",
          "commande": "5",
          "resultat": "'préparer'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "préparer\n"
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
        "source_line": "moyenne = 13",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "presents = 4",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "moyenne": "13"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "if presents > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "moyenne": "13",
          "presents": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 4,
        "source_line": "    if moyenne >= 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "moyenne": "13",
          "presents": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        decision = \"validé\"",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "moyenne": "13",
          "presents": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 10,
        "source_line": "print(decision)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "moyenne": "13",
          "presents": "4",
          "decision": "'validé'"
        },
        "after_locals": {
          "moyenne": "13",
          "presents": "4",
          "decision": "'validé'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "validé\n"
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "pluie = False",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "vent = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pluie": "False"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "temperature = 9",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pluie": "False",
          "vent": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "if pluie:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "elif vent > 30:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 8,
        "source_line": "elif temperature < 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 9,
        "source_line": "    conseil = \"veste chaude\"",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 12,
        "source_line": "print(conseil)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9",
          "conseil": "'veste chaude'"
        },
        "after_locals": {
          "pluie": "False",
          "vent": "12",
          "temperature": "9",
          "conseil": "'veste chaude'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "veste chaude\n"
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
        "source_line": "age = 17",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if age < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "age": "17"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif age < 18:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "age": "17"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "    tarif = 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "age": "17"
        },
        "after_locals": {
          "age": "17",
          "tarif": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": ""
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
        "source_line": "score = 74",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if score >= 90:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "score": "74"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif score >= 75:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "score": "74"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "elif score >= 50:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "score": "74"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 7,
        "source_line": "    niveau = \"intermédiaire\"",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "score": "74"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 10,
        "source_line": "print(niveau)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "score": "74",
          "niveau": "'intermédiaire'"
        },
        "after_locals": {
          "score": "74",
          "niveau": "'intermédiaire'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "intermédiaire\n"
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
        "source_line": "indice = 82",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if indice <= 25: niveau = \"bon\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "indice": "82"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif indice <= 50: niveau = \"modéré\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "indice": "82"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif indice <= 100: niveau = \"dégradé\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "indice": "82"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "print(niveau)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "indice": "82",
          "niveau": "'dégradé'"
        },
        "after_locals": {
          "indice": "82",
          "niveau": "'dégradé'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "dégradé\n"
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
        "source_line": "a, b, op = 12, 4, \"/\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if op == \"+\": resultat = a + b",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif op == \"-\": resultat = a - b",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif op == \"*\": resultat = a * b",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "elif op == \"/\" and b != 0: resultat = a / b",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 7,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "12",
          "b": "4",
          "op": "'/'",
          "resultat": "3.0"
        },
        "after_locals": {
          "a": "12",
          "b": "4",
          "op": "'/'",
          "resultat": "3.0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "3.0\n"
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
        "source_line": "ko = 840",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if ko < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ko": "840"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif ko < 1000:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ko": "840"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "    classe = \"moyen\"",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "ko": "840"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 8,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ko": "840",
          "classe": "'moyen'"
        },
        "after_locals": {
          "ko": "840",
          "classe": "'moyen'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "moyen\n"
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
        "source_line": "ressentie = 4",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if ressentie < 0: risque = \"gel\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ressentie": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif ressentie < 8: risque = \"froid\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "ressentie": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "print(risque)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ressentie": "4",
          "risque": "'froid'"
        },
        "after_locals": {
          "ressentie": "4",
          "risque": "'froid'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "froid\n"
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
        "source_line": "energie = 38",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if energie <= 10: etat = \"critique\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "energie": "38"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif energie <= 30: etat = \"faible\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "energie": "38"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif energie <= 60: etat = \"correcte\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "energie": "38"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "print(etat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "energie": "38",
          "etat": "'correcte'"
        },
        "after_locals": {
          "energie": "38",
          "etat": "'correcte'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "correcte\n"
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
        "source_line": "attente = 48",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if attente > 120: priorite = \"urgente\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "attente": "48"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif attente > 60: priorite = \"haute\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "attente": "48"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "elif attente > 20: priorite = \"normale\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "attente": "48"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "print(priorite)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "attente": "48",
          "priorite": "'normale'"
        },
        "after_locals": {
          "attente": "48",
          "priorite": "'normale'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "normale\n"
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
        "source_line": "imc = 24.2",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if imc < 18.5: categorie = \"bas\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "imc": "24.2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif imc < 25: categorie = \"référence\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "imc": "24.2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 6,
        "source_line": "print(categorie)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "imc": "24.2",
          "categorie": "'référence'"
        },
        "after_locals": {
          "imc": "24.2",
          "categorie": "'référence'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "référence\n"
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "n = 14",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if n % 2 == 0: resultat = \"pair\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "n": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 4,
        "source_line": "print(resultat)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "after_locals": {
          "n": "14",
          "resultat": "'pair'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "pair\n"
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
        "source_line": "x = 42",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if x < 10: classe = \"A\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "elif x < 50: classe = \"B\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "42"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 5,
        "source_line": "print(classe)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "x": "42",
          "classe": "'B'"
        },
        "after_locals": {
          "x": "42",
          "classe": "'B'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "B\n"
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
        "source_line": "x = 12",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "if 0 <= x <= 20: print(\"ok\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "x": "12"
        },
        "after_locals": {
          "x": "12"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "ok\n",
        "branch_taken": false
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
        "source_line": "for i in range(5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "4"
        },
        "after_locals": {
          "i": "4"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": "0\n1\n2\n3\n4\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "0",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "1",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "3",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "6",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "10",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": {
          "total": "15",
          "i": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "15\n"
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
        "source_line": "for i in range(1, 5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(1, 5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(1, 5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(1, 5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n4\n9\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "1\n4\n9\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(1, 5):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": {
          "i": "4"
        },
        "return_value": "",
        "output_so_far": "1\n4\n9\n16\n",
        "after_output": "1\n4\n9\n16\n"
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
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 11, 2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "10"
        },
        "after_locals": {
          "i": "10"
        },
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n",
        "after_output": "0\n2\n4\n6\n8\n10\n"
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
        "source_line": "n = 7",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "7",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "7",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "7",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "7",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n14\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "7",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n14\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "7",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n14\n21\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "7",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n14\n21\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "n": "7",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n14\n21\n28\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n * i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "7",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "7\n14\n21\n28\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 6):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "n": "7",
          "i": "5"
        },
        "after_locals": {
          "n": "7",
          "i": "5"
        },
        "return_value": "",
        "output_so_far": "7\n14\n21\n28\n35\n",
        "after_output": "7\n14\n21\n28\n35\n"
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
        "source_line": "mot = \"python\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mot": "'python'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "mot": "'python'",
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if mot[i] in \"aeiouy\":",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if mot[i] in \"aeiouy\":",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "0",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if mot[i] in \"aeiouy\":",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if mot[i] in \"aeiouy\":",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if mot[i] in \"aeiouy\":",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "1",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if mot[i] in \"aeiouy\":",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for i in range(len(mot)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 6,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "after_locals": {
          "mot": "'python'",
          "compte": "2",
          "i": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "valeurs = [4, 9, 2, 7]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "maximum = valeurs[0]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2, 7]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(1, len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if valeurs[i] > maximum:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "4",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": true
      },
      {
        "line": 5,
        "source_line": "        maximum = valeurs[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "4",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(1, len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if valeurs[i] > maximum:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for i in range(1, len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    if valeurs[i] > maximum:",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "branch",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null,
        "branch_taken": false
      },
      {
        "line": 3,
        "source_line": "for i in range(1, len(valeurs)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 6,
        "source_line": "print(maximum)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "after_locals": {
          "valeurs": "[4, 9, 2, 7]",
          "maximum": "9",
          "i": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "9\n"
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
        "source_line": "for ligne in range(2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "ligne": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "        print(ligne, colonne)",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ligne": "0",
          "colonne": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "ligne": "0",
          "colonne": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "        print(ligne, colonne)",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ligne": "0",
          "colonne": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "ligne": "0",
          "colonne": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "        print(ligne, colonne)",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ligne": "0",
          "colonne": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "ligne": "0",
          "colonne": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for ligne in range(2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "ligne": "0",
          "colonne": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "        print(ligne, colonne)",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ligne": "1",
          "colonne": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "ligne": "1",
          "colonne": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n1 0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "        print(ligne, colonne)",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ligne": "1",
          "colonne": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n1 0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "ligne": "1",
          "colonne": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n1 0\n1 1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "        print(ligne, colonne)",
        "event": "line",
        "frame": "<module>",
        "indent": 8,
        "kind": "output",
        "iteration": null,
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n1 0\n1 1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    for colonne in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n1 0\n1 1\n1 2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for ligne in range(2):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "after_locals": {
          "ligne": "1",
          "colonne": "2"
        },
        "return_value": "",
        "output_so_far": "0 0\n0 1\n0 2\n1 0\n1 1\n1 2\n",
        "after_output": "0 0\n0 1\n0 2\n1 0\n1 1\n1 2\n"
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
        "source_line": "notes = [12, 15, 9]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[12, 15, 9]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(notes)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += notes[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(notes)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "12",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += notes[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "12",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(notes)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "27",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += notes[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "27",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "for i in range(len(notes)):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "36",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(total / len(notes))",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[12, 15, 9]",
          "total": "36",
          "i": "2"
        },
        "after_locals": {
          "notes": "[12, 15, 9]",
          "total": "36",
          "i": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12.0\n"
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
        "source_line": "for i in range(5, 0, -1):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5, 0, -1):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5, 0, -1):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5, 0, -1):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5, 0, -1):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(5, 0, -1):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "1"
        },
        "after_locals": {
          "i": "1"
        },
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n1\n",
        "after_output": "5\n4\n3\n2\n1\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "total": "21",
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "total": "28",
          "i": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "total": "36",
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "total": "45",
          "i": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": {
          "total": "55",
          "i": "10"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "55\n"
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
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "i": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "i": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "i": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "i": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "i": "20"
        },
        "after_locals": {
          "i": "20"
        },
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
        "after_output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n"
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
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 13,
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 14,
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 15,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "total": "21",
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "total": "28",
          "i": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "total": "36",
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "total": "45",
          "i": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": {
          "total": "55",
          "i": "10"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "55\n"
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
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "i": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "i": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "i": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "i": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "i": "20"
        },
        "after_locals": {
          "i": "20"
        },
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
        "after_output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n"
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
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 13,
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 14,
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 15,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "total": "21",
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "total": "28",
          "i": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "total": "36",
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "total": "45",
          "i": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": {
          "total": "55",
          "i": "10"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "55\n"
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
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "i": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "i": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "i": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "i": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "i": "20"
        },
        "after_locals": {
          "i": "20"
        },
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
        "after_output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n"
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
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 13,
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 14,
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 15,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "total": "21",
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "total": "28",
          "i": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "total": "36",
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "total": "45",
          "i": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": {
          "total": "55",
          "i": "10"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "55\n"
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
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "i": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "i": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "i": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "i": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "i": "20"
        },
        "after_locals": {
          "i": "20"
        },
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
        "after_output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n"
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
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 13,
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 14,
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 15,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "total": "15",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "total": "21",
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "total": "28",
          "i": "7"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "total": "36",
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "total": "45",
          "i": "9"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(1, 11): total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "55",
          "i": "10"
        },
        "after_locals": {
          "total": "55",
          "i": "10"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "55\n"
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
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "i": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "i": "14"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "i": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "i": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n",
        "after_output": null
      },
      {
        "line": 1,
        "source_line": "for i in range(0, 21, 2): print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "i": "20"
        },
        "after_locals": {
          "i": "20"
        },
        "return_value": "",
        "output_so_far": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n",
        "after_output": "0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n"
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
        "source_line": "compte = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "compte": "0",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "1",
          "i": "0",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "2",
          "i": "0",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "3",
          "i": "0",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "compte": "4",
          "i": "0",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "compte": "4",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "compte": "5",
          "i": "1",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "compte": "6",
          "i": "1",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 9,
        "locals": {
          "compte": "7",
          "i": "1",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 10,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "compte": "8",
          "i": "1",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 11,
        "locals": {
          "compte": "8",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 12,
        "locals": {
          "compte": "9",
          "i": "2",
          "j": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 13,
        "locals": {
          "compte": "10",
          "i": "2",
          "j": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 14,
        "locals": {
          "compte": "11",
          "i": "2",
          "j": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    for j in range(4): compte += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "loop",
        "iteration": 15,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "for i in range(3):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(compte)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "after_locals": {
          "compte": "12",
          "i": "2",
          "j": "3"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "12\n"
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
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "5"
        },
        "after_locals": {
          "i": "5"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": "0\n1\n2\n3\n4\n"
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
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while total < 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "total": "0",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "0",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "1",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while total < 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "total": "1",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "1",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "3",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while total < 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "total": "3",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "3",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "6",
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while total < 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "total": "6",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    total += i",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "6",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "total": "10",
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while total < 10:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "total": "10",
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 6,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "total": "10",
          "i": "5"
        },
        "after_locals": {
          "total": "10",
          "i": "5"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "10\n"
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
        "source_line": "age = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while age < 1 or age > 120:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "age": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    age = 18",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "age": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while age < 1 or age > 120:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "age": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(age)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "age": "18"
        },
        "after_locals": {
          "age": "18"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "18\n"
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
        "source_line": "n = 5",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(n)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n > 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "n": "0"
        },
        "after_locals": {
          "n": "0"
        },
        "return_value": "",
        "output_so_far": "5\n4\n3\n2\n1\n",
        "after_output": "5\n4\n3\n2\n1\n"
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
        "source_line": "valeurs = [3, 8, 5, 9]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[3, 8, 5, 9]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(valeurs) and valeurs[i] != 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(valeurs) and valeurs[i] != 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(valeurs) and valeurs[i] != 5:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "2"
        },
        "after_locals": {
          "valeurs": "[3, 8, 5, 9]",
          "i": "2"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "2\n"
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
        "source_line": "valeur = 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "valeur": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "valeur": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "valeur": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "valeur": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "8"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "valeur": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "16"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "valeur": "32"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "32"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "valeur": "64"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    valeur *= 2",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "valeur": "64"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while valeur < 100:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 8,
        "locals": {
          "valeur": "128"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(valeur)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "valeur": "128"
        },
        "after_locals": {
          "valeur": "128"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "128\n"
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
        "source_line": "choix = \"q\"",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while choix != \"q\":",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "choix": "'q'"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(\"fin\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "choix": "'q'"
        },
        "after_locals": {
          "choix": "'q'"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "fin\n"
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
        "source_line": "a, b = 48, 18",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while b != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "a": "48",
          "b": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    a, b = b, a % b",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "48",
          "b": "18"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while b != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "a": "18",
          "b": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    a, b = b, a % b",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "18",
          "b": "12"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while b != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "a": "12",
          "b": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    a, b = b, a % b",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "12",
          "b": "6"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while b != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "a": "6",
          "b": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(a)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "6",
          "b": "0"
        },
        "after_locals": {
          "a": "6",
          "b": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "6\n"
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
        "source_line": "notes = [10, 14, 16]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "total = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "while i < len(notes):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0",
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    total += notes[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0",
          "total": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 6,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "0",
          "total": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "while i < len(notes):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "1",
          "total": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    total += notes[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "1",
          "total": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 6,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "1",
          "total": "24"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "while i < len(notes):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "2",
          "total": "24"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 5,
        "source_line": "    total += notes[i]",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "2",
          "total": "24"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 6,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "2",
          "total": "40"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "while i < len(notes):",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "3",
          "total": "40"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 7,
        "source_line": "print(total)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "notes": "[10, 14, 16]",
          "i": "3",
          "total": "40"
        },
        "after_locals": {
          "notes": "[10, 14, 16]",
          "i": "3",
          "total": "40"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "40\n"
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
        "source_line": "minute = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while minute <= 30:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "minute": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    minute += 10",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "minute": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while minute <= 30:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "minute": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    minute += 10",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "minute": "10"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while minute <= 30:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "minute": "20"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    minute += 10",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "minute": "20"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while minute <= 30:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "minute": "30"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    minute += 10",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "minute": "30"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while minute <= 30:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "minute": "40"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(minute)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "minute": "40"
        },
        "after_locals": {
          "minute": "40"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "40\n"
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
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "6"
        },
        "after_locals": {
          "i": "6"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": "0\n1\n2\n3\n4\n5\n"
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
        "source_line": "n = 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(\"fin\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "0"
        },
        "after_locals": {
          "n": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "fin\n"
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
        "source_line": "a = [2, 5, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(a) and a[i] != 5: i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "after_locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
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
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "6"
        },
        "after_locals": {
          "i": "6"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": "0\n1\n2\n3\n4\n5\n"
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
        "source_line": "n = 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(\"fin\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "0"
        },
        "after_locals": {
          "n": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "fin\n"
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
        "source_line": "a = [2, 5, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(a) and a[i] != 5: i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "after_locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
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
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "6"
        },
        "after_locals": {
          "i": "6"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": "0\n1\n2\n3\n4\n5\n"
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
        "source_line": "n = 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(\"fin\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "0"
        },
        "after_locals": {
          "n": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "fin\n"
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
        "source_line": "a = [2, 5, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(a) and a[i] != 5: i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "after_locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
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
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "6"
        },
        "after_locals": {
          "i": "6"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": "0\n1\n2\n3\n4\n5\n"
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
        "source_line": "n = 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(\"fin\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "0"
        },
        "after_locals": {
          "n": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "fin\n"
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
        "source_line": "a = [2, 5, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(a) and a[i] != 5: i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "after_locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
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
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 5,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "4"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 6,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "output",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "    i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "i": "5"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while i < 6:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 7,
        "locals": {
          "i": "6"
        },
        "after_locals": {
          "i": "6"
        },
        "return_value": "",
        "output_so_far": "0\n1\n2\n3\n4\n5\n",
        "after_output": "0\n1\n2\n3\n4\n5\n"
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
        "source_line": "n = 3",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "3"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 2,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "2"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 3,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "    n -= 1",
        "event": "line",
        "frame": "<module>",
        "indent": 4,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "n": "1"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "while n != 0:",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 4,
        "locals": {
          "n": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(\"fin\")",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "n": "0"
        },
        "after_locals": {
          "n": "0"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "fin\n"
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
        "source_line": "a = [2, 5, 8]",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {},
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 2,
        "source_line": "i = 0",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "assignment",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 3,
        "source_line": "while i < len(a) and a[i] != 5: i += 1",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "loop",
        "iteration": 1,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "0"
        },
        "after_locals": null,
        "return_value": "",
        "output_so_far": "",
        "after_output": null
      },
      {
        "line": 4,
        "source_line": "print(i)",
        "event": "line",
        "frame": "<module>",
        "indent": 0,
        "kind": "output",
        "iteration": null,
        "locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "after_locals": {
          "a": "[2, 5, 8]",
          "i": "1"
        },
        "return_value": "",
        "output_so_far": "",
        "after_output": "1\n"
      }
    ]
  }
};