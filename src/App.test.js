import { render} from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';

jest.mock('./components/Dashboard/Dashboard')
test('test Dashboard Components', ()=>{
  render(<App />);
  expect(Dashboard).toHaveBeenCalled()
 
})