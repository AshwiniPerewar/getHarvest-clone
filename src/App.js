import { AllRoutes } from './allRoutes/AllRoutes';
import './App.css';
import { DisplayExpense } from './components/expenses/DisplayExpense';
import { EditExpense } from './components/expenses/EditExpense';
import { Expenses } from './components/expenses/Expenses';
import { SaveExpense } from './components/expenses/SaveExpense';
// import { DisplayExpense } from './components/expenses/DisplayExpense';
// import { Expenses } from './components/expenses/Expenses';
import { Expense } from './pages/expenses/Expense';
// import { Features } from './pages/features/Features';
// import { Whyharvest } from './pages/wharvest/Whyharvest';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
     
      <Expenses />
      {/* <DisplayExpense /> */}
      <SaveExpense />
      {/* <EditExpense/> */}
      {/* <Features/> */}
    
    </div>
  );
}

export default App;
