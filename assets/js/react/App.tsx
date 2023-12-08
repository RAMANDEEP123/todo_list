import React, { useState } from "react";
import { GoalList } from "./components/GoalList";
import { GoalForm } from "./components/GoalForm";

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const [goals, setGoals] = useState({});
  const [showManageGoals, setShowManageGoals] = useState(false);
  const [showAddGoals, setShowAddGoals] = useState(false);

  const showManageGoalsView = () => setShowManageGoals(true);
  const showAddGoalView = () => setShowAddGoals(true);

  const rendeShowManageGoalsView = () => {
    if (showManageGoals) {
      return (
        <div style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}>
          <h2 style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}>𝐘𝐨𝐮𝐫 𝐆𝐨𝐚𝐥𝐬</h2>
          <GoalList goals={goals} setGoals={setGoals} />
        </div>
        // <div  style={{ marginBottom: "1px", marginTop: "5px", padding: "1px" }}>
        // <h2>𝐘𝐨𝐮𝐫 𝐆𝐨𝐚𝐥𝐬</h2>
        // <GoalList goals={goals} setGoals={setGoals} />
        // </div>
      );
    }
    return null;
  };

  const rendeShowAddGoalsView = () => {
    if (showAddGoals) {
      return (
        <div>
          <GoalForm setGoals={setGoals} />
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      

      {/* Main Content */}
      <div className="title">
        <button className="AddGoal" onClick={showAddGoalView} >
          Add a Goal
        </button>
        <span>   </span>
        <button className="ManageGoal" onClick={showManageGoalsView}>
          Manage Goals
        </button>
        {rendeShowManageGoalsView()}
        {rendeShowAddGoalsView()}
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
