import {mount, shallow} from 'enzyme';
import {SuccessPopup} from "../SuccessPopup";
import React from "react";
import classes from "../SuccessPopup.module.css";
import {MediumIcon} from "../../../containers/Icon/Icon";

describe('<SuccessPopup/>', () => {

    it("should pass successMessage from props", () => {
        const wrapper = mount(<SuccessPopup successMessage="Successfully done"/>);
        expect(wrapper.find('.' + classes.popup).text()).toEqual("Successfully done");
    });

    it("should hide success popup if no successMessage", () => {
        const wrapper = shallow(<SuccessPopup/>);
        expect(wrapper.find('.' + classes.popup)).toHaveLength(0);
    });

    it("should call onSuccessDismiss on close button click", () => {
        const onSuccessDismiss = jest.fn();
        const wrapper = mount(<SuccessPopup successMessage="Successfully done" onSuccessDismiss={onSuccessDismiss}/>);
        wrapper.find(MediumIcon).simulate('click');
        expect(onSuccessDismiss).toHaveBeenCalledTimes(1);
    });
})
