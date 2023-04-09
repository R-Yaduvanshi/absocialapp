export const timeConverter = (time) => {
  //   // create a new Date object with the timestamp
  const date = new Date(time);

  //   // get the UTC time of the date object
  const utcTime = date.getTime();

  //    add 5 hours and 30 minutes to the UTC time
  const indianTime = new Date(utcTime + 5.5 * 60 * 60 * 1000);

  //   format the Indian time string
  const formattedTime = indianTime.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  return formattedTime.split(",");
};
