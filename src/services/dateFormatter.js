const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthFromNumberToName = (month) => {
  if (month === "current") return "Current";
  return months[month - 1];
};
