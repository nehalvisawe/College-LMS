import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string || "");
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    // Optional: require email verification before login
    // requireEmailVerification: true,

    // Optional: password reset
    sendResetPassword: async ({ user, url }, request) => {
      // plug in your email sender here (Resend, Nodemailer, etc.)
      console.log(`Send reset link to ${user.email}: ${url}`);
    },
  },
    user: {
    modelName: "teachers",
    fields: {
      // Better Auth uses "name" internally — map it or keep it
      // if your schema has no name field, map it to a dummy or add it
      emailVerified: "is_verified",
    },
    additionalFields: {
      full_name: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      courses: {
        type: "string[]",         // array of strings
        required: false,
        defaultValue: [],
      },
      department: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      sub_department: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      year_of_teaching: {
        type: "string[]",
        required: false,
        defaultValue: [],
      },
    },
  },

  // Optional: email verification
  // emailVerification: {
  //   sendVerificationEmail: async ({ user, url }) => {
  //     console.log(`Send verify link to ${user.email}: ${url}`);
  //   },
  // },

  plugins:[]
});