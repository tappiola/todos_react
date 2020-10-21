import {ErrorPopup as ErrorPopupPresentational} from "./ErrorPopup";
import * as actionCreators from "../../projects/store/actions";
import {connect} from "react-redux";

const mapStateToProps = ({firebase: {error}}) => ({error});

const mapDispatchToProps = (dispatch) => {
    return {
        onErrorDismiss: () => dispatch(actionCreators.errorDismiss())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopupPresentational);
