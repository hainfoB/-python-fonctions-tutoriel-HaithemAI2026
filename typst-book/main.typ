#import "report-theme.typ": report-accent, report-theme

#show: report-theme.with(
  title: "Berkane Lab — Python Intensive Manual",
  author: "M. Haithem BERKANE",
  rhythm: "report",
  running-header: true,
)

#set page(numbering: "1", header: [*Berkane Lab · Python Intensive Manual*], footer: [M. Haithem BERKANE · Berkane Lab · #context counter(page).display()])

#page(margin: (top: 18%, bottom: 16%, x: 2.2cm), numbering: none, header: none, footer: none)[
  #align(center)[
    #image("berkane-lab-mark.png", width: 3.2cm)
    #v(1.4em)
    #text(size: 30pt, weight: "bold", fill: report-accent)[Berkane Lab]
    #v(0.5em)
    #text(size: 25pt, weight: "bold")[Python Intensive Manual]
    #v(0.8em)
    #text(size: 14pt, fill: luma(90))[Memory traces · conditions · loops · Bloom taxonomy · competency-based learning]
    #v(2em)
    #line(length: 65%, stroke: 1pt + report-accent)
    #v(2em)
    #text(size: 13pt)[English edition]
    #v(0.5em)
    #text(size: 14pt, weight: "bold")[M. Haithem BERKANE]
    #v(0.5em)
    #text(size: 10pt, fill: luma(80))[Learning engineering · Artificial intelligence · Python education]
    #v(3em)
    #text(size: 10pt)[Fourteen learning paths · 140 worked examples · 210 solved exercises]
  ]
]

#page(numbering: none, header: none, footer: none)[
  = Preface
  This English edition is designed as a complete teaching companion for a learner who needs to move from code reading to independent algorithmic reasoning. The book combines worked situations, corrected exercises, symbolic memory traces, intermediate values and complexity analysis. It is intended for classroom remediation, guided self-study and competency-based assessment.

  == How to use this book
  For every scene, first read the situation and predict the next state. Then inspect the code line by line. Record the value stored in each variable, identify the active branch or iteration, and state the time and space complexity. Finally, explain the result in your own words.

  == Content at a glance
  #table(columns: (1fr, 1fr), inset: 8pt, stroke: 0.4pt + luma(180), [*Learning paths*], [*14*], [*Worked examples*], [*140*], [*Solved exercises*], [*210*], [*Minimum progression score*], [*80% per path*], [*Languages*], [*English edition with French/English source content*])

  == Learning objectives
  By the end of this manual, the learner should be able to read Python syntax, predict intermediate values, trace variables through symbolic memory, explain conditions and loops, estimate time and space complexity, and defend a corrected solution with a boundary case.

  == Bloom progression
  Each path moves from remembering vocabulary to understanding traces, applying a pattern, analysing states and evaluating a solution. The memory laboratory makes the cognitive operation visible: the learner does not only see the final output, but also the values and decisions that produce it.

  == A note about compilation and memory
  Python source code is first read and compiled into an executable internal representation before the Python virtual machine executes it. This book uses a conceptual model rather than physical machine addresses. A symbolic address such as 0x1000 names a teaching location; it helps the learner distinguish a variable, its current value, a call frame and an output event.
]

#page(numbering: none, header: none, footer: none)[
  = Contents
  #outline(title: none, indent: 1.2em)
]

#pagebreak()
= Author profile

#image("berkane-lab-mark.png", width: 2.2cm)

*M. Haithem BERKANE* is a software architect, senior IT consultant, artificial-intelligence practitioner and certified instructional-engineering professional. His work connects digital transformation, data, generative AI and accessible technical education.

== Professional summary

He has worked as an independent AI consultant since 2021, supporting organisations with RAG architectures, private language-model solutions, data governance, full-stack systems and predictive analysis. He previously led business projects at Condor Academy, including institutional accreditation, ERP/SAP FICO integration, LMS deployment and digital-platform implementation. Earlier work as a specialised teacher and CIP instructional engineer shaped the remediation-oriented method used in this book.

== Selected experience and portfolio

#table(columns: (2.2cm, 1fr), inset: 7pt, stroke: 0.35pt + luma(185), [*Period*], [*Experience*], [*2021–present*], [Independent AI consultant and senior IT expert; RAG, LLM, data governance, architecture and mentoring.], [*2019–2020*], [Project business director at Condor Academy; SAP FICO, LMS, institutional projects and digital infrastructure.], [*2014–2021*], [Specialised teacher and CIP instructional engineer; continuing education and programme design.], [*Selected projects*], [Python and C educational simulator, ASR PRO secure online assessment, Moufid BI financial intelligence, Zakat Fitr civic platform.])

== Educational impact

The author has created interactive learning resources, mentored students and teachers, delivered online sessions in Python, data analysis and AI, and supported learners in Algeria and the Algerian diaspora. This manual is part of that effort: it treats errors as information, makes reasoning observable and turns each correction into evidence of a competency.

#pagebreak()
= Learning method

The course follows a repeated cycle: *observe → predict → execute → explain → verify*. Each chapter begins with definitions and a model situation. The learner then examines worked examples, opens corrected exercises, and uses the memory laboratory to inspect state transitions.

== Competency evidence

A solution is not considered complete because it produces the expected output. The learner must also justify the control flow, identify the changing values, estimate complexity and explain why the algorithm terminates or returns the result.

== Complexity vocabulary

*Time complexity* estimates how the number of operations grows with the input size. *Space complexity* estimates additional memory used by the algorithm. A single arithmetic instruction is generally O(1); one complete traversal is generally O(n); two nested traversals may be O(n²). These are educational asymptotic models, not stopwatch measurements.


#pagebreak()
= 1. #text("Python foundations")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Remember").  
*Competency focus:* #text("Identify a variable, its type and its current value.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("identify a variable, its type and its current value."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("identify a variable, its type and its current value."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Display")

*Situation.* #text("An association displays a welcome message.")

#raw(block: true, lang: "python", "prenom = \"Lina\"\nprint(\"Bienvenue\", prenom)")

*Detailed walkthrough.* #text("print assembles the message and variable.")

*Memory trace.*
1. #text("prenom = \"Lina\"\nprint(\"Bienvenue\", prenom)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Conversion")

*Situation.* #text("A typed age must enter a calculation.")

#raw(block: true, lang: "python", "age = int(\"16\")\nprint(age + 2)")

*Detailed walkthrough.* #text("int turns text into an integer.")

*Memory trace.*
1. #text("age = int(\"16\")\nprint(age + 2)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Price")

*Situation.* #text("Two prices are added for an order.")

#raw(block: true, lang: "python", "a = float(\"12.5\")\nb = float(\"7.5\")\nprint(a + b)")

*Detailed walkthrough.* #text("float enables decimal calculation.")

*Memory trace.*
1. #text("a = float(\"12.5\")\nb = float(\"7.5\")\nprint(a + b)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Type")

*Situation.* #text("We check a value type.")

#raw(block: true, lang: "python", "valeur = 12\nprint(type(valeur).__name__)")

*Detailed walkthrough.* #text("type describes the value, not its name.")

*Memory trace.*
1. #text("valeur = 12\nprint(type(valeur).__name__)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Safe input")

*Situation.* #text("A conversion is explained before display.")

#raw(block: true, lang: "python", "texte = \"42\"\nnombre = int(texte)\nprint(nombre, nombre * 2)")

*Detailed walkthrough.* #text("The same data can be text then number after conversion.")

*Memory trace.*
1. #text("texte = \"42\"\nnombre = int(texte)\nprint(nombre, nombre * 2)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("01 · Average speed")

*Situation.* #text("A cyclist covers 42 km in 2 h.")

#raw(block: true, lang: "python", "distance = 42\nduree = 2\nprint(distance / duree)")

*Detailed walkthrough.* #text("Average speed is distance divided by time.")

*Memory trace.*
1. #text("distance = 42\nduree = 2\nprint(distance / duree)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("02 · Kelvin")

*Situation.* #text("A lab converts 25°C to kelvins.")

#raw(block: true, lang: "python", "celsius = 25\nkelvin = celsius + 273.15\nprint(kelvin)")

*Detailed walkthrough.* #text("The conversion adds 273.15 without modifying the initial value.")

*Memory trace.*
1. #text("celsius = 25\nkelvin = celsius + 273.15\nprint(kelvin)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("03 · Energy")

*Situation.* #text("Potential energy is estimated from mass, g, and height.")

#raw(block: true, lang: "python", "masse = 2\ng = 9.81\nhauteur = 3\nprint(masse * g * hauteur)")

*Detailed walkthrough.* #text("Each variable carries a unit and the formula is translated directly.")

*Memory trace.*
1. #text("masse = 2\ng = 9.81\nhauteur = 3\nprint(masse * g * hauteur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("04 · Heart rate")

*Situation.* #text("A session calculates a theoretical maximum heart rate.")

#raw(block: true, lang: "python", "age = 16\nfcm = 220 - age\nprint(fcm)")

*Detailed walkthrough.* #text("The formula links an input value to a constant.")

*Memory trace.*
1. #text("age = 16\nfcm = 220 - age\nprint(fcm)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("05 · Ohm law")

*Situation.* #text("A circuit knows voltage and resistance.")

#raw(block: true, lang: "python", "tension = 12\nresistance = 6\nintensite = tension / resistance\nprint(intensite)")

*Detailed walkthrough.* #text("intensite receives the quotient U/R.")

*Memory trace.*
1. #text("tension = 12\nresistance = 6\nintensite = tension / resistance\nprint(intensite)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · City")

*Task.* #text("Ask for a city and display a welcome.")

#raw(block: true, lang: "python", "ville = input(\"Ville : \")\nprint(\"Bienvenue à\", ville)")

*Correction.* #text("input provides text; print displays.")

*Memory trace.*
1. #text("ville = input(\"Ville : \")\nprint(\"Bienvenue à\", ville)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Age")

*Task.* #text("Ask for age and add 1.")

#raw(block: true, lang: "python", "age = int(input(\"Age : \"))\nprint(age + 1)")

*Correction.* #text("Convert before calculating.")

*Memory trace.*
1. #text("age = int(input(\"Age : \"))\nprint(age + 1)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Celsius")

*Task.* #text("Convert 20°C to Fahrenheit.")

#raw(block: true, lang: "python", "c = 20\nprint(c * 9 / 5 + 32)")

*Correction.* #text("Apply the formula after assignment.")

*Memory trace.*
1. #text("c = 20\nprint(c * 9 / 5 + 32)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Rectangle")

*Task.* #text("Calculate an area.")

#raw(block: true, lang: "python", "longueur, largeur = 5, 3\nprint(longueur * largeur)")

*Correction.* #text("Area is a product.")

*Memory trace.*
1. #text("longueur, largeur = 5, 3\nprint(longueur * largeur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Remainder")

*Task.* #text("Find remainder of 17 by 5.")

#raw(block: true, lang: "python", "print(17 % 5)")

*Correction.* #text("% gives the remainder.")

*Memory trace.*
1. #text("print(17 % 5)") → output event: current memory values are sent to the screen.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Text")

*Task.* #text("Combine first name and city.")

#raw(block: true, lang: "python", "print(\"Lina\" + \" · Oran\")")

*Correction.* #text("+ concatenates text.")

*Memory trace.*
1. #text("print(\"Lina\" + \" · Oran\")") → output event: current memory values are sent to the screen.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Rounding")

*Task.* #text("Round a price.")

#raw(block: true, lang: "python", "print(round(12.567, 2))")

*Correction.* #text("round limits decimal places.")

*Memory trace.*
1. #text("print(round(12.567, 2))") → output event: current memory values are sent to the screen.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Boolean")

*Task.* #text("Check if 12 is positive.")

#raw(block: true, lang: "python", "print(12 > 0)")

*Correction.* #text("The comparison returns True.")

*Memory trace.*
1. #text("print(12 > 0)") → output event: current memory values are sent to the screen.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Swap")

*Task.* #text("Swap two variables.")

#raw(block: true, lang: "python", "a, b = 2, 5\na, b = b, a")

*Correction.* #text("Python supports multiple assignment.")

*Memory trace.*
1. #text("a, b = 2, 5\na, b = b, a") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Output")

*Task.* #text("Display a readable result.")

#raw(block: true, lang: "python", "score = 15\nprint(\"Score :\", score, \"/ 20\")")

*Correction.* #text("Commas separate displayed items.")

*Memory trace.*
1. #text("score = 15\nprint(\"Score :\", score, \"/ 20\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Flow rate")

*Task.* #text("Calculate the flow rate of 10 L in 5 min.")

#raw(block: true, lang: "python", "volume = 10\nduree = 5\nprint(volume / duree)")

*Correction.* #text("Flow rate is volume divided by time.")

*Memory trace.*
1. #text("volume = 10\nduree = 5\nprint(volume / duree)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Density")

*Task.* #text("Calculate density for 250 g in 100 cm³.")

#raw(block: true, lang: "python", "masse = 250\nvolume = 100\nprint(masse / volume)")

*Correction.* #text("The formula rho = m/V becomes a division.")

*Memory trace.*
1. #text("masse = 250\nvolume = 100\nprint(masse / volume)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · MET calories")

*Task.* #text("Estimate 8 kcal per minute for 30 minutes.")

#raw(block: true, lang: "python", "kcal_minute = 8\nduree = 30\nprint(kcal_minute * duree)")

*Correction.* #text("The total is duration × expenditure.")

*Memory trace.*
1. #text("kcal_minute = 8\nduree = 30\nprint(kcal_minute * duree)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · DNA to RNA")

*Task.* #text("Replace thymine T with U in a sequence.")

#raw(block: true, lang: "python", "adn = \"ATGCTT\"\nprint(adn.replace(\"T\", \"U\"))")

*Correction.* #text("replace transforms a string without an explicit loop.")

*Memory trace.*
1. #text("adn = \"ATGCTT\"\nprint(adn.replace(\"T\", \"U\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Pendulum")

*Task.* #text("Calculate period with T = 2*pi*sqrt(L/g).")

#raw(block: true, lang: "python", "from math import pi, sqrt\nlongueur = 1\ng = 9.81\nprint(2 * pi * sqrt(longueur / g))")

*Correction.* #text("The math library provides pi and sqrt.")

*Memory trace.*
1. #text("from math import pi, sqrt\nlongueur = 1\ng = 9.81\nprint(2 * pi * sqrt(longueur / g))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 2. #text("Overview: decisions and repetition")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Understand").  
*Competency focus:* #text("Explain why a branch or repetition path is selected.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("explain why a branch or repetition path is selected."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("explain why a branch or repetition path is selected."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Evenness")

*Situation.* #text("A checkout distinguishes even and odd tickets.")

#raw(block: true, lang: "python", "n = 18\nif n % 2 == 0: print(\"pair\")\nelse: print(\"impair\")")

*Detailed walkthrough.* #text("Remainder 0 identifies an even number.")

*Memory trace.*
1. #text("n = 18\nif n % 2 == 0: print(\"pair\")\nelse: print(\"impair\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Threshold")

*Situation.* #text("A score determines success.")

#raw(block: true, lang: "python", "score = 14\nif score >= 10: print(\"réussi\")\nelse: print(\"à revoir\")")

*Detailed walkthrough.* #text("The comparison selects a branch.")

*Memory trace.*
1. #text("score = 14\nif score >= 10: print(\"réussi\")\nelse: print(\"à revoir\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Category")

*Situation.* #text("A temperature receives a label.")

#raw(block: true, lang: "python", "t = 28\nif t < 10: cat = \"froid\"\nelif t < 25: cat = \"doux\"\nelse: cat = \"chaud\"")

*Detailed walkthrough.* #text("Thresholds are tested in order.")

*Memory trace.*
1. #text("t = 28\nif t < 10: cat = \"froid\"\nelif t < 25: cat = \"doux\"\nelse: cat = \"chaud\"") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Counter")

*Situation.* #text("Count five passes.")

#raw(block: true, lang: "python", "compteur = 0\nfor i in range(5): compteur += 1\nprint(compteur)")

*Detailed walkthrough.* #text("The counter changes each turn.")

*Memory trace.*
1. #text("compteur = 0\nfor i in range(5): compteur += 1\nprint(compteur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Accumulator")

*Situation.* #text("Total even numbers from 1 to 6.")

#raw(block: true, lang: "python", "total = 0\nfor n in range(1, 7):\n    if n % 2 == 0: total += n\nprint(total)")

*Detailed walkthrough.* #text("Only 2, 4 and 6 change total.")

*Memory trace.*
1. #text("total = 0\nfor n in range(1, 7):\n    if n % 2 == 0: total += n\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Water states")

*Situation.* #text("Classify water by temperature.")

#raw(block: true, lang: "python", "t = -4\nif t < 0: print(\"solide\")\nelif t < 100: print(\"liquide\")\nelse: print(\"gaz\")")

*Detailed walkthrough.* #text("Thresholds 0 and 100 form three intervals.")

*Memory trace.*
1. #text("t = -4\nif t < 0: print(\"solide\")\nelif t < 100: print(\"liquide\")\nelse: print(\"gaz\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · BMI")

*Situation.* #text("A learning diagnostic classifies BMI.")

#raw(block: true, lang: "python", "imc = 27.4\nif imc < 18.5: c = \"insuffisant\"\nelif imc < 25: c = \"normal\"\nelif imc < 30: c = \"surpoids\"\nelse: c = \"obésité\"\nprint(c)")

*Detailed walkthrough.* #text("Conditions are ordered from the lowest to the highest threshold.")

*Memory trace.*
1. #text("imc = 27.4\nif imc < 18.5: c = \"insuffisant\"\nelif imc < 25: c = \"normal\"\nelif imc < 30: c = \"surpoids\"\nelse: c = \"obésité\"\nprint(c)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Triangle")

*Situation.* #text("A triangle is identified from its three sides.")

#raw(block: true, lang: "python", "a, b, c = 3, 3, 5\nif a == b == c: print(\"équilatéral\")\nelif a == b or a == c or b == c: print(\"isocèle\")\nelse: print(\"scalène\")")

