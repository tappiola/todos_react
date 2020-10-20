import {mount, shallow} from 'enzyme';
import {ErrorPopup} from "../ErrorPopup";
import React from "react";
import classes from "../ErrorPopup.module.css";
import {MediumIcon} from "../../../containers/Icon/Icon";

describe('<ErrorPopup/>', () => {

    it("should pass error from props", () => {
        const wrapper = shallow(<ErrorPopup error={{type: 'Error', message: "Error message"}}/>);
        expect(wrapper.find('.' + classes.popup + ' h4').text()).toEqual("Error");
        expect(wrapper.find('.' + classes.popup + ' span').text()).toEqual("Error message");
    });

    it("should not show Error popup if no error", () => {
        const wrapper = shallow(<ErrorPopup/>);
        expect(wrapper.find('.' + classes.popup)).toHaveLength(0);
    });

    it("should call onErrorDismiss on close button click", () => {
        const onErrorDismiss = jest.fn();
        const wrapper = mount(
            <ErrorPopup
                error={{type: 'Error', message: "Error message"}}
                onErrorDismiss={onErrorDismiss}
            />);
        wrapper.find(MediumIcon).simulate('click');
        expect(onErrorDismiss).toHaveBeenCalledTimes(1);
    });
})
