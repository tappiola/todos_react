import React from 'react';
import {Button, CancelButton, DeleteButton} from '../Button';
import {mount} from 'enzyme';
import classes from '../Button.module.css';

describe('Button', () => {
    it("should pass children to <button/>", () => {
        const wrapper = mount(<Button>Click me</Button>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.text()).toBe("Click me");
    });

    it("should pass additional classes to <button/>", () => {
        const wrapper = mount(<Button classes={["class1", "class2"]}>Click me</Button>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.className.split(' ')).toEqual(expect.arrayContaining(["class1", "class2"]));
    });

    it("should pass additional props to <button/>", () => {
        const wrapper = mount(<Button newprop="propValue">Click me</Button>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.newprop).toEqual("propValue");
    });

    it("should have default style", () => {
        const wrapper = mount(<Button>Click me</Button>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.className).toEqual(expect.stringContaining(classes.button));
    });
});

describe('DeleteButton', () => {
    it("should pass additional classes to <button/>", () => {
        const wrapper = mount(<DeleteButton classes={["class1", "class2"]}>Click me</DeleteButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.className.split(' ')).toEqual(expect.arrayContaining(["class1", "class2"]));
    });

    it("should pass additional props to <button/>", () => {
        const wrapper = mount(<DeleteButton newprop="propValue">Click me</DeleteButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.newprop).toEqual("propValue");
    });

    it("should have default text 'Delete'", () => {
        const wrapper = mount(<DeleteButton/>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.text()).toBe("Delete");
    });

    it("should receive text from children", () => {
        const wrapper = mount(<DeleteButton>Click me</DeleteButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.text()).toBe("Click me");
    });

        it("should have default style", () => {
        const wrapper = mount(<DeleteButton>Click me</DeleteButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.className).toEqual(expect.stringContaining(classes.button));
    });
})

describe('CancelButton', () => {
    it("should pass additional classes to <button/>", () => {
        const wrapper = mount(<CancelButton classes={["class1", "class2"]}>Click me</CancelButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.className.split(' ')).toEqual(expect.arrayContaining(["class1", "class2"]));
    });

    it("should pass additional props to <button/>", () => {
        const wrapper = mount(<CancelButton newprop="propValue">Click me</CancelButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.newprop).toEqual("propValue");
    });

    it("should have default text 'Cancel'", () => {
        const wrapper = mount(<CancelButton/>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.text()).toBe("Cancel");
    });

    it("should receive text from children", () => {
        const wrapper = mount(<CancelButton>Click me</CancelButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.text()).toBe("Click me");
    });

        it("should have default style", () => {
        const wrapper = mount(<CancelButton>Click me</CancelButton>);
        const buttonWrapper = wrapper.find("button");
        expect(buttonWrapper.get(0).props.className).toEqual(expect.stringContaining(classes.button));
    });
})
