export function googleCredientails() {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error("OAuth Credientails not found")
    }

    return { clientId, clientSecret };
}