/** Studio-level copy shared between the home page and About. */

export const principles = [
  {
    name: "Focused",
    body: "A product should have a clear reason to exist. We would rather do one thing properly than add features to look busy.",
  },
  {
    name: "Human",
    body: "Software should fit around how people already behave, instead of asking people to reorganise their lives around an app.",
  },
  {
    name: "Considered",
    body: "The small decisions carry the experience: a word in a button, the pause before a screen settles, what happens when nothing has happened yet.",
  },
  {
    name: "Useful",
    body: "A product should earn its place with practical or emotional value — not by demonstrating what the technology can do.",
  },
  {
    name: "Private",
    body: "Our products hold relationships and memories. We treat privacy as a design constraint from the first sketch, and we only say what we can stand behind.",
  },
] as const;

export const process = [
  {
    step: "01",
    name: "Notice",
    body: "Start from something real — a small friction or a small opportunity in ordinary life, usually one we have run into ourselves.",
  },
  {
    step: "02",
    name: "Simplify",
    body: "Find the smallest version of the idea that still means something. Most of the work here is deciding what to leave out.",
  },
  {
    step: "03",
    name: "Build",
    body: "Design and engineering are one process, not two hand-offs. The people shaping the idea are the people shipping it.",
  },
  {
    step: "04",
    name: "Learn",
    body: "Release, watch how the product is actually used, and improve the parts that matter to the people using it.",
  },
] as const;
