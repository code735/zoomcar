import {useContext} from 'react'
import {MainContext} from '../Context/MainContextProvider';

export default function Logout() {
let {isAuth,setIsAuth} = useContext(MainContext);

  return (
    <div>Logout</div>
  )
}
