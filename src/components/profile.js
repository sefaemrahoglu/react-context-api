import { useContext } from "react";
import UserContext from "../context/userContext";
function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div>
        <h3>username : {user.name} </h3>
        <h3>username : {user.lastName} </h3>
        <h3>username : {user.age} </h3>
      </div>
      <button
        onClick={() => {
          setUser({ name: "Alex", lastName: "De Souza", age: 44 });
        }}
      >
        Change User
      </button>
    </>
  );
}
export default Profile;
