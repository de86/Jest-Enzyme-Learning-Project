import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('components/Gift', () => {
    const mockRemove = jest.fn();
    const id         = 1;
    const props      = {
        removeGift: mockRemove,
        id:         1
    };
    const gift       = shallow(<Gift {...props} />);

    it('should match the Gift snapshot', () => 
        expect(gift).toMatchSnapshot());

    it('initializes a person, present and url in `state`', () => 
        expect(gift.state()).toEqual({ 
            person:  '',
            present: '',
            url:     '',
        }));


    describe('when typing into the person input', () => {
        const person = 'Uncle';

        beforeEach(() => 
            gift.find('.input-person').simulate('change', { target: {value: person} }));

        it('should update the person in `state`', () =>
            expect(gift.state().person).toEqual(person));
    });


    describe('when typing into the present input', () => {
        const present = 'Painting Set';

        beforeEach(() => 
            gift.find('.input-present').simulate('change', { target: {value: present} }));

        it('should update the present in `state`', () =>
            expect(gift.state().present).toEqual(present));
    });

    
    describe('when typing into the URL input', () => {
        const url = 'http://amzn.to/2ngeNZd'

        beforeEach(() =>
            gift.find('.input-url').simulate('change', { target: { value: url } }));

        it('should update the URL in `state', () =>
            expect(gift.state().url).toEqual(url));
    });


    describe('when clicking the `remove-gift` button', () => {
        beforeEach(() =>
            gift.find('.btn-remove').simulate('click'));

        it('calls the removeGift callback', () =>
            expect(mockRemove).toHaveBeenCalledWith(props.giftID));
    });
});

