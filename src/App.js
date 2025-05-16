import { useState, useEffect } from 'react';
import './App.css';

function WorldClock({ timezone, label }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { 
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="clock">
      <h2>{label}</h2>
      <div className="time">{formattedTime}</div>
    </div>
  );
}

function App() {
  const timezones = [
    { timezone: 'America/New_York', label: 'New York' },
    { timezone: 'Europe/London', label: 'London' },
    { timezone: 'Asia/Tokyo', label: 'Tokyo' },
    { timezone: 'Australia/Sydney', label: 'Sydney' },
    { timezone: 'Asia/Dubai', label: 'Dubai' },
    { timezone: 'Asia/Amman', label: 'Jordan' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>World Clock</h1>
        <div className="clocks-container">
          {timezones.map((tz, index) => (
            <WorldClock 
              key={index} 
              timezone={tz.timezone} 
              label={tz.label} 
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
