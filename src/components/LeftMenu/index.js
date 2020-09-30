import {LeftMenu as PresentationalLeftMenu} from './LeftMenu';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const sortProjects = projects => projects.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

const mapStateToProps = ({projects}) => ({projects: sortProjects(projects)});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actionCreators.initProjects())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalLeftMenu);
