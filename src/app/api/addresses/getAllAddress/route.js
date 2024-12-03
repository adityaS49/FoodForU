import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb"; 
import Address from "../../../../../models/address"; 

export async function GET(req) {
  try {
    const {searchParams} = new URL(req.url);

    const userEmail = searchParams.get('email');
    
    console.log(userEmail);
    if (!userEmail) {

      return NextResponse.json(
        { message: "User is not authenticated."},
        { status: 401 }
      );
    }
    try {
      await connectMongoDB(); 
      const addressesForEmail = await Address.find({ email: userEmail.userEmail});

console.log(addressesForEmail,"addreses fetched");
      if (addressesForEmail.length > 0) {
      
        return NextResponse.json(
          {
            message: "Addresses retrieved successfully.",
            data: addressesForEmail,
          },
          { status: 200 }
        );
      } else {
        
        return NextResponse.json(
          { message: "No addresses found for the specified email." },
          { status: 404 }
        );
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "An error occurred while retrieving addresses." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while retrieving addresses. boht" },
      { status: 500 }
    );
  }
}
