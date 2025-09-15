import {useState}  from 'react'
import TextField from '@mui/material/TextField';
import './TextBox.style.scss'

const TextBox =({label, value, setValue, password=false})=>{
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <TextField
            className='textBoxBody'
            label={label}
            variant="standard"
            InputProps={{
            disableUnderline: true
  }}
            type={password ? (isPasswordVisible ? "text" : "password") : "text"}/>   
    )
}

export default TextBox