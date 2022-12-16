import Layer from './layers/Layer';
import CentrePoint from '../components/layers/CentrePoint';
import { MindControl } from '../components/controls/MindControl';
import { BodyControl } from '../components/controls/BodyControl';
import { SocialControl } from '../components/controls/SocialControl';
import { WorkControl } from '../components/controls/WorkControl';
import { Dispatch, FC, SetStateAction } from "react";
import { User } from '@prisma/client';
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
  handleSave: () => any
}

export const Wheel: FC<WheelProps> = ({
  user,
  setUser,
  savedStats,
  setSavedStats,
  saveModalOpen,
  setSaveModalOpen,
  handleNavigate,
  handleSave
}) => {
  
  const layerContainer = 'bg-blue-100 w-full h-full rounded-full relative overflow-hidden'
  const primaryColors = ["#A4CAFE", "#EBF5FF", "#84E1BC", "#F3FAF7", "#FACA15", "#FDFDEA", "#F8B4B4", "#FDF2F2"]
  const secondaryColors = ["#76A9FA", "#E1EFFE", "#31C48D", "#DEF7EC", "#E3A008", "#FDF6B2", "#F98080", "#FDE8E8"]

  return (
    <div>
      <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative'>

        {saveModalOpen && <SaveModal setSaveModalOpen={setSaveModalOpen} handleNavigate={handleNavigate} />}

        <MindControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
        <BodyControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
        <SocialControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
        <WorkControl user={user} setUser={setUser} setSavedStats={setSavedStats} />
      
        <Layer
          layerContainer={layerContainer}
          user={user}
          colors={primaryColors}
          containerSize={"w-80 h-80 lg:w-96 lg:h-96"}
          segmentSize={"w-40 h-40 lg:w-48 lg:h-48"}
          level={4}
        />

        <Layer
          layerContainer={layerContainer}
          user={user}
          colors={secondaryColors}
          containerSize={"w-64 h-64 lg:w-80 lg:h-80"}
          segmentSize={"w-32 h-32 lg:w-40 lg:h-40"}
          level={3}
        />

        <Layer
          layerContainer={layerContainer}
          user={user}
          colors={primaryColors}
          containerSize={"w-48 h-48 lg:w-64 lg:h-64"}
          segmentSize={"w-24 h-24 lg:w-32 lg:h-32"}
          level={2}
        />

        <Layer
          layerContainer={layerContainer}
          user={user}
          colors={secondaryColors}
          containerSize={"w-32 h-32 lg:w-48 lg:h-48"}
          segmentSize={"w-16 h-16 lg:w-24 lg:h-24"}
          level={1}
        />

        <Layer
          layerContainer={layerContainer}
          user={user}
          colors={primaryColors}
          containerSize={"w-16 h-16 lg:w-32 lg:h-32"}
          segmentSize={"w-8 h-8 lg:w-16 lg:h-16"}
          level={0}
        />

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