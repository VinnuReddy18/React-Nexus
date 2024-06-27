import React from 'react';
import AttendeeCard from './AttendeeCard';
import './AttendeeList.css';

const AttendeeList = ({ attendees }) => {
  return (
    <div className="attendee-list">
      {attendees.map(attendee => (
        <AttendeeCard key={attendee.id} attendee={attendee} />
      ))}
    </div>
  );
};

export default AttendeeList;
