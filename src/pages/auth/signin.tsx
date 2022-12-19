import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

interface Props { }

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false
        })

        console.log(res)
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-800">
            <form
                className="border-2 rounded flex flex-col gap-4 items-center p-4 bg-white"
                onSubmit={handleSubmit}>
                <h1 className="text-3xl">Login</h1>
                <input
                    className="border-2 rounded p-2"
                    value={userInfo.email}
                    onChange={({ target }) => {
                        setUserInfo({ ...userInfo, email: target.value })
                    }}
                    type="email"
                    placeholder="john@email.com"
                />
                <input
                    className="border-2 rounded p-2"
                    value={userInfo.password}
                    onChange={({ target }) => {
                        setUserInfo({ ...userInfo, password: target.value })
                    }}
                    type="password"
                    placeholder="********"
                />
                <input className="border-2 rounded py-2 px-6 cursor-pointer" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default SignIn;