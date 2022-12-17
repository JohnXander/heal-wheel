import { Dispatch, FC, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface AdviceCardProps { 
    title: string
    stars: number
    position: string
    color: string
    setAdviceModalOpen: Dispatch<SetStateAction<string>>
}
  
export const AdCard: FC<AdviceCardProps> = ({ title, stars, position, color, setAdviceModalOpen }) => {

    return (
        <div className={`border-r-2 border-b-2 w-40 h-40 lg:w-48 lg:h-48 absolute ${position} flex flex-col items-center justify-center`}>
            <div className={`bg-${color}-100 flex flex-col items-center justify-center py-2 px-4 rounded`}>
                <h1 className="text-2xl capitalize">{title}</h1>
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
                <button
                    className={`py-2 px-4 bg-${color}-300 rounded mb-2 hover:bg-${color}-400`}
                    onClick={() => setAdviceModalOpen(title)}>
                    See advice
                </button>
            </div>
        </div>
    )
}