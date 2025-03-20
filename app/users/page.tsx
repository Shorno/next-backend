import {getUsers} from "@/app/lib/api";
import Search from "@/app/ui/search";



export default async function Home() {

    const users = await getUsers();
    return (
        <div className={"flex justify-center items-center flex-col"}>
            <div className={"text-2xl font-bold my-10"}>Users</div>
            <Search  placeholder={"search user"}/>
            {
                users?.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
    );
}
