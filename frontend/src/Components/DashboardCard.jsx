import { useNavigate } from "react-router-dom"

function DashboardCard(props){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(props.link)
    }
    return(
        <div>
        <h3 onClick={handleClick}>{props.value}, {props.link}</h3>
        </div>
    )

}
export default DashboardCard