*Detailed walkthrough.* #text("Comparisons describe side equality.")

*Memory trace.*
1. #text("a, b, c = 3, 3, 5\nif a == b == c: print(\"équilatéral\")\nelif a == b or a == c or b == c: print(\"isocèle\")\nelse: print(\"scalène\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · pH")

*Situation.* #text("A solution is acidic, neutral, or basic.")

#raw(block: true, lang: "python", "ph = 8.2\nif ph < 7: print(\"acide\")\nelif ph == 7: print(\"neutre\")\nelse: print(\"basique\")")

*Detailed walkthrough.* #text("The three branches cover the three pH zones.")

*Memory trace.*
1. #text("ph = 8.2\nif ph < 7: print(\"acide\")\nelif ph == 7: print(\"neutre\")\nelse: print(\"basique\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · UV index")

*Situation.* #text("An app recommends protection from the UV index.")

#raw(block: true, lang: "python", "uv = 7\nif uv <= 2: conseil = \"faible\"\nelif uv <= 5: conseil = \"modérée\"\nelse: conseil = \"forte\"\nprint(conseil)")

*Detailed walkthrough.* #text("An inclusive threshold is written with <=.")

*Memory trace.*
1. #text("uv = 7\nif uv <= 2: conseil = \"faible\"\nelif uv <= 5: conseil = \"modérée\"\nelse: conseil = \"forte\"\nprint(conseil)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Positive")

*Task.* #text("Test whether a number is positive.")

#raw(block: true, lang: "python", "n = -2\nprint(n > 0)")

*Correction.* #text("One comparison is enough.")

*Memory trace.*
1. #text("n = -2\nprint(n > 0)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Grade")

*Task.* #text("Display passed if grade >= 10.")

#raw(block: true, lang: "python", "note = 11\nprint(\"admis\" if note >= 10 else \"refusé\")")

*Correction.* #text("Short conditional expression.")

*Memory trace.*
1. #text("note = 11\nprint(\"admis\" if note >= 10 else \"refusé\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Multiple")

*Task.* #text("Test multiple of 3.")

#raw(block: true, lang: "python", "n = 12\nprint(n % 3 == 0)")

*Correction.* #text("Zero remainder means divisible.")

*Memory trace.*
1. #text("n = 12\nprint(n % 3 == 0)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Three cases")

*Task.* #text("Class a speed slow, normal, or fast.")

#raw(block: true, lang: "python", "v = 65\nif v < 50: r=\"lente\"\nelif v <= 90: r=\"normale\"\nelse: r=\"rapide\"")

*Correction.* #text("elif handles the middle case.")

*Memory trace.*
1. #text("v = 65\nif v < 50: r=\"lente\"\nelif v <= 90: r=\"normale\"\nelse: r=\"rapide\"") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Sum")

*Task.* #text("Add 1 to 5.")

#raw(block: true, lang: "python", "total = 0\nfor n in range(1, 6): total += n")

*Correction.* #text("The final total is 15.")

*Memory trace.*
1. #text("total = 0\nfor n in range(1, 6): total += n") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Repeat")

*Task.* #text("Display a signal three times.")

#raw(block: true, lang: "python", "for _ in range(3): print(\"go\")")

*Correction.* #text("_ signals the index is unused.")

*Memory trace.*
1. #text("for _ in range(3): print(\"go\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · While")

*Task.* #text("Count to 3 with while.")

#raw(block: true, lang: "python", "i = 1\nwhile i <= 3:\n    print(i); i += 1")

*Correction.* #text("The condition eventually becomes False.")

*Memory trace.*
1. #text("i = 1\nwhile i <= 3:\n    print(i); i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Filter")

*Task.* #text("Count values > 10.")

#raw(block: true, lang: "python", "compte = 0\nfor n in [8, 12, 15]:\n    if n > 10: compte += 1")

*Correction.* #text("The condition controls the counter.")

*Memory trace.*
1. #text("compte = 0\nfor n in [8, 12, 15]:\n    if n > 10: compte += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Maximum")

*Task.* #text("Find maximum of three values.")

#raw(block: true, lang: "python", "maximum = 0\nfor n in [4, 9, 2]:\n    if n > maximum: maximum = n")

*Correction.* #text("Each value is compared.")

*Memory trace.*
1. #text("maximum = 0\nfor n in [4, 9, 2]:\n    if n > maximum: maximum = n") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Stop")

*Task.* #text("Stop when 4 appears.")

#raw(block: true, lang: "python", "for n in [1, 4, 7]:\n    if n == 4: break")

*Correction.* #text("break interrupts the loop.")

*Memory trace.*
1. #text("for n in [1, 4, 7]:\n    if n == 4: break") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Archimedes")

*Task.* #text("Say whether an object floats when its density is lower than water.")

#raw(block: true, lang: "python", "densite = 0.8\nprint(\"flotte\" if densite < 1 else \"coule\")")

*Correction.* #text("The comparison chooses the physical outcome.")

*Memory trace.*
1. #text("densite = 0.8\nprint(\"flotte\" if densite < 1 else \"coule\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Leap year")

*Task.* #text("Test the leap-year rule.")

#raw(block: true, lang: "python", "annee = 2024\nprint(annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0))")

*Correction.* #text("and/or operators transcribe the logical rule.")

*Memory trace.*
1. #text("annee = 2024\nprint(annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Lens")

*Task.* #text("Class a lens from its power.")

#raw(block: true, lang: "python", "vergence = -2\nprint(\"convergente\" if vergence > 0 else \"divergente\")")

*Correction.* #text("The sign of power is enough for this classification.")

*Memory trace.*
1. #text("vergence = -2\nprint(\"convergente\" if vergence > 0 else \"divergente\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Blood pressure")

*Task.* #text("Flag systolic pressure above 140.")

#raw(block: true, lang: "python", "systolique = 145\nif systolique > 140: print(\"à surveiller\")\nelse: print(\"dans la zone\")")

*Correction.* #text("The threshold triggers information, not a medical diagnosis.")

*Memory trace.*
1. #text("systolique = 145\nif systolique > 140: print(\"à surveiller\")\nelse: print(\"dans la zone\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Pythagorean theorem")

*Task.* #text("Check if three lengths form a right triangle.")

#raw(block: true, lang: "python", "a, b, c = 3, 4, 5\nprint(a*a + b*b == c*c)")

*Correction.* #text("The square of the hypotenuse is compared with the sum of squares.")

*Memory trace.*
1. #text("a, b, c = 3, 4, 5\nprint(a*a + b*b == c*c)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 3. #text("Vectors and lists")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Analyze").  
*Competency focus:* #text("Distinguish positions, values and accumulators.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("distinguish positions, values and accumulators."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("distinguish positions, values and accumulators."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Sales total")

*Situation.* #text("A shop wants the day total.")

#raw(block: true, lang: "python", "ventes = [12, 8, 15]\ntotal = sum(ventes)\nprint(total)")

*Detailed walkthrough.* #text("sum traverses the vector and returns 35.")

*Memory trace.*
1. #text("ventes = [12, 8, 15]\ntotal = sum(ventes)\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Maximum temperature")

*Situation.* #text("A station records four temperatures and finds the peak.")

#raw(block: true, lang: "python", "temperatures = [18, 22, 19, 25]\nmaximum = temperatures[0]\nfor t in temperatures:\n    if t > maximum: maximum = t\nprint(maximum)")

*Detailed walkthrough.* #text("The maximum reference is replaced only by a larger value.")

*Memory trace.*
1. #text("temperatures = [18, 22, 19, 25]\nmaximum = temperatures[0]\nfor t in temperatures:\n    if t > maximum: maximum = t\nprint(maximum)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Filter passes")

*Situation.* #text("A class keeps grades that validate the skill.")

#raw(block: true, lang: "python", "notes = [8, 12, 15, 9]\nreussites = []\nfor note in notes:\n    if note >= 10: reussites.append(note)\nprint(reussites)")

*Detailed walkthrough.* #text("A new list receives only values that pass.")

*Memory trace.*
1. #text("notes = [8, 12, 15, 9]\nreussites = []\nfor note in notes:\n    if note >= 10: reussites.append(note)\nprint(reussites)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Reverse a route")

*Situation.* #text("A route must be read in return order.")

#raw(block: true, lang: "python", "etapes = [\"A\", \"B\", \"C\"]\nprint(etapes[::-1])")

*Detailed walkthrough.* #text("-1 slicing reads the list from right to left.")

*Memory trace.*
1. #text("etapes = [\"A\", \"B\", \"C\"]\nprint(etapes[::-1])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Checked mean")

*Situation.* #text("An empty vector must not cause division by zero.")

#raw(block: true, lang: "python", "notes = []\nif notes:\n    print(sum(notes) / len(notes))\nelse:\n    print(\"Aucune note\")")

*Detailed walkthrough.* #text("The non-empty check protects the calculation.")

*Memory trace.*
1. #text("notes = []\nif notes:\n    print(sum(notes) / len(notes))\nelse:\n    print(\"Aucune note\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Daily speed")

*Situation.* #text("A vector stores four daily distances.")

#raw(block: true, lang: "python", "distances = [12, 18, 15, 21]\nfor d in distances: print(d / 2)")

*Detailed walkthrough.* #text("Traversal applies the same rule to every measurement.")

*Memory trace.*
1. #text("distances = [12, 18, 15, 21]\nfor d in distances: print(d / 2)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Filtered temperatures")

*Situation.* #text("A station keeps temperatures above 20°C.")

#raw(block: true, lang: "python", "mesures = [18, 22, 25, 19]\nchaudes = [t for t in mesures if t > 20]\nprint(chaudes)")

*Detailed walkthrough.* #text("Filtering builds a more focused list.")

*Memory trace.*
1. #text("mesures = [18, 22, 25, 19]\nchaudes = [t for t in mesures if t > 20]\nprint(chaudes)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Total energy")

*Situation.* #text("A vector contains energies measured during an experiment.")

#raw(block: true, lang: "python", "energies = [3.2, 4.1, 2.7]\nprint(sum(energies))")

*Detailed walkthrough.* #text("sum gives the total without losing original values.")

*Memory trace.*
1. #text("energies = [3.2, 4.1, 2.7]\nprint(sum(energies))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Peak position")

*Situation.* #text("Find the day corresponding to the maximum temperature.")

#raw(block: true, lang: "python", "temperatures = [19, 24, 22, 27]\nprint(temperatures.index(max(temperatures)))")

*Detailed walkthrough.* #text("index turns the maximum value into a position.")

*Memory trace.*
1. #text("temperatures = [19, 24, 22, 27]\nprint(temperatures.index(max(temperatures)))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Normalization")

*Situation.* #text("Measurements are scaled between 0 and 1.")

#raw(block: true, lang: "python", "mesures = [10, 20, 30]\nmini, maxi = min(mesures), max(mesures)\nprint([(x-mini)/(maxi-mini) for x in mesures])")

*Detailed walkthrough.* #text("The formula uses both vector extremes.")

*Memory trace.*
1. #text("mesures = [10, 20, 30]\nmini, maxi = min(mesures), max(mesures)\nprint([(x-mini)/(maxi-mini) for x in mesures])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Count")

*Task.* #text("Count even values.")

#raw(block: true, lang: "python", "valeurs = [2, 5, 8]\nprint(sum(n % 2 == 0 for n in valeurs))")

*Correction.* #text("Each comparison produces True or False, counted as 1 or 0.")

*Memory trace.*
1. #text("valeurs = [2, 5, 8]\nprint(sum(n % 2 == 0 for n in valeurs))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Minimum")

*Task.* #text("Find the smallest item without min().")

#raw(block: true, lang: "python", "valeurs = [7, 3, 9]\nminimum = valeurs[0]\nfor v in valeurs:\n    if v < minimum: minimum = v\nprint(minimum)")

*Correction.* #text("Initialize with the first item to avoid an arbitrary value.")

*Memory trace.*
1. #text("valeurs = [7, 3, 9]\nminimum = valeurs[0]\nfor v in valeurs:\n    if v < minimum: minimum = v\nprint(minimum)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Indices")

*Task.* #text("Display each index and value.")

#raw(block: true, lang: "python", "for i in range(len(valeurs)):\n    print(i, valeurs[i])")

*Correction.* #text("range traverses positions; valeurs[i] reads data.")

*Memory trace.*
1. #text("for i in range(len(valeurs)):\n    print(i, valeurs[i])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Shift")

*Task.* #text("Add 2 to each item.")

#raw(block: true, lang: "python", "valeurs = [1, 4, 7]\nmodifiees = [v + 2 for v in valeurs]")

*Correction.* #text("A comprehension builds a new list.")

*Memory trace.*
1. #text("valeurs = [1, 4, 7]\nmodifiees = [v + 2 for v in valeurs]") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Duplicates")

*Task.* #text("Remove duplicates while preserving order.")

#raw(block: true, lang: "python", "sortie = []\nfor v in [2, 2, 3, 2]:\n    if v not in sortie: sortie.append(v)")

*Correction.* #text("in checks existence before append.")

*Memory trace.*
1. #text("sortie = []\nfor v in [2, 2, 3, 2]:\n    if v not in sortie: sortie.append(v)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Rotation")

*Task.* #text("Move the first item to the end.")

#raw(block: true, lang: "python", "valeurs = [\"A\", \"B\", \"C\"]\nvaleurs = valeurs[1:] + valeurs[:1]")

*Correction.* #text("Two slices rebuild the sequence.")

*Memory trace.*
1. #text("valeurs = [\"A\", \"B\", \"C\"]\nvaleurs = valeurs[1:] + valeurs[:1]") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Filtered sum")

*Task.* #text("Add only positive values.")

#raw(block: true, lang: "python", "total = 0\nfor v in [-2, 4, -1, 6]:\n    if v > 0: total += v")

*Correction.* #text("The accumulator changes only for kept values.")

*Memory trace.*
1. #text("total = 0\nfor v in [-2, 4, -1, 6]:\n    if v > 0: total += v") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Search index")

*Task.* #text("Find the first position of 9.")

#raw(block: true, lang: "python", "valeurs = [4, 9, 2]\nfor i, v in enumerate(valeurs):\n    if v == 9: print(i); break")

*Correction.* #text("enumerate gives index and value; break stops at first.")

*Memory trace.*
1. #text("valeurs = [4, 9, 2]\nfor i, v in enumerate(valeurs):\n    if v == 9: print(i); break") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Sorting")

*Task.* #text("Sort a temperature list.")

#raw(block: true, lang: "python", "temperatures = [23, 18, 25]\nprint(sorted(temperatures))")

*Correction.* #text("sorted creates a new sorted list.")

*Memory trace.*
1. #text("temperatures = [23, 18, 25]\nprint(sorted(temperatures))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Spread")

*Task.* #text("Calculate max-min spread.")

#raw(block: true, lang: "python", "valeurs = [4, 10, 7]\nprint(max(valeurs) - min(valeurs))")

*Correction.* #text("The spread describes the distance between extremes.")

*Memory trace.*
1. #text("valeurs = [4, 10, 7]\nprint(max(valeurs) - min(valeurs))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Average speed")

*Task.* #text("Calculate the mean of four speeds.")

#raw(block: true, lang: "python", "vitesses = [8, 10, 12, 10]\nprint(sum(vitesses) / len(vitesses))")

*Correction.* #text("The count comes from the list itself.")

*Memory trace.*
1. #text("vitesses = [8, 10, 12, 10]\nprint(sum(vitesses) / len(vitesses))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Negative values")

*Task.* #text("Count temperatures below zero.")

#raw(block: true, lang: "python", "temperatures = [-2, 4, -1, 3]\nprint(sum(t < 0 for t in temperatures))")

*Correction.* #text("Booleans can be added as 0 and 1.")

*Memory trace.*
1. #text("temperatures = [-2, 4, -1, 3]\nprint(sum(t < 0 for t in temperatures))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Accumulation")

*Task.* #text("Calculate cumulative distance.")

#raw(block: true, lang: "python", "distances = [2, 3, 4]\ncumul = 0\nfor d in distances:\n    cumul += d\nprint(cumul)")

*Correction.* #text("The accumulator keeps state between turns.")

*Memory trace.*
1. #text("distances = [2, 3, 4]\ncumul = 0\nfor d in distances:\n    cumul += d\nprint(cumul)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Maximum index")

*Task.* #text("Find the position of the largest current.")

#raw(block: true, lang: "python", "courants = [2.1, 3.4, 2.8]\nprint(courants.index(max(courants)))")

*Correction.* #text("max then index link value and position.")

*Memory trace.*
1. #text("courants = [2.1, 3.4, 2.8]\nprint(courants.index(max(courants)))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Units")

*Task.* #text("Convert all lengths from cm to m.")

#raw(block: true, lang: "python", "longueurs = [30, 45, 120]\nprint([x / 100 for x in longueurs])")

*Correction.* #text("The comprehension applies the conversion to every item.")

*Memory trace.*
1. #text("longueurs = [30, 45, 120]\nprint([x / 100 for x in longueurs])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 4. #text("Dictionaries")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Analyze").  
*Competency focus:* #text("Relate a meaningful key to its associated value.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("relate a meaningful key to its associated value."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("relate a meaningful key to its associated value."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Profile")

*Situation.* #text("A profile groups name, city, and age.")

#raw(block: true, lang: "python", "profil = {\"nom\": \"Lina\", \"ville\": \"Oran\", \"age\": 16}\nprint(profil[\"ville\"])")

*Detailed walkthrough.* #text("The city key gives explicit access.")

*Memory trace.*
1. #text("profil = {\"nom\": \"Lina\", \"ville\": \"Oran\", \"age\": 16}\nprint(profil[\"ville\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Inventory")

*Situation.* #text("A sale decreases existing stock.")

#raw(block: true, lang: "python", "stock = {\"clavier\": 8, \"souris\": 12}\nstock[\"clavier\"] -= 1")

*Detailed walkthrough.* #text("Assignment on a key updates its value.")

