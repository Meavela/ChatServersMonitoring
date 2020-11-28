import React from 'react';
import { render } from '@testing-library/react';
import ListChatrooms from '../src/Components/list-chatrooms';
import renderer from 'react-test-renderer';

// Mock the component to simulate the API
jest.mock('../src/Components/list-chatrooms');

// Check that the list chatrooms component display the right things
test('Display List chatrooms component', () => {
    const {container} = render(<ListChatrooms />)
    expect(container.textContent).toMatch('ChatroomsServerChatroomhttp://127.0.0.1:7419/unittestBesthttp://127.0.0.1:6592/unitest2Looser')
});

// Check that the list chatrooms component don't change
test('Not change List chatrooms component', () => {
    const component = renderer.create(
        <ListChatrooms />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});