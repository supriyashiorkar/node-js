import { Navigate ,Outlet} from "react-router-dom";

const PrivateCompo=()=>{
    const auth=localStorage.getItem('user');
return auth?<Outlet/>:<Navigate to="signup"/>

}
export default PrivateCompo;