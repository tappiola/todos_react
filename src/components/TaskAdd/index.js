import {TaskAdd as PresentationalTaskAdd} from './TaskAdd';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const mapStateToProps = ({auth: {userId}}) => ({userId});

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskAdd: (taskData, userId) => dispatch(actionCreators.addTaskFb(taskData, userId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalTaskAdd);
