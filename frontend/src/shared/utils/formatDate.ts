const MONTHS_RU = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

const MONTHS_RU_SHORT = [
  'янв', 'фев', 'мар', 'апр', 'мая', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

export function formatEventMonthRange(start: string, end: string): string {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const startMonth = MONTHS_RU[startDate.getMonth()]
  const endMonth = MONTHS_RU[endDate.getMonth()]
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()

  if (startYear !== endYear) {
    return `${startMonth} ${startYear} – ${endMonth} ${endYear}`
  } else if (startMonth === endMonth) {
    return `${startMonth} ${startYear}`
  } else {
    return `${startMonth} – ${endMonth} ${startYear}`
  }
}

export function formatEventDayRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  const startMonth = startDate.getMonth();
  const endMonth = endDate.getMonth();

  if (startMonth === endMonth) {
    return `${startDay}–${endDay}\n${MONTHS_RU[endMonth]}`;
  } else {
    return `${startDay} ${MONTHS_RU_SHORT[startMonth]} – ${endDay} ${MONTHS_RU_SHORT[endMonth]}`;
  }
}

export function formatEventDateRangeFull(startDateStr: string, endDateStr: string): string {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  const startDay = start.getDate();
  const endDay = end.getDate();

  const startMonth = start.getMonth();
  const endMonth = end.getMonth();

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  // Один месяц, один год
  if (startMonth === endMonth && startYear === endYear) {
    return `${startDay}–${endDay} ${MONTHS_RU[endMonth]} ${endYear} г.`;
  }

  // Разные месяцы, но один год
  if (startYear === endYear) {
    return `${startDay} ${MONTHS_RU[startMonth]} – ${endDay} ${MONTHS_RU[endMonth]} ${endYear} г.`;
  }

  // Разные года
  return `${startDay} ${MONTHS_RU[startMonth]} ${startYear} – ${endDay} ${MONTHS_RU[endMonth]} ${endYear} г.`;
}