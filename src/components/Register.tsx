export const Register = ({ }) => {
    return (
        <form className="bg-blue-200 w-80 rounded flex flex-col justify-content items-center gap-4 p-4">
            <h1 className="text-4xl">Sign Up</h1>
            <input
                className="p-3 w-5/6 rounded text-2xl outline-none"
                placeholder="username"
                type="text"
            />
            <input
                className="p-3 w-5/6 rounded text-2xl outline-none"
                placeholder="password"
                type="password"
            />
            <input
                className="bg-blue-400 py-3 px-6 rounded text-2xl"
                type="submit"
            />
        </form>
    )
}