/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(whatDay: DayOfWeek): boolean {
  return whatDay === DayOfWeek.Saturday || whatDay === DayOfWeek.Sunday;
}

console.log(isWeekend(DayOfWeek.Monday)); // false
console.log(isWeekend(DayOfWeek.Saturday)); // true
console.log(isWeekend(DayOfWeek.Sunday)); // true
