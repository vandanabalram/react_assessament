import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
         <div>
           <label> UserName:</label>
          <input class="submit" type="text" name="name" placeholder="UserName" />
        </div> <br></br>
        <div>
            <label> Password:</label>
            <input class="submit" type="text" name="name" placeholder="password" />
          </div> <br></br>
          <div>
            <button class="signup" type="submit">Login</button>
            <button class="signup" type="submit">Cancel</button>
          </div><br></br>
                
                
            </div>
        );
    }
}

export default Login;