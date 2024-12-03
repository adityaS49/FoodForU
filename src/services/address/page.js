
export const addNewAddress = async ({ addressFormData, userEmail }) => {
  
  try {
    const res = await fetch("/api/addresses/addNewAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addressFormData, userEmail}),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllAddresses = async (userEmail) => {

  console.log(userEmail);

  try {
    const apiUrl = `/api/addresses/getAllAddress?email=${userEmail}`;
    const res = await fetch(apiUrl, { 
      method: "GET",
      
    });

    if (!res.ok) {
      
      throw new Error(`Request failed with status: ${res.status}`);
     
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
   

    return { error: "An error occurred while fetching addresses.", userEmail };
  }
};

export const updateAddress = async (formData) => {
  try {
    const res = await fetch("/api/addresses/updateAddress",{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteAddress = async (id) => {
  try {
    const res = await fetch(`/api/addresses/updateAddress?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
