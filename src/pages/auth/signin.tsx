import { NextPage } from "next";

interface Props { }

const SignIn: NextPage = (props): JSX.Element => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-800">
            <form className="border-2 rounded flex flex-col gap-4 items-center p-4 bg-white">
                <h1 className="text-3xl">Login</h1>
                <input className="border-2 rounded p-2" type="email" placeholder="john@email.com" />
                <input className="border-2 rounded p-2"  type="password" placeholder="********" />
                <input className="border-2 rounded py-2 px-6 cursor-pointer" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default SignIn;