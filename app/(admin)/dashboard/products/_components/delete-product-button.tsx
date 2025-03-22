"use client"
import {Button} from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {deleteProduct} from "@/server-actions/delete-product";
import {toast} from "sonner";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function DeleteProductButton({id}: { id: number }) {
    const [loading, setLoading] = useState(false)
    const router = useRouter();


    const handleDelete = async () => {
        setLoading(true)
        try {
            const response = await deleteProduct(id)
            if (!response.success) {
                toast.error(response.message)
            }
            toast.success(response.message)
            router.refresh()
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong, please try again")
        } finally {
            setLoading(false)
        }
    }


    return (
        <>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-red-500">
                        Delete
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the product
                            and remove your data from server.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}>{loading ? "Deleting..." : "Delete"}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>


    )
}