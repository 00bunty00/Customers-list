import React from 'react'

const Customer = (props) => {
  return (
    <>
        <div className="container row my-2">
            <div className='col-11'>
                {props.customer.name}
            </div>
            <div className='col-1'>
                <button className="btn btn-danger" onClick={()=>{props.onDelete(props.customer)}}>Delete</button>
            </div>
        </div>
    </>
  )
}

export default Customer