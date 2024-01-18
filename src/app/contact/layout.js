import Link from "next/link"
const ContactLayout = ({ children }) => {
    return (
        <>
            <div>Navbar</div>
            {children}
            <div>Footer</div>
        </>
    )
}

export default ContactLayout