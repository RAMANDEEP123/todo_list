import { Title } from "./components/Title";
import React from "react";
import { useState } from "react";
import { GoalList } from "./components/GoalList";
import { GoalForm } from "./components/GoalForm";
// import '/components/common.css';
interface AppProps {
  name: string;
}
const App: React.FC<AppProps> = (props: AppProps) => {  
  const [goals, setGoals] = useState({});
  const [showManageGoals, setShowManageGoals] = useState(false);
  const [showAddGoals, setShowAddGoals] = useState(false);

  const showManageGoalsView = () => async () => {
     setShowManageGoals(true);
  }

  const showAddGoalView = () => async () => {
    setShowAddGoals(true);
 }
  
  const rendeShowManageGoalsView = () => {
    if (showManageGoals) {
      return (<div>
        <h3> Your Goals </h3>
        <GoalList goals={goals} setGoals={setGoals}/>
        </div>
      )
    }
  }

  const rendeShowAddGoalsView = () => {
    if (showAddGoals) {
      return (<div>
        <GoalForm setGoals={setGoals} />
        </div>
      )
    }
  } 

  return (
    <div className="title">
      <button
            className="AddGoal"
            onClick={showAddGoalView()}
          >
            Add a Goal
      </button>
      <button
            className="ManageGoal"
            onClick={showManageGoalsView()}
          >
            Manage Goals
      </button>
      {rendeShowManageGoalsView()}
      {rendeShowAddGoalsView()}
    </div>
  );
}

export default App;