*Memory trace.*
1. #text("stock = {\"clavier\": 8, \"souris\": 12}\nstock[\"clavier\"] -= 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Safe contact")

*Situation.* #text("A contact may have no phone.")

#raw(block: true, lang: "python", "contact = {\"nom\": \"Ali\"}\nprint(contact.get(\"telephone\", \"Absent\"))")

*Detailed walkthrough.* #text("get avoids KeyError and provides a fallback.")

*Memory trace.*
1. #text("contact = {\"nom\": \"Ali\"}\nprint(contact.get(\"telephone\", \"Absent\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Subject grades")

*Situation.* #text("A dictionary maps each subject to a grade.")

#raw(block: true, lang: "python", "notes = {\"maths\": 15, \"python\": 17}\nfor matiere, note in notes.items():\n    print(matiere, note)")

*Detailed walkthrough.* #text("items gives the key-value pair.")

*Memory trace.*
1. #text("notes = {\"maths\": 15, \"python\": 17}\nfor matiere, note in notes.items():\n    print(matiere, note)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Total inventory")

*Situation.* #text("An inventory calculates total quantity.")

#raw(block: true, lang: "python", "stock = {\"livres\": 4, \"cahiers\": 9}\nprint(sum(stock.values()))")

*Detailed walkthrough.* #text("values extracts quantities without keys.")

*Memory trace.*
1. #text("stock = {\"livres\": 4, \"cahiers\": 9}\nprint(sum(stock.values()))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Scientific measurement")

*Situation.* #text("A dictionary links a value to its unit and sensor.")

#raw(block: true, lang: "python", "mesure = {\"valeur\": 21.4, \"unite\": \"°C\", \"capteur\": \"S1\"}\nprint(mesure[\"valeur\"], mesure[\"unite\"])")

*Detailed walkthrough.* #text("Keys make the value’s context explicit.")

*Memory trace.*
1. #text("mesure = {\"valeur\": 21.4, \"unite\": \"°C\", \"capteur\": \"S1\"}\nprint(mesure[\"valeur\"], mesure[\"unite\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Frequency by sport")

*Situation.* #text("A sports profile stores heart rate by activity.")

#raw(block: true, lang: "python", "fc = {\"repos\": 65, \"course\": 154}\nprint(fc.get(\"natation\", \"non mesurée\"))")

*Detailed walkthrough.* #text("get handles an activity not yet recorded.")

*Memory trace.*
1. #text("fc = {\"repos\": 65, \"course\": 154}\nprint(fc.get(\"natation\", \"non mesurée\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Chemical composition")

*Situation.* #text("Mixture proportions are stored by element.")

#raw(block: true, lang: "python", "proportions = {\"eau\": 70, \"sel\": 5, \"solvant\": 25}\nprint(sum(proportions.values()))")

*Detailed walkthrough.* #text("values makes it possible to check total proportions.")

*Memory trace.*
1. #text("proportions = {\"eau\": 70, \"sel\": 5, \"solvant\": 25}\nprint(sum(proportions.values()))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Count categories")

*Situation.* #text("A dictionary counts observations by category.")

#raw(block: true, lang: "python", "compte = {}\nfor etat in [\"solide\", \"liquide\", \"liquide\"]:\n    compte[etat] = compte.get(etat, 0) + 1\nprint(compte)")

*Detailed walkthrough.* #text("get provides zero on the first occurrence of a category.")

*Memory trace.*
1. #text("compte = {}\nfor etat in [\"solide\", \"liquide\", \"liquide\"]:\n    compte[etat] = compte.get(etat, 0) + 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Configuration")

*Situation.* #text("A protocol keeps named experimental parameters.")

#raw(block: true, lang: "python", "protocole = {\"duree\": 60, \"temperature\": 25, \"agitation\": True}\nfor cle, valeur in protocole.items(): print(cle, valeur)")

*Detailed walkthrough.* #text("items traverses configuration without losing parameter names.")

*Memory trace.*
1. #text("protocole = {\"duree\": 60, \"temperature\": 25, \"agitation\": True}\nfor cle, valeur in protocole.items(): print(cle, valeur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Add")

*Task.* #text("Add an email key to a profile.")

#raw(block: true, lang: "python", "profil = {\"nom\": \"Sara\"}\nprofil[\"email\"] = \"sara@mail.test\"")

*Correction.* #text("A new key is created by assignment.")

*Memory trace.*
1. #text("profil = {\"nom\": \"Sara\"}\nprofil[\"email\"] = \"sara@mail.test\"") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Delete")

*Task.* #text("Delete a temporary key.")

#raw(block: true, lang: "python", "donnees = {\"nom\": \"Ali\", \"temp\": True}\ndel donnees[\"temp\"]")

*Correction.* #text("del removes the requested key.")

*Memory trace.*
1. #text("donnees = {\"nom\": \"Ali\", \"temp\": True}\ndel donnees[\"temp\"]") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Count occurrences")

*Task.* #text("Count votes by candidate.")

#raw(block: true, lang: "python", "votes = {}\nfor nom in [\"A\", \"B\", \"A\"]:\n    votes[nom] = votes.get(nom, 0) + 1")

*Correction.* #text("get(…,0) initializes a missing key.")

*Memory trace.*
1. #text("votes = {}\nfor nom in [\"A\", \"B\", \"A\"]:\n    votes[nom] = votes.get(nom, 0) + 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Conditional lookup")

*Task.* #text("Display products with low stock.")

#raw(block: true, lang: "python", "stock = {\"A\": 2, \"B\": 8}\nfor nom, quantite in stock.items():\n    if quantite < 5: print(nom)")

*Correction.* #text("The test applies to each value.")

*Memory trace.*
1. #text("stock = {\"A\": 2, \"B\": 8}\nfor nom, quantite in stock.items():\n    if quantite < 5: print(nom)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Controlled copy")

*Task.* #text("Copy only useful profile fields.")

#raw(block: true, lang: "python", "source = {\"nom\": \"Lina\", \"age\": 16, \"secret\": 1}\ncible = {k: source[k] for k in [\"nom\", \"age\"]}")

*Correction.* #text("Selecting keys limits copied data.")

*Memory trace.*
1. #text("source = {\"nom\": \"Lina\", \"age\": 16, \"secret\": 1}\ncible = {k: source[k] for k in [\"nom\", \"age\"]}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Inversion")

*Task.* #text("Build a city → code dictionary.")

#raw(block: true, lang: "python", "codes = {\"Oran\": 31, \"Alger\": 16}\ninverse = {code: ville for ville, code in codes.items()}")

*Correction.* #text("Each pair is reversed into a new structure.")

*Memory trace.*
1. #text("codes = {\"Oran\": 31, \"Alger\": 16}\ninverse = {code: ville for ville, code in codes.items()}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Sum grades")

*Task.* #text("Calculate the mean of numeric values.")

#raw(block: true, lang: "python", "notes = {\"A\": 12, \"B\": 16}\nprint(sum(notes.values()) / len(notes))")

*Correction.* #text("values separates data from labels.")

*Memory trace.*
1. #text("notes = {\"A\": 12, \"B\": 16}\nprint(sum(notes.values()) / len(notes))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Missing key")

*Task.* #text("Display unknown when city is absent.")

#raw(block: true, lang: "python", "profil = {\"nom\": \"Maya\"}\nprint(profil.get(\"ville\", \"inconnue\"))")

*Correction.* #text("The default makes the program robust.")

*Memory trace.*
1. #text("profil = {\"nom\": \"Maya\"}\nprint(profil.get(\"ville\", \"inconnue\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Grouping")

*Task.* #text("Group students by class.")

#raw(block: true, lang: "python", "classes = {}\nfor nom, classe in [(\"A\", \"2A\"), (\"B\", \"2A\")]:\n    classes.setdefault(classe, []).append(nom)")

*Correction.* #text("setdefault creates a list for a new class.")

*Memory trace.*
1. #text("classes = {}\nfor nom, classe in [(\"A\", \"2A\"), (\"B\", \"2A\")]:\n    classes.setdefault(classe, []).append(nom)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Report")

*Task.* #text("Display every field of a record.")

#raw(block: true, lang: "python", "fiche = {\"id\": \"S1\", \"nom\": \"Lina\"}\nfor cle, valeur in fiche.items(): print(cle, \":\", valeur)")

*Correction.* #text("items suits a complete report.")

*Memory trace.*
1. #text("fiche = {\"id\": \"S1\", \"nom\": \"Lina\"}\nfor cle, valeur in fiche.items(): print(cle, \":\", valeur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Score per student")

*Task.* #text("Create a score dictionary and display Lina’s score.")

#raw(block: true, lang: "python", "scores = {\"Lina\": 16, \"Ali\": 12}\nprint(scores[\"Lina\"])")

*Correction.* #text("The key is the learner name.")

*Memory trace.*
1. #text("scores = {\"Lina\": 16, \"Ali\": 12}\nprint(scores[\"Lina\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Safe inventory")

*Task.* #text("Update stock only when the key exists.")

#raw(block: true, lang: "python", "stock = {\"cahier\": 12}\nif \"cahier\" in stock: stock[\"cahier\"] -= 1")

*Correction.* #text("in protects access before updating.")

*Memory trace.*
1. #text("stock = {\"cahier\": 12}\nif \"cahier\" in stock: stock[\"cahier\"] -= 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Subject mean")

*Task.* #text("Calculate the mean of grade values.")

#raw(block: true, lang: "python", "notes = {\"maths\": 14, \"python\": 18}\nprint(sum(notes.values()) / len(notes))")

*Correction.* #text("values extracts numeric data.")

*Memory trace.*
1. #text("notes = {\"maths\": 14, \"python\": 18}\nprint(sum(notes.values()) / len(notes))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Invert key-value")

*Task.* #text("Create code-to-name from name-to-code.")

#raw(block: true, lang: "python", "noms = {\"Na\": \"sodium\", \"O\": \"oxygene\"}\ninverse = {nom: code for code, nom in noms.items()}")

*Correction.* #text("The comprehension swaps the two roles.")

*Memory trace.*
1. #text("noms = {\"Na\": \"sodium\", \"O\": \"oxygene\"}\ninverse = {nom: code for code, nom in noms.items()}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Field presence")

*Task.* #text("Display a fallback if pressure is missing.")

#raw(block: true, lang: "python", "mesure = {\"temperature\": 20}\nprint(mesure.get(\"pression\", \"absente\"))")

*Correction.* #text("get avoids KeyError and makes the program robust.")

*Memory trace.*
1. #text("mesure = {\"temperature\": 20}\nprint(mesure.get(\"pression\", \"absente\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 5. #text("Records")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Evaluate").  
*Competency focus:* #text("Validate fields and data before calculation.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("validate fields and data before calculation."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("validate fields and data before calculation."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Student record")

*Situation.* #text("A record gathers id, name, and grades.")

#raw(block: true, lang: "python", "eleve = {\"id\": \"S1\", \"nom\": \"Maya\", \"notes\": [12, 15]}")

*Detailed walkthrough.* #text("The schema associates each field with a coherent type.")

*Memory trace.*
1. #text("eleve = {\"id\": \"S1\", \"nom\": \"Maya\", \"notes\": [12, 15]}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Grade validation")

*Situation.* #text("A grade must stay between 0 and 20.")

#raw(block: true, lang: "python", "note = 18\nvalide = 0 <= note <= 20\nprint(valide)")

*Detailed walkthrough.* #text("A chained comparison checks both bounds.")

*Memory trace.*
1. #text("note = 18\nvalide = 0 <= note <= 20\nprint(valide)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Record list")

*Situation.* #text("Several students are traversed for a report.")

#raw(block: true, lang: "python", "eleves = [{\"nom\":\"A\",\"note\":12},{\"nom\":\"B\",\"note\":8}]\nfor eleve in eleves: print(eleve[\"nom\"])")

*Detailed walkthrough.* #text("Each item is an independent record.")

*Memory trace.*
1. #text("eleves = [{\"nom\":\"A\",\"note\":12},{\"nom\":\"B\",\"note\":8}]\nfor eleve in eleves: print(eleve[\"nom\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Computed field")

*Situation.* #text("A record can receive a calculated mean.")

#raw(block: true, lang: "python", "eleve = {\"nom\":\"Lina\", \"notes\":[14, 16]}\neleve[\"moyenne\"] = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])")

*Detailed walkthrough.* #text("The computed field complements the record.")

*Memory trace.*
1. #text("eleve = {\"nom\":\"Lina\", \"notes\":[14, 16]}\neleve[\"moyenne\"] = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Search by id")

*Situation.* #text("A record is found by its identifier.")

#raw(block: true, lang: "python", "eleves = [{\"id\":\"S1\"},{\"id\":\"S2\"}]\nfor e in eleves:\n    if e[\"id\"] == \"S2\": print(e)")

*Detailed walkthrough.* #text("Traversal conceptually stops when the correct record is found.")

*Memory trace.*
1. #text("eleves = [{\"id\":\"S1\"},{\"id\":\"S2\"}]\nfor e in eleves:\n    if e[\"id\"] == \"S2\": print(e)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Athlete")

*Situation.* #text("A record groups a runner’s name, distance, and time.")

#raw(block: true, lang: "python", "athlete = {\"nom\": \"Nora\", \"distance\": 5, \"temps\": 28}\nprint(athlete[\"distance\"] / (athlete[\"temps\"] / 60))")

*Detailed walkthrough.* #text("Fields allow pace calculation from a record.")

*Memory trace.*
1. #text("athlete = {\"nom\": \"Nora\", \"distance\": 5, \"temps\": 28}\nprint(athlete[\"distance\"] / (athlete[\"temps\"] / 60))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Experiment")

*Situation.* #text("An experiment stores temperature, mass, and result.")

#raw(block: true, lang: "python", "experience = {\"temperature\": 25, \"masse\": 12.4, \"resultat\": \"stable\"}\nif experience[\"resultat\"] == \"stable\": print(\"valider\")")

*Detailed walkthrough.* #text("The result field drives the validation decision.")

*Memory trace.*
1. #text("experience = {\"temperature\": 25, \"masse\": 12.4, \"resultat\": \"stable\"}\nif experience[\"resultat\"] == \"stable\": print(\"valider\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · File validation")

*Situation.* #text("A file is accepted if required fields are present.")

#raw(block: true, lang: "python", "dossier = {\"nom\": \"Samir\", \"email\": \"samir@example.com\"}\nobligatoires = [\"nom\", \"email\"]\nprint(all(cle in dossier for cle in obligatoires))")

*Detailed walkthrough.* #text("all checks every expected key.")

*Memory trace.*
1. #text("dossier = {\"nom\": \"Samir\", \"email\": \"samir@example.com\"}\nobligatoires = [\"nom\", \"email\"]\nprint(all(cle in dossier for cle in obligatoires))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Measurement records")

*Situation.* #text("Several records represent sensor readings.")

#raw(block: true, lang: "python", "mesures = [{\"id\": 1, \"valeur\": 18}, {\"id\": 2, \"valeur\": 22}]\nprint([m[\"valeur\"] for m in mesures])")

*Detailed walkthrough.* #text("A list of dictionaries forms a simple table.")

*Memory trace.*
1. #text("mesures = [{\"id\": 1, \"valeur\": 18}, {\"id\": 2, \"valeur\": 22}]\nprint([m[\"valeur\"] for m in mesures])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Report")

*Situation.* #text("A complete record produces a readable report.")

#raw(block: true, lang: "python", "eleve = {\"prenom\": \"Lina\", \"notes\": [14, 16]}\nmoy = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])\nprint(f\"{eleve[\"prenom\"]}: {moy}\")")

*Detailed walkthrough.* #text("The calculation uses notes then the name presents the result.")

*Memory trace.*
1. #text("eleve = {\"prenom\": \"Lina\", \"notes\": [14, 16]}\nmoy = sum(eleve[\"notes\"]) / len(eleve[\"notes\"])\nprint(f\"{eleve[\"prenom\"]}: {moy}\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Book")

*Task.* #text("Create a book record with title and year.")

#raw(block: true, lang: "python", "livre = {\"titre\":\"Python\", \"annee\":2026}")

*Correction.* #text("Fields describe one entity.")

*Memory trace.*
1. #text("livre = {\"titre\":\"Python\", \"annee\":2026}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Validation")

*Task.* #text("Reject a record if its name is empty.")

#raw(block: true, lang: "python", "fiche = {\"nom\":\"\"}\nprint(bool(fiche.get(\"nom\")))")

*Correction.* #text("bool turns empty text into False.")

*Memory trace.*
1. #text("fiche = {\"nom\":\"\"}\nprint(bool(fiche.get(\"nom\")))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Record mean")

*Task.* #text("Add a mean to each student.")

#raw(block: true, lang: "python", "for e in eleves: e[\"moyenne\"] = sum(e[\"notes\"]) / len(e[\"notes\"])")

*Correction.* #text("The same processing is applied to each record.")

*Memory trace.*
1. #text("for e in eleves: e[\"moyenne\"] = sum(e[\"notes\"]) / len(e[\"notes\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Filter records")

*Task.* #text("Keep passed students.")

#raw(block: true, lang: "python", "admis = [e for e in eleves if e[\"moyenne\"] >= 10]")

*Correction.* #text("The filter uses a computed field.")

*Memory trace.*
1. #text("admis = [e for e in eleves if e[\"moyenne\"] >= 10]") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Identifier")

*Task.* #text("Check that two records do not share an id.")

#raw(block: true, lang: "python", "ids = [e[\"id\"] for e in eleves]\nprint(len(ids) == len(set(ids)))")

*Correction.* #text("Comparing lengths detects a duplicate.")

*Memory trace.*
1. #text("ids = [e[\"id\"] for e in eleves]\nprint(len(ids) == len(set(ids)))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Sensor")

*Task.* #text("Create a sensor record with unit and measure.")

#raw(block: true, lang: "python", "capteur = {\"nom\":\"T1\", \"unite\":\"°C\", \"mesure\":21.4}")

*Correction.* #text("Fields document the measurement.")

