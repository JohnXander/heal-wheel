export const Register = () => {
    return (
        <form className="bg-blue-200 text-gray-800 w-80 h-80 rounded-full flex flex-col justify-content items-center gap-4 pt-12">
            <h1 className="text-4xl">Sign Up</h1>
            <input
                className="p-3 w-3/4 rounded outline-none"
                placeholder="username"
                type="text"
            />
            <input
                className="p-3 w-3/4 rounded outline-none"
                placeholder="password"
                type="password"
            />
            <input
                className="bg-blue-400 py-3 px-6 rounded cursor-pointer hover:bg-blue-500"
                type="submit"
            />
        </form>
    )
}