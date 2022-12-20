import { FC, useState } from "react";
import { AdviceCard } from "./cards/AdviceCard";
import { AdviceMod } from "./modals/AdviceMod";

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
                    <AdviceMod
                        setAdviceModalOpen={setAdviceModalOpen}
                        title={"mind"}
                        stars={user?.mind}
                        foundAdvice={foundAdvice}
                    />
                }
                {adviceModalOpen === "body" && 
                    <AdviceMod 
                        setAdviceModalOpen={setAdviceModalOpen} 
                        title={"body"}
                        stars={user?.body}
                        foundAdvice={foundAdvice}
                    />
                }
                {adviceModalOpen === "social" && 
                    <AdviceMod 
                        setAdviceModalOpen={setAdviceModalOpen} 
                        title={"social"}
                        stars={user?.social}
                        foundAdvice={foundAdvice}
                    />
                }
                {adviceModalOpen === "work" && 
                    <AdviceMod 
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
                    cardBg={"bg-blue-100"}
                    text={"text-blue-500"}
                    btnBg={"bg-blue-300"}
                    hoverBg={"hover:bg-blue-500"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />

                <AdviceCard
                    title={"body"}
                    stars={user?.body}
                    position={"right-0 top-0"}
                    cardBg={"bg-green-100"}
                    text={"text-green-500"}
                    btnBg={"bg-green-300"}
                    hoverBg={"hover:bg-green-500"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />

                <AdviceCard
                    title={"social"}
                    stars={user?.social}
                    position={"bottom-0 left-0"}
                    cardBg={"bg-yellow-100"}
                    text={"text-yellow-500"}
                    btnBg={"bg-yellow-300"}
                    hoverBg={"hover:bg-yellow-500"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />

                <AdviceCard
                    title={"work"}
                    stars={user?.work}
                    position={"bottom-0 right-0"}
                    cardBg={"bg-red-100"}
                    text={"text-red-500"}
                    btnBg={"bg-red-300"}
                    hoverBg={"hover:bg-red-500"}
                    setAdviceModalOpen={setAdviceModalOpen}
                />

            </div>

            <div style={{ margin: "6.75rem" }}></div>

        </div>
    )
}