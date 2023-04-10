import UserDataById from "@/app/lib/UserDataById"
import Link from "next/link"

export type UserByIdParams = {
    params: {
        id: string
    }
}
export default async function UserPageById({ params: { id } }: UserByIdParams) {
    const userData: Promise<User[]> = UserDataById(id)
    const user = await userData
    const content = (
        <section>

            <h2>
                <Link href={`/users`}>Go Back</Link>
            </h2>
            <br />
            <h1>User Details Info</h1>


            <section key={user.id} className="py-4 bg-stone-900">
                <h1>Info of user: {user.name} with id {id}</h1>
                <h2>Personal info:</h2>
                <ul>
                    <li>{user.company.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                    <li>{user.username}</li>
                    <li>{user.website}</li>
                </ul>
                <h2>Address Info:</h2>
                <ul>
                    <li>{user.address.street}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.zipcode}</li>
                    <li>{user.address.geo.lat}</li>
                    <li>{user.address.geo.lng}</li>
                </ul>

            </section>
            <br />


        </section>
    )
    return content
}
