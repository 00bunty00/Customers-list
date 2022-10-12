import { useState } from 'react';
import CustomersList from './Components/CustomersList';
import Navbar from './Components/Navbar';

function App() {

  const [customersList, setCustomersList] = useState([])

  const onAdding = (name) => {
    let custNo = 1;
    if(customersList.length){
      custNo = customersList[customersList.length-1].custNo + 1;
    }
    setCustomersList([...customersList, {custNo: custNo, name: name}]);
  }

  const onDelete = (customer) => {
    setCustomersList(customersList.filter( e => e!==customer));
  }

  return (
    <>
      <Navbar/>
      <div className="container my-5">
        <CustomersList customersList = {customersList} onAdding={onAdding} onDelete={onDelete}/>
      </div>
    </>
  );
}

export default App;
