const CATEGORY_ORDER = [
  "Frontend",
  "Backend",
  "Languages",
  "Data",
  "Version control",
  "Design",
  "Game dev",
];

export const sortCategories = (cats) =>
  [...cats].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b),
  );
