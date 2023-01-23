import { UserPlus } from "phosphor-react";
import { FormEvent, useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../../lib/firebase';


interface SignUpFormProps {
  shouldHideModal: (modalOpen: boolean) => void;
  shouldShowAlert: (userSignup: boolean) => void;
}

export function SignupForm({ shouldHideModal, shouldShowAlert }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();
    shouldHideModal(true);

    const user = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    console.log(user.user)

    shouldShowAlert(true);
  }

  return (
    <form onSubmit={handleSignUp} className='w-full flex flex-col mt-6'>
      <label htmlFor="email" className="font-semibold leading-tight">E-mail</label>
      <input
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400
        focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
        id='email'
        type="email"
        placeholder="example@example.com"
        autoFocus
        onChange={event => { setEmail(event.target.value) }}
        value={email}
      />

      <label htmlFor="password" className="font-semibold leading-tight mt-4">Password</label>
      <input
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400
        focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
        id='password'
        type="password"
        onChange={event => { setPassword(event.target.value) }}
        value={password}
      />

      <button
        name="submitButton"
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onKeyDown={key => {
          if (key.code == "Enter") {
            handleSignUp;
          }
        }}
      >
        <UserPlus size={20} weight="bold" />
        Sign Up
      </button>

    </form >
  )
}