*Memory trace.*
1. #text("capteur = {\"nom\":\"T1\", \"unite\":\"°C\", \"mesure\":21.4}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Bounds")

*Task.* #text("Validate a measure in a range.")

#raw(block: true, lang: "python", "m = 21.4\nprint(0 <= m <= 50)")

*Correction.* #text("Validation protects the next analysis.")

*Memory trace.*
1. #text("m = 21.4\nprint(0 <= m <= 50)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Table")

*Task.* #text("Traverse names in a record table.")

#raw(block: true, lang: "python", "for e in eleves: print(e.get(\"nom\", \"inconnu\"))")

*Correction.* #text("get avoids stopping if a field is missing.")

*Memory trace.*
1. #text("for e in eleves: print(e.get(\"nom\", \"inconnu\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · ID lookup")

*Task.* #text("Return the record matching an id.")

#raw(block: true, lang: "python", "trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)")

*Correction.* #text("next returns None if no record matches.")

*Memory trace.*
1. #text("trouve = next((e for e in eleves if e[\"id\"] == \"S2\"), None)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Summary")

*Task.* #text("Count valid records.")

#raw(block: true, lang: "python", "valides = [e for e in eleves if e.get(\"moyenne\", 0) >= 10]\nprint(len(valides))")

*Correction.* #text("The retained record count becomes an indicator.")

*Memory trace.*
1. #text("valides = [e for e in eleves if e.get(\"moyenne\", 0) >= 10]\nprint(len(valides))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Pressure record")

*Task.* #text("Create a record with systolic, diastolic, and date.")

#raw(block: true, lang: "python", "mesure = {\"systolique\": 120, \"diastolique\": 80, \"date\": \"2026-06-01\"}")

*Correction.* #text("The three fields describe one measurement.")

*Memory trace.*
1. #text("mesure = {\"systolique\": 120, \"diastolique\": 80, \"date\": \"2026-06-01\"}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Filter records")

*Task.* #text("Keep measurements whose value exceeds 20.")

#raw(block: true, lang: "python", "mesures = [{\"valeur\": 18}, {\"valeur\": 24}]\nprint([m for m in mesures if m[\"valeur\"] > 20])")

*Correction.* #text("The filter targets a record field.")

*Memory trace.*
1. #text("mesures = [{\"valeur\": 18}, {\"valeur\": 24}]\nprint([m for m in mesures if m[\"valeur\"] > 20])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Completeness")

*Task.* #text("Test whether each student has an identifier.")

#raw(block: true, lang: "python", "eleves = [{\"id\": 1}, {\"id\": 2}]\nprint(all(\"id\" in e for e in eleves))")

*Correction.* #text("Validation traverses the whole record list.")

*Memory trace.*
1. #text("eleves = [{\"id\": 1}, {\"id\": 2}]\nprint(all(\"id\" in e for e in eleves))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Update")

*Task.* #text("Increase a product stock after delivery.")

#raw(block: true, lang: "python", "produit = {\"nom\": \"Tube\", \"stock\": 4}\nproduit[\"stock\"] += 6")

*Correction.* #text("Only the target field is modified.")

*Memory trace.*
1. #text("produit = {\"nom\": \"Tube\", \"stock\": 4}\nproduit[\"stock\"] += 6") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Search identifier")

*Task.* #text("Find the record whose id is 2.")

#raw(block: true, lang: "python", "eleves = [{\"id\": 1, \"nom\": \"Ali\"}, {\"id\": 2, \"nom\": \"Nora\"}]\nprint(next(e for e in eleves if e[\"id\"] == 2))")

*Correction.* #text("next retrieves the first record matching the test.")

*Memory trace.*
1. #text("eleves = [{\"id\": 1, \"nom\": \"Ali\"}, {\"id\": 2, \"nom\": \"Nora\"}]\nprint(next(e for e in eleves if e[\"id\"] == 2))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 6. #text("Stacks")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Apply").  
*Competency focus:* #text("Simulate LIFO operations and predict the top.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("simulate lifo operations and predict the top."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("simulate lifo operations and predict the top."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Undo")

*Situation.* #text("An editor undoes the latest action.")

#raw(block: true, lang: "python", "pile = [\"titre\", \"image\"]\nprint(pile.pop())")

*Detailed walkthrough.* #text("pop removes image: last in, first out.")

*Memory trace.*
1. #text("pile = [\"titre\", \"image\"]\nprint(pile.pop())") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · History")

*Situation.* #text("A browser goes back.")

#raw(block: true, lang: "python", "historique = [\"accueil\", \"cours\", \"quiz\"]\npage = historique.pop()\nprint(page, historique[-1])")

*Detailed walkthrough.* #text("The new current page is the remaining top.")

*Memory trace.*
1. #text("historique = [\"accueil\", \"cours\", \"quiz\"]\npage = historique.pop()\nprint(page, historique[-1])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Parentheses")

*Situation.* #text("A stack checks opening parentheses.")

#raw(block: true, lang: "python", "pile = []\nfor symbole in \"(()\":\n    if symbole == \"(\": pile.append(symbole)\nprint(len(pile))")

*Detailed walkthrough.* #text("Each opening is pushed to be closed later.")

*Memory trace.*
1. #text("pile = []\nfor symbole in \"(()\":\n    if symbole == \"(\": pile.append(symbole)\nprint(len(pile))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Empty")

*Situation.* #text("Undo must not pop an empty stack.")

#raw(block: true, lang: "python", "pile = []\nif pile: print(pile.pop())\nelse: print(\"Rien à annuler\")")

*Detailed walkthrough.* #text("The check protects pop.")

*Memory trace.*
1. #text("pile = []\nif pile: print(pile.pop())\nelse: print(\"Rien à annuler\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Two undos")

*Situation.* #text("Two recent actions are undone.")

#raw(block: true, lang: "python", "actions = [\"A\", \"B\", \"C\"]\nfor _ in range(2): print(actions.pop())")

*Detailed walkthrough.* #text("The loop pops C then B.")

*Memory trace.*
1. #text("actions = [\"A\", \"B\", \"C\"]\nfor _ in range(2): print(actions.pop())") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Parentheses")

*Situation.* #text("A stack helps check opening and closing parentheses.")

#raw(block: true, lang: "python", "pile = []\nfor symbole in \"(()\":\n    if symbole == \"(\": pile.append(symbole)\nprint(len(pile))")

*Detailed walkthrough.* #text("Each opening is pushed and awaits a closing symbol.")

*Memory trace.*
1. #text("pile = []\nfor symbole in \"(()\":\n    if symbole == \"(\": pile.append(symbole)\nprint(len(pile))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Reverse DNA")

*Situation.* #text("A sequence is read in reverse using a stack.")

#raw(block: true, lang: "python", "pile = list(\"ATGC\")\nretour = \"\"\nwhile pile: retour += pile.pop()\nprint(retour)")

*Detailed walkthrough.* #text("The last character entered becomes the first read.")

*Memory trace.*
1. #text("pile = list(\"ATGC\")\nretour = \"\"\nwhile pile: retour += pile.pop()\nprint(retour)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Scientific history")

*Situation.* #text("Software undoes the last transformation applied to a measurement.")

#raw(block: true, lang: "python", "historique = [\"filtre\", \"normalisation\", \"arrondi\"]\nprint(\"annuler\", historique.pop())")

*Detailed walkthrough.* #text("pop removes the most recent operation.")

*Memory trace.*
1. #text("historique = [\"filtre\", \"normalisation\", \"arrondi\"]\nprint(\"annuler\", historique.pop())") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Nested calls")

*Situation.* #text("A conceptual stack represents calling functions.")

#raw(block: true, lang: "python", "appels = [\"main\", \"analyser\", \"moyenne\"]\nprint(appels[-1])\nappels.pop()")

*Detailed walkthrough.* #text("The top represents the most recent active call.")

*Memory trace.*
1. #text("appels = [\"main\", \"analyser\", \"moyenne\"]\nprint(appels[-1])\nappels.pop()") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Postfix expression")

*Situation.* #text("A stack stores operands before an operation.")

#raw(block: true, lang: "python", "pile = [3, 4]\nb = pile.pop(); a = pile.pop()\nprint(a + b)")

*Detailed walkthrough.* #text("The two latest items are retrieved for the calculation.")

*Memory trace.*
1. #text("pile = [3, 4]\nb = pile.pop(); a = pile.pop()\nprint(a + b)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Push")

*Task.* #text("Push three operations.")

#raw(block: true, lang: "python", "pile = []\nfor action in [\"A\", \"B\", \"C\"]: pile.append(action)")

*Correction.* #text("append places each action on top.")

*Memory trace.*
1. #text("pile = []\nfor action in [\"A\", \"B\", \"C\"]: pile.append(action)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Pop")

*Task.* #text("Pop the top if possible.")

#raw(block: true, lang: "python", "if pile: resultat = pile.pop()")

*Correction.* #text("if protects removal.")

*Memory trace.*
1. #text("if pile: resultat = pile.pop()") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Peek")

*Task.* #text("Read the top without removing it.")

#raw(block: true, lang: "python", "sommet = pile[-1] if pile else None")

*Correction.* #text("Index -1 reads without changing.")

*Memory trace.*
1. #text("sommet = pile[-1] if pile else None") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Size")

*Task.* #text("Display remaining actions.")

#raw(block: true, lang: "python", "print(len(pile))")

*Correction.* #text("len measures the current stack.")

*Memory trace.*
1. #text("print(len(pile))") → output event: current memory values are sent to the screen.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Empty")

*Task.* #text("Empty a stack with while.")

#raw(block: true, lang: "python", "while pile: pile.pop()")

*Correction.* #text("Each turn removes a top item.")

*Memory trace.*
1. #text("while pile: pile.pop()") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Reverse")

*Task.* #text("Reverse a word with a stack.")

#raw(block: true, lang: "python", "pile = list(\"PY\")\nprint(pile.pop() + pile.pop())")

*Correction.* #text("Outputs follow reverse order.")

*Memory trace.*
1. #text("pile = list(\"PY\")\nprint(pile.pop() + pile.pop())") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Trace")

*Task.* #text("Display the stack after each action.")

#raw(block: true, lang: "python", "pile = []\nfor x in [1,2]:\n    pile.append(x); print(pile)")

*Correction.* #text("The trace makes state visible.")

*Memory trace.*
1. #text("pile = []\nfor x in [1,2]:\n    pile.append(x); print(pile)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Latest")

*Task.* #text("Retrieve the last visited page.")

#raw(block: true, lang: "python", "page = historique[-1] if historique else \"aucune\"")

*Correction.* #text("The empty case needs an answer.")

*Memory trace.*
1. #text("page = historique[-1] if historique else \"aucune\"") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Limit")

*Task.* #text("Limit a stack to three items.")

#raw(block: true, lang: "python", "if len(pile) < 3: pile.append(\"nouveau\")")

*Correction.* #text("The condition controls capacity.")

*Memory trace.*
1. #text("if len(pile) < 3: pile.append(\"nouveau\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Function")

*Task.* #text("Write a safe pop function.")

#raw(block: true, lang: "python", "def depiler(pile):\n    return pile.pop() if pile else None")

*Correction.* #text("return None describes absence.")

*Memory trace.*
1. #text("def depiler(pile):\n    return pile.pop() if pile else None") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Safe undo")

*Task.* #text("Write annuler(stack) returning None if empty.")

#raw(block: true, lang: "python", "def annuler(pile):\n    return pile.pop() if pile else None")

*Correction.* #text("The check protects pop on an empty stack.")

*Memory trace.*
1. #text("def annuler(pile):\n    return pile.pop() if pile else None") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Two-action history")

*Task.* #text("Undo the two latest actions.")

#raw(block: true, lang: "python", "actions = [\"A\", \"B\", \"C\"]\nfor _ in range(2): print(actions.pop())")

*Correction.* #text("The loop repeats popping.")

*Memory trace.*
1. #text("actions = [\"A\", \"B\", \"C\"]\nfor _ in range(2): print(actions.pop())") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Palindrome")

*Task.* #text("Use a stack to compare a word with its reverse.")

#raw(block: true, lang: "python", "mot = \"kayak\"\npile = list(mot)\nprint(mot == \"\".join(pile.pop() for _ in range(len(pile))))")

*Correction.* #text("Reverse reading is compared with the original word.")

*Memory trace.*
1. #text("mot = \"kayak\"\npile = list(mot)\nprint(mot == \"\".join(pile.pop() for _ in range(len(pile))))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Peek")

*Task.* #text("Read the top without popping.")

#raw(block: true, lang: "python", "pile = [10, 20, 30]\nprint(pile[-1])")

*Correction.* #text("Index -1 observes without modifying.")

*Memory trace.*
1. #text("pile = [10, 20, 30]\nprint(pile[-1])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Empty")

*Task.* #text("Empty a stack while displaying each item.")

#raw(block: true, lang: "python", "pile = [1, 2, 3]\nwhile pile: print(pile.pop())")

*Correction.* #text("while stops when the stack becomes empty.")

*Memory trace.*
1. #text("pile = [1, 2, 3]\nwhile pile: print(pile.pop())") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 7. #text("Queues")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Apply").  
*Competency focus:* #text("Simulate FIFO service order.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("simulate fifo service order."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("simulate fifo service order."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Printing")

*Situation.* #text("A printer processes documents by arrival order.")

#raw(block: true, lang: "python", "file = [\"A.pdf\", \"B.pdf\"]\nprint(file.pop(0))")

*Detailed walkthrough.* #text("pop(0) removes the oldest document.")

*Memory trace.*
1. #text("file = [\"A.pdf\", \"B.pdf\"]\nprint(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Desk")

*Situation.* #text("A desk serves the first person and keeps the rest.")

#raw(block: true, lang: "python", "file = [\"Nora\", \"Ali\", \"Maya\"]\nservie = file.pop(0)")

*Detailed walkthrough.* #text("The queue keeps Ali then Maya.")

*Memory trace.*
1. #text("file = [\"Nora\", \"Ali\", \"Maya\"]\nservie = file.pop(0)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Empty")

*Situation.* #text("A system does not serve an empty queue.")

#raw(block: true, lang: "python", "file = []\nif file: print(file.pop(0))\nelse: print(\"Attente vide\")")

*Detailed walkthrough.* #text("The check avoids IndexError.")

*Memory trace.*
1. #text("file = []\nif file: print(file.pop(0))\nelse: print(\"Attente vide\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Counter")

*Situation.* #text("A server counts processed requests.")

#raw(block: true, lang: "python", "file = [\"A\", \"B\"]\ncompteur = 0\nwhile file:\n    file.pop(0); compteur += 1\nprint(compteur)")

*Detailed walkthrough.* #text("The counter measures services, not final size.")

*Memory trace.*
1. #text("file = [\"A\", \"B\"]\ncompteur = 0\nwhile file:\n    file.pop(0); compteur += 1\nprint(compteur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Enqueue")

*Situation.* #text("A new request arrives after existing ones.")

#raw(block: true, lang: "python", "file = [\"A\", \"B\"]\nfile.append(\"C\")\nprint(file)")

*Detailed walkthrough.* #text("append adds at the end and preserves order.")

*Memory trace.*
1. #text("file = [\"A\", \"B\"]\nfile.append(\"C\")\nprint(file)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Samples")

*Situation.* #text("A lab processes samples in arrival order.")

#raw(block: true, lang: "python", "file = [\"S1\", \"S2\", \"S3\"]\nprint(file.pop(0))")

*Detailed walkthrough.* #text("The oldest sample is processed first.")

*Memory trace.*
1. #text("file = [\"S1\", \"S2\", \"S3\"]\nprint(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Marathon")

*Situation.* #text("Runners are called to control in order.")

#raw(block: true, lang: "python", "file = [\"dossard 12\", \"dossard 18\"]\nfile.append(\"dossard 24\")\nprint(file.pop(0))")

*Detailed walkthrough.* #text("append adds behind; pop(0) serves from the front.")

*Memory trace.*
1. #text("file = [\"dossard 12\", \"dossard 18\"]\nfile.append(\"dossard 24\")\nprint(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Sensor messages")

*Situation.* #text("A queue holds messages received before analysis.")

#raw(block: true, lang: "python", "messages = [\"T=20\", \"T=21\"]\nwhile messages:\n    print(\"analyse\", messages.pop(0))")

*Detailed walkthrough.* #text("The loop empties the queue without reversing messages.")

*Memory trace.*
1. #text("messages = [\"T=20\", \"T=21\"]\nwhile messages:\n    print(\"analyse\", messages.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Patient service")

*Situation.* #text("A reception processes requests in registration order.")

#raw(block: true, lang: "python", "demandes = [\"A\", \"B\", \"C\"]\nprochaine = demandes.pop(0)\nprint(prochaine)")

*Detailed walkthrough.* #text("The first request remains first in a FIFO queue.")

*Memory trace.*
1. #text("demandes = [\"A\", \"B\", \"C\"]\nprochaine = demandes.pop(0)\nprint(prochaine)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Documents")

*Situation.* #text("A printer keeps received file order.")

#raw(block: true, lang: "python", "documents = []\nfor nom in [\"a.pdf\", \"b.pdf\"]: documents.append(nom)\nprint(documents.pop(0))")

*Detailed walkthrough.* #text("The queue represents service order.")

*Memory trace.*
1. #text("documents = []\nfor nom in [\"a.pdf\", \"b.pdf\"]: documents.append(nom)\nprint(documents.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Enqueue")

*Task.* #text("Add two tickets.")

#raw(block: true, lang: "python", "file = []\nfile.append(\"T1\"); file.append(\"T2\")")

*Correction.* #text("Arrivals go at the end.")

*Memory trace.*
1. #text("file = []\nfile.append(\"T1\"); file.append(\"T2\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Serve")

*Task.* #text("Serve the first ticket.")

#raw(block: true, lang: "python", "ticket = file.pop(0) if file else None")

*Correction.* #text("The condition protects removal.")

*Memory trace.*
1. #text("ticket = file.pop(0) if file else None") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Loop")

