import {Task as PresentationalTask} from './Task';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const mapStateToProps = ({projects}) => ({projects});

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskEdit: (id, taskData) => dispatch(actionCreators.editTaskFb(id, taskData)),
        onTaskDelete: id => dispatch(actionCreators.deleteTaskFb(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalTask);
