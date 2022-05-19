import React from 'react'
import { findDOMNode } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerFood } from '../features/customerSlice'

export default function CustomerCard({id, name, food}) {

    const customers = useSelector(state => state.customers.value)
    const [custFood, setCustFood] = React.useState('')  
    const dispatch = useDispatch()

    const handleCustFood = () => {
        if(!custFood) return ;
        dispatch(addCustomerFood({id: id, food:custFood}));
        setCustFood('');
    }

  return (
        <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
        <div className="customer-food">
            {
                food.map( (food, key) => (
                    <p key={key}>{food}</p>
                ))
            }
        </div>
        <div className="customer-food-input-container">
            <input value={custFood} onChange={e => {setCustFood(e.target.value)}}/>
            <button onClick={handleCustFood}>Add</button>
        </div>
        </div>
    </div>
  )
}
