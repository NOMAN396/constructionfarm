import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Auth/auth";
import './signin.css';

function Signin(){
    const navigate = useNavigate();
   let sign =async(inputs)=>{
    await login(inputs);
    navigate("/dashboard");
   }
    const [inputs, setInputs] = useState([]);
    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values,[name]: value}));
    }
        const handleSubmit = async(event) =>{
            event.preventDefault();
            let check = await login(inputs);
console.log(check)
            if(check)
                navigate('/');
            else
                alert("Sorry! Your email address or password is not correct.");
        }
    return(
        <div>
            <div className="row">
                <div className="col-sm-6 offeset-sm-3">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                        <label htmlFor="uname"><b>Email</b></label>
                            <input type="text" placeholder="enter email" name="email" onChange={handleChange} required/>
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="enter password" name="password" onChange={handleChange} required/>
                            <button type="submit">Login</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember"/>
                            </label>
                        </div>
                        <div className="container">
                        <a href="./" className="cancelbtn text-white">Home</a>
                       </div>
                    </form>
                </div>

            </div>
        </div>
    )

   
        }
        export default Signin;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
 
// import './signin.css';
// import { login } from "../Auth/auth";

// function Signin() {
//     const navigate = useNavigate();
//    let sign =async(inputs)=>{
//     await login(inputs);
//     navigate('/');
//    }
//     const [inputs, setInputs] = useState([]);
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }

//     const handleSubmit =  async (event) => {
//         event.preventDefault();
//         let check= await login(inputs);
//         if(check)
//             navigate('/');
//         else
//             alert("Sorry! Your email address or password is not correct.");
//         sign(inputs);
//     }
//     return (
//         <div className="">
//             <div className="row">
//                 <div className="col-sm-6 offset-sm-3">
//                     <form onSubmit={handleSubmit}>
//                         <div className="container">
//                             <label for="uname"><b>Email</b></label>
//                             <input type="text" placeholder="Enter Email Address"  name="email" onChange={handleChange} required/>

//                             <label for="psw"><b>Password</b></label>
//                             <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required/>

//                             <button type="submit">Login</button>
//                             <label>
//                          <input type="checkbox" checked ="checked" name="remember" /> Remember me
//                             </label>
//                         </div>

//                         <div className="container">
//                             <a href="./" className="cancelbtn text-white">Home</a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signin;
 