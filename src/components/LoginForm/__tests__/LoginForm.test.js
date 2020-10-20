import React from "react";
import {AUTH_MODE, AuthModeSelector, LoginForm} from '../LoginForm';
import {mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from "react-router";

describe('<LoginForm/>', () => {
//     beforeAll(() => {
//   window.history.replaceState({location: '/login'}, 'MOCK');
// });

    it("should call onLogin on Login button click", () => {
    });
    it("should call onRegister on Register button click", () => {
    });
    it("should show error, if any", () => {
    });
    it("should call onErrorDismiss on auth mode switch", () => {
    });
    it("should show Login button in login mode", () => {
    });
    it("should show Register button in register mode", () => {
    });

    it("should render Login form by default", () => {
        const history = createMemoryHistory();
        history.push('/login');
        const wrapper = mount(<Router history={history}><LoginForm/></Router>);
        expect(wrapper.find(AuthModeSelector).first().props().authMode).toEqual(AUTH_MODE.LOGIN);
    });

    it("should switch auth mode on AuthModeSelector click", () => {
    });
    it("should have classname active, if authMode matches", () => {
    });
})
