import React from "react";
import {mount, render, shallow} from 'enzyme';
import {HamburgerButton} from "../HamburgerButton";

it("should show close button, when menu is open", () => {
    const wrapper = shallow(<HamburgerButton menuOpen={true}/>);
    // expect(wrapper.find('#hamburger-close').props().className).not.toContain('hidden');
    // expect(wrapper.find('#hamburger-open').props().className).toContain('hidden');
    expect(wrapper.find('#hamburger-close')).toBeVisible()
    expect(wrapper.find('#hamburger-open')).not.toBeVisible()
})

it("should show hamburger button, when menu is closed", () => {
    const wrapper = shallow(<HamburgerButton menuOpen={false}/>);
    expect(wrapper.find('#hamburger-close').props().className).toContain('hidden');
    expect(wrapper.find('#hamburger-open').props().className).not.toContain('hidden');
})

it("should call 'onButtonClick' on click", () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<HamburgerButton onButtonClick={onButtonClick}/>);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledTimes(1);
})
