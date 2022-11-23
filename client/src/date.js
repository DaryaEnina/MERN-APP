export const dateNow = () => {
  const dateNow = Date.now();
  const newDate = new Date(dateNow);
  const currentDate =
    newDate.getMonth() +
    1 +
    "/" +
    newDate.getDate() +
    "/" +
    newDate.getFullYear() +
    " " +
    (newDate.getHours() > 12 ? newDate.getHours() - 12 : newDate.getHours()) +
    ":" +
    newDate.getMinutes() +
    " " +
    (newDate.getHours() >= 12 ? "PM" : "AM");
  return currentDate;
};
