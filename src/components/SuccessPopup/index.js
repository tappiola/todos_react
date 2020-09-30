import {SuccessPopup as SuccessPopupPresentational} from "./SuccessPopup";
import * as actionCreators from "../../store/actions/actionCreators";
import {connect} from "react-redux";

const mapStateToProps = ({successMessage}) => ({successMessage});

const mapDispatchToProps = (dispatch) => {
    return {
        onSuccessDismiss: () => dispatch(actionCreators.successDismiss())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPopupPresentational);
