import { useContext, useEffect } from "react";
import { AppContext } from "@/components/Context/AppContext";
import { useSession } from "next-auth/react";
import { addNewAddress, updateAddress } from "@/services/address/page";
import {toast} from 'react-toastify'
const AddressForm = () => {
  const { data: session } = useSession();
  console.log("Session:", session);
  const {
    currentEdittedAddressId,
    setCurrentEdittedAddressId,
    addressFormData,
    setAddressFormData,
  } = useContext(AppContext);

  useEffect(() => {
    if (!session) {
      console.log("User not authenticated");
      return;
    }
  }, [session]);

  const handleChange = (e) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddorUpdateAddress = async () => {
    if (!session) {
      console.log("User not authenticated");
      return;
    }
    console.log(currentEdittedAddressId);
    try {
      console.log(addressFormData);
      const response =
        currentEdittedAddressId !== null
          ? await updateAddress({
              ...addressFormData,
              UserID: currentEdittedAddressId,
            })
          : await addNewAddress({
              addressFormData,
              userEmail: session.user.email,
            });
      console.log(response);
      
      toast.success("Address updated successfully")
      console.log("Address added/updated successfully:",
       response.data);
      setAddressFormData({
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
      });
      setCurrentEdittedAddressId(null);
    } catch (error) {
      console.error("Error adding/updating address:", error);
    }
  };

  return (
    <form
      onSubmit={handleAddorUpdateAddress}
      className=" flex flex-wrap flex-col items-center justify-center mx-auto"
    >
      <div className="flex flex-wrap gap-4">
        <div className="mb-4">
          <label
            htmlFor="streetAddress"
            className="block text-gray-600 font-medium mb-2"
          >
            Street Address:
          </label>
          <input
            required
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={addressFormData.streetAddress}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-600 font-medium mb-2"
          >
            City:
          </label>
          <input
            required
            type="text"
            id="city"
            name="city"
            value={addressFormData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-gray-600 font-medium mb-2"
          >
            State:
          </label>
          <input
            required
            type="text"
            id="state"
            name="state"
            value={addressFormData.state}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block text-gray-600 font-medium mb-2"
          >
            Postal Code:
          </label>
          <input
            required
            type="text"
            id="postalCode"
            name="postalCode"
            value={addressFormData.postalCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="mt-4  flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
