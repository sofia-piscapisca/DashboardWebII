import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import LoginSocial from './components/LoginSocial/LoginSocial'
import TextBox from './components/TextBox/TextBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Button label="Login" buttonAction={()=>console.log("click")}/>
        <LoginSocial/>
        <TextBox label="Email" value="" setValue={()=>{}}/>
        <TextBox label="Password" value="" setValue={()=>{}} password={true}/>
    </div>
    </>
  )
}

export default App
