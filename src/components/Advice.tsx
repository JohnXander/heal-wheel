import { FC, useState } from "react";
import { AdviceCard } from "./cards/AdviceCard";
import { AdviceModal } from "./modals/AdviceModal";

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

// deployment test
  
export const Advice: FC<AdviceProps> = ({ user }) => {
    const { mind, body, social, work } = user;
    const [adviceModalOpen, setAdviceModalOpen] = useState("");

    return (
        <div>
            <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative rounded border-2'>
                {adviceModalOpen === "Mind" && <AdviceModal setAdviceModalOpen={setAdviceModalOpen} title={"Mind"} />}
                {adviceModalOpen === "Body" && <AdviceModal setAdviceModalOpen={setAdviceModalOpen} title={"Body"} />}
                {adviceModalOpen === "Social" && <AdviceModal setAdviceModalOpen={setAdviceModalOpen} title={"Social"} />}
                {adviceModalOpen === "Work" && <AdviceModal setAdviceModalOpen={setAdviceModalOpen} title={"Work"} />}

                <AdviceCard
                    title={"Mind"}
                    stars={mind}
                    position={"left-0 top-0"}
                    color={"blue"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />
                <AdviceCard 
                    title={"Body"} 
                    stars={body} 
                    position={"right-0 top-0"} 
                    color={"green"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />
                <AdviceCard 
                    title={"Social"} 
                    stars={social} 
                    position={"bottom-0 left-0"} 
                    color={"yellow"} 
                    setAdviceModalOpen={setAdviceModalOpen}
                />
                <AdviceCard 
                    title={"Work"} 
                    stars={work} 
                    position={"bottom-0 right-0"} 
                    color={"red"} 
                    setAdviceModalOpen={setAdviceModalOpen}
                />
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