import mongoose from "mongoose";
import { Document, Schema } from "mongoose";


export interface Teacher extends Document {
    id: string,
    email: string,
    courses: object,
    department: string,
    sub_department: string,
    is_verified: boolean
}

const TeacherSchema: Schema<Teacher> = new Schema({
    id: String,
    email: String,
    courses: Array,
    department: String,
    sub_department: String,
    is_verified: Boolean,

},{timestamps: true})


const TeacherModel = (mongoose.models.Teacher as mongoose.Model<Teacher>) || (mongoose.model<Teacher>("Teacher", TeacherSchema) )