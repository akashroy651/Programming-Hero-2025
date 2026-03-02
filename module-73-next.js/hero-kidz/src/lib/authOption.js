
import { loginUser } from "@/actions/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
     

  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    
    credentials: {
      // username: { label: "Username", type: "text", placeholder: "jsmith" },
      // password: { label: "Password", type: "password" }
    
  //       email: { label: "Email", type: "text", placeholder: "you@example.com" },
  // password: { label: "Password", type: "password" },

    
    },
    async authorize(credentials, req) {
     console.log("cre -dh cj",credentials)

    const user = await loginUser(credentials)
    console.log('user=ybudshj', user)
      return user;
    },
  }),

  // GoogleProvider
     GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })


  ],


//////////////////


callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    console.log(user, account, profile, email, credentials)
   
   const isExit = await dbConnect(collections.USERS).findOne({email: user.email, 
    provider: account?.provider})

    if (isExit) {
      return true;
    }
    
        //create user
        const newUser = {
            provider: account?.provider,
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user",
        }

        const result = await dbConnect(collections.USERS).insertOne(newUser)
        return result.acknowledged;
   
   
    // return true
  },
  // async redirect({ url, baseUrl }) {
  //   return baseUrl
  // },
  // async session({ session, token, user }) {
  //   return session
  // },
  // async jwt({ token, user, account, profile, isNewUser }) {
  //   return token
  // }
}





}
