
export default async function UserDataById(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error('failed to fetch user data by id')

    return res.json()
}
