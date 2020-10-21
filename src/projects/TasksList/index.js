import {TasksList as PresentationalTasksList} from './TasksList';
import {connect} from 'react-redux';
import {projectSelector, tasksSelector} from "../store/selectors";

const mapStateToProps = ({firebase: {tasks, projects}}, {projectId}) => (
    {
        tasks: tasksSelector(tasks, projects, projectId),
        project: projectSelector(projects, projectId)
    }
);

export default connect(mapStateToProps)(PresentationalTasksList);
