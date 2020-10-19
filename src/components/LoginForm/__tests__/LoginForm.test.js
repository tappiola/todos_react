import React from "react";
import {LoginForm, AuthModeSelector, AUTH_MODE} from '../LoginForm';
import classes from '../LoginForm.module.css';
import {mount} from 'enzyme';
import { createMemoryHistory } from 'history';

describe('<LoginForm/>', () => {
//     beforeAll(() => {
//   window.history.replaceState({location: '/login'}, 'MOCK');
// });

    it("should call onLogin on Login button click", () => {});
    it("should call onRegister on Register button click", () => {});
    it("should show error, if any", () => {});
    it("should call onErrorDismiss on auth mode switch", () => {});
    it("should show Login button in login mode", () => {});
    it("should show Register button in register mode", () => {});

    it("should render Login form by default", () => {
        const history = createMemoryHistory();
        history.push('/login');
        const wrapper = mount(<LoginForm history={history}/>);
        expect(wrapper.find(AuthModeSelector).props().authMode).toEqual(AUTH_MODE.LOGIN);
    });

    it("should switch auth mode on AuthModeSelector click", () => {});
})
