import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  
  return (
    <div className="App">
      <div className="row" data-testid="dashboard" style={{ height: '100vh' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
