"use strict";

var React = require('react');
var Login = React.createClass({
    render: function () {
      return (
        <div className="container">
          <div className="wrapper">
            <form action="" method="post" name="Login_Form" className="form-signin">
              <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
              <hr className="colorgraph" />
              <br />

              <input type="text" className="form-control" name="Username" placeholder="Username" required="" autofocus="" />
              <input type="password" className="form-control" name="Password" placeholder="Password" required="" />

              <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>
            </form>
          </div>
        </div>
      );
    }
  }
);

module.exports = Login;