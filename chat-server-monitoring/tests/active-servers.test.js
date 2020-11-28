import React from 'react';
import renderer from 'react-test-renderer';
import ActiveServers from '../src/Components/active-servers';

test('Display active servers', () => {
    const component = renderer.create(
        <ActiveServers />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});

