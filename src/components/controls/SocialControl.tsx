import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";

interface SocialProps { 
    social: number
    setSocial: Dispatch<SetStateAction<number>>
}

export const SocialControl: FC<SocialProps> = ({ social, setSocial }) => {
    return (
        <div className='absolute bottom-0 left-0 text-white z-10 p-2'>
            <div className='flex gap-x-2'>
              <FontAwesomeIcon
                className='cursor-pointer text-green-400'
                icon={faPlus}
                onClick={() => {
                  if (social < 5) setSocial(prev => prev + 1)
                }}
              />
              <FontAwesomeIcon
                className='cursor-pointer text-red-400'
                icon={faMinus}
                onClick={() => {
                  if (social > 0) setSocial(prev => prev - 1)
                }}
              />
            </div>
            <h1 className='select-none'>Social</h1>
        </div>
    )
}