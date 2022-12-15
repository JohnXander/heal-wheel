import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface BodyCardProps { 
    user: {
      id: string;
      name: string;
      mind: number;
      body: number;
      social: number;
      work: number;
    }
}
  
export const BodyCard: FC<BodyCardProps> = ({ user }) => {
    return (
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
    )
}