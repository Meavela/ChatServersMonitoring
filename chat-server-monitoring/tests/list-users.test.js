import React from 'react';
import { render } from '@testing-library/react';
import ListUsers from '../src/Components/list-users';
import renderer from 'react-test-renderer';

// Mock the component to simulate the API
jest.mock('../src/Components/list-users');

// Check that the Users page display the right things
test('Display List User page', () => {
    const {container} = render(<ListUsers />)
    expect(container.textContent).toMatch('UsersServerUser IDUsernameStatushttp://127.0.0.1:7419/unittest1LouACTIVEhttp://127.0.0.1:6592/unitest22Marc-AntoineACTIVE')
});

// Check that the Users page don't change
test('Not change List User page', () => {
    const component = renderer.create(
        <ListUsers />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});