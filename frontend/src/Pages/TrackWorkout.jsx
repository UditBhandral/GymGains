import { useNavigate } from "react-router-dom"

function TrackWorkout(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create-workout')
    }
    return(
        <>
        <button onClick={handleClick}>Create Workout</button>
        
        </>
    )

}
export default TrackWorkout