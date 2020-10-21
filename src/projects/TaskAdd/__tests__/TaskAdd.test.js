import React from 'react';
import {TaskAdd} from '../TaskAdd';
import {mount} from 'enzyme';
import {MediumIcon} from "../../../components/Icon/Icon";
import classes from '../TaskAdd.module.css';
import {CancelButton} from "../../../components/Button/Button";

const PROJECT = {id: 3, name: 'project3', description: 'description3'};

describe('<TaskAdd/>', () => {

    it("should call onTaskAdd on form submit", () => {
        const onTaskAdd = jest.fn();
        const wrapper = mount(<TaskAdd project={PROJECT} onTaskAdd={onTaskAdd}/>);
        wrapper.find(MediumIcon).simulate('click');
        wrapper.find('.' + classes.input).simulate('change', {target: {value: "new task"}});
        wrapper.find('form').simulate('submit');
        expect(onTaskAdd).toHaveBeenCalledTimes(1);
        expect(onTaskAdd).toHaveBeenCalledWith({projectId: PROJECT.id, name: "new task"});
    });

    it("should call onTaskAdd on form submit (inbox)", () => {
        const onTaskAdd = jest.fn();
        const wrapper = mount(<TaskAdd project={{id: null}} onTaskAdd={onTaskAdd}/>);
        wrapper.find(MediumIcon).simulate('click');
        wrapper.find('.' + classes.input).simulate('change', {target: {value: "new task"}});
        wrapper.find('form').simulate('submit');
        expect(onTaskAdd).toHaveBeenCalledTimes(1);
        expect(onTaskAdd).toHaveBeenCalledWith({projectId: null, name: "new task"});
    });

    it("should not show input on component render", () => {
        const wrapper = mount(<TaskAdd project={{id: null}} onTaskAdd={() => {
        }}/>);
        expect(wrapper.find(MediumIcon)).toHaveLength(1);
        expect(wrapper.find('.' + classes.input)).toHaveLength(0);
    });

    it("should show input on click on (+)", () => {
        const wrapper = mount(<TaskAdd project={PROJECT} onTaskAdd={() => {
        }}/>);
        wrapper.find(MediumIcon).simulate('click');
        expect(wrapper.find(MediumIcon)).toHaveLength(0);
        expect(wrapper.find('.' + classes.input)).toHaveLength(1);
    });

    it("should hide input on click on Cancel", () => {
        const wrapper = mount(<TaskAdd project={PROJECT} onTaskAdd={() => {
        }}/>);
        wrapper.find(MediumIcon).simulate('click');
        wrapper.find(CancelButton).simulate('click');
        expect(wrapper.find('.' + classes.input)).toHaveLength(0);

    });

    it("should hide input on click on Save", () => {
        const onTaskAdd = jest.fn();
        const wrapper = mount(<TaskAdd project={{id: null}} onTaskAdd={onTaskAdd}/>);
        wrapper.find(MediumIcon).simulate('click');
        wrapper.find('.' + classes.input).simulate('change', {target: {value: "new task"}});
        wrapper.find('form').simulate('submit');
        expect(wrapper.find('.' + classes.input)).toHaveLength(0);
    });
})
