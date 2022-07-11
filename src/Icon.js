export default function Icon({ iconID, iconAlt }) {
  const iconsMas = {
    "01d": "clear-day",
    "02d": "overcast-day",
    "03d": "cloudy",
    "04d": "overcast",
    "09d": "partly-cloudy-day-drizzle",
    "10d": "rain",
    "11d": "thunderstorms-day",
    "13d": "snow",
    "50d": "mist",
    "01n": "clear-night",
    "02n": "overcast-night",
    "03n": "cloudy",
    "04n": "overcast",
    "09n": "partly-cloudy-night-drizzle",
    "10n": "rain",
    "11n": "thunderstorms-night",
    "13n": "snow",
    "50n": "mist",
  };

  return (
    <img
      src={require(`@bybas/weather-icons/production/fill/all/${iconsMas[iconID]}.svg`)}
      alt={iconAlt}
      width={"100px"}
    />
  );
}
