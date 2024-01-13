import { render,screen} from '@testing-library/react';
import Question from './Question';

test('renders Question Title1 correctly', ()=>{
  render(<Question question={{id: 1, title: 'How was your week all ?', answer: ''}}/>);
  const title=screen.getByText('How was your week all ?')
  expect(title).toBeInTheDocument();
})

  test('renders Question Title2 correctly', ()=>{
    render(<Question question={{id: 2, title: 'How did you like last week', answer: '' }}/>);
    const title=screen.getByText('How did you like last week')
    expect(title).toBeInTheDocument();
  })

  test('renders Question Title3 correctly', ()=>{
    render(<Question question={{id: 3, title: 'How well are you last week', answer: '' }}/>);
    const title=screen.getByText('How well are you last week')
    expect(title).toBeInTheDocument();
  })