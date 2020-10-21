import PresentationalApp from './App';
import {connect} from 'react-redux';
import * as actionCreators from "../projects/store/actions";


const mapStateToProps = ({firebase: {isProjectsFetching, isTasksFetching}}) => (
    {
        isDataLoading: isProjectsFetching || isTasksFetching
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        loadProjectsAndTasks: () => {
            dispatch(actionCreators.initProjects());
            dispatch(actionCreators.initTasks());
        },
        clearProjectsAndTasks: () => dispatch(actionCreators.clearProjectsAndTasks())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PresentationalApp);
