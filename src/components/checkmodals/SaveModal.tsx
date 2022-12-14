import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, FC, SetStateAction } from "react";

interface SaveProps { 
    setSaveModalOpen: Dispatch<SetStateAction<boolean>>
  }

  export const SaveModal: FC<SaveProps> = ({ setSaveModalOpen }) => {
    return (
        <div className="absolute bg-gray-800 text-white border-2 rounded z-10 p-3 w-72">
            <div className='flex justify-end'>
                <FontAwesomeIcon
                    onClick={() => setSaveModalOpen(false)}
                    className='w-4 cursor-pointer'
                    icon={faX}
                />
            </div>
            <p className="text-2xl px-4">Do you want to save your stats before continuing?</p>
            <div className="flex justify-around mb-2 mt-3">
                <button
                    className="text-2xl border-2 rounded py-1 px-4 text-green-400 border-green-400 hover:text-white hover:bg-green-400">
                    Yes
                </button>
                <button
                    className="text-2xl border-2 rounded py-1 px-4 text-red-400 border-red-400 hover:text-white hover:bg-red-400">
                    No
                </button>
            </div>
        </div>
    )
}