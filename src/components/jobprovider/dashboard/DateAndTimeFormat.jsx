import React from 'react';
import dayjs from 'dayjs';

const DateAndTimeFormat = ({ date, startTime, endTime }) => {
  // Function to format date
  const formatDate = (dateStr) => {
    return dayjs(dateStr).format('MMM D, YYYY'); // e.g., Aug 31, 2024
  };

  // Function to format time
  const formatTime = (time) => {
    try {
      const [hours, minutes] = time.split(':').map(Number);
      if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new Error('Invalid time');
      }
      const date = new Date();
      date.setHours(hours, minutes);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      console.error('Invalid time format:', time);
      return 'Invalid Time';
    }
  };
  



  // Handle formatting and default values
  const formattedDate = formatDate(date);
  const formattedStartTime = formatTime(startTime);
  const formattedEndTime = formatTime(endTime);

  return (
    
    <>
      {formattedDate} | {formattedStartTime} - {formattedEndTime}
    </>
    
  );
};

export default DateAndTimeFormat;
