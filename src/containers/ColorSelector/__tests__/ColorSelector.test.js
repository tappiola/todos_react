import React from 'react';
import {ColorSelector} from '../ColorSelector';
import {shallow} from 'enzyme';
import classes from '../ColorSelector.module.css';

const OPTIONS = [
    {humanColor: "color1", colorCode: "rgb(0, 0, 0)"},
    {humanColor: "color2", colorCode: "rgb(255, 255, 255)"},
    {humanColor: "color3", colorCode: "rgb(120, 120, 120)"},
]

it("should open on click", () => {
    const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]}/>);
    const selector = wrapper.find('.' + classes.selectedColor);
    selector.simulate("click");
    expect(wrapper.exists('.' + classes.select)).toEqual(true);
});

it("should show all options on click", () => {
    const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]}/>);
    const selector = wrapper.find('.' + classes.selectedColor);
    selector.simulate("click");
    const options = wrapper.find(`.${classes.select} li`);
    expect(options).toHaveLength(3);
});


it("should close on option click", () => {
    const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]} onColorChange={() => {}}/>);
    const selector = wrapper.find('.' + classes.selectedColor);
    selector.simulate("click");
    const option = wrapper.find(`.${classes.select} li`).first();
    option.simulate("click");
    expect(wrapper.exists('.' + classes.select)).toEqual(false);
});

// it("should select new option on click", () => {
//     const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]} onColorChange={() => {}}/>);
//     const selector = wrapper.find('.' + classes.selectedColor);
//     selector.simulate("click");
//     const option = wrapper.find(`.${classes.select} li`).first();
//     option.simulate("click");
//     const selectedColor = wrapper.find('.' + classes.selectedColor);
//     expect(selectedColor.children().at(0).text()).toEqual(OPTIONS[0].humanColor);
//     expect(selectedColor.children().at(1).props().color).toEqual(OPTIONS[0].colorCode);
// });


// it("should close on click outside", () => {
//     const wrapper = shallow(<>
//         <div className="outside">Outside</div>
//         <ColorSelector options={OPTIONS} color={OPTIONS[1]} onColorChange={() => {}}/>
//         </>);
//     wrapper.find('.' + classes.selectedColor).simulate("click");
//     wrapper.find('.outside').simulate("mousedown");
//     expect(wrapper.exists('.' + classes.select)).toEqual(false);
// });


it("should receive options from parent", () => {
    const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]} onColorChange={() => {}}/>);
    const selector = wrapper.find('.' + classes.selectedColor);
    selector.simulate("click");
    const option = wrapper.find(`.${classes.select} li`).first();
    expect(option.children().get(0).props.color).toEqual(OPTIONS[0].colorCode);
    expect(option.children().at(1).text()).toEqual(OPTIONS[0].humanColor);
});

it("should receive initial color from parent", () => {
    const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]} onColorChange={() => {}}/>);
    const selectedColor = wrapper.find(`.${classes.selectedColor} div`);
    expect(selectedColor.children().get(0).props.color).toEqual(OPTIONS[1].colorCode);
    expect(selectedColor.children().at(1).text()).toEqual(OPTIONS[1].humanColor);
});

it("should call 'onColorChange' on option click", () => {
    const onColorChange = jest.fn();
    const wrapper = shallow(<ColorSelector options={OPTIONS} color={OPTIONS[1]} onColorChange={onColorChange}/>);
    const selector = wrapper.find('.' + classes.selectedColor);
    selector.simulate("click");
    const option = wrapper.find(`.${classes.select} li`).first();
    option.simulate("click");
    expect(onColorChange).toBeCalledTimes(1);
});
