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
  const [mind, setMind] = useState(user.mind)
  const [body, setBody] = useState(user.body)
  const [social, setSocial] = useState(user.social)
  const [work, setWork] = useState(user.work)
  
  const layerContainer = 'bg-blue-100 w-full h-full rounded-full relative overflow-hidden'

  return (
      <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative'>

        <MindControl mind={mind} setMind={setMind} />
        <BodyControl body={body} setBody={setBody} />
        <SocialControl social={social} setSocial={setSocial} />
        <WorkControl work={work} setWork={setWork} />

        <FirstLayer
          layerContainer={layerContainer}
          mind={mind}
          body={body}
          social={social}
          work={work}
        />

        <SecondLayer
          layerContainer={layerContainer}
          mind={mind}
          body={body}
          social={social}
          work={work}
        />

        <ThirdLayer
          layerContainer={layerContainer}
          mind={mind}
          body={body}
          social={social}
          work={work}
        />

        <FourthLayer
          layerContainer={layerContainer}
          mind={mind}
          body={body}
          social={social}
          work={work}
        />

        <FifthLayer
          layerContainer={layerContainer}
          mind={mind}
          body={body}
          social={social}
          work={work}
        />

        <CentrePoint layerContainer={layerContainer} />
          
      </div>
  )
}