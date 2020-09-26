import {TasksList as PresentationalTasksList} from './TasksList';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const tasksSelector = (tasks, projectId) => {
    if (projectId === 'inbox') {
        return tasks.filter(task => !task.projectId);
    } else if (projectId === 'focus') {
        return tasks.filter(task => task.isFocusedOn === true);
    } else if (projectId) {
        return tasks.filter(task => task.projectId === +projectId);
    } else {
        return tasks;
    }
};

const projectSelector = (projects, projectId) => {
    if (projectId === 'inbox') {
        return {projectId, name: 'Inbox'};
    } else if (projectId === 'focus') {
        return {projectId, name: 'Focus'}
    } else {
        return projects.find(p => p.id === projectId)
    }
}

const mapStateToProps = ({tasks, projects, isProjectsFetching}, {projectId}) => (
    {
        isProjectsFetching,
        tasks: tasksSelector(tasks, projectId),
        project: projectSelector(projects, projectId)
    }

);

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actionCreators.initTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalTasksList);
