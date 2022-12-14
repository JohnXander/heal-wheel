import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';

interface BodyProps { 
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

export const BodyControl: FC<BodyProps> = ({ user, setUser, setSavedStats }) => {
    const handleIncrement = () => {
      const { body } = user;
      if (body < 5) {
        const newMind = body + 1;
        setUser(prevState => ({
          ...prevState,
          body: newMind,
        }));
        setSavedStats(false);
      }
    }

    const handleDecrement = () => {
      const { body } = user;
      if (body > 0) {
        const newBody = body - 1;
        setUser(prevState => ({
          ...prevState,
          body: newBody,
        }));
        setSavedStats(false);
      }
    }

    return (
        <div className='absolute top-0 right-0 text-white z-10 p-2'>
            <h1 className='select-none'>Body</h1>
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