import {LeftMenu as PresentationalLeftMenu} from './LeftMenu';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/actionCreators";

const mapStateToProps = ({projects}) => ({projects});

const mapDispatchToProps = (dispatch, {history}) => {
    return {
        onLoad: () => dispatch(actionCreators.initProjects())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalLeftMenu);
