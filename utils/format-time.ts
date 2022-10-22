import dayjs from 'dayjs'

export function formatTime(str: string, format = 'YYYY-MM-DD') {
  return dayjs(str).format(format)
}
