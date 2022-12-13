import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";

interface BodyProps { 
    body: number
    setBody: Dispatch<SetStateAction<number>>
}

export const BodyControl: FC<BodyProps> = ({ body, setBody }) => {
    return (
        <div className='absolute top-0 right-0 text-white z-10 p-2'>
            <h1 className='select-none'>Body</h1>
            <div className='flex gap-x-2'>
              <FontAwesomeIcon
                className='cursor-pointer text-green-400'
                icon={faPlus}
                onClick={() => {
                  if (body < 5) setBody(prev => prev + 1)
                }}
              />
              <FontAwesomeIcon
                className='cursor-pointer text-red-400'
                icon={faMinus}
                onClick={() => {
                  if (body > 0) setBody(prev => prev - 1)
                }}
              />
            </div>
          </div>
    )
}