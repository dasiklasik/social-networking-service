import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';
import {dialogsData, messagesData, postData} from "./index";


test('renders learn react link', () => {
  render(<App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
