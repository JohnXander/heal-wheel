import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';

interface SocialProps { 
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

export const SocialControl: FC<SocialProps> = ({ user, setUser, setSavedStats }) => {
    const handleIncrement = () => {
      const { social } = user;
      if (social < 5) {
        const newSocial = social + 1;
        setUser(prevState => ({
          ...prevState,
          social: newSocial,
        }));
        setSavedStats(false);
      }
    }

    const handleDecrement = () => {
      const { social } = user;
      if (social > 0) {
        const newSocial = social - 1;
        setUser(prevState => ({
          ...prevState,
          social: newSocial,
        }));
        setSavedStats(false);
      }
    }
  
    return (
        <div className='absolute bottom-0 left-0 text-white z-10 p-2'>
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
            <h1 className='select-none'>Social</h1>
        </div>
    )
}