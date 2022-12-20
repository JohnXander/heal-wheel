import { Dispatch, FC, SetStateAction } from "react";

interface LoginProps {
    setLoggedInId: Dispatch<SetStateAction<string>>
}

export const Login: FC<LoginProps> = ({ setLoggedInId }) => {
    return (
        <form
            className="bg-green-200 text-gray-800 w-80 h-80 rounded-full flex flex-col justify-content items-center gap-4 pt-12">
            {/* // onSubmit={handleSubmit}> */}
            <h1 className="text-4xl">Login</h1>
            <input
                // value={userInfo.username}
                className="p-3 w-3/4 rounded outline-none"
                placeholder="username"
                type="text"
                onChange={({ target }) => {
                    // setUserInfo({...userInfo, username: target.value})
                }}
            />
            <input
                // value={userInfo.password}
                className="p-3 w-3/4 rounded outline-none"
                placeholder="password"
                type="password"
                onChange={({ target }) => {
                    // setUserInfo({...userInfo, password: target.value})
                }}
            />
            <input
                className="bg-green-400 py-3 px-6 rounded cursor-pointer hover:bg-green-500"
                type="submit"
            />
        </form>
    )
}