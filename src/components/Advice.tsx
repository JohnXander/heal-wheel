import { Dispatch, FC, SetStateAction } from "react";

interface AdviceProps { 
    user: {
        id: string;
        name: string;
        mind: number;
        body: number;
        social: number;
        work: number;
    }
}
  
export const Advice: FC<AdviceProps> = ({ user }) => {
    return (
        <div>
            <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative rounded border-2'>
                <div className='border-r-2 border-b-2 w-40 h-40 lg:w-48 lg:h-48 absolute left-0 top-0 flex flex-col items-center justify-center'>
                    <div className="bg-blue-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Mind</h1>
                        <p>Rating: {user?.mind} out of 5</p>
                        <button className="py-2 px-4 bg-blue-300 rounded my-2">See advice</button>
                    </div>
                </div>
                <div className='border-b-2 w-40 h-40 lg:w-48 lg:h-48 absolute right-0 top-0 flex flex-col items-center justify-center'>
                    <div className="bg-green-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Body</h1>
                        <p>Rating: {user?.body} out of 5</p>
                        <button className="py-2 px-4 bg-green-300 rounded my-2">See advice</button>
                    </div>
                </div>
                <div className='border-r-2 w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 left-0 flex flex-col items-center justify-center'>
                    <div className="bg-yellow-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Social</h1>
                        <p>Rating: {user?.social} out of 5</p>
                        <button className="py-2 px-4 bg-yellow-300 rounded my-2">See advice</button>
                    </div>
                </div>
                <div className='w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 right-0 flex flex-col items-center justify-center'>
                    <div className="bg-red-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Work</h1>
                        <p>Rating: {user?.work} out of 5</p>
                        <button className="py-2 px-4 bg-red-300 rounded my-2">See advice</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='border-2 border-green-400 text-green-400 rounded p-2 hover:text-white hover:border-green-500 hover:bg-green-500 my-8'>
                    HELLO
                </button>
            </div>
        </div>
    )
}