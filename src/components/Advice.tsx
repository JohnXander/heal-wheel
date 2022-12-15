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
            <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative'>
                <div className='bg-blue-400 w-40 h-40 lg:w-48 lg:h-48 absolute left-0 top-0 flex flex-col items-center'>
                    <h1>Mind</h1>
                    <p>You rated {user?.mind} out of 5</p>
                    <button className="border-2 p-2">See advice</button>
                </div>
                <div className='bg-green-400 w-40 h-40 lg:w-48 lg:h-48 absolute right-0 top-0 flex flex-col items-center'>
                    <h1>Body</h1>
                    <p>You rated {user?.body} out of 5</p>
                    <button className="border-2 p-2">See advice</button>
                </div>
                <div className='bg-yellow-400 w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 left-0 flex flex-col items-center'>
                    <h1>Social</h1>
                    <p>You rated {user?.social} out of 5</p>
                    <button className="border-2 p-2">See advice</button>
                </div>
                <div className='bg-red-400 w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 right-0 flex flex-col items-center'>
                    <h1>Work</h1>
                    <p>You rated {user?.work} out of 5</p>
                    <button className="border-2 p-2">See advice</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='border-2 border-green-400 text-green-400 rounded p-2 hover:text-white hover:border-green-500 hover:bg-green-500 my-8'>
                    SAVE STATS
                </button>
            </div>
        </div>
    )
}