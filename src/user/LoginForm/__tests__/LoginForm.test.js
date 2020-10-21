import React from "react";
import {AuthModeSelector, LoginForm} from '../LoginForm';
import {mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from "react-router";
import {Button} from "../../../components/Button/Button";
import classes from '../LoginForm.module.css';

const HistoryWrapper = ({path = '/login', children}) => {
    const history = createMemoryHistory();
    history.push(path);
    return <Router history={history}>{children}</Router>;
}

describe('<LoginForm/>', () => {

    it("should call onLogin on Login button click", () => {
        const onLogin = jest.fn();
        const wrapper = mount(<HistoryWrapper><LoginForm onLogin={onLogin}/></HistoryWrapper>);
        wrapper.find('input[type="email"]').simulate('change', {target: {value: 'test@gmail.com'}})
        wrapper.find('input[type="password"]').simulate('change', {target: {value: '123456'}});
        wrapper.find('form').simulate('submit');
        expect(onLogin).toHaveBeenCalledTimes(1);
    });

    it("should call onRegister on Register button click", () => {
        const onRegister = jest.fn();
        const wrapper = mount(<HistoryWrapper path='/register'>
            <LoginForm onRegister={onRegister}/>
        </HistoryWrapper>);
        wrapper.find('input[type="email"]').simulate('change', {target: {value: 'test@gmail.com'}})
        wrapper.find('input[type="password"]').simulate('change', {target: {value: '123456'}});
        wrapper.find('form').simulate('submit');
        expect(onRegister).toHaveBeenCalledTimes(1);
    });

    it("should show error, if any", () => {
        const wrapper = mount(<HistoryWrapper>
            <LoginForm error="Error occurred"/>
        </HistoryWrapper>);
        expect(wrapper.find('.' + classes.errorMessage).text()).toEqual('Error occurred');
    });

    it("should call onErrorDismiss on auth mode switch", () => {
        const onErrorDismiss = jest.fn();
        const wrapper = mount(<HistoryWrapper>
            <LoginForm error="Error occurred" onErrorDismiss={onErrorDismiss}/>
        </HistoryWrapper>);
        wrapper.find(AuthModeSelector).find('.register').hostNodes().simulate('click');
        expect(onErrorDismiss).toHaveBeenCalledTimes(1);
    });

    it("should show Login button in login mode", () => {
        const wrapper = mount(<HistoryWrapper><LoginForm/></HistoryWrapper>);
        expect(wrapper.find(Button).text()).toEqual('Sign in');
    });

    it("should show Register button in register mode", () => {
        const wrapper = mount(<HistoryWrapper path="/register"><LoginForm/></HistoryWrapper>);
        expect(wrapper.find(Button).text()).toEqual('Register');
    });
})
