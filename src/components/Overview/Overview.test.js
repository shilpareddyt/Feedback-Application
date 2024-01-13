import { render,screen} from '@testing-library/react';
import Overview from './Overview';

test('renders Overview Title1 correctly', ()=>{
  render(<Overview questions={[{id: 1, title: 'How was your week all ?', answer: ''}]}/>);
  const title=screen.getByText('How was your week all ?')
  expect(title).toBeInTheDocument();
})

  test('renders Overview Title2 correctly', ()=>{
    render(<Overview questions={[{id: 2, title: 'How did you like last week', answer: '' }]}/>);
    const title=screen.getByText('How did you like last week')
    expect(title).toBeInTheDocument();
  })

  test('renders Overview Title3 correctly', ()=>{
    render(<Overview questions={[{id: 3, title: 'How well are you last week', answer: '' }]}/>);
    const title=screen.getByText('How well are you last week')
    expect(title).toBeInTheDocument();
  })