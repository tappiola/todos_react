import {AddProjectModal as PresentationalAddProjectModal} from './AddProjectModal';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        onProjectAdd: (projectData) => dispatch(actionCreators.addProjectFb(projectData))
    }
};

export default connect(null, mapDispatchToProps)(PresentationalAddProjectModal);
