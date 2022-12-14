import { User } from '@prisma/client';
import { trpc } from '../utils/trpc';
import { useState } from 'react';
import Head from 'next/head';
import { Wheel } from '../components/Wheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function IndexPage() {
  const userQuery = trpc.getUser.useQuery("clbmnqiej00007kjcvnrladne");
  const foundUser = userQuery.data?.foundUser;
  const [user, setUser] = useState<User>(foundUser as User);
  const [savedStats, setSavedStats] = useState<boolean>(false)

  const userMutation = trpc.updateUser.useMutation();

  const handleSave = () => {
    userMutation.mutate(user);
    setSavedStats(true);
  }
  
  return (
    <div>
      <Head>
        <title>Heal Wheel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-800 w-screen h-screen flex flex-col justify-center items-center'>

        <Wheel user={user} setUser={setUser} setSavedStats={setSavedStats} />
        {!savedStats && <button
          className='border-2 border-green-400 text-green-400 rounded p-2 hover:text-white hover:border-green-500 hover:bg-green-500 my-6'
          onClick={handleSave}>
          SAVE STATS
        </button>}
        {savedStats && <h1
          className='border-2 border-gray-800 text-green-500 pointer-events-none mt-4'
          onClick={handleSave}>
          SAVED
          <FontAwesomeIcon
            className='cursor-pointer text-green-400 text-xs'
            icon={faCheck}
          />
        </h1>}
      </main>

  </div>
  );
}
