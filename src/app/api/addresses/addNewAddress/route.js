import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Address from "../../../../../models/address";
import User from "../../../../../models/user";

export async function POST(req) {
  try {
    const data = await req.json();
    
    const {  addressFormData,userEmail} = data;
    const {streetAddress, city, state, postalCode}=addressFormData;
    console.log(addressFormData);
    console.log(userEmail);
    await connectMongoDB();
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return null;
    }

    const newlyAddedAddress = await Address.create({streetAddress, city, state, postalCode, userEmail});

    if (newlyAddedAddress) {
      return NextResponse.json({ message: "Address Added Successfully." }, { status: 201 });
    }
    else{
        return NextResponse.json(
            { message: "An error occurred while adding the address." },
            { status: 500 }
          );
    }
  } catch (error) {
    console.log(error);
  }
}
