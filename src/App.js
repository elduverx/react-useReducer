import { Route, Switch } from 'react-router-dom';
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ContextProvider } from './context/GlobalContext';
import './App.css';

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Switch>
              <Route exact path="/" component={TaskList}></Route>
              <Route path="/add" component={TaskForm}></Route>
              <Route path="/edit/:id" component={TaskForm}></Route>
            </Switch>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
