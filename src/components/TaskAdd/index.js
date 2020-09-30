import {TaskAdd as PresentationalTaskAdd} from './TaskAdd';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskAdd: taskData => dispatch(actionCreators.addTaskFb(taskData)),
    }
};

export default connect(null, mapDispatchToProps)(PresentationalTaskAdd);
