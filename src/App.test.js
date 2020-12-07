import { render, screen } from '@testing-library/react';
import App from './App';
// import { render, screen } from '@testing-library/react';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//component tests: