import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: { username: string; password: string; }) {
                const user = { id: 1, name: "ehtesham", passwrord: "123" };
                if (credentials.username === user.name && credentials.password === user.passwrord) {
                    return user;
                }
                else {
                    return null;
                }
            },
        }),
        
    ],
});