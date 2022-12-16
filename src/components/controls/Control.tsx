import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';

interface ControlProps { 
    setUser: Dispatch<SetStateAction<User>>
    setSavedStats: Dispatch<SetStateAction<boolean>>
    title: string
    category: number
    position: string
}

export const Control: FC<ControlProps> = ({ title, category, position, setUser, setSavedStats }) => {
  const handleIncrement = () => {
    if (category < 5) {
      const newMind = category + 1;
      setUser(prevState => ({
        ...prevState,
        [title]: newMind,
      }));
      setSavedStats(false)
    }
  }

  const handleDecrement = () => {
    if (category > 0) {
      const newMind = category - 1;
      setUser(prevState => ({
        ...prevState,
        [title]: newMind,
      }));
      setSavedStats(false)
    }
  }

  return (
      <div className={`absolute ${position} text-white z-10 p-2`}>
          <h1 className='select-none capitalize'>{title}</h1>
          <div className='flex gap-x-2'>
            <FontAwesomeIcon
              className='cursor-pointer text-green-400'
              icon={faPlus}
              onClick={handleIncrement}
            />
            <FontAwesomeIcon
              className='cursor-pointer text-red-400'
              icon={faMinus}
              onClick={handleDecrement}
            />
          </div>
        </div>
  )
}