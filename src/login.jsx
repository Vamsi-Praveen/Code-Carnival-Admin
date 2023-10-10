import React, { useState } from 'react';

function Login() {
  const [LoginId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const username="Admin";
  const pass="HOD@aec.edu.in"
  function handleLogin()
  {
      let user=document.getElementById("username").value;
      let password=document.getElementById("pass").value;
      let text=document.getElementById("message");
      if(user != username || password != pass)
      {
        text.innerText="Invalid LoginId or Password";
        text.style.color="red";
      }
      else{
        text.innerText="Login Successfull";
        text.style.color="green";
        <Link to=""></Link>
      }
  }
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ LoginId, password }),
  //     });

  //     if (response.ok) {
  //       let msg=document.getElementById("message");
  //       msg.innerText="Login Successful";
  //       msg.style.color="red";
  //     } else {
  //       let msg=document.getElementById("message");
  //       msg.innerText="Incorrect Login Id or Password";
  //       msg.style.color="red";
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }

return (
    <div className="login-container">
        <p id="message"></p>
      <h2 className="login">Login</h2>
      <form className="login-container">
        <input
          type="LoginId"
          placeholder="Login Id"
          value={LoginId}
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          id="pass"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" className="log" onClick={handleLogin}> Login
        </button>
      </form>
    </div>
  );
}

export default Login;
