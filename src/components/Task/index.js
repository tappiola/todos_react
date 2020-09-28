import {Task as PresentationalTask} from './Task';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskEdit: (id, taskData) => dispatch(actionCreators.editTaskFb(id, taskData)),
    }
};

export default connect(null, mapDispatchToProps)(PresentationalTask);
