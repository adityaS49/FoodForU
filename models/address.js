import mongoose, { Schema, models } from "mongoose";

const addressSchema = new Schema(
  {
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    userEmail: {
      type: String,
      required:true,
    },
    UserID: {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Address = models.Address || mongoose.model("Address", addressSchema);
export default Address;