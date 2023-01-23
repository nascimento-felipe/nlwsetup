import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';
import './lib/dayjs';
import { Accounts } from './components/Accounts';
import { Alert } from '@mui/material';
import { useState } from 'react';
import { firebaseAuth } from './lib/firebase';
import { LandingPage } from './components/LandingPage';


export function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  firebaseAuth.onAuthStateChanged(() => {
    setUserLogged(true);
  });

  function shouldShowAlert(signup: boolean) {
    if (signup) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {
        userLogged ?
          <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>

            {
              showAlert &&
              <div className='w-full flex justify-center'>
                <Alert severity="success" onClose={() => setShowAlert(false)} variant="filled" >Usuário cadastrado com sucesso!</Alert>
              </div>
            }

            <Accounts shouldShowAlert={shouldShowAlert} />

            <Header />

            <SummaryTable />

          </div>

          :
          
          <LandingPage />
      }
    </div>
  )
}
