import {NextRequest, NextResponse} from "next/server";
import {users} from "@/data/users";

export async function GET(request: NextRequest) {


    try {
        const name = request.nextUrl.searchParams.get("name");

        let filteredUsers = users;

        if (name) {
            filteredUsers = filteredUsers.filter((user) => user.name.startsWith(name));
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