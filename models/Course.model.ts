import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface Course extends Document {
    id: string,
    teacher_id: string,
    course_name: string,
    course_description: string,
    course_short_description: string,
    department: string,
    sub_department: string,
    year_of_study: string,
    semester: string,
    unit1_url: string,
    unit2_url: string,
    unit3_url: string,
    unit4_url: string,
    unit5_url: string,
    video_lectures: [string],
    pyqs_url: [string],
}

const CourseSchema: Schema<Course> = new Schema({
    id: {
        type: String,
        required: true,
    },
    teacher_id: {
        type: String,
        required: true,
    },
    course_name: {
        type: String,
        required: true,
    },
    course_description: {
        type: String,
        required: true,
    },
    course_short_description: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    sub_department: {
        type: String,
        required: true,
    },
    year_of_study: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    unit1_url: {
        type: String,
        required: true,
    },
    unit2_url: {
        type: String,
        required: true,
    },
    unit3_url: {
        type: String,
        required: true,
    },
    unit4_url: {
        type: String,
        required: true,
    },
    unit5_url: {
        type: String,
        required: true,
    },
    video_lectures: [{
        type: String
    }],
    pyqs_url: [{
        type: String
    }]  


},{timestamps: true})


const CourseModel = (mongoose.models.Course as mongoose.Model<Course>) || (mongoose.model<Course>("Course", CourseSchema) )