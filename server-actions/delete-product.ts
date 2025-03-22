"use server"


import {sql} from "@/utils/db";

export async function deleteProduct(id: number) {
    console.log(id)
    try {
        await sql`delete from products where id = ${id}`
        return {success: true, message: "Product deleted successfully!"}
    } catch (error) {
        console.log(error)
        return {success: false, message: "Failed to delete product. Please try again."}
    }
}