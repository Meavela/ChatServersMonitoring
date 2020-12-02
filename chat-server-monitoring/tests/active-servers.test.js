import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ActiveServers from '../src/Components/active-servers';

// Mock the component to take the fake server url
jest.mock('../src/Components/active-servers');

test('Display active servers', () => {
    const {container} = render(<ActiveServers />)
    expect(container.textContent).toMatch('http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2')
});

test('Not change active servers', () => {
    const component = renderer.create(
        <ActiveServers />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});