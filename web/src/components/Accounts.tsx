import { Logout } from './Logout';
import { Signin } from './Signin/Signin';
import { Signup } from './Signup/Signup';

interface AccountsProps {
  shouldShowAlert: (userSignup: boolean) => void;
}

export function Accounts({ shouldShowAlert }: AccountsProps) {

  function showAlert(signup: boolean) {
    if (signup) {
      shouldShowAlert(true);
    }
  }

  return (
    <div className='w-full max-w-3xl mx-auto flex flex-row justify-between'>
      <Signin />
      <Logout />
      <Signup shouldShowAlert={showAlert}/>
    </div>
  )
}