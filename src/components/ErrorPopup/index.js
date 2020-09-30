import {ErrorPopup as ErrorPopupPresentational} from "./ErrorPopup";
import * as actionCreators from "../../store/actions/actionCreators";
import {connect} from "react-redux";

const mapStateToProps = ({error}) => ({error});

const mapDispatchToProps = (dispatch) => {
    return {
        onErrorDismiss: () => dispatch(actionCreators.errorDismiss())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopupPresentational);
