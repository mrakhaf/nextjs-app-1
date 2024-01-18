"use client"

import { useRouter } from "next/navigation"

const Contact = () => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push('/dashboard')
    }
    return (
        <>
            <h1>Contact</h1>
            <button onClick={handleRedirect}>OTW Dashboard</button>
        </>
    )
}

export default Contact