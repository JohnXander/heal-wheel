import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface AdviceCardProps { 
    title: string
    stars: number
    position: string
    color: string
}
  
export const AdviceCard: FC<AdviceCardProps> = ({ title, stars, position, color }) => {
    return (
        <div className={`border-r-2 border-b-2 w-40 h-40 lg:w-48 lg:h-48 absolute ${position} flex flex-col items-center justify-center`}>
            <div className={`flex flex-col items-center justify-center py-2 px-4 rounded`}>
                <h1 className="text-2xl text-white">{title}</h1>
                <div className="flex gap-x-0.5 pt-1 pb-3">
                    {Array(stars).fill("_").map((_, idx) => {
                        return (
                            <FontAwesomeIcon
                                className={`w-4 text-${color}-500`}
                                key={idx}
                                icon={faStar}
                            />
                        )
                    })}
                </div>
                <button className={`border-2 py-2 px-4 bg-${color}-300 text-white rounded mb-2 hover:bg-${color}-400 hover:text-gray-800`}>See advice</button>
            </div>
        </div>
    )
}