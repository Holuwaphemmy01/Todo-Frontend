import React from 'react';
import '../../styles/dashboard/calendar.css';

const Calendar = () => {
  const today = new Date(); 
  const currentDay = today.getDate();
  const currentMonthIndex = today.getMonth(); 
  const currentYear = today.getFullYear(); 
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const getFirstDayOfMonth = (month, year) =>
    new Date(year, month, 1).getDay();

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = getFirstDayOfMonth(currentMonthIndex, currentYear);
  const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);

  const calendarDays = Array.from({ length: 42 }, (_, i) => {
    const dayNumber = i - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) + 1; // Offset to start with Monday
    return dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null;
  });

  const monthName = today.toLocaleString('default', { month: 'long' });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-weekday">
          {today.toLocaleDateString('default', { weekday: 'long' })}
        </div>
        <div className="calendar-date">
          {`0${currentDay}`.slice(-2)}, {monthName} {currentYear}
        </div>
      </div>

      <div className="calendar-body">
        <table className="calendar-table">
          <thead>
            <tr>
              {weekDays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {weekDays.map((_, colIndex) => {
                  const dayIndex = rowIndex * 7 + colIndex;
                  const day = calendarDays[dayIndex];
                  const isToday = day === currentDay;

                  return (
                    <td
                      key={colIndex}
                      className={
                        isToday
                          ? 'today'
                          : day
                          ? 'active'
                          : 'inactive'
                      }
                    >
                      {day || ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
