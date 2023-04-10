import { Metadata } from "next"
import UserData from "../lib/UserData"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Next | Users'
}
export default async function UserPage() {
    const usersData: Promise<User[]> = UserData()
    const users = await usersData
    const content = (
        <section>
            <h2>
                <Link href={`/`}>Back home</Link>
            </h2>
            <br />
            <h1>User List</h1>
            {users.map(({ id, name }) => (
                <>
                    <section key={id} className="py-4 bg-stone-900">
                        <h1>User Name: <Link href={`/users/${id}`} className="hover:underline hover:text-slate-300 ">{name}</Link></h1>
                    </section>
                    <br />
                </>
            ))}
        </section>
    )
    return content
}
