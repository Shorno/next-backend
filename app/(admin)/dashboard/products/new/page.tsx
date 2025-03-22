"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useRouter} from "next/navigation";
import {ProductFormValues, productSchema} from "@/lib/schema/product-schema";
import {addProduct} from "@/server-actions/add-product";

export default function NewProductPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: "" as any,
            stock: "" as any,
            category: "",
            image_url: "",
        },
        mode: "onChange",
    });

    async function onSubmit(data: ProductFormValues) {
        setIsSubmitting(true);

        try {
            console.log("Form submitted:", data);
            const response = await addProduct(data)
            console.log(response)
            if (!response.success) {
                toast.error(response.message);
                return
            }
            toast.success(response.message);
            router.push("/dashboard/products");
        } catch (error) {
            console.error("Error creating product:", error);
            toast.error("Failed to create product. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add New Product</h1>
                <p className="text-muted-foreground">Create a new product to your inventory</p>
            </div>

            <div className="max-w-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Product name" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the name of your product.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your product..."
                                            className="min-h-24 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Provide a detailed description of your product.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <div
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <span className="text-gray-500">$</span>
                                                </div>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    placeholder="0.00"
                                                    className="pl-7"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(parseFloat(e.target.value) || 0);
                                                    }}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            Set the price for your product.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="stock"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Stock</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                min="0"
                                                placeholder="0"
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(parseInt(e.target.value, 10) || 0);
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            How many items are in stock?
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="category"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Category" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Categorize your product for easier navigation.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image_url"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/image.jpg" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Provide a URL to the product image.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="flex gap-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Creating..." : "Create Product"}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => router.push("/dashboard/products")}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
