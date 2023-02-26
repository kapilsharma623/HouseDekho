import {Link, Redirect} from 'react-router-dom';

export default function register(){
    function validateData(){
        // var userName = document.getElementById("userName");
        // var userPassword = document.getElementById("userPassword");
        // var url = "/Home?userName="+userName+",userPassword="+userPassword;
        window.location.href = "/Home";
    }
    function backToLogin(){
        window.location.href = "/Login";
    }

    return(
        <div className = "Container-Login">
            <div className="Left-Container">
                <h1>HouseDekho</h1>
            </div>

            <div className="Right-Container">
                <div className="Form-Container">
                    <input type = "text" placeholder="Name" id='Name'/>
                    <input type = "text" placeholder="Mobile Number" id='MobileNumber'/>
                    <input type = "text" placeholder="Email Id" id='EmailId'/>
                    <input type = "submit" value="Register" onClick={validateData}/>
                    <input type = "submit" value="Back to Login" id="LoginButton" onClick={backToLogin}/>
                </div>
            </div>
        </div>
    )
}