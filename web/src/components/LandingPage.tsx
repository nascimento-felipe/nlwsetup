import { Alert } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { firebaseAuth } from "../lib/firebase";
import { Signup } from './Signup/Signup';

interface LandingPageProps {
  shouldShowSuccessAlert: (userSignup: boolean) => void;
}

export function LandingPage({ shouldShowSuccessAlert }: LandingPageProps) {

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {

      if (email == '' || password == '') {
        setErrorMessage('Digite um email e uma senha para fazer login.')
        setShowErrorAlert(true);
        return;
      }

      setLoading(true);
      await signInWithEmailAndPassword(firebaseAuth, email, password);

    } catch (e) {

      if (e instanceof Error) {
        console.log(`${e.message}`);
      }

      setErrorMessage('O email ou senha digitados não existem. Por favor, tente novamente.');
      setShowErrorAlert(true);

    }
    finally {
      setLoading(false);
    }

  }

  function showAlert(signup: boolean) {
    if (signup) {
      shouldShowSuccessAlert(true);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center">
      <form onSubmit={handleSubmit} className="max-h-48 mt-48 flex flex-col items-center justify-center">

        {
          showErrorAlert &&
          <div className='w-full flex justify-center m-6'>
            <Alert severity="error" onClose={() => setShowErrorAlert(false)} variant="filled" > {errorMessage} </Alert>
          </div>
        }


        <h1 className="text-4xl mt-">Login</h1>
        <hr className="w-16 mt-2 bg-violet-500" />

        <div className="mt-10 flex flex-col">
          <label
            htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            autoFocus
            value={email}
            onChange={event => { setEmail(event.target.value) }}
            className="
            mt-2
            bg-zinc-800 p-4 h-10 rounded-lg text-white 
            placeholder:text-zinc-400 
            focus:outline-none focus:border-violet-500 focus:border-2"
          />

          <label
            htmlFor="senha"
            className="mt-5"
          >
            Password
          </label>
          <input
            id="senha"
            type="password"
            value={password}
            onChange={event => { setPassword(event.target.value) }}
            className="mt-2 p-4 bg-zinc-800 h-10 rounded-lg text-white
            focus:outline-none focus:border-violet-500 focus:border-2"
          />
        </div>

        <button
          type="submit"
          className="mt-10 p-3 w-72 bg-violet-700 rounded-xl
          hover:bg-violet-500 transition-colors"
        >
          {loading ?
            "Loading..." : "Login"}
        </button>

        <div className="mt-10">
          <Signup shouldShowAlert={showAlert} />
        </div>
      </form>
    </div>
  )
}