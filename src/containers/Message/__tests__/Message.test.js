import React from 'react';
import {Message} from '../Message';
import {shallow} from 'enzyme';
import classes from '../Message.module.css';


it("should pass children to <Message/>", () => {
    const wrapper = shallow(<Message>Message to user</Message>);
    const message = wrapper.find('.' + classes.message);
    expect(message.text()).toBe("Message to user");
});
