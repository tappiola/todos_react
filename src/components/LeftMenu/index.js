import {LeftMenu as PresentationalLeftMenu} from './LeftMenu';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const sortProjects = projects => projects.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
);

const mapStateToProps = ({firebase: {projects}, auth: {userId}}) => ({projects: sortProjects(projects), userId});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: userId => dispatch(actionCreators.initProjects(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalLeftMenu);
