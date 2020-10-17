import React from 'react';
import {Icon, MediumIcon, SmallIcon} from '../Icon';
import {mount} from 'enzyme';
import each from 'jest-each';


each([
    ['Icon', Icon],
    ['SmallIcon', SmallIcon],
    ['MediumIcon', MediumIcon]
]).describe("%s test", (displayName, component) => {

    it('should receive color from props', () => {
        const wrapper = mount(React.createElement(component, {color: "#000000"}));
        expect(wrapper.find('span').get(0).props.style).toHaveProperty(
            'color',
            '#000000',
        );
    });

    it('should pass iconType from props to icon classList', () => {
        const wrapper = mount(React.createElement(component, {iconType: "fa-star"}));
        expect(wrapper.find('i').get(0).props.className).toEqual(expect.stringContaining("fa-star"));
    });

    it("should pass additional classes to icon", () => {
        const wrapper = mount(React.createElement(component, {classes: ["class1", "class2"]}));
        const icon = wrapper.find("i");
        expect(icon.get(0).props.className.split(' ')).toEqual(expect.arrayContaining(["class1", "class2"]));
    });

    it("should pass additional props to icon container", () => {
        const wrapper = mount(React.createElement(component, {newprop: "propValue"}));
        const buttonWrapper = wrapper.find("span");
        expect(buttonWrapper.get(0).props.newprop).toEqual("propValue");
    });

    it("should call onClick function on icon click", () => {
        const onClick = jest.fn();
        const wrapper = mount(React.createElement(component, {onClick}));
        wrapper.find('span').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

});
