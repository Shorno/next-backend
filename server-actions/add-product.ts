"use server"
import {sql} from "@/utils/db";
import {productSchema} from "@/lib/schema/product-schema";

export async function addProduct(data: any) {
    try {
        productSchema.parse(data);
        await sql`insert into products ${sql(data)}`;
        return {success: true, message: "Product created successfully!"};
    } catch (error) {
        console.log(error)
        return {success: false, message: "Failed to create product. Please try again."};
    }
}