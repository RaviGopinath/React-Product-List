import React,{useState} from "react";

function Login(props){

    let [email, updateMail] = useState('');
    let [pass, updatePass] = useState('');
    // let [formVal, updateForm] = useState(false);

    function logginIn(){
        props.logIn(true);
    }

    function emailVal(event){
        updateMail(event.target.value);
    }

    function passwordVal(event){
        updatePass(event.target.value);
    }

    function validate(){
        if(!email.length == 8 && !pass.lenght == 7){
            document.getElementById('login-button').setAttribute('disabled', 'disabled');
        }
    }

    return (
        <React.Fragment>
            <div class="card w-50 mt-5 mx-auto" style={{height : '40vh','boxShadow': '10px 10px 5px #aaaaaa'}}>
            <div class="card-body" style={{paddingTop : 60, paddingLeft : 90}}>
                <form>
                    <span className="font-weight-bold font-italic" style={{'fontWeight' : 'bold', fontStyle : 'italic'}}>Email :</span>
                    <input type="email" id="email-input" style={{marginLeft : '15%', height : '35px', border : '1px solid #dedede'}} onChange={emailVal}></input> <br></br>
                    <label className="font-weight-bold mt-4" style={{'fontWeight' : 'bold', fontStyle : 'italic'}}>Password :</label>
                    <input type="password" style={{marginLeft : '10%', height : '35px', border : '1px solid #dedede'}} onChange={passwordVal}></input> <br></br>
                    <div className="text-center"><button className="btn btn-primary mt-3" id='login-button' onClick={logginIn} disabled={validate()}>Login</button></div>
                </form>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Login;