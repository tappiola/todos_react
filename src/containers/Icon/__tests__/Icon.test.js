import React from 'react';
import {SmallIcon, MediumIcon, Icon} from '../Icon';
import {mount} from 'enzyme';
import each from 'jest-each';
import {Message} from "../../Message/Message";

describe("Icon test", () => {
  each([
    Icon,
    SmallIcon,
    MediumIcon
  ]).it("'%s' should receive color from props", component => {
    const wrapper = mount(React.createElement(component, {color: "#000000"}));
    const icon = wrapper.find('span');
    expect(icon).toHaveStyle('color: #000000');
  });
});
