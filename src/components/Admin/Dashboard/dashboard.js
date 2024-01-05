import {React, useState } from "react";
import { useNavigate} from "react-router-dom";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";



function Dashboard(){
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    return(
        <div>
           
      <Sidebar/>
      <h1 className="text-center text-success bg-light">Engineering and Construction Corporation Ltd</h1>
      <img src="assets/img/breadcrumbs-bg.jpg" className="rounded float-end" height={"900px"}></img>
      <Footer/>
      
        </div>
    );
}
export default Dashboard;














