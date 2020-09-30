import {SuccessPopup as SuccessPopupPresentational} from "./SuccessPopup";
import * as actionCreators from "../../store/actions/fb";
import {connect} from "react-redux";

const mapStateToProps = ({firebase: {successMessage}}) => ({successMessage});

const mapDispatchToProps = (dispatch) => {
    return {
        onSuccessDismiss: () => dispatch(actionCreators.successDismiss())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPopupPresentational);
