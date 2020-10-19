import React from 'react';
import {Task, TaskFocusIcon, TaskCompleteCheckbox, TaskDeleteButton, TaskEditButton} from '../Task';
import {mount, shallow} from 'enzyme';
import classes from '../Task.module.css';
import {CancelButton} from "../../../containers/Button/Button";
import {Icon, ICON_COLOR, ICON_TYPE} from "../../../containers/Icon/Icon";

const TASK = {
    id: 2,
    name: 'task1',
    isFocusedOn: true,
    projectId: 2
};
const PROJECTS = [
     {id: 1, name: 'project1', description: 'description1'},
     {id: 2, name: 'project2', description: 'description2'},
     {id: 3, name: 'project3', description: 'description3'},
]
const PROJECT = PROJECTS[1];
const PROJECT_FOCUS = {id: 'focus', name: 'Focus', description: 'test description'};

describe('<Task/>', () => {
    const getDefaultProps = () => {
        return {
            task: TASK,
            currentProject: PROJECT,
            taskProject: PROJECT,
            projects: PROJECTS,
            onTaskEdit: jest.fn(),
            onTaskDelete: jest.fn(),
            activeTaskId: null,
            onSetActiveTask: jest.fn()
        };
    };

    let props = {};

    beforeEach(() => {
        props = getDefaultProps();
    });

    it("should receive task name from props", () => {
        const wrapper = shallow(<Task {...props}/>);
        expect(wrapper.find('.' + classes.text).text()).toEqual(TASK.name);
    });

    it("should pass task focused to TaskFocusIcon (isFocusedOn: true)", () => {
        props.task = {...props.task, isFocusedOn: true};
        const wrapper = shallow(<Task {...props}/>);
        expect(wrapper.find(TaskFocusIcon).props().focused).toEqual(true);
    });

    it("should pass task focused to TaskFocusIcon (isFocusedOn: false)", () => {
    props.task = {...props.task, isFocusedOn: false};
        const wrapper = shallow(<Task {...props}/>);
        expect(wrapper.find(TaskFocusIcon).props().focused).toEqual(false);
    });

    it("should pass task complete to TaskCompleteCheckbox", () => {
        props.task = {...props.task, isComplete: false};
        const wrapper = shallow(<Task {...props}/>);
        expect(wrapper.find(TaskCompleteCheckbox).props().complete).toEqual(false);
    });

    it("should receive projects list from props", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        expect(wrapper.find(`select.${classes.projectSelect} option`)).toHaveLength(4);
    });

    it("should show task project from props by default", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        expect(wrapper.find(`select.${classes.projectSelect}`).get(0).props.defaultValue).toEqual(PROJECT.id);
    });

    it("should show 'taskProject' label, if currentProject is 'focus'", () => {
        props.currentProject = PROJECT_FOCUS;
        const wrapper = mount(<Task {...props}/>);
        expect(wrapper.find('.' + classes.projectLabel)).toHaveLength(1);
        expect(wrapper.find('.' + classes.projectLabel).text()).toEqual(PROJECT.name);
    });

    it("should not show 'taskProject' label, if currentProject is not 'focus'", () => {
                const wrapper = mount(<Task {...props}/>);
        expect(wrapper.find('.' + classes.projectLabel)).toHaveLength(0);
    });

    it("'onTaskEdit' should be called on Edit button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        wrapper.find('.' + classes.save).simulate('click');
        expect(props.onTaskEdit).toHaveBeenCalledTimes(1);
        expect(props.onTaskEdit).toHaveBeenCalledWith(
            TASK.id,
            {"name": TASK.name, "projectId": TASK.projectId}
            );
    });

    it("'onTaskEdit' should be called on Focus button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find(TaskFocusIcon).simulate('click');
        expect(props.onTaskEdit).toHaveBeenCalledTimes(1);
        expect(props.onTaskEdit).toHaveBeenCalledWith(
            TASK.id,
            {"isFocusedOn": false}
    )
    });

    it("'onTaskEdit' should be called on Complete button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find(TaskCompleteCheckbox).simulate('click');
        expect(props.onTaskEdit).toHaveBeenCalledTimes(1);
        expect(props.onTaskEdit).toHaveBeenCalledWith(
            TASK.id,
            {"isComplete": true}
    )
    });

    it("'onTaskDelete' should be called on Delete button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskDeleteButton).simulate('click');
        expect(props.onTaskDelete).toHaveBeenCalledTimes(1);
        expect(props.onTaskDelete).toHaveBeenCalledWith(TASK.id);
    });

    it("activeTaskId", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        wrapper.setProps({ activeTaskId: 8 });
        wrapper.update();
        expect(wrapper.find('.' + classes.taskEditInputContainer)).toHaveLength(0);
    });

    it("onSetActiveTask", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        expect(props.onSetActiveTask).toHaveBeenCalledTimes(1);
        expect(props.onSetActiveTask).toHaveBeenCalledWith(2);
    });

    it("input should be set active on Edit button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        expect(wrapper.find('.' + classes.taskEditInputContainer)).toHaveLength(1);
        expect(wrapper.find('.' + classes.projectLabel)).toHaveLength(0);
    });

    it("input should be set inactive on Cancel button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        wrapper.find(CancelButton).simulate('click');
        expect(wrapper.find('.' + classes.taskEditInputContainer)).toHaveLength(0);
    });

    it("input should be set inactive on Save button click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        wrapper.find('.' + classes.save).simulate('click');
        expect(wrapper.find('.' + classes.taskEditInputContainer)).toHaveLength(0);
    });

    it("Focus icon should be inactive after click, if initially active", () => {
        props.task = {...props.task, isFocusedOn: true};
        const wrapper = mount(<Task {...props}/>);
        wrapper.find(TaskFocusIcon).simulate('click');
        expect(wrapper.find(TaskFocusIcon).find(Icon).get(0).props.color).toEqual(ICON_COLOR.WHITE);
    });

    it("Focus icon should be active after click, if initially inactive", () => {
        props.task = {...props.task, isFocusedOn: false};
        const wrapper = mount(<Task {...props}/>);
        wrapper.find(TaskFocusIcon).simulate('click');
        expect(wrapper.find(TaskFocusIcon).find(Icon).get(0).props.color).toEqual(ICON_COLOR.YELLOW);
    });

    it("Complete icon should be checked after click", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find(TaskCompleteCheckbox).simulate('click');
        expect(wrapper.find(TaskCompleteCheckbox).find(Icon).get(0).props.iconType).toEqual(ICON_TYPE.CHECKBOX_COMPLETE);
    });

    it("should change input text on typing", () => {
        const wrapper = mount(<Task {...props}/>);
        wrapper.find('.' + classes.container).simulate('mouseenter');
        wrapper.find(TaskEditButton).simulate('click');
        wrapper.find('.' + classes.taskEditInput).simulate('change', { target: { value: 'new text' }} );
        expect(wrapper.find('.' + classes.taskEditInput).get(0).props.value).toEqual('new text');
    });
})
