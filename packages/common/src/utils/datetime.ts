import { format } from "@formkit/tempo"

export function formatDate(date: Date) {
  return format(date, "DD/MM/YYYY");
}

export function formatDateTime(date: Date) {
  return format(date, "DD/MM/YYYY HH:mm");
}