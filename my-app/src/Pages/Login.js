import {Link, Redirect} from 'react-router-dom';

export default function login(){
    function validateData(){
        // var userName = document.getElementById("userName");
        // var userPassword = document.getElementById("userPassword");
        // var url = "/Home?userName="+userName+",userPassword="+userPassword;
        window.location.href = "/Home";
    }

    return(
        <div className = "Container-Login">
            <div className="Left-Container">
                <h1>HouseDekho</h1>
            </div>

            <div className="Right-Container">
                <div className="Form-Container">
                    <input type = "text" placeholder="Enter your username" id='userName'/>
                    <input type = "text" placeholder="Enter your password" id='userPassword'/>
                    <input type = "submit" value="Login" onClick={validateData}/>
                    <input type = "submit" value="Register" id="RegisterButton" onClick={()=>{
                        window.location.href = "/Register";
                    }}/>
                </div>
            </div>
        </div>
    )
}