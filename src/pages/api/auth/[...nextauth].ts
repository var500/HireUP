import { googleCredientails } from "@/utils/consts"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
const { clientId, clientSecret } = googleCredientails();
export const authOptions = {

    providers: [
        GoogleProvider({
            clientId: clientId,
            clientSecret: clientSecret,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
}

export default NextAuth(authOptions)