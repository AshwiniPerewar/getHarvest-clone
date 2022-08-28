import { AllRoutes } from './allRoutes/AllRoutes';
import './App.css';
import { Features } from './components/home/Features';
import { Project } from './pages/Projects/Project';
import { Expenses } from './proctedPages/expenses/Expenses';
import { Newproject } from './proctedPages/expenses/Newproject';





function App() {
  return (
    <div className="App">
    
      <AllRoutes/>

    {/* <Newproject/> */}
    {/* <Project/> */}
    {/* <Features/> */}

   
    </div>
  );
}

export default App;