*Task.* #text("Process a whole queue.")

#raw(block: true, lang: "python", "while file:\n    print(file.pop(0))")

*Correction.* #text("Each removal respects FIFO.")

*Memory trace.*
1. #text("while file:\n    print(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Size")

*Task.* #text("Display waiting count.")

#raw(block: true, lang: "python", "print(len(file))")

*Correction.* #text("len measures current waiting.")

*Memory trace.*
1. #text("print(len(file))") → output event: current memory values are sent to the screen.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Priority")

*Task.* #text("Add an urgent request at the front.")

#raw(block: true, lang: "python", "file.insert(0, \"URGENT\")")

*Correction.* #text("A priority deliberately changes FIFO.")

*Memory trace.*
1. #text("file.insert(0, \"URGENT\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Summary")

*Task.* #text("Count served customers.")

#raw(block: true, lang: "python", "servis = 0\nwhile file:\n    file.pop(0); servis += 1")

*Correction.* #text("The counter is independent of the queue.")

*Memory trace.*
1. #text("servis = 0\nwhile file:\n    file.pop(0); servis += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Function")

*Task.* #text("Write serve(file) returning None when empty.")

#raw(block: true, lang: "python", "def servir(file):\n    return file.pop(0) if file else None")

*Correction.* #text("A function makes the rule reusable.")

*Memory trace.*
1. #text("def servir(file):\n    return file.pop(0) if file else None") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Rotation")

*Task.* #text("Move the first customer to the end.")

#raw(block: true, lang: "python", "file.append(file.pop(0))")

*Correction.* #text("Removal is followed by an add.")

*Memory trace.*
1. #text("file.append(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Waiting")

*Task.* #text("Display mean waiting time from a list.")

#raw(block: true, lang: "python", "temps = [4, 7, 5]\nprint(sum(temps) / len(temps))")

*Correction.* #text("The time vector describes the queue.")

*Memory trace.*
1. #text("temps = [4, 7, 5]\nprint(sum(temps) / len(temps))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Two queues")

*Task.* #text("Merge two queues preserving internal order.")

#raw(block: true, lang: "python", "file1 = [\"A\",\"B\"]; file2 = [\"C\",\"D\"]\nfile = file1 + file2")

*Correction.* #text("Concatenation places the second queue after the first.")

*Memory trace.*
1. #text("file1 = [\"A\",\"B\"]; file2 = [\"C\",\"D\"]\nfile = file1 + file2") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Enqueue")

*Task.* #text("Add a ticket to a queue.")

#raw(block: true, lang: "python", "file = [\"T1\"]\nfile.append(\"T2\")")

*Correction.* #text("append places the new ticket behind.")

*Memory trace.*
1. #text("file = [\"T1\"]\nfile.append(\"T2\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Serve five")

*Task.* #text("Serve five requests with while.")

#raw(block: true, lang: "python", "file = [1, 2, 3, 4, 5]\nwhile file: print(file.pop(0))")

*Correction.* #text("Each removal respects FIFO.")

*Memory trace.*
1. #text("file = [1, 2, 3, 4, 5]\nwhile file: print(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Waiting time")

*Task.* #text("Add processing times in a queue.")

#raw(block: true, lang: "python", "file = [3, 4, 2]\ntotal = 0\nwhile file: total += file.pop(0)\nprint(total)")

*Correction.* #text("The accumulator follows sequential processing.")

*Memory trace.*
1. #text("file = [3, 4, 2]\ntotal = 0\nwhile file: total += file.pop(0)\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Simple priority")

*Task.* #text("Place an emergency at the front.")

#raw(block: true, lang: "python", "file = [\"normal\"]\nfile.insert(0, \"urgent\")\nprint(file.pop(0))")

*Correction.* #text("insert(0) intentionally changes order for priority.")

*Memory trace.*
1. #text("file = [\"normal\"]\nfile.insert(0, \"urgent\")\nprint(file.pop(0))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Length")

*Task.* #text("Display the number of requests waiting.")

#raw(block: true, lang: "python", "file = [\"A\", \"B\", \"C\"]\nfile.pop(0)\nprint(len(file))")

*Correction.* #text("len measures the current state after service.")

*Memory trace.*
1. #text("file = [\"A\", \"B\", \"C\"]\nfile.pop(0)\nprint(len(file))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 8. #text("Trees")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Analyze").  
*Competency focus:* #text("Trace recursive frames and stopping cases.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("trace recursive frames and stopping cases."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("trace recursive frames and stopping cases."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Root")

*Situation.* #text("A project tree starts with a root.")

#raw(block: true, lang: "python", "arbre = {\"valeur\":\"Projet\", \"enfants\":[]}\nprint(arbre[\"valeur\"])")

*Detailed walkthrough.* #text("The root is the first node.")

*Memory trace.*
1. #text("arbre = {\"valeur\":\"Projet\", \"enfants\":[]}\nprint(arbre[\"valeur\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Leaves")

*Situation.* #text("A leaf folder has no children.")

#raw(block: true, lang: "python", "noeud = {\"valeur\":\"README\", \"enfants\":[]}\nprint(noeud[\"enfants\"] == [])")

*Detailed walkthrough.* #text("The empty list is the stopping case.")

*Memory trace.*
1. #text("noeud = {\"valeur\":\"README\", \"enfants\":[]}\nprint(noeud[\"enfants\"] == [])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Traversal")

*Situation.* #text("Visit a parent then its children.")

#raw(block: true, lang: "python", "def visiter(n):\n    print(n[\"valeur\"])\n    for enfant in n[\"enfants\"]: visiter(enfant)")

*Detailed walkthrough.* #text("The same function handles each subtree.")

*Memory trace.*
1. #text("def visiter(n):\n    print(n[\"valeur\"])\n    for enfant in n[\"enfants\"]: visiter(enfant)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Height")

*Situation.* #text("Height counts branch levels.")

#raw(block: true, lang: "python", "def hauteur(n):\n    if not n[\"enfants\"]: return 1\n    return 1 + max(hauteur(e) for e in n[\"enfants\"])")

*Detailed walkthrough.* #text("A leaf has height 1; otherwise add one level.")

*Memory trace.*
1. #text("def hauteur(n):\n    if not n[\"enfants\"]: return 1\n    return 1 + max(hauteur(e) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Search")

*Situation.* #text("Search for a value in a hierarchy.")

#raw(block: true, lang: "python", "def contient(n, cible):\n    return n[\"valeur\"] == cible or any(contient(e, cible) for e in n[\"enfants\"])")

*Detailed walkthrough.* #text("Search stops when a branch returns True.")

*Memory trace.*
1. #text("def contient(n, cible):\n    return n[\"valeur\"] == cible or any(contient(e, cible) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Living classification")

*Situation.* #text("A hierarchy links kingdom, class, and species.")

#raw(block: true, lang: "python", "arbre = {\"valeur\":\"Animal\", \"enfants\":[{\"valeur\":\"Mammifère\", \"enfants\":[]}] }\nprint(arbre[\"valeur\"])")

*Detailed walkthrough.* #text("The root holds the general level and children hold sublevels.")

*Memory trace.*
1. #text("arbre = {\"valeur\":\"Animal\", \"enfants\":[{\"valeur\":\"Mammifère\", \"enfants\":[]}] }\nprint(arbre[\"valeur\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Folders")

*Situation.* #text("A folder contains subfolders and files.")

#raw(block: true, lang: "python", "racine = {\"nom\":\"cours\", \"enfants\":[{\"nom\":\"python\", \"enfants\":[]}, {\"nom\":\"data\", \"enfants\":[]}] }\nprint(len(racine[\"enfants\"]))")

*Detailed walkthrough.* #text("The children list holds direct branches.")

*Memory trace.*
1. #text("racine = {\"nom\":\"cours\", \"enfants\":[{\"nom\":\"python\", \"enfants\":[]}, {\"nom\":\"data\", \"enfants\":[]}] }\nprint(len(racine[\"enfants\"]))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Decision")

*Situation.* #text("A decision tree separates profiles by a threshold.")

#raw(block: true, lang: "python", "def decision(note):\n    return {\"valeur\":\"reussi\" if note >= 10 else \"a_reprendre\", \"enfants\":[]}\nprint(decision(14))")

*Detailed walkthrough.* #text("A conditional branch produces a leaf.")

*Memory trace.*
1. #text("def decision(note):\n    return {\"valeur\":\"reussi\" if note >= 10 else \"a_reprendre\", \"enfants\":[]}\nprint(decision(14))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Count leaves")

*Situation.* #text("Count final results in a tree.")

#raw(block: true, lang: "python", "def feuilles(n):\n    if not n[\"enfants\"]: return 1\n    return sum(feuilles(e) for e in n[\"enfants\"])")

*Detailed walkthrough.* #text("The stopping case is a node without children.")

*Memory trace.*
1. #text("def feuilles(n):\n    if not n[\"enfants\"]: return 1\n    return sum(feuilles(e) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Depth traversal")

*Situation.* #text("A report displays a hierarchy with its level.")

#raw(block: true, lang: "python", "def afficher(n, niveau=0):\n    print(\"  \" * niveau + n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher(e, niveau + 1)")

*Detailed walkthrough.* #text("Level controls trace indentation.")

*Memory trace.*
1. #text("def afficher(n, niveau=0):\n    print(\"  \" * niveau + n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher(e, niveau + 1)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Build")

*Task.* #text("Create a root with two leaves.")

#raw(block: true, lang: "python", "arbre = {\"valeur\":\"A\", \"enfants\":[{\"valeur\":\"B\",\"enfants\":[]},{\"valeur\":\"C\",\"enfants\":[]}]}")

*Correction.* #text("Each child follows the same model.")

*Memory trace.*
1. #text("arbre = {\"valeur\":\"A\", \"enfants\":[{\"valeur\":\"B\",\"enfants\":[]},{\"valeur\":\"C\",\"enfants\":[]}]}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Display")

*Task.* #text("Display all values depth-first.")

#raw(block: true, lang: "python", "def afficher(n):\n    print(n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher(e)")

*Correction.* #text("The recursive call descends every branch.")

*Memory trace.*
1. #text("def afficher(n):\n    print(n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher(e)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Count")

*Task.* #text("Count tree nodes.")

#raw(block: true, lang: "python", "def compter(n):\n    return 1 + sum(compter(e) for e in n[\"enfants\"])")

*Correction.* #text("1 counts the current node.")

*Memory trace.*
1. #text("def compter(n):\n    return 1 + sum(compter(e) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Leaf")

*Task.* #text("Test whether a node is a leaf.")

#raw(block: true, lang: "python", "def feuille(n): return len(n[\"enfants\"]) == 0")

*Correction.* #text("No child means leaf.")

*Memory trace.*
1. #text("def feuille(n): return len(n[\"enfants\"]) == 0") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Height")

*Task.* #text("Calculate recursive height.")

#raw(block: true, lang: "python", "def h(n):\n    return 1 if not n[\"enfants\"] else 1 + max(h(e) for e in n[\"enfants\"])")

*Correction.* #text("The stopping case prevents infinite recursion.")

*Memory trace.*
1. #text("def h(n):\n    return 1 if not n[\"enfants\"] else 1 + max(h(e) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Search")

*Task.* #text("Search for value “Courses”.")

#raw(block: true, lang: "python", "trouve = contient(arbre, \"Cours\")")

*Correction.* #text("or combines current test and children.")

*Memory trace.*
1. #text("trouve = contient(arbre, \"Cours\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Levels")

*Task.* #text("Display with indentation.")

#raw(block: true, lang: "python", "def afficher(n, niveau=0):\n    print(\"  \" * niveau + n[\"valeur\"])")

*Correction.* #text("level changes at each descent.")

*Memory trace.*
1. #text("def afficher(n, niveau=0):\n    print(\"  \" * niveau + n[\"valeur\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Leaves")

*Task.* #text("Count only leaves.")

#raw(block: true, lang: "python", "def feuilles(n):\n    if not n[\"enfants\"]: return 1\n    return sum(feuilles(e) for e in n[\"enfants\"] )")

*Correction.* #text("The leaf case returns 1.")

*Memory trace.*
1. #text("def feuilles(n):\n    if not n[\"enfants\"]: return 1\n    return sum(feuilles(e) for e in n[\"enfants\"] )") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Filter")

*Task.* #text("Return nodes whose name starts with C.")

#raw(block: true, lang: "python", "def ok(n): return n[\"valeur\"].startswith(\"C\")")

*Correction.* #text("startswith formalizes the criterion.")

*Memory trace.*
1. #text("def ok(n): return n[\"valeur\"].startswith(\"C\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Empty tree")

*Task.* #text("Protect a function against None.")

#raw(block: true, lang: "python", "def afficher(n):\n    if n is None: return\n    print(n[\"valeur\"])")

*Correction.* #text("The check makes traversal robust.")

*Memory trace.*
1. #text("def afficher(n):\n    if n is None: return\n    print(n[\"valeur\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Create a node")

*Task.* #text("Create a node with value and children.")

#raw(block: true, lang: "python", "noeud = {\"valeur\": \"racine\", \"enfants\": []}")

*Correction.* #text("The same schema can be reused for every node.")

*Memory trace.*
1. #text("noeud = {\"valeur\": \"racine\", \"enfants\": []}") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Count nodes")

*Task.* #text("Recursively count all nodes.")

#raw(block: true, lang: "python", "def compter(n):\n    return 1 + sum(compter(e) for e in n[\"enfants\"])")

*Correction.* #text("The current node counts as 1, then children are added.")

*Memory trace.*
1. #text("def compter(n):\n    return 1 + sum(compter(e) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Search value")

*Task.* #text("Search for a value in a tree.")

#raw(block: true, lang: "python", "def contient(n, cible):\n    return n[\"valeur\"] == cible or any(contient(e, cible) for e in n[\"enfants\"])")

*Correction.* #text("or and any stop once a branch succeeds.")

*Memory trace.*
1. #text("def contient(n, cible):\n    return n[\"valeur\"] == cible or any(contient(e, cible) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Height")

*Task.* #text("Calculate tree height.")

#raw(block: true, lang: "python", "def hauteur(n):\n    if not n[\"enfants\"]: return 0\n    return 1 + max(hauteur(e) for e in n[\"enfants\"])")

*Correction.* #text("A leaf has height zero.")

*Memory trace.*
1. #text("def hauteur(n):\n    if not n[\"enfants\"]: return 0\n    return 1 + max(hauteur(e) for e in n[\"enfants\"])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Display leaves")

*Task.* #text("Display leaves only.")

#raw(block: true, lang: "python", "def afficher_feuilles(n):\n    if not n[\"enfants\"]: print(n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher_feuilles(e)")

*Correction.* #text("Recursion descends to nodes without children.")

*Memory trace.*
1. #text("def afficher_feuilles(n):\n    if not n[\"enfants\"]: print(n[\"valeur\"])\n    for e in n[\"enfants\"]: afficher_feuilles(e)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 9. #text("Introduction to statistics")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Evaluate").  
*Competency focus:* #text("Interpret indicators and the effect of extreme values.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("interpret indicators and the effect of extreme values."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("interpret indicators and the effect of extreme values."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Mean")

*Situation.* #text("A class summarizes five grades.")

#raw(block: true, lang: "python", "notes = [8, 12, 14, 15, 19]\nprint(sum(notes) / len(notes))")

*Detailed walkthrough.* #text("The mean is 13.6.")

*Memory trace.*
1. #text("notes = [8, 12, 14, 15, 19]\nprint(sum(notes) / len(notes))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Median")

*Situation.* #text("Find the central value of sorted times.")

#raw(block: true, lang: "python", "temps = [18, 25, 20, 22, 35]\ntries = sorted(temps)\nprint(tries[len(tries)//2])")

*Detailed walkthrough.* #text("Sorting gives [18,20,22,25,35]; median 22.")

*Memory trace.*
1. #text("temps = [18, 25, 20, 22, 35]\ntries = sorted(temps)\nprint(tries[len(tries)//2])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Range")

*Situation.* #text("A team measures extreme spread.")

#raw(block: true, lang: "python", "mesures = [4, 8, 10]\nprint(max(mesures) - min(mesures))")

*Detailed walkthrough.* #text("The range is 6.")

*Memory trace.*
1. #text("mesures = [4, 8, 10]\nprint(max(mesures) - min(mesures))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Minimum and maximum")

*Situation.* #text("Measurements are checked before publication.")

#raw(block: true, lang: "python", "mesures = [12.5, 9.8, 15.2]\nprint(min(mesures), max(mesures))")

*Detailed walkthrough.* #text("min and max give observed bounds.")

*Memory trace.*
1. #text("mesures = [12.5, 9.8, 15.2]\nprint(min(mesures), max(mesures))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Outlier")

*Situation.* #text("A high value is compared with the mean.")

#raw(block: true, lang: "python", "notes = [10, 10, 10, 20]\nprint(sum(notes)/len(notes))")

*Detailed walkthrough.* #text("20 pulls the mean up; provide context.")

*Memory trace.*
1. #text("notes = [10, 10, 10, 20]\nprint(sum(notes)/len(notes))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Heart rate")

*Situation.* #text("A heart-rate series is summarized by mean and range.")

#raw(block: true, lang: "python", "fc = [62, 70, 78, 66]\nprint(sum(fc)/len(fc), max(fc)-min(fc))")

*Detailed walkthrough.* #text("Two indicators describe level and simple spread.")

*Memory trace.*
1. #text("fc = [62, 70, 78, 66]\nprint(sum(fc)/len(fc), max(fc)-min(fc))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Bacterial population")

*Situation.* #text("A series follows growth by day.")

#raw(block: true, lang: "python", "pop = [100, 120, 150, 190]\nvariations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]\nprint(variations)")

*Detailed walkthrough.* #text("Successive differences describe the dynamics.")

*Memory trace.*
1. #text("pop = [100, 120, 150, 190]\nvariations = [pop[i+1]-pop[i] for i in range(len(pop)-1)]\nprint(variations)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Simple quartiles")

