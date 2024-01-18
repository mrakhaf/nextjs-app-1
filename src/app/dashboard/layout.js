import Link from "next/link"
const DashboardLayout = ({ children }) => {
    return (
        <>
            <div>Navbar</div>
            {children}
            <div>Footer</div>
        </>
    )
}

export default DashboardLayout