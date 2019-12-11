import React, { Component } from 'react';
import '../Components/Register.css';


class Register extends Component {
  render() {
    return (
      <div class="main">
        <div className="content">
          REGISTER FORM
       </div>
        <div class="div1">
          <label>FirstName <span>    </span>: </label>
          <input class="submit" type="text" name="name" placeholder="Firstname" />
        </div><br></br>
        <div>
          <label>LastName: </label>
          <input class="submit" type="text" name="name" placeholder="Lastname" />
        </div><br></br>
        <div>
           <label> UserName:</label>
          <input class="submit" type="text" name="name" placeholder="UserName" />
        </div> <br></br>
          <div>
            <label> Password:</label>
            <input class="submit" type="text" name="name" placeholder="password" />
          </div> <br></br>
          <div>
            <button class="signup" type="submit">Register</button>
            <button class="signup" type="submit">Cancel</button>
          </div><br></br>
        </div>

        );
      }
    }
         

export default Register;