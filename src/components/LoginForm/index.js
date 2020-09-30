import {LoginForm as PresentationalLoginForm} from './LoginForm';
import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions/auth";


const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actionCreators.login(email, password)),
    }
};

export default connect(null, mapDispatchToProps)(PresentationalLoginForm);
