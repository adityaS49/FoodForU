import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Address from "../../../../../models/address";

export async function DELETE(req) {
  try {
    await connectMongoDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "An error occurred and address id required." },
        { status: 500 }
      );
    }

    const user = await User.findOne({ email }).select("_id");

    if (!user) {
      return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
      );
    } else {
      const deleteAddress = await Address.dindByIdAndDelete(id);

      if (deleteAddress) {
        return NextResponse.json(
          { message: "Address Deleted." },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          { message: "An error occurred while registering the user." },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete address ! Please try again." },
      { status: 500 }
    );
  }
}
