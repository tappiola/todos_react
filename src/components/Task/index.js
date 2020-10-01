import {Task as PresentationalTask} from './Task';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const mapStateToProps = ({firebase: {projects}, auth: {userId}}) => ({projects, userId});

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskEdit: (id, taskData, userId) => dispatch(actionCreators.editTaskFb(id, taskData, userId)),
        onTaskDelete: (id, userId) => dispatch(actionCreators.deleteTaskFb(id, userId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalTask);
