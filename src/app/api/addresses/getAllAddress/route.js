import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb"; // Replace with the correct path to your database connection code
import Address from "../../../../../models/address"; // Replace with the correct path to your Address model

export async function GET(req) {
  
  try {
    // const {data:session} = useSession();
    const {searchParams} = new URL(req.url);
    const userEmail = searchParams.get('email');

    if (!userEmail) {

      return NextResponse.json(
        { message: "User is not authenticated."},
        { status: 401 }
      );
    }
    try {
      await connectMongoDB(); // Connect to your MongoDB database

      // Find all addresses in the MongoDB "Addresses" collection that match the user's email
      const addressesForEmail = await Address.find({ email: userEmail.userEmail});
console.log(addressesForEmail,"addreses fetched");
      if (addressesForEmail.length > 0) {
        // Addresses retrieved successfully
        return NextResponse.json(
          {
            message: "Addresses retrieved successfully.",
            data: addressesForEmail,
          },
          { status: 200 }
        );
      } else {
        // No addresses found for the specified email
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
