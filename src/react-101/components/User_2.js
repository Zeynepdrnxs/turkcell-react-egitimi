import React, {useState} from "react";

function User_2() {
    const [user, setUser] = useState({name: "Adem" , surname: "DURNA"});
  return (
    <div>
      <h1>User</h1>
      {user.name} {user.surname}
 <br/>
    <div>
    <button onClick={() => setUser({...user, name: "Zeynep", })}>Name Change</button>
  
      <button onClick={() => setUser({...user, surname:"DURNA"})}>Surname Change</button>
    </div>
    
    </div>
  )
}

export default User_2;
