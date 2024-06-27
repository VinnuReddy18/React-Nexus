import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import AttendeeList from './components/AttendeeList';
import './App.css';

const App = () => {
  const [attendees, setAttendees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/attendees.json')
      .then(response => response.json())
      .then(data => setAttendees(data))
      .catch(error => console.error('Error fetching attendees:', error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchQuery) ||
    attendee.occupation.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Nexus</h1>
        <p className="event-details">
          Date: July 04-05, 2024<br />
          Time: 09:00 AM - 06:00 PM<br />
          Place: Bengaluru, Karnataka
        </p>
        <SearchBar onSearch={handleSearch} />
      </header>
      <AttendeeList attendees={filteredAttendees} />
    </div>
  );
}

export default App;