import FirstLayer from '../components/layers/FirstLayer';
import SecondLayer from '../components/layers/SecondLayer';
import ThirdLayer from '../components/layers/ThirdLayer';
import FourthLayer from '../components/layers/FourthLayer';
import FifthLayer from '../components/layers/FifthLayer';
import CentrePoint from '../components/layers/CentrePoint';
import { MindControl } from '../components/controls/MindControl';
import { BodyControl } from '../components/controls/BodyControl';
import { SocialControl } from '../components/controls/SocialControl';
import { WorkControl } from '../components/controls/WorkControl';
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';
import { trpc } from '../utils/trpc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SaveModal } from './modals/SaveModal';

interface WheelProps { 
  user: {
    id: string;
    name: string;
    mind: number;
    body: number;
    social: number;
    work: number;
  }
  setUser: Dispatch<SetStateAction<User>>
  savedStats: boolean
  setSavedStats: Dispatch<SetStateAction<boolean>>
  saveModalOpen: boolean
  setSaveModalOpen: Dispatch<SetStateAction<boolean>>
  handleNavigate: (params: string) => any
}

export const Wheel: FC<WheelProps> = ({ user, setUser, savedStats, setSavedStats, saveModalOpen, setSaveModalOpen, handleNavigate }) => {
  
  const layerContainer = 'bg-blue-100 w-full h-full rounded-full relative overflow-hidden'

  const userMutation = trpc.updateUser.useMutation();

  const handleSave = () => {
    userMutation.mutate(user);
    setSavedStats(true);
  }

  return (
    <div>
      <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative'>

          {saveModalOpen && <SaveModal setSaveModalOpen={setSaveModalOpen} handleNavigate={handleNavigate} />}

          <MindControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
          <BodyControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
          <SocialControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
          <WorkControl user={user} setUser={setUser} setSavedStats={setSavedStats} />

          <FirstLayer layerContainer={layerContainer} user={user} />
          <SecondLayer layerContainer={layerContainer} user={user} />
          <ThirdLayer layerContainer={layerContainer} user={user} />
          <FourthLayer layerContainer={layerContainer} user={user} />
          <FifthLayer layerContainer={layerContainer} user={user} />
          <CentrePoint layerContainer={layerContainer} />
            
      </div>
      <div className='flex justify-center'>
        {!savedStats && <button
            className='border-2 border-green-400 text-green-400 rounded p-2 hover:text-white hover:border-green-500 hover:bg-green-500 my-8'
            onClick={handleSave}>
            SAVE STATS
        </button>}
        {savedStats && <h1
            className='border-2 border-gray-800 text-green-500 p-2 pointer-events-none mt-4'
            onClick={handleSave}>
            SAVED
            <FontAwesomeIcon
              icon={faCheck}
            />
        </h1>}
      </div>
    </div>
  )
}