import {NextRequest, NextResponse} from "next/server";
import {users} from "@/data/users";

export async function GET(request: NextRequest) {
    try {
        const name = request.nextUrl.searchParams.get("name");
        const age = request.nextUrl.searchParams.get("age");

        let filteredUsers = users;

        if (name) {
            filteredUsers = filteredUsers.filter((user) => user.name === name);
        }

        if (age) {
            filteredUsers = filteredUsers.filter((user) => user.age === parseInt(age));
        }

        return NextResponse.json({
            status: 200,
            success: true,
            data: filteredUsers
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            success: false,
            message: "Internal Server Error",
            error : error
        });
    }
}