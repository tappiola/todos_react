import {ProjectModal as PresentationalProjectModal} from './ProjectModal';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        onProjectAdd: (projectData) => dispatch(actionCreators.addProjectFb(projectData)),
        onProjectEdit: (id, projectData) => dispatch(actionCreators.editProjectFb(id, projectData)),
        onProjectDelete: (id) => dispatch(actionCreators.deleteProjectFb(id)),
    }
};

export default connect(null, mapDispatchToProps)(PresentationalProjectModal);
