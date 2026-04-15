import { useState } from "react"
import { useNavigate } from "react-router-dom";

function UserDetails(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        console.log(name)
        console.log(email)
        console.log(userName)
        console.log(password)
        console.log(confirmPassword)
        
        navigate('/user-dashboard')
    }

    return(
        <>
        <h3>Name</h3>
        <input 
        type="text"
        placeholder="Enter name"
        onChange={(e)=> setName(e.target.value)}
        />

        <h3>Username</h3>
        <input 
        type="text"
        placeholder="Enter unique username"
        onChange={(e)=> setUserName(e.target.value)}
        />

        <h3>Email</h3>
        <input 
        type="email"
        placeholder="email"
        onChange={(e)=> setEmail(e.target.value)}
        />

        <h3>Password</h3>
        <input 
        type="password"
        placeholder="Enter Password"
        onChange={(e)=> setPassword(e.target.value)}
        />

        <h3>Confirm Password</h3>
        <input 
        type="password"
        placeholder="Re-enter Password"
        onChange={(e)=> setConfirmPassword(e.target.value)}
        />

        <button onClick={handleClick}>Next</button>
        </>

    )
}
export default UserDetails