import React from 'react';
import { render } from '@testing-library/react';
import Users from '../src/Components/users';
import renderer from 'react-test-renderer';

// Mock the two components of the page
jest.mock('../src/Components/active-users');
jest.mock('../src/Components/list-users');

// Check that the Users page display the right things
test('Display Users page', () => {
    const {container} = render(<Users />)
    expect(container.textContent).toMatch('Active users2On servers :http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2UsersServerUser IDUsernameStatus151.11.52.681LouACTIVE172.82.64.792Marc-AntoineACTIVE')
});

// Check that the Users page don't change
test('Not change Users page', () => {
    const component = renderer.create(
        <Users />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});