import React from 'react';
import {Message} from '../Message';
import {mount} from 'enzyme';
import classes from '../Message.module.css';


it("should pass children to <Message/>", () => {
    const wrapper = mount(<Message>Message to user</Message>);
    const message = wrapper.find('.' + classes.message);
    expect(message.text()).toBe("Message to user");
});
