import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { emailOTP } from "better-auth/plugins"
import { resend } from "./resend";

//const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
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
