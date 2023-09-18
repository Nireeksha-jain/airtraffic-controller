
import { useState } from 'react';
import React from 'react';
import './LandingPage.css';

const tableData = [
  {
    id: 1,
    flightName: 'Flight 123',
    arrivalTime: '09:00 AM',
    arrivalAirport: 'Airport A',
    departureTime: '08:00 AM',
    departureAirport: 'Airport B',
    typeOfFlight: 'Domestic',
    status: 'On Time',
    delay: 'None',
  },
  {
    id: 2,
    flightName: 'Flight 456',
    arrivalTime: '10:30 AM',
    arrivalAirport: 'Airport C',
    departureTime: '09:15 AM',
    departureAirport: 'Airport D',
    typeOfFlight: 'International',
    status: 'Delayed',
    delay: '1 Hour',
  },
  // Add more data objects as needed
];

function LandingPage() {
        // State variables
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredData, setFilteredData] = useState(tableData);
      
        // Handle search input changes
        const handleSearchInputChange = (event) => {
          const query = event.target.value.toLowerCase();
          setSearchQuery(query);
      
          // Filter the data based on the search query
          const filtered = tableData.filter((rowData) =>
            rowData.flightName.toLowerCase().includes(query)
          );
          setFilteredData(filtered);
        };
  return (
    <div>
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by flight name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Flight Name</th>
            <th>Arrival Time</th>
            <th>Arrival Airport</th>
            <th>Departure Time</th>
            <th>Departure Airport</th>
            <th>Type of Flight</th>
            <th>Status</th>
            <th>Delay</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((rowData) => (
            <tr key={rowData.id}>
            <td>{rowData.id}</td>
            <td>{rowData.flightName}</td>
            <td>{rowData.arrivalTime}</td>
            <td>{rowData.arrivalAirport}</td>
            <td>{rowData.departureTime}</td>
            <td>{rowData.departureAirport}</td>
            <td>{rowData.typeOfFlight}</td>
            <td>{rowData.status}</td>
            <td>{rowData.delay}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default LandingPage;
