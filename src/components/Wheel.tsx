import { useState } from 'react';

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
}

export const Wheel: FC<WheelProps> = ({ user, setUser }) => {
  
  const layerContainer = 'bg-blue-100 w-full h-full rounded-full relative overflow-hidden'

  return (
      <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative'>

        <MindControl user={user} setUser={setUser} />
        <BodyControl user={user} setUser={setUser} />
        <SocialControl user={user} setUser={setUser} />
        <WorkControl user={user} setUser={setUser} />

        <FirstLayer
          layerContainer={layerContainer}
          user={user}
        />

        <SecondLayer
          layerContainer={layerContainer}
          user={user}
        />

        <ThirdLayer
          layerContainer={layerContainer}
          user={user}
        />

        <FourthLayer
          layerContainer={layerContainer}
          user={user}
        />

        <FifthLayer
          layerContainer={layerContainer}
          user={user}
        />

        <CentrePoint layerContainer={layerContainer} />
          
      </div>
  )
}