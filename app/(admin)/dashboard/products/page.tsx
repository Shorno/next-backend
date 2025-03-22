import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {sql} from "@/utils/db";
import DeleteProductButton from "@/app/(admin)/dashboard/products/_components/delete-product-button";

interface Product {
    name: string
    price: number,
    id: number,
    stock: number,
    category: string
}

export default async function ProductsPage() {

    const products: Product[] = await sql`select * from products`


    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Products</h1>
                    <p className="text-muted-foreground">Manage your product inventory</p>
                </div>
                <Link href="/dashboard/products/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4"/>
                        Add New Product
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                ID
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Name
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Price
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Stock
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Category
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                                <td className="p-4 align-middle">{product.id}</td>
                                <td className="p-4 align-middle">{product.name}</td>
                                <td className="p-4 align-middle">${product.price}</td>
                                <td className="p-4 align-middle">{product.stock}</td>
                                <td className="p-4 align-middle">{product.category}</td>
                                <td className="p-4 align-middle">
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm">
                                            Edit
                                        </Button>
                                        <DeleteProductButton id={product.id}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
