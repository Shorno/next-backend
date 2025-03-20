interface User {
    id: number
    name: string
    age: number
}

interface ApiResponse {
    status: number,
    data: User[],
    success: boolean
}

export async function getUsers(name? : string): Promise<User[]> {
    const response = await fetch(`http://localhost:3000/api/users?name?=${name}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch users. Status: ${response.status}`);
    }

    const apiResponse: ApiResponse = await response.json();

    if (!apiResponse.success) {
        throw new Error("API returned unsuccessful response");
    }

    return apiResponse.data;
}