import {ProjectModal as PresentationalProjectModal} from './ProjectModal';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const mapStateToProps = ({auth: {userId}}) => ({userId});

const mapDispatchToProps = (dispatch) => {
    return {
        onProjectAdd: (projectData, userId) => dispatch(actionCreators.addProjectFb(projectData, userId)),
        onProjectEdit: (id, projectData, userId) => dispatch(actionCreators.editProjectFb(id, projectData, userId)),
        onProjectDelete: (id, userId) => dispatch(actionCreators.deleteProjectFb(id, userId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalProjectModal);
