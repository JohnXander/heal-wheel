import { User } from '@prisma/client';
import { trpc } from '../utils/trpc';
import { useState } from 'react';
import Head from 'next/head';
import { Wheel } from '../components/Wheel';

export default function IndexPage() {
  const userQuery = trpc.getUser.useQuery("clbmnqiej00007kjcvnrladne");
  const foundUser = userQuery.data?.foundUser;
  const [user, setUser] = useState<User>(foundUser as User);
  const [page, setPage] = useState<string>("wheel")
  const [savedStats, setSavedStats] = useState<boolean>(true)

  const handleNavigate = (page: string) => {
    setPage(page)
  }
  
  return (
    <div>
      <Head>
        <title>Heal Wheel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-800 w-screen h-screen flex flex-col justify-center items-center'>

        {page === "wheel" && <button
          onClick={() => handleNavigate("advice")}
          className='border-2 border-blue-400 text-blue-400 rounded p-2 hover:text-white hover:border-blue-500 hover:bg-blue-500 my-6'>
          GO TO ADVICE
        </button>}
        {page === "advice" && <button
          onClick={() => handleNavigate("wheel")}
          className='border-2 border-blue-400 text-blue-400 rounded p-2 hover:text-white hover:border-blue-500 hover:bg-blue-500 my-6'>
          GO TO WHEEL
        </button>}

        {page === "wheel" && <Wheel user={user} setUser={setUser} savedStats={savedStats} setSavedStats={setSavedStats} />}
        
      </main>

  </div>
  );
}
