import { render} from '@testing-library/react';
import Dashboard from './Dashboard';
import MultiStep from '../MultiStep/MultiStep';
import Question from '../Question/Question';
import Option from '../Options/Option';

import React from 'react'


import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
const initialState = {}
  const mockStore = configureStore()
  let store=mockStore(initialState)

jest.mock('../MultiStep/MultiStep')
describe('With React Testing Library', () => {
  

  it('Shows "Hello world!"', () => {
    const { getByText } = render(<Provider store={store}><Dashboard /></Provider>)

    expect(MultiStep).toHaveBeenCalled()

  })
})


jest.mock('../Question/Question')
test('test Question Component is rendered in Dashboard or not', ()=>{
    const { getByText } = render(<Provider store={store}><Dashboard /></Provider>)
  expect(Question).toHaveBeenCalled()
 
})
jest.mock('../Options/Option')
test('test Option Component is rendered in Dashboard or not', ()=>{
    const { getByText } = render(<Provider store={store}><Dashboard /></Provider>)
  expect(Option).toHaveBeenCalled()
 
})
