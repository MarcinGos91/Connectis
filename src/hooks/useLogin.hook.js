import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../contexts'
import { useConsts } from "."
import { useUrls } from '.'

const useLogin = (stayLogged) => {

    const navigate = useNavigate()
    const { CREDENTIALS_USER, CREDENTIALS_JWT, CREDENTIALS_LOGIN} = useConsts()
    const {LOGIN_URL} = useUrls()
    const {handleLogin: loginFunction, handleLogout: logoutFunction} = useUserContext()

    const handleLogin = 
        async({identifier, password}) => {
            const { data } =  await axios.post(LOGIN_URL, {identifier, password});
            const { jwt, user } = data
            if (data) {
                loginFunction( { jwt, ...user, logged: true}); 
                navigate('/');
            }
            if (user && jwt &&  stayLogged) {
                localStorage.setItem(CREDENTIALS_LOGIN, identifier);
                localStorage.setItem(CREDENTIALS_JWT, jwt);
                localStorage.setItem(CREDENTIALS_USER, JSON.stringify(data.user));
            }
        }

        const handleLogout = () => {
            localStorage.removeItem(CREDENTIALS_LOGIN);
            localStorage.removeItem(CREDENTIALS_JWT);
            localStorage.removeItem(CREDENTIALS_USER);
            logoutFunction();
            navigate('/');
        }

        return (
            {handleLogin, handleLogout}
        )
}
export default useLogin;