import { User } from 'phosphor-react';
import { firebaseAuth } from '../lib/firebase';
import { Logout } from './Logout';



export function Accounts() {

  const userPfpUrl = firebaseAuth.currentUser?.photoURL;

  return (
    <div className='w-full max-w-3xl mx-auto grid grid-row-2'>

      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-row gap-3'>
          <button className='p-2 bg-zinc-800 rounded-3xl'>
            {
              userPfpUrl ?
                <User />
                :
                <img
                  src="https://wallpapercave.com/wp/wp7513829.jpg"
                  className='rounded-3xl'
                  alt='profile picture'
                  height="60"
                  width="60"
                />
            }
          </button>
          {
            <span className='flex items-center'>
              {firebaseAuth.currentUser?.email}
            </span>
          }
        </div>
        <Logout />
      </div>
      <hr className='mt-10 w-full' />
    </div>
  )
}