import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
                        <div className="flex gap-x-0.5 pt-1 pb-3">
                            {Array(user?.mind).fill("_").map((_, idx) => {
                                return (
                                    <FontAwesomeIcon
                                        className="w-4 text-blue-500"
                                        key={idx}
                                        icon={faStar}
                                    />
                                )
                            })}
                        </div>
                        <button className="py-2 px-4 bg-blue-300 rounded mb-2 hover:bg-blue-400">See advice</button>
                    </div>
                </div>
                <div className='border-b-2 w-40 h-40 lg:w-48 lg:h-48 absolute right-0 top-0 flex flex-col items-center justify-center'>
                    <div className="bg-green-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Body</h1>
                        <div className="flex gap-x-0.5 pt-1 pb-3">
                            {Array(user?.body).fill("_").map((_, idx) => {
                                return (
                                    <FontAwesomeIcon
                                        className="w-4 text-green-500"
                                        key={idx}
                                        icon={faStar}
                                    />
                                )
                            })}
                        </div>
                        <button className="py-2 px-4 bg-green-300 rounded mb-2 hover:bg-green-400">See advice</button>
                    </div>
                </div>
                <div className='border-r-2 w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 left-0 flex flex-col items-center justify-center'>
                    <div className="bg-yellow-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Social</h1>
                        <div className="flex gap-x-0.5 pt-1 pb-3">
                            {Array(user?.social).fill("_").map((_, idx) => {
                                return (
                                    <FontAwesomeIcon
                                        className="w-4 text-yellow-500"
                                        key={idx}
                                        icon={faStar}
                                    />
                                )
                            })}
                        </div>
                        <button className="py-2 px-4 bg-yellow-300 rounded mb-2 hover:bg-yellow-400">See advice</button>
                    </div>
                </div>
                <div className='w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 right-0 flex flex-col items-center justify-center'>
                    <div className="bg-red-200 flex flex-col items-center justify-center py-2 px-4 rounded">
                        <h1 className="text-2xl">Work</h1>
                        <div className="flex gap-x-0.5 pt-1 pb-3">
                            {Array(user?.work).fill("_").map((_, idx) => {
                                return (
                                    <FontAwesomeIcon
                                        className="w-4 text-red-500"
                                        key={idx}
                                        icon={faStar}
                                    />
                                )
                            })}
                        </div>
                        <button className="py-2 px-4 bg-red-300 rounded mb-2 hover:bg-red-400">See advice</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='border-2 border-gray-800 text-gray-400 rounded py-2 px-6 mt-6 mb-10 pointer-events-none select-none'>
                    HEAL WHEEL (2022)
                </button>
            </div>
        </div>
    )
}