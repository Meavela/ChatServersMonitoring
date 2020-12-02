import React from 'react';
import { render } from '@testing-library/react';
import Chatrooms from '../src/Components/chatrooms';
import renderer from 'react-test-renderer';

// Mock the two components of the page
jest.mock('../src/Components/count-chatrooms');
jest.mock('../src/Components/list-chatrooms');

// Check that the Chatrooms page display the right things
test('Display Chatrooms page', () => {
    const {container} = render(<Chatrooms />)
    expect(container.textContent).toMatch('Chatrooms2On servers :http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2ChatroomsServerChatroomhttp://127.0.0.1:7419/unittestBesthttp://127.0.0.1:6592/unitest2Looser')
});

// Check that the Chatrooms page don't change
test('Not change Chatrooms page', () => {
    const component = renderer.create(
        <Chatrooms />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});