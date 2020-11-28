import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/Components/home';
import renderer from 'react-test-renderer';

// Mock the components of the page
jest.mock('../src/Components/active-users');
jest.mock('../src/Components/count-chatrooms');
jest.mock('../src/Components/list-users');
jest.mock('../src/Components/list-chatrooms');

// Check that the Home page display the right things
test('Display Home page', () => {
    const {container} = render(<Home />)
    expect(container.textContent).toMatch('Active users2On servers :http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2Chatrooms2On servers :http://127.0.0.1:7419/unittesthttp://127.0.0.1:6592/unitest2UsersServerUser IDUsernameStatushttp://127.0.0.1:7419/unittest1LouACTIVEhttp://127.0.0.1:6592/unitest22Marc-AntoineACTIVEChatroomsServerChatroomhttp://127.0.0.1:7419/unittestBesthttp://127.0.0.1:6592/unitest2Looser')
});

// Check that the Home page don't change
test('Not change Home page', () => {
    const component = renderer.create(
        <Home />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();  
});