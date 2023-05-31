import "./App.css";
import React from "react";
import Data from "./data.json";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import InfoCard from "./components/InfoCard/InfoCard";

interface data {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

function App() {
  const data: data[] = Data;
  const [active, setActive] = React.useState<string>("daily");

  const handleActive = (time: string) => {
    setActive(time);
  };

  const getTime = (value: string) => {
    return value === "daily" ? "Day" : value === "weekly" ? "Week" : "Month";
  };

  const getCurrent = (value: string, item: data) => {
    return value === "daily"
      ? item.timeframes.daily.current
      : value === "weekly"
      ? item.timeframes.weekly.current
      : item.timeframes.monthly.current;
  };
  const getPrevious = (value: string, item: data) => {
    return value === "daily"
      ? item.timeframes.daily.previous
      : value === "weekly"
      ? item.timeframes.weekly.previous
      : item.timeframes.monthly.previous;
  };

  const getImage = (icon: string) => {
    const name = icon.split(" ").join("-").toLowerCase();
    return `/icon-${name}.svg`;
  };

  const getColor = (icon: string) => {
    const name = icon.split(" ").join("-").toLowerCase();
    return `var(--color-${name})`;
  };

  return (
    <div className="app">
      <ProfileCard setActive={handleActive} />
      <div className="info-cards">
        {data.map((item) => (
          <InfoCard
            title={item.title}
            current={getCurrent(active, item)}
            previous={getPrevious(active, item)}
            time={getTime(active)}
            image={getImage(item.title)}
            color={getColor(item.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
