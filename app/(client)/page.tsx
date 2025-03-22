import {getUsers} from "@/lib/api";

export default async function Home() {

    const users = await getUsers();

    return (
        <>
            <div>Hello world</div>
            {
                users?.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </>
    );
}
