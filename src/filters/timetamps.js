export default function (time) {
    const date = new Date(Number(time) * 1000)
    let Year = date.getFullYear()
    let Month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    let Hours = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
    let Minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    return `${Year}-${Month}-${Day} ${Hours}:${Minutes}`
  }