*Situation.* #text("Sorted measures are split into two halves.")

#raw(block: true, lang: "python", "valeurs = sorted([2, 4, 5, 8, 10, 12])\nprint(valeurs[:3], valeurs[3:])")

*Detailed walkthrough.* #text("Splitting gives a first reading of spread.")

*Memory trace.*
1. #text("valeurs = sorted([2, 4, 5, 8, 10, 12])\nprint(valeurs[:3], valeurs[3:])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Frequencies")

*Situation.* #text("Count grade occurrences in a class.")

#raw(block: true, lang: "python", "notes = [10, 12, 10, 15, 12, 10]\nprint({n: notes.count(n) for n in set(notes)})")

*Detailed walkthrough.* #text("The absolute frequency of each value is observable.")

*Memory trace.*
1. #text("notes = [10, 12, 10, 15, 12, 10]\nprint({n: notes.count(n) for n in set(notes)})") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Interpretation")

*Situation.* #text("A mean is compared to a learning target.")

#raw(block: true, lang: "python", "moyenne = 13.4\nobjectif = 12\nprint(\"objectif atteint\" if moyenne >= objectif else \"notion à retravailler\")")

*Detailed walkthrough.* #text("The calculation becomes an interpreted decision.")

*Memory trace.*
1. #text("moyenne = 13.4\nobjectif = 12\nprint(\"objectif atteint\" if moyenne >= objectif else \"notion à retravailler\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Mean")

*Task.* #text("Calculate mean of [10,12,14].")

#raw(block: true, lang: "python", "notes = [10,12,14]\nprint(sum(notes)/len(notes))")

*Correction.* #text("The mean is 12.")

*Memory trace.*
1. #text("notes = [10,12,14]\nprint(sum(notes)/len(notes))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Even median")

*Task.* #text("Calculate median of four values.")

#raw(block: true, lang: "python", "valeurs = sorted([2, 8, 4, 6])\nmediane = (valeurs[1] + valeurs[2]) / 2")

*Correction.* #text("For an even count, average the two centers.")

*Memory trace.*
1. #text("valeurs = sorted([2, 8, 4, 6])\nmediane = (valeurs[1] + valeurs[2]) / 2") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Range")

*Task.* #text("Calculate max-min.")

#raw(block: true, lang: "python", "valeurs = [3, 11, 7]\nprint(max(valeurs)-min(valeurs))")

*Correction.* #text("The range is 8.")

*Memory trace.*
1. #text("valeurs = [3, 11, 7]\nprint(max(valeurs)-min(valeurs))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Clean data")

*Task.* #text("Remove a None before calculating.")

#raw(block: true, lang: "python", "valeurs = [4, None, 6]\npropres = [v for v in valeurs if v is not None]")

*Correction.* #text("Calculate only on numeric values.")

*Memory trace.*
1. #text("valeurs = [4, None, 6]\npropres = [v for v in valeurs if v is not None]") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Count")

*Task.* #text("Count list size.")

#raw(block: true, lang: "python", "donnees = [2, 4, 6, 8]\nprint(len(donnees))")

*Correction.* #text("len gives the count.")

*Memory trace.*
1. #text("donnees = [2, 4, 6, 8]\nprint(len(donnees))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Above mean")

*Task.* #text("Keep values above the mean.")

#raw(block: true, lang: "python", "m = sum(notes)/len(notes)\nprint([n for n in notes if n > m])")

*Correction.* #text("Calculate m before filtering.")

*Memory trace.*
1. #text("m = sum(notes)/len(notes)\nprint([n for n in notes if n > m])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Compare")

*Task.* #text("Compare two means.")

#raw(block: true, lang: "python", "a = [10, 12]; b = [14, 16]\nprint(sum(a)/len(a) < sum(b)/len(b))")

*Correction.* #text("Compare indicators rather than raw lists.")

*Memory trace.*
1. #text("a = [10, 12]; b = [14, 16]\nprint(sum(a)/len(a) < sum(b)/len(b))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Distribution")

*Task.* #text("Count grades by value.")

#raw(block: true, lang: "python", "notes = [10, 10, 12]\nfrequences = {}\nfor n in notes: frequences[n] = frequences.get(n, 0) + 1")

*Correction.* #text("The dictionary becomes a frequency table.")

*Memory trace.*
1. #text("notes = [10, 10, 12]\nfrequences = {}\nfor n in notes: frequences[n] = frequences.get(n, 0) + 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Report")

*Task.* #text("Display mean, median, and range.")

#raw(block: true, lang: "python", "v = sorted([4, 8, 10, 12, 16])\nprint(sum(v)/len(v), v[len(v)//2], max(v)-min(v))")

*Correction.* #text("Three indicators describe the series better than one.")

*Memory trace.*
1. #text("v = sorted([4, 8, 10, 12, 16])\nprint(sum(v)/len(v), v[len(v)//2], max(v)-min(v))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Interpret")

*Task.* #text("Write a sentence if mean exceeds 10.")

#raw(block: true, lang: "python", "m = sum(notes)/len(notes)\nprint(\"niveau global satisfaisant\" if m >= 10 else \"à retravailler\")")

*Correction.* #text("The calculation becomes an explicit decision.")

*Memory trace.*
1. #text("m = sum(notes)/len(notes)\nprint(\"niveau global satisfaisant\" if m >= 10 else \"à retravailler\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Weighted mean")

*Task.* #text("Calculate a weighted mean.")

#raw(block: true, lang: "python", "notes = [12, 16]\ncoeffs = [1, 2]\nprint(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))")

*Correction.* #text("zip pairs each grade with its coefficient.")

*Memory trace.*
1. #text("notes = [12, 16]\ncoeffs = [1, 2]\nprint(sum(n*c for n,c in zip(notes, coeffs)) / sum(coeffs))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Growth rate")

*Task.* #text("Calculate growth from 100 to 125.")

#raw(block: true, lang: "python", "ancien, nouveau = 100, 125\nprint((nouveau - ancien) / ancien * 100)")

*Correction.* #text("The rate compares change with starting value.")

*Memory trace.*
1. #text("ancien, nouveau = 100, 125\nprint((nouveau - ancien) / ancien * 100)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Odd median")

*Task.* #text("Find the median of five measurements.")

#raw(block: true, lang: "python", "valeurs = sorted([9, 2, 7, 4, 5])\nprint(valeurs[len(valeurs)//2])")

*Correction.* #text("Sorting makes the central index meaningful.")

*Memory trace.*
1. #text("valeurs = sorted([9, 2, 7, 4, 5])\nprint(valeurs[len(valeurs)//2])") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Missing data")

*Task.* #text("Ignore None values before averaging.")

#raw(block: true, lang: "python", "valeurs = [10, None, 14]\npropres = [v for v in valeurs if v is not None]\nprint(sum(propres)/len(propres))")

*Correction.* #text("Data preparation precedes calculation.")

*Memory trace.*
1. #text("valeurs = [10, None, 14]\npropres = [v for v in valeurs if v is not None]\nprint(sum(propres)/len(propres))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Compare groups")

*Task.* #text("Compare the mean of two grade groups.")

#raw(block: true, lang: "python", "a, b = [12, 14], [15, 16]\nma, mb = sum(a)/len(a), sum(b)/len(b)\nprint(\"B\" if mb > ma else \"A\")")

*Correction.* #text("Both means are calculated before comparison.")

*Memory trace.*
1. #text("a, b = [12, 14], [15, 16]\nma, mb = sum(a)/len(a), sum(b)/len(b)\nprint(\"B\" if mb > ma else \"A\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 10. #text("Functions and memory")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Apply").  
*Competency focus:* #text("Trace parameters, local variables and returned values.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("trace parameters, local variables and returned values."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n== Bloom and competency checkpoint
At this stage, the learner should be able to #text("trace parameters, local variables and returned values."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Greet")

*Situation.* #text("A function builds a personalized message.")

#raw(block: true, lang: "python", "def saluer(nom):\n    return \"Bonjour \" + nom\nprint(saluer(\"Lina\"))")

*Detailed walkthrough.* #text("The local parameter receives Lina.")

*Memory trace.*
1. #text("def saluer(nom):\n    return \"Bonjour \" + nom\nprint(saluer(\"Lina\"))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Square")

*Situation.* #text("A reusable calculation produces a square.")

#raw(block: true, lang: "python", "def carre(n): return n * n\nprint(carre(6))")

*Detailed walkthrough.* #text("return sends 36 to the caller.")

*Memory trace.*
1. #text("def carre(n): return n * n\nprint(carre(6))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · VAT")

*Situation.* #text("A shop calculates a tax-included price.")

#raw(block: true, lang: "python", "def ttc(prix, taux=0.2): return prix * (1+taux)\nprint(ttc(100))")

*Detailed walkthrough.* #text("The default rate is used when absent.")

*Memory trace.*
1. #text("def ttc(prix, taux=0.2): return prix * (1+taux)\nprint(ttc(100))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Validation")

*Situation.* #text("A function protects a score.")

#raw(block: true, lang: "python", "def valide(note): return 0 <= note <= 20\nprint(valide(18))")

*Detailed walkthrough.* #text("The function returns a boolean decision.")

*Memory trace.*
1. #text("def valide(note): return 0 <= note <= 20\nprint(valide(18))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Composition")

*Situation.* #text("Two functions convert then categorize temperature.")

#raw(block: true, lang: "python", "def c_to_f(c): return c * 9 / 5 + 32\ndef chaud(f): return f >= 77\nprint(chaud(c_to_f(25)))")

*Detailed walkthrough.* #text("The first return value enters the second function.")

*Memory trace.*
1. #text("def c_to_f(c): return c * 9 / 5 + 32\ndef chaud(f): return f >= 77\nprint(chaud(c_to_f(25)))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Circle area")

*Situation.* #text("A function calculates area for several radii.")

#raw(block: true, lang: "python", "from math import pi\ndef aire_disque(r):\n    return pi * r ** 2\nprint(aire_disque(3))")

*Detailed walkthrough.* #text("The radius is local to the calculation and return makes the value reusable.")

*Memory trace.*
1. #text("from math import pi\ndef aire_disque(r):\n    return pi * r ** 2\nprint(aire_disque(3))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Speed")

*Situation.* #text("A function calculates average speed with explicit units.")

#raw(block: true, lang: "python", "def vitesse(distance_km, temps_h):\n    return distance_km / temps_h\nprint(vitesse(42, 2))")

*Detailed walkthrough.* #text("Two arguments enter, one numeric value leaves.")

*Memory trace.*
1. #text("def vitesse(distance_km, temps_h):\n    return distance_km / temps_h\nprint(vitesse(42, 2))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Energy")

*Situation.* #text("A model calculates gravitational energy.")

#raw(block: true, lang: "python", "def energie(masse, g, hauteur):\n    return masse * g * hauteur\nprint(energie(2, 9.81, 3))")

*Detailed walkthrough.* #text("The function isolates the scientific formula.")

*Memory trace.*
1. #text("def energie(masse, g, hauteur):\n    return masse * g * hauteur\nprint(energie(2, 9.81, 3))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Concentration")

*Situation.* #text("A solution is described by dissolved mass and volume.")

#raw(block: true, lang: "python", "def concentration(masse, volume):\n    return masse / volume\nprint(concentration(12, 0.5))")

*Detailed walkthrough.* #text("The contract assumes a non-zero volume.")

*Memory trace.*
1. #text("def concentration(masse, volume):\n    return masse / volume\nprint(concentration(12, 0.5))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Pressure")

*Situation.* #text("A function turns a value into an informative category.")

#raw(block: true, lang: "python", "def zone_pression(valeur):\n    if valeur < 90: return \"basse\"\n    if valeur <= 120: return \"habituelle\"\n    return \"élevée\"\nprint(zone_pression(128))")

*Detailed walkthrough.* #text("A function can combine conditions and return.")

*Memory trace.*
1. #text("def zone_pression(valeur):\n    if valeur < 90: return \"basse\"\n    if valeur <= 120: return \"habituelle\"\n    return \"élevée\"\nprint(zone_pression(128))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Even")

*Task.* #text("Write is_even.")

#raw(block: true, lang: "python", "def est_pair(n): return n % 2 == 0")

*Correction.* #text("The function returns True or False.")

*Memory trace.*
1. #text("def est_pair(n): return n % 2 == 0") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Mean")

*Task.* #text("Write mean(a,b).")

#raw(block: true, lang: "python", "def moyenne(a,b): return (a+b)/2")

*Correction.* #text("Parentheses protect the sum.")

*Memory trace.*
1. #text("def moyenne(a,b): return (a+b)/2") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Maximum")

*Task.* #text("Write larger(a,b).")

#raw(block: true, lang: "python", "def plus_grand(a,b): return a if a >= b else b")

*Correction.* #text("The choice is returned, not only displayed.")

*Memory trace.*
1. #text("def plus_grand(a,b): return a if a >= b else b") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Default")

*Task.* #text("Create a discount function defaulting to 10%.")

#raw(block: true, lang: "python", "def remise(prix, taux=10): return prix*(1-taux/100)")

*Correction.* #text("taux has a default value.")

*Memory trace.*
1. #text("def remise(prix, taux=10): return prix*(1-taux/100)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Text")

*Task.* #text("Return a complete sentence.")

#raw(block: true, lang: "python", "def phrase(nom, ville): return f\"{nom} habite à {ville}.\"")

*Correction.* #text("f-string assembles variables.")

*Memory trace.*
1. #text("def phrase(nom, ville): return f\"{nom} habite à {ville}.\"") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Conversion")

*Task.* #text("Convert minutes to seconds.")

#raw(block: true, lang: "python", "def secondes(minutes): return minutes*60")

*Correction.* #text("A function can stay highly focused.")

*Memory trace.*
1. #text("def secondes(minutes): return minutes*60") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Condition")

*Task.* #text("Return an age category.")

#raw(block: true, lang: "python", "def categorie(age):\n    if age < 18: return \"mineur\"\n    return \"majeur\"")

*Correction.* #text("Each branch returns immediately.")

*Memory trace.*
1. #text("def categorie(age):\n    if age < 18: return \"mineur\"\n    return \"majeur\"") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · List")

*Task.* #text("Return list sum.")

#raw(block: true, lang: "python", "def total(valeurs): return sum(valeurs)")

*Correction.* #text("The list is an argument.")

*Memory trace.*
1. #text("def total(valeurs): return sum(valeurs)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Test")

*Task.* #text("Test with two calls.")

#raw(block: true, lang: "python", "assert est_pair(4)\nassert not est_pair(5)")

*Correction.* #text("assert checks an expectation automatically.")

*Memory trace.*
1. #text("assert est_pair(4)\nassert not est_pair(5)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Documentation")

*Task.* #text("Add a docstring.")

#raw(block: true, lang: "python", "def carre(n):\n    \"\"\"Renvoie le carré de n.\"\"\"\n    return n*n")

*Correction.* #text("The docstring explains the contract.")

*Memory trace.*
1. #text("def carre(n):\n    \"\"\"Renvoie le carré de n.\"\"\"\n    return n*n") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Max heart rate")

*Task.* #text("Create fcm(age) with 220 - age.")

#raw(block: true, lang: "python", "def fcm(age):\n    return 220 - age")

*Correction.* #text("age is used only inside the function.")

*Memory trace.*
1. #text("def fcm(age):\n    return 220 - age") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Kelvin")

*Task.* #text("Create celsius_to_kelvin(c).")

#raw(block: true, lang: "python", "def celsius_vers_kelvin(c):\n    return c + 273.15")

*Correction.* #text("The function returns a new unit.")

*Memory trace.*
1. #text("def celsius_vers_kelvin(c):\n    return c + 273.15") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Ohm law")

*Task.* #text("Create current(u, r).")

#raw(block: true, lang: "python", "def intensite(u, r):\n    return u / r")

*Correction.* #text("The U/R calculation is isolated and testable.")

*Memory trace.*
1. #text("def intensite(u, r):\n    return u / r") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Parity")

*Task.* #text("Create is_even(n) with a boolean.")

#raw(block: true, lang: "python", "def est_pair(n):\n    return n % 2 == 0")

*Correction.* #text("The result is directly reusable in if.")

*Memory trace.*
1. #text("def est_pair(n):\n    return n % 2 == 0") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Two calls")

*Task.* #text("Test speed on two routes.")

#raw(block: true, lang: "python", "def vitesse(d, t): return d / t\nassert vitesse(100, 2) == 50\nassert vitesse(30, 1.5) == 20")

*Correction.* #text("assert turns expectations into readable tests.")

*Memory trace.*
1. #text("def vitesse(d, t): return d / t\nassert vitesse(100, 2) == 50\nassert vitesse(30, 1.5) == 20") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 11. #text("Nested conditions")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Analyze").  
*Competency focus:* #text("Trace an outer decision followed by an inner decision.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("trace an outer decision followed by an inner decision."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n#text("Decide by levels and trace each branch.")

== Deep lesson
#text("A nested condition opens a second choice only inside an already selected branch. The trace must record each test and produced value.")

== Definitions
*#text("Condition").* #text("True or false expression.")  
*#text("Trace").* #text("Sequence of observed values.")  
*#text("Complexity").* #text("Time and memory cost.")  

== Bloom and competency checkpoint
At this stage, the learner should be able to #text("trace an outer decision followed by an inner decision."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Temperature")

*Situation.* #text("Situation: Temperature. Three intervals are tested from narrowest to widest.")

#raw(block: true, lang: "python", "t = 18\nif t < 0:\n    etat = \"solide\"\nelif t < 100:\n    etat = \"liquide\"\nelse:\n    etat = \"gaz\"\nprint(etat)")

*Detailed walkthrough.* #text("Three intervals are tested from narrowest to widest.")

*Memory trace.*
1. #text("t = 18\nif t < 0:\n    etat = \"solide\"\nelif t < 100:\n    etat = \"liquide\"\nelse:\n    etat = \"gaz\"\nprint(etat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Age and permission")

*Situation.* #text("Situation: Age and permission. The nested condition combines age and parental consent.")

