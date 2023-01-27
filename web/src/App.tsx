import { Alert } from '@mui/material';
import { useState } from 'react';
import { Accounts } from './components/Accounts';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { SummaryTable } from './components/SummaryTable';
import './lib/dayjs';
import { firebaseAuth } from './lib/firebase';
import './styles/global.css';


export function App() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      console.log("logado");
      setUserLogged(true);
    } else {
      console.log("deslogado")
      setUserLogged(false);
    }
  });

  function shouldShowSuccessAlert(signup: boolean) {
    if (signup) {
      setShowSuccessAlert(true);
      return;
    }

    setShowSuccessAlert(false);
  }

  return (
    <div>
      {
        userLogged ?
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>

              {
                showSuccessAlert &&
                <div className='w-full flex justify-center'>
                  <Alert severity="success" onClose={() => setShowSuccessAlert(false)} variant="filled" >Usuário cadastrado com sucesso!</Alert>
                </div>
              }

              <Accounts />
              <Header />

              <SummaryTable />

            </div>
          </div>

          :

          <LandingPage shouldShowSuccessAlert={shouldShowSuccessAlert}/>

      }
    </div>
  )
}
