import React from "react";

function Header(props) {

    function logout(){
        props.logOuts(false);
    }
    console.log(props.logValue);

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Demo React App
          </a>
          {props.logValue && <button className="btn btn-primary" onClick={logout}>Logout</button>}
          {/* <Button></Button> */}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
