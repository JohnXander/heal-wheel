import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";

interface WorkProps { 
    work: number
    setWork: Dispatch<SetStateAction<number>>
}

export const WorkControl: FC<WorkProps> = ({ work, setWork }) => {
    return (
        <div className='absolute bottom-0 right-0 text-white z-10 p-2'>
            <div className='flex gap-x-2'>
              <FontAwesomeIcon
                className='cursor-pointer text-green-400'
                icon={faPlus}
                onClick={() => {
                  if (work < 5) setWork(prev => prev + 1)
                }}
              />
              <FontAwesomeIcon
                className='cursor-pointer text-red-400'
                icon={faMinus}
                onClick={() => {
                  if (work > 0) setWork(prev => prev - 1)
                }}
              />
            </div>
            <h1 className='select-none'>Work</h1>
        </div>
    )
}