import {TasksList as PresentationalTasksList} from './TasksList';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const tasksSelector = (tasks, projects, projectId) => {
    if (projectId === 'inbox') {
        tasks = tasks.filter(task => !task.projectId);
    } else if (projectId === 'focus') {
        tasks = tasks
            .filter(task => task.isFocusedOn === true)
            .map(t => ({...t, assignedProject: projects.find(p => p.id === t.projectId)}));
    } else if (projectId) {
        tasks = tasks.filter(task => task.projectId === projectId);
    }
    return tasks.sort((a, b) => a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0);
};

const projectSelector = (projects, projectId) => {
    if (projectId === 'inbox') {
        return {id: null, name: 'Inbox'};
    } else if (projectId === 'focus') {
        return {id: 'focus', name: 'Focus'}
    } else {
        return projects.find(p => p.id === projectId)
    }
}

const mapStateToProps = ({firebase: {tasks, projects, isProjectsFetching}}, {projectId}) => (
    {
        isProjectsFetching,
        tasks: tasksSelector(tasks, projects, projectId),
        project: projectSelector(projects, projectId)
    }

);

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actionCreators.initTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalTasksList);
