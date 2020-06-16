import React from 'react'
import {render} from '@testing-library/react';
import App from './App';

test('App.js renders and displays show title', () => {

    const { rerender, getByText, findByText } = render(<App />);

    const waitMsg = getByText(/Fetching data.../i); //getBy is not async

    expect(waitMsg).toBeInTheDocument();

})