// App.tsx
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"; // If using react-router
import Header from "./Header";
import Footer from "./Footer";
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
        <div  style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}>
          {/* <h2 >Your Goals</h2><div  style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}></div> */}
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
      <Header />
      <Switch>
        <Route path="/contact">
          {/* Render contact component if using react-router */}
        </Route>
        <Route path="/help">
          {/* Render help component if using react-router */}
        </Route>
        <Route path="/">
          <div className="title">
            <button className="AddUser" onClick={showAddUserView}>
              Add a User
            </button>
            <button className="ManageUser" onClick={showManageUsersView}>
              Manage Tasks
            </button>
            <button className="ManageUser" onClick={showManageUsersView}>
              Manage Tasks
            </button>
            {rendeShowManageUsersView()}
            {rendeShowAddUsersView()}
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
