import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Otp(){
    const [otp,setOtp] = useState('')
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user-details')
    }

    return(
        <>
        <input 
        type='text'
        onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={handleClick}>Validate Otp</button>
        </>
    )
}
export default Otp