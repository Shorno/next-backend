"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

const sidebarNav = [
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Add new product",
        href: "/dashboard/add-product",
    },

]
export default function Sidebar() {
    const pathname = usePathname()
    return (
        <>
            <div className={"bg-gray-900  min-h-screen w-56 flex  flex-col gap-4 py-10"}>
                {
                    sidebarNav.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <ul key={link.href} className={"px-4"}>
                                <li className={`flex flex-col gap-4 p-2  ${isActive ? "bg-gray-800 rounded-md" : ""}`}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            </ul>

                        )
                    })
                }
            </div>
        </>
    )
}