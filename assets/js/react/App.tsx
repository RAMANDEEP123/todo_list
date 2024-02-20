import React, { useState } from "react";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const [users, setUsers] = useState({});
  const [showManageUsers, setShowManageUsers] = useState(false);
  const [showAddUsers, setShowAddUsers] = useState(false);

  const showManageUsersView = () => setShowManageUsers(true);
  const showAddUserView = () => setShowAddUsers(true);

  const rendeShowManageUsersView = () => {
    if (showManageUsers) {
      return (
        <div style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}>
          <h2 style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}>Users</h2>
          <UserList users={users} setUsers={setUsers} />
        </div>
      );
    }
    return null;
  };

  const rendeShowAddUsersView = () => {
    if (showAddUsers) {
      return (
        <div>
          <UserForm setUsers={setUsers} />
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      

      {/* Main Content */}
      <div className="title">
        <button className="AddUser" onClick={showAddUserView} >
          Add a User
        </button>
        <span>   </span>
        <button className="ManageUser" onClick={showManageUsersView}>
          Manage Tasks
        </button>
        {rendeShowManageUsersView()}
        {rendeShowAddUsersView()}
      </div>

      {/* Footer */}
      <div style={footerStyle}></div>
    </div>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  background: "#eee",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "20px",
};

const navStyle = {
  display: "flex",
  gap: "10px",
};

const navItemStyle = {
  cursor: "pointer",
};

const footerStyle = {
  textAlign: "center",
  padding: "10px",
  background: "#eee",
  position: "fixed",
  bottom: "0",
  width: "100%",
};

export default App;
