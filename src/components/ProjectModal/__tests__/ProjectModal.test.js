import React from "react";
import {ProjectModal} from '../ProjectModal';
import classes from '../ProjectModal.module.css';
import {DEFAULT_COLOR} from "../../../constants/colors";

import {mount, shallow} from 'enzyme';
import {ColorSelector} from "../../../containers/ColorSelector/ColorSelector";
import {Button, CancelButton, DeleteButton} from "../../../containers/Button/Button";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

const COLOR = {"colorCode": "rgb(150, 195, 235)", "humanColor": "Light Blue"};
const PROJECT = {id: 3, name: 'project3', description: 'description3', color: COLOR.humanColor};

describe('<ProjectModal/>', () => {
    it('should receive project data from props', () => {
        const wrapper = shallow(<ProjectModal project={PROJECT}/>);
        expect(wrapper.find('.' + classes.name).get(0).props.value).toEqual(PROJECT.name);
        expect(wrapper.find('.' + classes.description).get(0).props.value).toEqual(PROJECT.description);
        expect(wrapper.find(ColorSelector).props().color).toEqual(COLOR);
    });

    it('should show empty inputs if no project', () => {
        const wrapper = shallow(<ProjectModal/>);
        expect(wrapper.find('.' + classes.name).get(0).props.value).toEqual('');
        expect(wrapper.find('.' + classes.description).get(0).props.value).toEqual('');
        expect(wrapper.find(ColorSelector).props().color).toEqual(DEFAULT_COLOR);
    })

    it('should activate project Edit mode, if project', () => {
        const wrapper = shallow(<ProjectModal project={PROJECT}/>);
        expect(wrapper.find(DeleteButton)).toHaveLength(1);
        expect(wrapper.find(Button).props().children).toEqual('Save');
    })

    it('should activate project Add mode, if no project', () => {
        const wrapper = shallow(<ProjectModal/>);
        expect(wrapper.find(DeleteButton)).toHaveLength(0);
        expect(wrapper.find(Button).props().children).toEqual('Add');
    })

    it('should call onModalClose on close button click', () => {
        const onModalClose = jest.fn();
        const wrapper = mount(<ProjectModal onModalClose={onModalClose}/>);
        wrapper.find(CancelButton).simulate('click');
        expect(onModalClose).toHaveBeenCalledTimes(1);
    })

    it('should call onProjectAdd on Add button click', () => {
        const onProjectAdd = jest.fn();
        const wrapper = shallow(<ProjectModal onProjectAdd={onProjectAdd} onModalClose={() => {
        }}/>);
        wrapper.find('.' + classes.name).simulate('change', {target: {value: 'new project'}});
        wrapper.find(Button).simulate('click');
        expect(onProjectAdd).toHaveBeenCalledTimes(1);
    })

    it('should call onProjectEdit on Edit button click', () => {
        const onProjectEdit = jest.fn();
        const wrapper = shallow(<ProjectModal project={PROJECT} onProjectEdit={onProjectEdit} onModalClose={() => {
        }}/>);
        wrapper.find(Button).simulate('click');
        expect(onProjectEdit).toHaveBeenCalledTimes(1);
    });

    it('should call onProjectDelete on Delete button click', () => {
        const history = createMemoryHistory();
        const onProjectDelete = jest.fn();
        const wrapper = mount(
            <Router history={history}>
                <ProjectModal project={PROJECT} onProjectDelete={onProjectDelete} onModalClose={() => {
                }}/>
            </Router>
        );
        wrapper.find(DeleteButton).simulate('click');
        expect(onProjectDelete).toHaveBeenCalledTimes(1);
    })

    it('should change input values on typing', () => {
        const wrapper = shallow(<ProjectModal/>);
        wrapper.find('.' + classes.name).simulate('change', {target: {value: 'new project'}});
        wrapper.find('.' + classes.description).simulate('change', {target: {value: 'project desc'}});
        expect(wrapper.find('.' + classes.name).get(0).props.value).toEqual('new project');
        expect(wrapper.find('.' + classes.description).get(0).props.value).toEqual('project desc');
    })
});
