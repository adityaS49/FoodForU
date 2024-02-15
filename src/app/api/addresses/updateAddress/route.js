import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Address from "../../../../../models/address";
import { useSession } from "next-auth/react";
export async function PUT(req) {
  try {
    await connectMongoDB();
      const {data:session} = useSession();
      if (!session) {
        return NextResponse.json(
          { message: "An error occurred while registering the user." },
          { status: 500 } 
        );
      } 
      else {
        const data = await req.json();
        console.log(data);
        const { streetAddress, city, state, postalCode, UserID } = data;
        const UpdateAddress = await Address.findOneAndUpdate(
          {
            _id: UserID,
          },
          {
            $set: {
              streetAddress: streetAddress,
              city: city,
              state: state,
              postalCode: postalCode,
            },
          },
          { new: true }
        );

        if(UpdateAddress){
          return NextResponse.json({ message: "Address Updated Succesfuuly." }, { status: 201 });
        }
        else{
          return NextResponse.json(
            { message: "An error occurred while updating the address." },
            { status: 500 }
          );
        }
      }
    }
  catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
