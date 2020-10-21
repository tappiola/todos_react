import {SuccessPopup as SuccessPopupPresentational} from "./SuccessPopup";
import * as actionCreators from "../../projects/store/actions";
import {connect} from "react-redux";

const mapStateToProps = ({firebase: {successMessage}}) => ({successMessage});

const mapDispatchToProps = (dispatch) => {
    return {
        onSuccessDismiss: () => dispatch(actionCreators.successDismiss())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPopupPresentational);
