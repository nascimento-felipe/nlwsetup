import { User } from 'phosphor-react';
import { firebaseAuth } from '../lib/firebase';
import { Logout } from './Logout';

interface AccountsProps {
  shouldShowAlert: (userSignup: boolean) => void;
}

export function Accounts({ shouldShowAlert }: AccountsProps) {

  // function showAlert(signup: boolean) {
  //   if (signup) {
  //     shouldShowAlert(true);
  //   }
  // }

  return (
    <div className='w-full max-w-3xl mx-auto grid grid-row-2'>

      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-row gap-3'>
          <button className='p-4 bg-zinc-800 rounded-3xl'>
            <User />
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