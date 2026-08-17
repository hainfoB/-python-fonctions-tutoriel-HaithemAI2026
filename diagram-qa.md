# Diagram QA Results

The corrected local tutorial was verified on 17 August 2026. The execution trace and the six visual stages now have independent navigation: **memory controls** move through Python trace states, while **diagram controls** move through source, instruction, frame, memory, decision/iteration and output/return.

| Verification | Result |
|---|---|
| Examples and solved exercises selected through their direct action | 350 / 350 |
| Source line matches the selected scene | 350 / 350 |
| Six-node diagram and four diagram controls | Present for 350 / 350 |
| Diagram-stage navigation advances independently | 350 / 350 |
| Artificial module-level return displayed as a function return | 0 occurrences |
| Desktop and mobile layouts | Passed |

Every worked example and every exercise solution includes a visible action that opens its own animated diagram in the central-memory laboratory.

## Public verification

The GitHub Pages deployment for commit `0c53a2d` completed successfully. On the public Chapter 11 page, the **Exercise 01** solution action loaded `L1 · n = 14` with **Exercise 01** marked active. The diagram then advanced independently from **Stage 1 / 6** to **Stage 2 / 6** while preserving that exercise’s source line.

## Learning-animation verification

The vector traversal scene displayed the four real values `18`, `22`, `19`, and `25` with index `1` active on loop turn 2. Its beginner narration explains that Python visits one cell at a time and identifies `t = 22`.

The tree traversal scene displayed the hierarchy **Projet → Analyse / Dev**. During the first recursive loop turn, the active execution frame was `visiter`; the transition identified `enfant = {'valeur': 'Analyse', 'enfants': []}`, and the tree panel explained that Python visits one child at a time.

The exhaustive browser validation now checks 350 scenes on desktop and mobile. It verifies each direct scene action, source line, six-stage diagram transition, beginner narration and, for the Vectors and Trees chapters, the presence of the structural visualization.

In the visual browser inspection, the vector panel showed the highlighted **index 1 / value 22** cell, its three neighboring cells, the loop-turn explanation and the trace state `t = 22` together above the six-stage execution diagram.

In the visual tree inspection, **Projet** appeared as the highlighted root above the linked children **Analyse** and **Dev**. The panel showed the first loop turn, the `visiter` execution frame and the child value being traversed before the six-stage diagram.
