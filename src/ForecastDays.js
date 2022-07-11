export default function ForecastDays(props) {
  console.log(props);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let apiDate = new Date(props.data);
  let datatime = {
    day: apiDate.getDay(),
    date: apiDate.getDate(),
    month: apiDate.getMonth() + 1,
  };

  return (
    <h5 className="card-title">
      {days[datatime.day]}
      <br />
      {datatime.date < 10 ? `0${datatime.date}` : datatime.date}.
      {datatime.month < 10 ? `0${datatime.month}` : datatime.month}
    </h5>
  );
}
