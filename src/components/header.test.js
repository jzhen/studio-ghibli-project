import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './header';

/**
 * Describe what we are testing
 */
describe('<Header />', () => {
    // Make assertion on the expected behavior
    it('should render without throwing an error', () => {
        mount(<Header/>);
    });

    it('should render to static HTML', () => {
        expect(render(<Header />).text()).toEqual('Code Project');
    });
});
