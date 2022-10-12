import React, { useState } from 'react'
import Customer from './Customer'

const CustomersList = (props) => {

    const [name, setName] = useState('')

    const submit = e => {
        e.preventDefault();
        if(!name){
            alert('Enter a name before adding')
        } else {
            props.onAdding(name);
            setName("")
        }
    }

    return (
    <>
        <form onSubmit={submit}>
            <div className="input-group mb-3">
                <input type="text" value = {name} onChange={e => {setName(e.target.value)}} className="form-control" data-testid="app-input" placeholder="Customer's username"/>
                <button className="btn btn-outline-success" type="submit" data-testid="submit-button">Add Customer</button>
            </div>
        </form>
        {(props.customersList.length === 0)? '' :
        <ul className="my-5" data-testid="customer-list">
        {props.customersList.map((customer, index) => {
            return (
                <li style={{listStyle: "none"}} key={customer.custNo}  data-testid={"list-item"+index}>
                    <Customer customer = {customer} onDelete={props.onDelete}/>
                </li>
            )
         })
        }
        </ul>}
    </>
  )
}

export default CustomersList