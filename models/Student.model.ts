// schema: id string
//   email string
//   department string
//   sub_department string
//   year_of_study string
import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

interface Student extends Document {
    id: string,
    email: string,
    department: string,
    sub_department: string,
    year_of_study: string
}

const StudentSchema: Schema<Student> = new Schema({
    id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    sub_department: {
        type: String,
        required: true
    },
    year_of_study: {
        type: String,
        required: true
    }
}, {timestamps: true})