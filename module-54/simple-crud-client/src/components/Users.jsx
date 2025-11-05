import React, { use, useState } from "react";
import { Link } from "react-router";


//  app.jsx theke fatch kore ana  usersPromise
const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  // console.log(initialUsers)
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const NewUser = { name, email };

    //  save this user data to the database (via server)
    // data pathanor jonno use kora
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if (data.insertedId) {
          // new user update ar auto set ar jonno
          NewUser._id = data.insertedId;
          const newUsers = [...users, NewUser];
          setUsers(newUsers);
          // ai khane ses
          alert("users added successfully");
          e.target.reset();
        }
      });
  };

                     // delete btn ar jonno
  const handleDeleteUser = (id) => {
    console.log('delete user ', id)
    fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log('after delete ', data)
        // delete hole jeno length tik dekai ai jonno use kora
        if(data.deletedCount) {
            alert('deleted successfully')
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining);
        }
    })
    
  }


  return (
    <div>
        <h3>{users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="add user" />
      </form>
      <p>--------------------</p>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
            <Link to={`/users/${user._id}`}>Details</Link>
            <Link to={`/update/${user._id}`}>Edit</Link>
            <button onClick={ () => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
