import { FC } from "react";
import { MindCard } from "./cards/MindCard";
import { BodyCard } from "./cards/BodyCard";
import { SocialCard } from "./cards/SocialCard";
import { WorkCard } from "./cards/WorkCard";

interface AdviceProps { 
    user: {
        id: string;
        name: string;
        mind: number;
        body: number;
        social: number;
        work: number;
    }
}
  
export const Advice: FC<AdviceProps> = ({ user }) => {
    return (
        <div>
            <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative rounded border-2'>
                <MindCard user={user} />
                <BodyCard user={user} />
                <SocialCard user={user} />
                <WorkCard user={user} />
            </div>
            <div className='flex justify-center'>
                <button
                    className='border-2 border-gray-800 text-gray-400 rounded py-2 px-6 mt-6 mb-10 pointer-events-none select-none'>
                    HEAL WHEEL (2022)
                </button>
            </div>
        </div>
    )
}