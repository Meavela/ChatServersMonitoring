import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ActiveUsers from '../src/Components/active-users';

// Mock the component to simulate the API
jest.mock('../src/Components/active-users');

test('Display active users', () => {
    const {container} = render(<ActiveUsers />)
    expect(container.textContent).toMatch('http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2')
});

test('Not change active users', () => {
    const component = renderer.create(
        <ActiveUsers />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});