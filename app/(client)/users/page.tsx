import {getUsers} from "@/app/lib/api";
import Search from "@/app/components/search";


export default async function UsersPage(props: { searchParams?: Promise<{ name?: string }>}) {
    const searchParams = await props.searchParams;
    const name = searchParams?.name || "";
    const users = await getUsers(name);


    return (
        <div className={"flex justify-center items-center flex-col"}>
            <div className={"text-2xl font-bold my-10"}>Users</div>
            <Search placeholder={"search user"}/>
            {
                users?.map((user) => (
                    <div key={user.id} className={"flex gap-2"}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                    </div>
                ))
            }
        </div>
    );
}
