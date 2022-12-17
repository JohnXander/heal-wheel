import { Dispatch, FC, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface MindCardProps { 
    title: string
    stars: number
    position: string
    cardBg: string
    text: string
    btnBg: string
    hoverBg: string
    setAdviceModalOpen: Dispatch<SetStateAction<string>>
}
  
export const MindCard: FC<MindCardProps> = ({ title, stars, cardBg, text, btnBg, hoverBg, position, setAdviceModalOpen }) => {

    return (
        <div className={`border-r-2 border-b-2 w-40 h-40 lg:w-48 lg:h-48 absolute ${position} flex flex-col items-center justify-center`}>
            <div className={`${cardBg} flex flex-col items-center justify-center py-2 px-4 rounded`}>
                <h1 className="text-2xl capitalize">{title}</h1>
                <div className="flex gap-x-0.5 pt-1 pb-3">
                    {Array(stars).fill("_").map((_, idx) => {
                        return (
                            <FontAwesomeIcon
                                className={`w-4 ${text}`}
                                key={idx}
                                icon={faStar}
                            />
                        )
                    })}
                </div>
                <button
                    className={`py-2 px-4 ${btnBg} rounded mb-2 ${hoverBg}`}
                    onClick={() => setAdviceModalOpen(title)}>
                    See advice
                </button>
            </div>
        </div>
    )
}