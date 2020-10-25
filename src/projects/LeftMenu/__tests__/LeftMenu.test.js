import React from "react";
import {LeftMenu} from '../LeftMenu';
import classes from '../LeftMenu.module.css';
import {shallow} from 'enzyme';
import {ProjectsList} from "../../ProjectsList/ProjectsList";

const PROJECTS = [
    {id: '1', name: 'project1', description: 'description1'},
    {id: '2', name: 'project2', description: 'description2'},
    {id: '3', name: 'project3', description: 'description3'},
]

describe("<LeftMenu/>", () => {
    it('should receive projects from props', () => {
        const wrapper = shallow(<LeftMenu projects={PROJECTS}/>);
        expect(wrapper.find(ProjectsList).props().projects).toHaveLength(3);
    })

    it('should call onMenuClose on close button click', () => {
        const onMenuClose = jest.fn();
        window.innerWidth = 600;
        const wrapper = shallow(<LeftMenu projects={PROJECTS} menuOpen={true} onMenuClose={onMenuClose}/>);
        wrapper.find('.' + classes.backdropMobile).simulate('click');
        expect(onMenuClose).toHaveBeenCalledTimes(1);
    })

    it('should show menu, if menuOpen', () => {
        window.innerWidth = 600;
        const wrapper = shallow(<LeftMenu projects={PROJECTS} menuOpen={true}/>);
        expect(wrapper.find('.' + classes.menu).get(0).props.className).not.toEqual(
            expect.stringContaining(classes.hidden));
    })

    it('should hide menu, if menuOpen = false', () => {
        window.innerWidth = 600;
        const wrapper = shallow(<LeftMenu projects={PROJECTS} menuOpen={false}/>);
        expect(wrapper.find('.' + classes.menu).get(0).props.className).toEqual(
            expect.stringContaining(classes.hidden));
    })
})