#raw(block: true, lang: "python", "age = 16\nparent = True\nif age >= 18:\n    autorise = True\nelif age >= 14 and parent:\n    autorise = True\nelse:\n    autorise = False\nprint(autorise)")

*Detailed walkthrough.* #text("The nested condition combines age and parental consent.")

*Memory trace.*
1. #text("age = 16\nparent = True\nif age >= 18:\n    autorise = True\nelif age >= 14 and parent:\n    autorise = True\nelse:\n    autorise = False\nprint(autorise)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Grade and distinction")

*Situation.* #text("Situation: Grade and distinction. The second if is evaluated only when the first is true.")

#raw(block: true, lang: "python", "note = 15\nif note >= 10:\n    if note >= 16:\n        mention = \"très bien\"\n    else:\n        mention = \"réussite\"\nelse:\n    mention = \"à revoir\"\nprint(mention)")

*Detailed walkthrough.* #text("The second if is evaluated only when the first is true.")

*Memory trace.*
1. #text("note = 15\nif note >= 10:\n    if note >= 16:\n        mention = \"très bien\"\n    else:\n        mention = \"réussite\"\nelse:\n    mention = \"à revoir\"\nprint(mention)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Traffic light")

*Situation.* #text("Situation: Traffic light. An inner condition refines the orange case.")

#raw(block: true, lang: "python", "couleur = \"orange\"\nurgence = False\nif couleur == \"rouge\":\n    action = \"arrêt\"\nelif couleur == \"orange\":\n    if urgence:\n        action = \"prudence renforcée\"\n    else:\n        action = \"ralentir\"\nelse:\n    action = \"avancer\"\nprint(action)")

*Detailed walkthrough.* #text("An inner condition refines the orange case.")

*Memory trace.*
1. #text("couleur = \"orange\"\nurgence = False\nif couleur == \"rouge\":\n    action = \"arrêt\"\nelif couleur == \"orange\":\n    if urgence:\n        action = \"prudence renforcée\"\n    else:\n        action = \"ralentir\"\nelse:\n    action = \"avancer\"\nprint(action)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Valid triangle")

*Situation.* #text("Situation: Valid triangle. Validity is checked first, then the type.")

#raw(block: true, lang: "python", "a, b, c = 3, 4, 5\nif a + b > c and a + c > b and b + c > a:\n    if a*a + b*b == c*c:\n        nature = \"rectangle\"\n    else:\n        nature = \"valide\"\nelse:\n    nature = \"impossible\"\nprint(nature)")

*Detailed walkthrough.* #text("Validity is checked first, then the type.")

*Memory trace.*
1. #text("a, b, c = 3, 4, 5\nif a + b > c and a + c > b and b + c > a:\n    if a*a + b*b == c*c:\n        nature = \"rectangle\"\n    else:\n        nature = \"valide\"\nelse:\n    nature = \"impossible\"\nprint(nature)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · Battery")

*Situation.* #text("Situation: Battery. The inner branch depends on the critical level.")

#raw(block: true, lang: "python", "niveau = 22\nchargeur = True\nif niveau < 20:\n    if chargeur:\n        message = \"charger\"\n    else:\n        message = \"chercher une prise\"\nelse:\n    message = \"continuer\"\nprint(message)")

*Detailed walkthrough.* #text("The inner branch depends on the critical level.")

*Memory trace.*
1. #text("niveau = 22\nchargeur = True\nif niveau < 20:\n    if chargeur:\n        message = \"charger\"\n    else:\n        message = \"chercher une prise\"\nelse:\n    message = \"continuer\"\nprint(message)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Speed and road")

*Situation.* #text("Situation: Speed and road. The road first selects the comparison context.")

#raw(block: true, lang: "python", "vitesse = 72\nroute = \"ville\"\nif route == \"ville\":\n    if vitesse > 50:\n        message = \"ralentir\"\n    else:\n        message = \"correct\"\nelse:\n    message = \"route à analyser\"\nprint(message)")

*Detailed walkthrough.* #text("The road first selects the comparison context.")

*Memory trace.*
1. #text("vitesse = 72\nroute = \"ville\"\nif route == \"ville\":\n    if vitesse > 50:\n        message = \"ralentir\"\n    else:\n        message = \"correct\"\nelse:\n    message = \"route à analyser\"\nprint(message)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Secure access")

*Situation.* #text("Situation: Secure access. Each level reduces the set of possible cases.")

#raw(block: true, lang: "python", "code = \"A7\"\nactif = True\nif actif:\n    if len(code) >= 2:\n        acces = \"autorisé\"\n    else:\n        acces = \"code trop court\"\nelse:\n    acces = \"compte inactif\"\nprint(acces)")

*Detailed walkthrough.* #text("Each level reduces the set of possible cases.")

*Memory trace.*
1. #text("code = \"A7\"\nactif = True\nif actif:\n    if len(code) >= 2:\n        acces = \"autorisé\"\n    else:\n        acces = \"code trop court\"\nelse:\n    acces = \"compte inactif\"\nprint(acces)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Stock and order")

*Situation.* #text("Situation: Stock and order. The order is validated before comparing it to stock.")

#raw(block: true, lang: "python", "stock = 8\ncommande = 5\nif commande > 0:\n    if commande <= stock:\n        resultat = \"préparer\"\n    else:\n        resultat = \"stock insuffisant\"\nelse:\n    resultat = \"commande invalide\"\nprint(resultat)")

*Detailed walkthrough.* #text("The order is validated before comparing it to stock.")

*Memory trace.*
1. #text("stock = 8\ncommande = 5\nif commande > 0:\n    if commande <= stock:\n        resultat = \"préparer\"\n    else:\n        resultat = \"stock insuffisant\"\nelse:\n    resultat = \"commande invalide\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Average and attendance")

*Situation.* #text("Situation: Average and attendance. No attendees are handled before the average.")

#raw(block: true, lang: "python", "moyenne = 13\npresents = 4\nif presents > 0:\n    if moyenne >= 10:\n        decision = \"validé\"\n    else:\n        decision = \"remédiation\"\nelse:\n    decision = \"aucune décision\"\nprint(decision)")

*Detailed walkthrough.* #text("No attendees are handled before the average.")

*Memory trace.*
1. #text("moyenne = 13\npresents = 4\nif presents > 0:\n    if moyenne >= 10:\n        decision = \"validé\"\n    else:\n        decision = \"remédiation\"\nelse:\n    decision = \"aucune décision\"\nprint(decision)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 12. #text("Multiple conditions")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Evaluate").  
*Competency focus:* #text("Defend branch order and boundary choices.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("defend branch order and boundary choices."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n#text("Organize if, elif, and else without confusing thresholds.")

== Deep lesson
#text("Multiple conditions scan a chain of choices. One branch runs: the first true one.")

== Definitions
*#text("Condition").* #text("True or false expression.")  
*#text("Trace").* #text("Sequence of observed values.")  
*#text("Complexity").* #text("Time and memory cost.")  

== Bloom and competency checkpoint
At this stage, the learner should be able to #text("defend branch order and boundary choices."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Weather")

*Situation.* #text("Situation: Weather. elif selects the first true case.")

#raw(block: true, lang: "python", "pluie = False\nvent = 12\ntemperature = 9\nif pluie:\n    conseil = \"imperméable\"\nelif vent > 30:\n    conseil = \"vêtement coupe-vent\"\nelif temperature < 10:\n    conseil = \"veste chaude\"\nelse:\n    conseil = \"tenue légère\"\nprint(conseil)")

*Detailed walkthrough.* #text("elif selects the first true case.")

*Memory trace.*
1. #text("pluie = False\nvent = 12\ntemperature = 9\nif pluie:\n    conseil = \"imperméable\"\nelif vent > 30:\n    conseil = \"vêtement coupe-vent\"\nelif temperature < 10:\n    conseil = \"veste chaude\"\nelse:\n    conseil = \"tenue légère\"\nprint(conseil)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 2: #text("02 · Transport fare")

*Situation.* #text("Situation: Transport fare. Thresholds are ordered without useful overlap.")

#raw(block: true, lang: "python", "age = 17\nif age < 6:\n    tarif = 0\nelif age < 18:\n    tarif = 2\nelif age < 65:\n    tarif = 3\nelse:\n    tarif = 1")

*Detailed walkthrough.* #text("Thresholds are ordered without useful overlap.")

*Memory trace.*
1. #text("age = 17\nif age < 6:\n    tarif = 0\nelif age < 18:\n    tarif = 2\nelif age < 65:\n    tarif = 3\nelse:\n    tarif = 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 3: #text("03 · Sports score")

*Situation.* #text("Situation: Sports score. Descending comparisons avoid premature classification.")

#raw(block: true, lang: "python", "score = 74\nif score >= 90:\n    niveau = \"élite\"\nelif score >= 75:\n    niveau = \"avancé\"\nelif score >= 50:\n    niveau = \"intermédiaire\"\nelse:\n    niveau = \"débutant\"\nprint(niveau)")

*Detailed walkthrough.* #text("Descending comparisons avoid premature classification.")

*Memory trace.*
1. #text("score = 74\nif score >= 90:\n    niveau = \"élite\"\nelif score >= 75:\n    niveau = \"avancé\"\nelif score >= 50:\n    niveau = \"intermédiaire\"\nelse:\n    niveau = \"débutant\"\nprint(niveau)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 4: #text("04 · Air quality")

*Situation.* #text("Situation: Air quality. Each interval has an explicit bound.")

#raw(block: true, lang: "python", "indice = 82\nif indice <= 25: niveau = \"bon\"\nelif indice <= 50: niveau = \"modéré\"\nelif indice <= 100: niveau = \"dégradé\"\nelse: niveau = \"critique\"\nprint(niveau)")

*Detailed walkthrough.* #text("Each interval has an explicit bound.")

*Memory trace.*
1. #text("indice = 82\nif indice <= 25: niveau = \"bon\"\nelif indice <= 50: niveau = \"modéré\"\nelif indice <= 100: niveau = \"dégradé\"\nelse: niveau = \"critique\"\nprint(niveau)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 5: #text("05 · Calculator")

*Situation.* #text("Situation: Calculator. The final branch protects unknown operators and division by zero.")

#raw(block: true, lang: "python", "a, b, op = 12, 4, \"/\"\nif op == \"+\": resultat = a + b\nelif op == \"-\": resultat = a - b\nelif op == \"*\": resultat = a * b\nelif op == \"/\" and b != 0: resultat = a / b\nelse: resultat = \"erreur\"\nprint(resultat)")

*Detailed walkthrough.* #text("The final branch protects unknown operators and division by zero.")

*Memory trace.*
1. #text("a, b, op = 12, 4, \"/\"\nif op == \"+\": resultat = a + b\nelif op == \"-\": resultat = a - b\nelif op == \"*\": resultat = a * b\nelif op == \"/\" and b != 0: resultat = a / b\nelse: resultat = \"erreur\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 6: #text("06 · File size")

*Situation.* #text("Situation: File size. Only one branch is executed.")

#raw(block: true, lang: "python", "ko = 840\nif ko < 100:\n    classe = \"petit\"\nelif ko < 1000:\n    classe = \"moyen\"\nelse:\n    classe = \"grand\"\nprint(classe)")

*Detailed walkthrough.* #text("Only one branch is executed.")

*Memory trace.*
1. #text("ko = 840\nif ko < 100:\n    classe = \"petit\"\nelif ko < 1000:\n    classe = \"moyen\"\nelse:\n    classe = \"grand\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 7: #text("07 · Feels-like temperature")

*Situation.* #text("Situation: Feels-like temperature. The classification turns a measurement into a decision.")

#raw(block: true, lang: "python", "ressentie = 4\nif ressentie < 0: risque = \"gel\"\nelif ressentie < 8: risque = \"froid\"\nelif ressentie < 18: risque = \"frais\"\nelse: risque = \"doux\"\nprint(risque)")

*Detailed walkthrough.* #text("The classification turns a measurement into a decision.")

*Memory trace.*
1. #text("ressentie = 4\nif ressentie < 0: risque = \"gel\"\nelif ressentie < 8: risque = \"froid\"\nelif ressentie < 18: risque = \"frais\"\nelse: risque = \"doux\"\nprint(risque)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 8: #text("08 · Remaining energy")

*Situation.* #text("Situation: Remaining energy. Inclusive bounds are readable in code.")

#raw(block: true, lang: "python", "energie = 38\nif energie <= 10: etat = \"critique\"\nelif energie <= 30: etat = \"faible\"\nelif energie <= 60: etat = \"correcte\"\nelse: etat = \"haute\"\nprint(etat)")

*Detailed walkthrough.* #text("Inclusive bounds are readable in code.")

*Memory trace.*
1. #text("energie = 38\nif energie <= 10: etat = \"critique\"\nelif energie <= 30: etat = \"faible\"\nelif energie <= 60: etat = \"correcte\"\nelse: etat = \"haute\"\nprint(etat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 9: #text("09 · Ticket priority")

*Situation.* #text("Situation: Ticket priority. The value is converted into a service level.")

#raw(block: true, lang: "python", "attente = 48\nif attente > 120: priorite = \"urgente\"\nelif attente > 60: priorite = \"haute\"\nelif attente > 20: priorite = \"normale\"\nelse: priorite = \"basse\"\nprint(priorite)")

*Detailed walkthrough.* #text("The value is converted into a service level.")

*Memory trace.*
1. #text("attente = 48\nif attente > 120: priorite = \"urgente\"\nelif attente > 60: priorite = \"haute\"\nelif attente > 20: priorite = \"normale\"\nelse: priorite = \"basse\"\nprint(priorite)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Example 10: #text("10 · Mass index")

*Situation.* #text("Situation: Mass index. The classification is informative and does not replace medical advice.")

#raw(block: true, lang: "python", "imc = 24.2\nif imc < 18.5: categorie = \"bas\"\nelif imc < 25: categorie = \"référence\"\nelif imc < 30: categorie = \"haut\"\nelse: categorie = \"très haut\"\nprint(categorie)")

*Detailed walkthrough.* #text("The classification is informative and does not replace medical advice.")

*Memory trace.*
1. #text("imc = 24.2\nif imc < 18.5: categorie = \"bas\"\nelif imc < 25: categorie = \"référence\"\nelif imc < 30: categorie = \"haut\"\nelse: categorie = \"très haut\"\nprint(categorie)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 2: #text("02 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 3: #text("03 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 4: #text("04 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 5: #text("05 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 6: #text("06 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 7: #text("07 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 8: #text("08 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 9: #text("09 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 10: #text("10 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 11: #text("11 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 12: #text("12 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 13: #text("13 · Exercise Condition")

*Task.* #text("Write a condition distinguishing even and odd.")

#raw(block: true, lang: "python", "n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)")

*Correction.* #text(" La condition teste le reste de la division. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("n = 14\nif n % 2 == 0: resultat = \"pair\"\nelse: resultat = \"impair\"\nprint(resultat)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 14: #text("14 · Exercise Threshold")

*Task.* #text("Class a value using three thresholds.")

#raw(block: true, lang: "python", "x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)")

*Correction.* #text(" Les branches sont testées dans l’ordre. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 42\nif x < 10: classe = \"A\"\nelif x < 50: classe = \"B\"\nelse: classe = \"C\"\nprint(classe)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")

=== Exercise 15: #text("15 · Exercise Validation")

*Task.* #text("Reject an out-of-range value.")

#raw(block: true, lang: "python", "x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")")

*Correction.* #text(" La comparaison chaînée vérifie deux bornes. Complexity: Time O(1) · space O(1).")

*Memory trace.*
1. #text("x = 12\nif 0 <= x <= 20: print(\"ok\")\nelse: print(\"erreur\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(1) · space O(1)")


#pagebreak()
= 13. #text("for in range loops")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Apply").  
*Competency focus:* #text("Predict every range value and calculate iteration cost.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("predict every range value and calculate iteration cost."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n#text("Repeat a known number of times and calculate complexity.")

== Deep lesson
#text("for in range produces a sequence of indices or values. The trace shows iteration, accumulator, and number of turns.")

== Definitions
*#text("Condition").* #text("True or false expression.")  
*#text("Trace").* #text("Sequence of observed values.")  
*#text("Complexity").* #text("Time and memory cost.")  

== Bloom and competency checkpoint
At this stage, the learner should be able to #text("predict every range value and calculate iteration cost."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Count from 0 to 4")

*Situation.* #text("Situation: Count from 0 to 4. range(5) produces 0, 1, 2, 3, 4.")

#raw(block: true, lang: "python", "for i in range(5):\n    print(i)")

*Detailed walkthrough.* #text("range(5) produces 0, 1, 2, 3, 4.")

*Memory trace.*
1. #text("for i in range(5):\n    print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 2: #text("02 · Sum integers")

*Situation.* #text("Situation: Sum integers. The accumulator becomes 1, 3, 6, 10, then 15.")

#raw(block: true, lang: "python", "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)")

*Detailed walkthrough.* #text("The accumulator becomes 1, 3, 6, 10, then 15.")

*Memory trace.*
1. #text("total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 3: #text("03 · Squares")

*Situation.* #text("Situation: Squares. Each turn computes an independent square.")

#raw(block: true, lang: "python", "for i in range(1, 5):\n    print(i * i)")

*Detailed walkthrough.* #text("Each turn computes an independent square.")

*Memory trace.*
1. #text("for i in range(1, 5):\n    print(i * i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 4: #text("04 · Even numbers")

*Situation.* #text("Situation: Even numbers. Step 2 jumps directly to the next even number.")

#raw(block: true, lang: "python", "for i in range(0, 11, 2):\n    print(i)")

*Detailed walkthrough.* #text("Step 2 jumps directly to the next even number.")

*Memory trace.*
1. #text("for i in range(0, 11, 2):\n    print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 5: #text("05 · Multiplication table")

*Situation.* #text("Situation: Multiplication table. Variable i takes five values.")

#raw(block: true, lang: "python", "n = 7\nfor i in range(1, 6):\n    print(n * i)")

