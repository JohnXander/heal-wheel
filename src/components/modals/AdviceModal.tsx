import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, FC, SetStateAction } from "react";

interface AdviceProps { 
    setAdviceModalOpen: Dispatch<SetStateAction<string>>
    title: string
    stars: number
    foundAdvice: any
}

export const AdviceModal: FC<AdviceProps> = ({ setAdviceModalOpen, title, stars, foundAdvice }) => {
    const advice = foundAdvice.find((ad: any) => ad.name === `${title}${stars}`)

    return (
        <div className="absolute bg-gray-800 text-white border-2 rounded z-10 p-3 w-72">
            <div className='flex justify-end'>
                <FontAwesomeIcon
                    onClick={() => setAdviceModalOpen("")}
                    className='w-4 cursor-pointer'
                    icon={faX}
                />
            </div>
            <p className="text-2xl px-4 text-center capitalize">{title}</p>
            <div className="flex justify-around mb-2 mt-3">
                <p>{advice.advice}</p>
            </div>
        </div>
    )
}