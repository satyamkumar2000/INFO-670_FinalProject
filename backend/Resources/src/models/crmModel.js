import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    required: "Enter a last name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: String,
  },
  project: {
    type: String,
  },
  notes: {
    type: String,
  },
  country: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
