'use client';


import {SearchIcon} from "lucide-react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams= useSearchParams()
    const {replace} = useRouter();
    const pathname = usePathname();
    console.log(searchParams)

    function handleSearch(name: string) {
        const params = new  URLSearchParams(searchParams)
        if (name.trim()){
            params.set("name", name)
        }else {
            params.delete("name")
        }
        replace(`${pathname}?${params.toString()}`)

    }

    return (
        <div className="relative flex my-10 w-96">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('name')?.toString()}
            />
            <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
        </div>
    );
}