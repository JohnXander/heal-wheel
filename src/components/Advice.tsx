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
    foundAdvice: any;
}
  
export const Advice: FC<AdviceProps> = ({ user, foundAdvice }) => {
    const [adviceModalOpen, setAdviceModalOpen] = useState("");

    return (
        <div>
            <div className='w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center relative rounded border-2'>
                {adviceModalOpen === "mind" &&
                    <AdviceModal
                        setAdviceModalOpen={setAdviceModalOpen}
                        title={"mind"}
                        stars={user?.mind}
                        foundAdvice={foundAdvice}
                    />
                }
                {adviceModalOpen === "body" && 
                    <AdviceModal 
                        setAdviceModalOpen={setAdviceModalOpen} 
                        title={"body"}
                        stars={user?.body}
                        foundAdvice={foundAdvice}
                    />
                }
                {adviceModalOpen === "social" && 
                    <AdviceModal 
                        setAdviceModalOpen={setAdviceModalOpen} 
                        title={"social"}
                        stars={user?.social}
                        foundAdvice={foundAdvice}
                    />
                }
                {adviceModalOpen === "work" && 
                    <AdviceModal 
                        setAdviceModalOpen={setAdviceModalOpen} 
                        title={"work"}
                        stars={user?.work}
                        foundAdvice={foundAdvice}
                    />
                }

                <AdviceCard
                    title={"mind"}
                    stars={user?.mind}
                    position={"left-0 top-0"}
                    color={"blue"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />
                <AdviceCard 
                    title={"body"} 
                    stars={user?.body} 
                    position={"right-0 top-0"} 
                    color={"green"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />
                <AdviceCard 
                    title={"social"} 
                    stars={user?.social} 
                    position={"bottom-0 left-0"} 
                    color={"yellow"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />
                <AdviceCard 
                    title={"work"} 
                    stars={user?.work} 
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