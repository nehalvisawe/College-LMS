import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { emailOTP } from "better-auth/plugins";
import {MongoClient} from "mongodb"
import { resend } from "./resend";


const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db()
export const auth = betterAuth({
    database: mongodbAdapter(db,{
        client
    }),

    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
   
    plugins: [
        emailOTP({ 
            async sendVerificationOTP({ email, otp, type }) { 
                const { data, error } = await resend.emails.send({
                    from: 'CollegeLMS <onboarding@resend.dev>',
                    to: [email],
                    subject: 'College LMS- verify your email',
                    html: `<p>Your OTP is <strong>${otp}</strong> </p>`,
                 });
            }, 
        }) 
    ]
});