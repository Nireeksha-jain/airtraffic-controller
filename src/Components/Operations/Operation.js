import React, { useState } from 'react';
import './Operation.css';
import AddFlightForm from './AddFlightForm';
function Operation() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [tableData, setTableData] = useState([
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
      price: '₹300',
      capacity: '200',
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
      price: '₹500',
      capacity: '150',
    },
    // Add more flight data objects as needed
  ]);

  const [editingFlight, setEditingFlight] = useState(null);

  const confirmDeleteFlight = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this flight?');
    if (confirmed) {
      // If the user confirms, remove the flight with the specified ID
      setTableData((prevData) => prevData.filter((flight) => flight.id !== id));
    }
  };

  const handleAddFlight = (formData) => {
    // Add the submitted data to both tables
    setTableData((prevData) => [...prevData, formData]);
    // Hide the form
    setIsFormVisible(false);
  };
  const editFlight = (flight) => {
    setEditingFlight({ ...flight });
  };

  const cancelEdit = () => {
    setEditingFlight(null);
  };

  const saveEdit = () => {
    // Find the index of the edited flight in the tableData array
    const index = tableData.findIndex((flight) => flight.id === editingFlight.id);

    if (index !== -1) {
      // Update the flight in the tableData array
      const updatedTableData = [...tableData];
      updatedTableData[index] = { ...editingFlight };
      setTableData(updatedTableData);

      // Clear the editing state
      setEditingFlight(null);
    }
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="operation-container">
      <div className="table-container">
    <button onClick={showForm}className='add-button'>Add Flight</button>
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
            <th>Price</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.flightName}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      flightName: e.target.value,
                    })
                  }
                />
              ) : (
                flight.flightName
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.arrivalTime}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      arrivalTime: e.target.value,
                    })
                  }
                />
              ) : (
                flight.arrivalTime
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.arrivalAirport}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      arrivalAirport: e.target.value,
                    })
                  }
                />
              ) : (
                flight.arrivalAirport
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.departureTime}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      departureTime: e.target.value,
                    })
                  }
                />
              ) : (
                flight.departureTime
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.departureAirport}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      departureAirport: e.target.value,
                    })
                  }
                />
              ) : (
                flight.departureAirport
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.typeOfFlight}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      typeOfFlight: e.target.value,
                    })
                  }
                />
              ) : (
                flight.typeOfFlight
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.status}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      status: e.target.value,
                    })
                  }
                />
              ) : (
                flight.status
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.delay}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      delay: e.target.value,
                    })
                  }
                />
              ) : (
                flight.delay
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.price}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      price: e.target.value,
                    })
                  }
                />
              ) : (
                flight.price
              )}</td>
              <td>{editingFlight && editingFlight.id === flight.id ? (
                <input
                  type="text"
                  value={editingFlight.capacity}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      capacity: e.target.value,
                    })
                  }
                />
              ) : (
                flight.capacity
              )}</td>
              <td>
                {editingFlight && editingFlight.id === flight.id ? (
                  <>
                    <button onClick={saveEdit}className="edit-button">Save</button>
                    <button onClick={cancelEdit}className="delete-button">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => editFlight(flight)}className="edit-button">Edit</button>
                    <button onClick={() => confirmDeleteFlight(flight.id)}className="delete-button">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {isFormVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={hideForm} className="close-button">
              Close
            </button>
            <AddFlightForm
              onSubmit={(formData) => {
                handleAddFlight(formData);
                hideForm();
              }}
              onCancel={hideForm}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Operation;
