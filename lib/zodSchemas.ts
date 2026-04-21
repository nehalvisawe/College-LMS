import {z} from "zod";
export const courseSchema = z.object(
    {
        course_name: z.string().min(1, "Course name is required"),
        course_description: z.string().min(1, "Course description is required"),
        course_short_description: z.string().min(1, "Course short description is required"),
        department: z.string().min(1, "Department is required"),
        sub_department: z.string().min(1, "Sub-department is required"),
        year_of_study: z.string().min(1, "Year of study is required"),
        semester: z.string().min(1, "Semester is required"),
        unit1_url: z.string().min(1, "Unit 1 URL is required"),
        unit2_url: z.string().min(1, "Unit 2 URL is required"),
        unit3_url: z.string().min(1, "Unit 3 URL is required"),
        unit4_url: z.string().min(1, "Unit 4 URL is required"),
        unit5_url: z.string().min(1, "Unit 5 URL is required"),

    }
)

export type CourseSchemaType = z.infer<typeof courseSchema>;