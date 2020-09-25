import {TasksList as PresentationalTasksList} from './TasksList';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const mapStateToProps = ({tasks}) => ({tasks});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actionCreators.initTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalTasksList);
