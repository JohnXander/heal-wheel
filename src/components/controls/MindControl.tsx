import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';

interface MindProps { 
  setUser: Dispatch<SetStateAction<User>>
  setSavedStats: Dispatch<SetStateAction<boolean>>
  user: {
    id: string;
    name: string;
    mind: number;
    body: number;
    social: number;
    work: number;
  }
}

export const MindControl: FC<MindProps> = ({ user, setUser, setSavedStats }) => {
  const handleIncrement = () => {
    const { mind } = user;
    if (mind < 5) {
      const newMind = mind + 1;
      setUser(prevState => ({
        ...prevState,
        mind: newMind,
      }));
      setSavedStats(false)
    }
  }

  const handleDecrement = () => {
    const { mind } = user;
    if (mind > 0) {
      const newMind = mind - 1;
      setUser(prevState => ({
        ...prevState,
        mind: newMind,
      }));
      setSavedStats(false)
    }
  }

  return (
      <div className='absolute top-0 left-0 text-white z-10 p-2'>
          <h1 className='select-none'>Mind</h1>
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