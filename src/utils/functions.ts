export function formatDateString(isoDateString: string) {
  const date = new Date(isoDateString);
  const options: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleString("en-GB", options);

  return formattedDate;
}
