import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReservationCard from "./component/reservationCard";
import "./App.css";
import { addReservation } from './features/reservationSlice';
import CustomerCard from "./component/CustomerCard";

function App() {

  const [reserNameInput, setReserNameInput] = React.useState('');
  const reservations = useSelector( state => state.reservations.value);
  const customers = useSelector(state => state.customers.value);
  const dispatch = useDispatch();

  const handleAddReser = () => {
    if(!reserNameInput) return;
    dispatch(addReservation(reserNameInput));
    setReserNameInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map( (name, key) => {
                  return <ReservationCard key={key} name={name} index={key}/>
                })
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reserNameInput} onChange={ e => setReserNameInput(e.target.value)}/>
            <button onClick={handleAddReser}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
              {
                customers.map( (customer) => (
                  <CustomerCard key={customer.id}  
                    name={customer.name} 
                    food={customer.food}
                    id={customer.id}
                  />
                  ))
              }
        </div>
      </div>
    </div>
  );
}

export default App;