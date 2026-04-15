//use the cards here
import DashboardCard from "../Components/DashboardCard"
function UserDashboard(){
return(
    <>
    <DashboardCard value ="Track Workout" link = "/track-workout"/>
    <DashboardCard value = "Track Calories" link = "/validate-otp" />
    </>
)
}
export default UserDashboard