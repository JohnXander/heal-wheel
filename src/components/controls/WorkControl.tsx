import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';

interface WorkProps { 
  setUser: Dispatch<SetStateAction<User>>
  user: {
    id: string;
    name: string;
    mind: number;
    body: number;
    social: number;
    work: number;
  }
}

export const WorkControl: FC<WorkProps> = ({ user, setUser }) => {
    const handleIncrement = () => {
      const { work } = user;
      if (work < 5) {
        const newWork = work + 1;
        setUser(prevState => ({
          ...prevState,
          work: newWork,
        }));
      }
    }

    const handleDecrement = () => {
      const { work } = user;
      if (work > 0) {
        const newWork = work - 1;
        setUser(prevState => ({
          ...prevState,
          work: newWork,
        }));
      }
    }
  
    return (
        <div className='absolute bottom-0 right-0 text-white z-10 p-2'>
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
            <h1 className='select-none'>Work</h1>
        </div>
    )
}