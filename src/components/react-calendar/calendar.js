import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles({
  calendar: {},
});

const ReactCalendar = () => {
  const css = useStyles();
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <Calendar
        className={css.calendar}
        onChange={handleDateChange}
        value={date}
      />
    </>
  );
};

export default ReactCalendar;
