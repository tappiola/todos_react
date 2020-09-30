import {LeftMenu as PresentationalLeftMenu} from './LeftMenu';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/fb";

const sortProjects = projects => projects.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
);

const mapStateToProps = ({firebase: {projects}}) => ({projects: sortProjects(projects)});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actionCreators.initProjects())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalLeftMenu);
