import React from 'react';
import {Icon, MediumIcon, SmallIcon} from '../Icon';
import {shallow} from 'enzyme';
import each from 'jest-each';
import clsx from "clsx";


each([
    ['Icon', Icon],
    ['SmallIcon', SmallIcon],
    ['MediumIcon', MediumIcon]
]).describe("<%s/>", (displayName, component) => {

    it('should receive color from props', () => {
        const wrapper = shallow(React.createElement(component, {color: "#000000"}));
        expect(wrapper.find('span').get(0).props.style).toHaveProperty(
            'color',
            '#000000',
        );
    });

    it('should pass iconType from props to icon classList', () => {
        const wrapper = shallow(React.createElement(component, {iconType: "fa-star"}));
        expect(wrapper.find('i').get(0).props.className).toEqual(expect.stringContaining("fa-star"));
    });

    it("should pass additional classes to icon", () => {
        const wrapper = shallow(React.createElement(component, {className: clsx("class1", "class2")}));
        const icon = wrapper.find("i");
        expect(icon.get(0).props.className.split(' ')).toEqual(expect.arrayContaining(["class1", "class2"]));
    });

    it("should pass additional props to icon container", () => {
        const wrapper = shallow(React.createElement(component, {newprop: "propValue"}));
        const buttonWrapper = wrapper.find("span");
        expect(buttonWrapper.get(0).props.newprop).toEqual("propValue");
    });

    it("should call onClick function on icon click", () => {
        const onClick = jest.fn();
        const wrapper = shallow(React.createElement(component, {onClick}));
        wrapper.find('span').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

});
