import {getUsers} from "@/app/lib/api";
import {sql} from "@/utils/db";

export default async function Home() {

    const users = await getUsers();

    const students = await sql`select * from students where age > 30 and payment_status = 'PAID' `;
    console.log(students)

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
