import { useEffect } from 'react'
import { Main } from './pages'
import { Header, Footer } from './components'
import { useConsts } from './hooks'
import { useUserContext} from './contexts'

function App() {
  const {handleLogin: loginFunction} = useUserContext()
  const {CREDENTIALS_JWT, CREDENTIALS_USER} = useConsts()

  useEffect(()=>{
    const jwt = localStorage.getItem(CREDENTIALS_JWT)
    const user = JSON.parse(localStorage.getItem(CREDENTIALS_USER))
    if (!jwt?.length) return
    loginFunction( { jwt, ...user, logged: true});
  },[CREDENTIALS_JWT, CREDENTIALS_USER, loginFunction])

  

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
