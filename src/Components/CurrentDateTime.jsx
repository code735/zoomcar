import { useState,useEffect } from "react";

function CurrentDateTime() {
    const [dateTime, setDateTime] = useState(new Date());
    const [laterDate, setLaterDate] = useState(new Date(dateTime.getTime() + 2 * 24 * 60 * 60 * 1000));
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDateTime(new Date());
        setLaterDate(new Date(dateTime.getTime() + 2 * 24 * 60 * 60 * 1000));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = daysOfWeek[dateTime.getDay()];
    const dateTimeString = dateTime.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const laterDateTimeString = laterDate.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    return (
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        {dateTimeString}
        <i className="bi bi-arrow-right"></i>
        {laterDateTimeString}
      </div>
    );
  }
  
  export default CurrentDateTime;
  