import Navbar from "./Navbar";
import UsersList from "./UsersList";

function ContentUsers() {
  return (
    <div class="conteiner">
      <Navbar />
      <br></br>
      <h2>LISTA DE USUARIOS</h2>
      <UsersList />
    </div>
  );
}

export default ContentUsers;
