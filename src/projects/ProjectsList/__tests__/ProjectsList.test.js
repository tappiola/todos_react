import React from "react";
import {mount} from 'enzyme';
import {Project, ProjectsList} from "../ProjectsList";
import classes from "../ProjectsList.module.css";
import {Router} from "react-router";
import {createMemoryHistory} from "history";

const PROJECTS = [
    {id: 1, name: 'project1', description: 'description1'},
    {id: 2, name: 'project2', description: 'description2'},
    {id: 3, name: 'project3', description: 'description3'},
]

const HistoryWrapper = ({children}) => {
    const history = createMemoryHistory();
    return <Router history={history}>{children}</Router>;
}

describe('<Project/>', () => {
    it('should receive project from props', () => {
        const wrapper = mount(<HistoryWrapper><Project project={PROJECTS[1]}/></HistoryWrapper>)
        expect(wrapper.find('.' + classes.projectItem).text()).toEqual(PROJECTS[1].name);
    });
})

describe('<ProjectsList/>', () => {
    it('should receive projects from props', () => {
        const wrapper = mount(<HistoryWrapper><ProjectsList projects={PROJECTS}/></HistoryWrapper>);
        expect(wrapper.find(Project)).toHaveLength(3);
    });

    it('should call onMenuClose on click', () => {
        const onMenuClose = jest.fn();
        const wrapper = mount(<HistoryWrapper>
            <ProjectsList projects={PROJECTS} onMenuClose={onMenuClose}/>
        </HistoryWrapper>);
        wrapper.find(Project).first().find('.' + classes.projectItem).simulate('click');
        expect(onMenuClose).toHaveBeenCalledTimes(1);
    });

    it('should call onProjectEdit on Edit button click', () => {
        const onProjectEdit = jest.fn();
        const wrapper = mount(<HistoryWrapper>
            <ProjectsList projects={PROJECTS} onProjectEdit={onProjectEdit}/>
        </HistoryWrapper>);
        wrapper.find(Project).first().simulate('mouseenter');
        wrapper.find(Project).first().find('.' + classes.editIcon).hostNodes().simulate('click');
        expect(onProjectEdit).toHaveBeenCalledTimes(1);
    });

    it('should call onProjectAdd on (+) button click', () => {
        const onProjectAdd = jest.fn();
        const wrapper = mount(<HistoryWrapper>
            <ProjectsList projects={PROJECTS} onProjectAdd={onProjectAdd}/>
        </HistoryWrapper>);
        wrapper.find('.' + classes.addIcon).hostNodes().simulate('click');
        expect(onProjectAdd).toHaveBeenCalledTimes(1);
    });

    it('should show Focus project', () => {
        const wrapper = mount(<HistoryWrapper><ProjectsList projects={PROJECTS}/></HistoryWrapper>);
        expect(wrapper.find('.' + classes.menuItems).children().map(e => e.text())).toEqual(
            expect.arrayContaining(['Focus']));
    });

    it('should show Inbox project', () => {
        const wrapper = mount(<HistoryWrapper><ProjectsList projects={PROJECTS}/></HistoryWrapper>);
        expect(wrapper.find('.' + classes.menuItems).children().map(e => e.text())).toEqual(
            expect.arrayContaining(['Inbox']));
    });
})
