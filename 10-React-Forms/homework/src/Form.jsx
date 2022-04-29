import React, { useState } from 'react';


export default function  Form() {
  const [user, setUser]= useState("");
  const [password, setPassword] = useState("");

  const pruebaUser = ()=>{
  
  }
  const pruebaPass = ()=>{
  
  }
  return (
      <div>
        <form onSubmit={e=> {e.preventDefault();
          setUser(e.target.user.value);
          setPassword(e.target.password.value);
          console.log(user)
          console.log(password)
          }}>
          <input type="text" name='user'/>
            <br />
          <span></span>
           <br />
          <input type="password" name='password'/>
            <br />
          <span></span>
            <br />
          <input type="submit"/>
        </form>
      </div>
  )
}
