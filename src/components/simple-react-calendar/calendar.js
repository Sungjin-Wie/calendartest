import React from 'react';
import Calendar from 'simple-react-calendar';
const ReactCalendar = () => {
  return (
    <>
      <Calendar activeMonth={new Date()} />
    </>
  );
};

export default ReactCalendar;
