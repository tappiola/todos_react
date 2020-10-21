import {LoginForm as PresentationalLoginForm} from './LoginForm';
import {connect} from 'react-redux';
import * as actionCreators from "../store/actions";

const mapStateToProps = ({auth: {error}}) => ({error});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actionCreators.login(email, password)),
        onRegister: (email, password) => dispatch(actionCreators.register(email, password)),
        onErrorDismiss: () => dispatch(actionCreators.errorDismiss()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationalLoginForm);
