export const renderDateTime = (datetimeStr: string): string => {
  const datetime: Date = new Date(datetimeStr)

  return `${datetime.getMonth() + 1}/${datetime.getDate()}/${datetime.getFullYear() % 100}`
}