*Detailed walkthrough.* #text("Variable i takes five values.")

*Memory trace.*
1. #text("n = 7\nfor i in range(1, 6):\n    print(n * i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 6: #text("06 · Count vowels")

*Situation.* #text("Situation: Count vowels. range traverses word indices and counts vowels.")

#raw(block: true, lang: "python", "mot = \"python\"\ncompte = 0\nfor i in range(len(mot)):\n    if mot[i] in \"aeiouy\":\n        compte += 1\nprint(compte)")

*Detailed walkthrough.* #text("range traverses word indices and counts vowels.")

*Memory trace.*
1. #text("mot = \"python\"\ncompte = 0\nfor i in range(len(mot)):\n    if mot[i] in \"aeiouy\":\n        compte += 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 7: #text("07 · Bounded maximum")

*Situation.* #text("Situation: Bounded maximum. The comparison visits each position once.")

#raw(block: true, lang: "python", "valeurs = [4, 9, 2, 7]\nmaximum = valeurs[0]\nfor i in range(1, len(valeurs)):\n    if valeurs[i] > maximum:\n        maximum = valeurs[i]\nprint(maximum)")

*Detailed walkthrough.* #text("The comparison visits each position once.")

*Memory trace.*
1. #text("valeurs = [4, 9, 2, 7]\nmaximum = valeurs[0]\nfor i in range(1, len(valeurs)):\n    if valeurs[i] > maximum:\n        maximum = valeurs[i]\nprint(maximum)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 8: #text("08 · Simple grid")

*Situation.* #text("Situation: Simple grid. Two loops give 2 × 3 = 6 pairs.")

#raw(block: true, lang: "python", "for ligne in range(2):\n    for colonne in range(3):\n        print(ligne, colonne)")

*Detailed walkthrough.* #text("Two loops give 2 × 3 = 6 pairs.")

*Memory trace.*
1. #text("for ligne in range(2):\n    for colonne in range(3):\n        print(ligne, colonne)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n²) · space O(1)")

=== Example 9: #text("09 · Average")

*Situation.* #text("Situation: Average. Total 36 is divided by 3: 12.")

#raw(block: true, lang: "python", "notes = [12, 15, 9]\ntotal = 0\nfor i in range(len(notes)):\n    total += notes[i]\nprint(total / len(notes))")

*Detailed walkthrough.* #text("Total 36 is divided by 3: 12.")

*Memory trace.*
1. #text("notes = [12, 15, 9]\ntotal = 0\nfor i in range(len(notes)):\n    total += notes[i]\nprint(total / len(notes))") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 10: #text("10 · Countdown")

*Situation.* #text("Situation: Countdown. Negative step decreases the value to 1.")

#raw(block: true, lang: "python", "for i in range(5, 0, -1):\n    print(i)")

*Detailed walkthrough.* #text("Negative step decreases the value to 1.")

*Memory trace.*
1. #text("for i in range(5, 0, -1):\n    print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Exercise Sum")

*Task.* #text("Calculate the sum from 1 to 10 with for in range.")

#raw(block: true, lang: "python", "total = 0\nfor i in range(1, 11): total += i\nprint(total)")

*Correction.* #text(" L’accumulateur est mis à jour dix fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("total = 0\nfor i in range(1, 11): total += i\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 2: #text("02 · Exercise Evens")

*Task.* #text("Display evens with for in range and a step.")

#raw(block: true, lang: "python", "for i in range(0, 21, 2): print(i)")

*Correction.* #text(" Le pas 2 réduit les tours à 11. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("for i in range(0, 21, 2): print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 3: #text("03 · Exercise Grid")

*Task.* #text("Count pairs in a 3 × 4 grid.")

#raw(block: true, lang: "python", "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)")

*Correction.* #text(" Deux boucles imbriquées donnent 12 tours. Complexity: Time O(n²) · space O(1).")

*Memory trace.*
1. #text("compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n²) · space O(1)")

=== Exercise 4: #text("04 · Exercise Sum")

*Task.* #text("Calculate the sum from 1 to 10 with for in range.")

#raw(block: true, lang: "python", "total = 0\nfor i in range(1, 11): total += i\nprint(total)")

*Correction.* #text(" L’accumulateur est mis à jour dix fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("total = 0\nfor i in range(1, 11): total += i\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 5: #text("05 · Exercise Evens")

*Task.* #text("Display evens with for in range and a step.")

#raw(block: true, lang: "python", "for i in range(0, 21, 2): print(i)")

*Correction.* #text(" Le pas 2 réduit les tours à 11. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("for i in range(0, 21, 2): print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 6: #text("06 · Exercise Grid")

*Task.* #text("Count pairs in a 3 × 4 grid.")

#raw(block: true, lang: "python", "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)")

*Correction.* #text(" Deux boucles imbriquées donnent 12 tours. Complexity: Time O(n²) · space O(1).")

*Memory trace.*
1. #text("compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n²) · space O(1)")

=== Exercise 7: #text("07 · Exercise Sum")

*Task.* #text("Calculate the sum from 1 to 10 with for in range.")

#raw(block: true, lang: "python", "total = 0\nfor i in range(1, 11): total += i\nprint(total)")

*Correction.* #text(" L’accumulateur est mis à jour dix fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("total = 0\nfor i in range(1, 11): total += i\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 8: #text("08 · Exercise Evens")

*Task.* #text("Display evens with for in range and a step.")

#raw(block: true, lang: "python", "for i in range(0, 21, 2): print(i)")

*Correction.* #text(" Le pas 2 réduit les tours à 11. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("for i in range(0, 21, 2): print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 9: #text("09 · Exercise Grid")

*Task.* #text("Count pairs in a 3 × 4 grid.")

#raw(block: true, lang: "python", "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)")

*Correction.* #text(" Deux boucles imbriquées donnent 12 tours. Complexity: Time O(n²) · space O(1).")

*Memory trace.*
1. #text("compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n²) · space O(1)")

=== Exercise 10: #text("10 · Exercise Sum")

*Task.* #text("Calculate the sum from 1 to 10 with for in range.")

#raw(block: true, lang: "python", "total = 0\nfor i in range(1, 11): total += i\nprint(total)")

*Correction.* #text(" L’accumulateur est mis à jour dix fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("total = 0\nfor i in range(1, 11): total += i\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 11: #text("11 · Exercise Evens")

*Task.* #text("Display evens with for in range and a step.")

#raw(block: true, lang: "python", "for i in range(0, 21, 2): print(i)")

*Correction.* #text(" Le pas 2 réduit les tours à 11. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("for i in range(0, 21, 2): print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 12: #text("12 · Exercise Grid")

*Task.* #text("Count pairs in a 3 × 4 grid.")

#raw(block: true, lang: "python", "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)")

*Correction.* #text(" Deux boucles imbriquées donnent 12 tours. Complexity: Time O(n²) · space O(1).")

*Memory trace.*
1. #text("compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n²) · space O(1)")

=== Exercise 13: #text("13 · Exercise Sum")

*Task.* #text("Calculate the sum from 1 to 10 with for in range.")

#raw(block: true, lang: "python", "total = 0\nfor i in range(1, 11): total += i\nprint(total)")

*Correction.* #text(" L’accumulateur est mis à jour dix fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("total = 0\nfor i in range(1, 11): total += i\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 14: #text("14 · Exercise Evens")

*Task.* #text("Display evens with for in range and a step.")

#raw(block: true, lang: "python", "for i in range(0, 21, 2): print(i)")

*Correction.* #text(" Le pas 2 réduit les tours à 11. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("for i in range(0, 21, 2): print(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 15: #text("15 · Exercise Grid")

*Task.* #text("Count pairs in a 3 × 4 grid.")

#raw(block: true, lang: "python", "compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)")

*Correction.* #text(" Deux boucles imbriquées donnent 12 tours. Complexity: Time O(n²) · space O(1).")

*Memory trace.*
1. #text("compte = 0\nfor i in range(3):\n    for j in range(4): compte += 1\nprint(compte)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n²) · space O(1)")


#pagebreak()
= 14. #text("while loops")

*Path volume:* 10 worked examples and 15 solved exercises.  
*Bloom level emphasis:* #text("Analyze").  
*Competency focus:* #text("Prove progress and termination using memory states.")\n\n== Learning objectives\nBy the end of this path, the learner can #text("prove progress and termination using memory states."), trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\n\n#text("Repeat while a condition remains true without forgetting termination.")

== Deep lesson
#text("while depends on a reevaluated condition. A control variable must progress to avoid an infinite loop.")

== Definitions
*#text("Condition").* #text("True or false expression.")  
*#text("Trace").* #text("Sequence of observed values.")  
*#text("Complexity").* #text("Time and memory cost.")  

== Bloom and competency checkpoint
At this stage, the learner should be able to #text("prove progress and termination using memory states."). Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.

== Worked examples
=== Example 1: #text("01 · Count to 4")

*Situation.* #text("Situation: Count to 4. The condition is checked again after each update.")

#raw(block: true, lang: "python", "i = 0\nwhile i < 5:\n    print(i)\n    i += 1")

*Detailed walkthrough.* #text("The condition is checked again after each update.")

*Memory trace.*
1. #text("i = 0\nwhile i < 5:\n    print(i)\n    i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 2: #text("02 · Sum to a threshold")

*Situation.* #text("Situation: Sum to a threshold. The invariant is total < 10 at the start of each turn.")

#raw(block: true, lang: "python", "total = 0\ni = 1\nwhile total < 10:\n    total += i\n    i += 1\nprint(total)")

*Detailed walkthrough.* #text("The invariant is total < 10 at the start of each turn.")

*Memory trace.*
1. #text("total = 0\ni = 1\nwhile total < 10:\n    total += i\n    i += 1\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 3: #text("03 · Validated input")

*Situation.* #text("Situation: Validated input. The loop protects a valid interval.")

#raw(block: true, lang: "python", "age = 0\nwhile age < 1 or age > 120:\n    age = 18\nprint(age)")

*Detailed walkthrough.* #text("The loop protects a valid interval.")

*Memory trace.*
1. #text("age = 0\nwhile age < 1 or age > 120:\n    age = 18\nprint(age)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 4: #text("04 · Countdown")

*Situation.* #text("Situation: Countdown. The measure approaching termination is n.")

#raw(block: true, lang: "python", "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1")

*Detailed walkthrough.* #text("The measure approaching termination is n.")

*Memory trace.*
1. #text("n = 5\nwhile n > 0:\n    print(n)\n    n -= 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 5: #text("05 · Sequential search")

*Situation.* #text("Situation: Sequential search. Search stops at the first occurrence.")

#raw(block: true, lang: "python", "valeurs = [3, 8, 5, 9]\ni = 0\nwhile i < len(valeurs) and valeurs[i] != 5:\n    i += 1\nprint(i)")

*Detailed walkthrough.* #text("Search stops at the first occurrence.")

*Memory trace.*
1. #text("valeurs = [3, 8, 5, 9]\ni = 0\nwhile i < len(valeurs) and valeurs[i] != 5:\n    i += 1\nprint(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 6: #text("06 · Power of two")

*Situation.* #text("Situation: Power of two. The value doubles: 1, 2, 4, 8, 16, 32, 64, 128.")

#raw(block: true, lang: "python", "valeur = 1\nwhile valeur < 100:\n    valeur *= 2\nprint(valeur)")

*Detailed walkthrough.* #text("The value doubles: 1, 2, 4, 8, 16, 32, 64, 128.")

*Memory trace.*
1. #text("valeur = 1\nwhile valeur < 100:\n    valeur *= 2\nprint(valeur)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 7: #text("07 · Menu")

*Situation.* #text("Situation: Menu. Sentinel q indicates the end.")

#raw(block: true, lang: "python", "choix = \"q\"\nwhile choix != \"q\":\n    choix = \"q\"\nprint(\"fin\")")

*Detailed walkthrough.* #text("Sentinel q indicates the end.")

*Memory trace.*
1. #text("choix = \"q\"\nwhile choix != \"q\":\n    choix = \"q\"\nprint(\"fin\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 8: #text("08 · Euclid")

*Situation.* #text("Situation: Euclid. The remainder decreases to zero; GCD is 6.")

#raw(block: true, lang: "python", "a, b = 48, 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)")

*Detailed walkthrough.* #text("The remainder decreases to zero; GCD is 6.")

*Memory trace.*
1. #text("a, b = 48, 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 9: #text("09 · Accumulate grades")

*Situation.* #text("Situation: Accumulate grades. i advances one position per turn.")

#raw(block: true, lang: "python", "notes = [10, 14, 16]\ni = 0\ntotal = 0\nwhile i < len(notes):\n    total += notes[i]\n    i += 1\nprint(total)")

*Detailed walkthrough.* #text("i advances one position per turn.")

*Memory trace.*
1. #text("notes = [10, 14, 16]\ni = 0\ntotal = 0\nwhile i < len(notes):\n    total += notes[i]\n    i += 1\nprint(total)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Example 10: #text("10 · Time window")

*Situation.* #text("Situation: Time window. The loop checks four values: 0, 10, 20, 30.")

#raw(block: true, lang: "python", "minute = 0\nwhile minute <= 30:\n    minute += 10\nprint(minute)")

*Detailed walkthrough.* #text("The loop checks four values: 0, 10, 20, 30.")

*Memory trace.*
1. #text("minute = 0\nwhile minute <= 30:\n    minute += 10\nprint(minute)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

== Solved exercises
=== Exercise 1: #text("01 · Exercise Counter")

*Task.* #text("Write a while with a counter and explicit stop.")

#raw(block: true, lang: "python", "i = 0\nwhile i < 6:\n    print(i)\n    i += 1")

*Correction.* #text(" Le compteur avance à chaque tour. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("i = 0\nwhile i < 6:\n    print(i)\n    i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 2: #text("02 · Exercise Sentinel")

*Task.* #text("Repeat until reaching a sentinel.")

#raw(block: true, lang: "python", "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")")

*Correction.* #text(" La sentinelle 0 termine le parcours. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 3: #text("03 · Exercise Search")

*Task.* #text("Search for a value with while and an index.")

#raw(block: true, lang: "python", "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)")

*Correction.* #text(" Chaque indice est examiné au plus une fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 4: #text("04 · Exercise Counter")

*Task.* #text("Write a while with a counter and explicit stop.")

#raw(block: true, lang: "python", "i = 0\nwhile i < 6:\n    print(i)\n    i += 1")

*Correction.* #text(" Le compteur avance à chaque tour. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("i = 0\nwhile i < 6:\n    print(i)\n    i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 5: #text("05 · Exercise Sentinel")

*Task.* #text("Repeat until reaching a sentinel.")

#raw(block: true, lang: "python", "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")")

*Correction.* #text(" La sentinelle 0 termine le parcours. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 6: #text("06 · Exercise Search")

*Task.* #text("Search for a value with while and an index.")

#raw(block: true, lang: "python", "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)")

*Correction.* #text(" Chaque indice est examiné au plus une fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 7: #text("07 · Exercise Counter")

*Task.* #text("Write a while with a counter and explicit stop.")

#raw(block: true, lang: "python", "i = 0\nwhile i < 6:\n    print(i)\n    i += 1")

*Correction.* #text(" Le compteur avance à chaque tour. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("i = 0\nwhile i < 6:\n    print(i)\n    i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 8: #text("08 · Exercise Sentinel")

*Task.* #text("Repeat until reaching a sentinel.")

#raw(block: true, lang: "python", "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")")

*Correction.* #text(" La sentinelle 0 termine le parcours. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 9: #text("09 · Exercise Search")

*Task.* #text("Search for a value with while and an index.")

#raw(block: true, lang: "python", "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)")

*Correction.* #text(" Chaque indice est examiné au plus une fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 10: #text("10 · Exercise Counter")

*Task.* #text("Write a while with a counter and explicit stop.")

#raw(block: true, lang: "python", "i = 0\nwhile i < 6:\n    print(i)\n    i += 1")

*Correction.* #text(" Le compteur avance à chaque tour. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("i = 0\nwhile i < 6:\n    print(i)\n    i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 11: #text("11 · Exercise Sentinel")

*Task.* #text("Repeat until reaching a sentinel.")

#raw(block: true, lang: "python", "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")")

*Correction.* #text(" La sentinelle 0 termine le parcours. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 12: #text("12 · Exercise Search")

*Task.* #text("Search for a value with while and an index.")

#raw(block: true, lang: "python", "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)")

*Correction.* #text(" Chaque indice est examiné au plus une fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 13: #text("13 · Exercise Counter")

*Task.* #text("Write a while with a counter and explicit stop.")

#raw(block: true, lang: "python", "i = 0\nwhile i < 6:\n    print(i)\n    i += 1")

*Correction.* #text(" Le compteur avance à chaque tour. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("i = 0\nwhile i < 6:\n    print(i)\n    i += 1") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 14: #text("14 · Exercise Sentinel")

*Task.* #text("Repeat until reaching a sentinel.")

#raw(block: true, lang: "python", "n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")")

*Correction.* #text(" La sentinelle 0 termine le parcours. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("n = 3\nwhile n != 0:\n    n -= 1\nprint(\"fin\")") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")

=== Exercise 15: #text("15 · Exercise Search")

*Task.* #text("Search for a value with while and an index.")

#raw(block: true, lang: "python", "a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)")

*Correction.* #text(" Chaque indice est examiné au plus une fois. Complexity: Time O(n) · space O(1).")

*Memory trace.*
1. #text("a = [2, 5, 8]\ni = 0\nwhile i < len(a) and a[i] != 5: i += 1\nprint(i)") → the instruction is evaluated; the previous memory state remains available.

*Complexity.* #text("Time O(n) · space O(1)")


#pagebreak()
= Final self-assessment

To complete the book, choose one example and one exercise from each path. For each one, write the initial state, the sequence of memory updates, the output, the complexity and the Bloom level mobilised. A competent explanation connects the code to its observable effects and can defend the chosen solution against a boundary case.

#align(center)[*Berkane Lab · Python Intensive Manual · M. Haithem BERKANE*]
