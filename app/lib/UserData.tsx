export default async function UserData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error('failed to fetch user data')

    return res.json()
}
