import {LeftMenu as PresentationalLeftMenu} from './LeftMenu';
import {connect} from 'react-redux';

const sortProjects = projects => projects.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
);

const mapStateToProps = ({firebase: {projects}}) => ({projects: sortProjects(projects)});

export default connect(mapStateToProps)(PresentationalLeftMenu);
