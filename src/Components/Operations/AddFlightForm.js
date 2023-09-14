// AddFlightForm.js
import React, { useState } from 'react';


function AddFlightForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    // Initialize form fields with empty values or defaults
    flightName: '',
    arrivalTime: '',
    arrivalAirport: '',
    departureTime: '',
    departureAirport: '',
    type: '',
    status: '',
    capacity: '',
    price: '',
    terminalId: '',
    terminalName: '',
    terminalType: '',
    parkingCapacity: '',
    terminalLocation: '',
    runwayId: '',
    runwayName: '',
    runwayLength: '',
    runwayAvailability: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="popup-overlay">
    <div className="popup-content">
      <h2>Add Flight</h2>
      <form onSubmit={handleSubmit}>
          {/* Flight details */}
          <h3>Flight Details</h3>
          <input
            type="text"
            name="flightName"
            placeholder="Flight Name"
            value={formData.flightName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="arrivalTime"
            placeholder="Arrival Time"
            value={formData.arrivalTime}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="arrivalAirport"
            placeholder="Arrival Airport"
            value={formData.arrivalAirport}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="departureTime"
            placeholder="Departure Time"
            value={formData.departureTime}
            onChange={handleInputChange}
          />
           <input
            type="text"
            name="departureAirport"
            placeholder="Departure Airport"
            value={formData.departureAirport}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleInputChange}
          />
           <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="capacity"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={handleInputChange}
          />
           <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
          
          {/* Terminal details */}
          <h3>Terminal Details</h3>
          <input
            type="text"
            name="terminalId"
            placeholder="Terminal ID"
            value={formData.terminalId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="terminalName"
            placeholder="Terminal Name"
            value={formData.terminalName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="terminalType"
            placeholder="Terminal Type"
            value={formData.terminalType}
            onChange={handleInputChange}
          />
            <input
            type="text"
            name="parkingCapacity"
            placeholder="Parking Capacity"
            value={formData.parkingCapacity}
            onChange={handleInputChange}
          />
            <input
            type="text"
            name="terminalLocation"
            placeholder="Terminal Location"
            value={formData.terminalLocation}
            onChange={handleInputChange}
          />
          
          {/* Runway details */}
          <h3>Runway Details</h3>
          <input
            type="text"
            name="runwayId"
            placeholder="Runway ID"
            value={formData.runwayId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="runwayName"
            placeholder="Runway Name"
            value={formData.runwayName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="runwayLength"
            placeholder="Runway Length"
            value={formData.runwayLength}
            onChange={handleInputChange}
          />
        <input
            type="text"
            name="runwayAvailability"
            placeholder="Runway Availability"
            value={formData.runwayAvailability}
            onChange={handleInputChange}
          />



          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFlightForm;
