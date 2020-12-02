import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import CountChatrooms from '../src/Components/count-chatrooms';

// Mock the component to simulate the API
jest.mock('../src/Components/count-chatrooms');

test('Display count chatrooms', () => {
    const {container} = render(<CountChatrooms />)
    expect(container.textContent).toMatch('Chatrooms2On servers :http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2')
});

test('Not change count chatrooms', () => {
    const component = renderer.create(
        <CountChatrooms />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});