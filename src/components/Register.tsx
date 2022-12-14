import { FormEventHandler, useState } from "react"
import { trpc } from '../utils/trpc';
import Router from "next/router";

export const Register = () => {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const userMutation = trpc.createUser.useMutation();
    
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        userMutation.mutate({
            name: userInfo.username,
            password: userInfo.password, 
            mind: 1,
            body: 1, 
            social: 1, 
            work: 1
        })
        Router.push("/login")
    }

    return (
        <form
            className="bg-blue-200 text-gray-800 w-80 h-80 rounded-full flex flex-col justify-content items-center gap-4 pt-12"
            onSubmit={handleSubmit}>
            <h1 className="text-4xl">Sign Up</h1>
            <input
                value={userInfo.username}
                className="p-3 w-3/4 rounded outline-none"
                placeholder="username"
                type="text"
                onChange={({ target }) => {
                    setUserInfo({...userInfo, username: target.value})
                }}
            />
            <input
                value={userInfo.password}
                className="p-3 w-3/4 rounded outline-none"
                placeholder="password"
                type="password"
                onChange={({ target }) => {
                    setUserInfo({...userInfo, password: target.value})
                }}
            />
            <input
                className="bg-blue-400 py-3 px-6 rounded cursor-pointer hover:bg-blue-500"
                type="submit"
            />
        </form>
    )
}