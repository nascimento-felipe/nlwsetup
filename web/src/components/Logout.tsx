import * as Alert from '@radix-ui/react-alert-dialog';
import { SignOut } from 'phosphor-react';

import { firebaseAuth } from '../lib/firebase';

export function Logout() {
  function handleClickLogout() {
    firebaseAuth.signOut()

    console.log("Usuário deslogado.")
  }

  return (
    <Alert.Root>
      <Alert.Trigger
        type='button'
        className='
            border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3
          hover:border-violet-300 transition-color 
            focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background'
      >
        <SignOut size={20} className="text-violet-500" />
        Log Out
      </Alert.Trigger>

      <Alert.Portal>
        <Alert.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
        <Alert.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Alert.Title className='text-3xl leading-tight font-extrabold flex justify-center'>
            Log Out
          </Alert.Title>

          <Alert.Description className='mt-6 flex justify-center'>
            Quer mesmo fazer logout?
          </Alert.Description>
          <div className='mt-6 flex items-center justify-around font-semibold' >
            <Alert.Cancel className='bg-zinc-900 p-3 rounded-lg border-red-700 border-2 hover:border-red-500 transition-colors'>
              Cancelar
            </Alert.Cancel>
            <Alert.Action onClick={handleClickLogout} className='bg-zinc-900 p-3 rounded-lg border-green-700 border-2 hover:border-green-500 transition-colors'>
              Logout
            </Alert.Action>
          </div>
        </Alert.Content>
      </Alert.Portal>
    </Alert.Root>
  )
}