import { User } from '@prisma/client';
import { trpc } from '../utils/trpc';
import { useState } from 'react';
import Head from 'next/head';
import { Wheel } from '../components/Wheel';
import { Advice } from '../components/Advice';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

export default function IndexPage() {
  const [loggedInId, setLoggedInId] = useState("");

  const userQuery = trpc.getUser.useQuery("John");
  const adviceQuery = trpc.getAdvice.useQuery();
  const foundUser = userQuery.data?.foundUser;
  const foundAdvice = adviceQuery.data?.foundAdvice;

  const [user, setUser] = useState<User>(foundUser as User);
  const [page, setPage] = useState<string>("wheel");
  const [savedStats, setSavedStats] = useState<boolean>(true);
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false);

  const isNavbar = page === "wheel" || page === "advice";

  const userMutation = trpc.updateUser.useMutation();

  const handleSave = () => {
    userMutation.mutate(user);
    setSavedStats(true);
  }

  const handleNavigate = (page: string) => {
    if (page === "advice" && !savedStats) {
      setSaveModalOpen(true);
    } else if (page === "confirm") {
      setPage("advice")
      handleSave()
      setSaveModalOpen(false)
    } else {
      setPage(page)
    }
  }
  
  return (
    <div>
      <Head>
        <title>Heal Wheel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-800 w-screen h-screen flex flex-col justify-center items-center'>

        {isNavbar && <div className='flex gap-12'>
          <button
            onClick={() => handleNavigate("wheel")}
            className='border-2 border-blue-500 text-blue-400 rounded p-2 hover:text-white hover:border-blue-500 hover:bg-blue-500 my-6'
            style={page === "wheel" ? {backgroundColor: "#3b82f6", color: "white"} : {}}>
            WHEEL
          </button>
          <button
            onClick={() => handleNavigate("advice")}
            className='border-2 border-blue-500 text-blue-400 rounded p-2 hover:text-white hover:border-blue-500 hover:bg-blue-500 my-6'
            style={page === "advice" ? {backgroundColor: "#3b82f6", color: "white"} : {}}>
            ADVICE
          </button>
        </div>}

        {page === "register" && <Register setPage={setPage} />}
        {page === "login" && <Login setLoggedInId={setLoggedInId} />}

        {page === "wheel" &&
          <Wheel
            user={user}
            setUser={setUser}
            savedStats={savedStats}
            setSavedStats={setSavedStats}
            saveModalOpen={saveModalOpen}
            setSaveModalOpen={setSaveModalOpen}
            handleNavigate={handleNavigate}
            handleSave={handleSave}
          />
        }

        {page === "advice" && <Advice user={user} foundAdvice={foundAdvice} />}
        
      </main>

  </div>
  );
}
