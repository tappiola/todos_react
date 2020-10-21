import React from 'react';
import {TasksList} from '../TasksList';
import {shallow} from 'enzyme';
import Task from "../../Task";
import classes from "../TasksList.module.css";
import {Message} from "../../../components/Message/Message";
import TaskAdd from "../../TaskAdd";

const TASKS = [
    {id: 1, name: 'task1'},
    {id: 2, name: 'task2'},
    {id: 3, name: 'task3'}
]

const PROJECT = {id: 1, name: 'TestProject', description: 'test description'};
const PROJECT_INBOX = {id: null, name: 'Inbox', description: 'test description'};
const PROJECT_FOCUS = {id: 'focus', name: 'Focus', description: 'test description'};

describe('<TasksList/>', () => {

    it("Should show special message if no project passed", () => {
        const wrapper = shallow(<TasksList tasks={TASKS}/>);
        expect(wrapper.find(Message)).toHaveLength(1);
    });

    it("Should render name of the project for Inbox", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT_INBOX}/>);
        expect(wrapper.find('.' + classes.title).text()).toEqual('Inbox');
    });

    it("Should render name of the project for normal project", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT}/>);
        expect(wrapper.find('.' + classes.title).text()).toEqual(PROJECT.name);
    });

    it("Should render name of the project for Focus", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT_FOCUS}/>);
        expect(wrapper.find('.' + classes.title).text()).toEqual('Focus');
    });

    it("Should render description of the project, if passed", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT}/>);
        const description = wrapper.find('.' + classes.description);
        expect(description).toHaveLength(1);
        expect(description.text()).toEqual(PROJECT.description);
    });

    it("Should not render description of the project, if empty", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={{id: 1, name: 'projectName'}}/>);
        const description = wrapper.find('.' + classes.description);
        expect(description).toHaveLength(0);
    });

    it("Should render same number of tasks as in props", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT}/>);
        expect(wrapper.find('.' + classes.title)).toHaveLength(1);
        expect(wrapper.find(Task)).toHaveLength(3);
    });

    it("Should hide Add Task button if project is Focus", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT_FOCUS}/>);
        expect(wrapper.find(TaskAdd)).toHaveLength(0);
    });

    it("Should show Add Task button if project is not Focus", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT}/>);
        expect(wrapper.find(TaskAdd)).toHaveLength(1);
    });
})
