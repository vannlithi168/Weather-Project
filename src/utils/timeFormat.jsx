function timeFormat(timestamp) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return formattedTime;
}

export default timeFormat;
