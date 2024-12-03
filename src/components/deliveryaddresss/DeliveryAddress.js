import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { getSession } from "next-auth/react";
import { fetchAllAddresses } from "../../services/address/page";
import {toast} from 'react-toastify'
const DeliveryAddress = () => {
  const {  setAddressFormData } = useContext(AppContext);
  const {  setShowAddressForm } = useContext(AppContext);
  const { setCurrentEdittedAddressId} = useContext(AppContext);
  const { addresses,setAddresses} = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  function handleUpdateAddress(getCurrentAddress){
    setShowAddressForm(true);
    console.log(getCurrentAddress);
    console.log(getCurrentAddress._id);
    setAddressFormData({ 
      streetAddress: getCurrentAddress.streetAddress, 
      city: getCurrentAddress.city,
      state: getCurrentAddress.state, 
      postalCode: getCurrentAddress.postalCode,
    })
    setCurrentEdittedAddressId(getCurrentAddress._id);

  }
 
  useEffect(() => {
    // Fetch addresses when the component mounts and when the session is available
    const fetchAddresses = async () => {
      const session = await getSession();
      console.log("Active session is:", session);
  
      if (session) {
        const userEmail = session.user.email;
        console.log("User email is:", userEmail);
  
        try {
          const data = await fetchAllAddresses({ userEmail });
          // console.log("Data fetched:", data);
  
          if (data.error) {
            setError(data.error);
          } else {
            // console.log("Addresses fetched:", data);// Check the format of data here
            setAddresses(data.data);
          
          }
        } catch (error) {
          setError("Error fetching addresses: " + error);
          console.error("Error fetching addresses:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setError("User is not authenticated.");
        setLoading(false);
      }
    };
  
    fetchAddresses();
  }, [setAddresses]);
  

  return (
    <div className="py-6 px-4 flex flex-col bg-slate-50 shadow-lg w-fit justify-center">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {addresses && addresses.length > 0 ? (
        addresses.map((item) => (
          <div key={item._id}>
            <div className="address mt-4">
              <p>{item.streetAddress}</p>
              <p>{item.city}</p>
              <p>{item.state}</p>
              <p>{item.postalCode}</p>
              {/* Add more fields as needed */}
            </div>
            <button className="px-4 rounded py-2 mr-8 mt-4 w-fit bg-green-600 text-white">
              <h3>Deliver Here</h3>
            </button>
            <button className="px-4 rounded py-2 mr-8 mt-4 w-fit bg-gray-500 text-white">
              <h3>Delete</h3>
            </button>
            <button onClick={()=>handleUpdateAddress(item)} className="px-4 rounded py-2 mt-4 w-fit bg-gray-500 text-white">
              <h3>Update</h3>
            </button>
          </div>
        ))
      ) : (
        <p>No Addresses Found! Please add an address below</p>
      )}
    </div>
  );
};

export default DeliveryAddress;
