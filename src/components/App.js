import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { get_max_number } from '../helpers';

import Gift from './Gift';

class App extends Component {
    constructor() {
        super();

        this.state = { gifts: [] };
    }

    addGift = () => {
        const { gifts } = this.state;

        gifts.push({ id: get_max_number(this.state.gifts.map(gift => gift.id)) + 1});

        this.setState({...gifts});
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({ gifts });
    }
    
    render () {
        return (
            <div>
                <h2>Gift List</h2>
                <div className='gift-list'>
                    {
                        this.state.gifts.map(gift =>
                            <Gift
                                key={gift.id}
                                removeGift={this.removeGift}
                                giftID={gift.id} /> )
                    }
                </div>
                <Button
                    className='btn-add'
                    onClick={this.addGift}
                >
                    Add Gift
                </Button>
            </div>
        )
    }
}

export default App;