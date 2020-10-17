import React from 'react';
import {TasksList} from '../TasksList';
import {mount, shallow} from 'enzyme';
import {Task} from "../../Task/Task";
import classes from "../TasksList.module.css";

const TASKS = [
    {id: 1, name: 'task1'},
    {id: 2, name: 'task2'},
    {id: 3, name: 'task3'}
]

const PROJECT = {id: 1, name: 'TestProject', description: 'test description'};

describe('TasksList', () => {
    it("Should call onLoad once after component rendering", () => {});
    it("Should render nothing if project is still loading", () => {});
    it("Should show special message if no project passed", () => {});
    it("Should render name of the project for Inbox", () => {});
    it("Should render name of the project for Focus", () => {});
    it("Should render name of the project for normal project", () => {});
    it("Should render description of the project, if passed", () => {});
    it("Should not render description of the project, if empty", () => {});

    it("Should render same number of tasks as in props", () => {
        const wrapper = shallow(<TasksList tasks={TASKS} project={PROJECT} onLoad={() => {}}/>);
        expect(wrapper.find('.' + classes.title)).toHaveLength(1);
        expect(wrapper.find(Task)).toHaveLength(3);
    });
    it("Should hide Add Task button if project is Focus", () => {});
    it("Should show Add Task button if project is not Focus", () => {});
})
