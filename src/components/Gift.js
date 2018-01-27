import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
    constructor() {
        super();

        this.state = {
            person:  '',
            present: '',
            url:     ''
        }
    }

    render () {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person:</ControlLabel>
                        <FormControl
                            className='input-person' 
                            onChange={e => this.setState({person: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present:</ControlLabel>
                        <FormControl
                            className="input-present"
                            onChange={e => this.setState({present: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>URL:</ControlLabel>
                        <FormControl
                            className="input-url"
                            onChange={e => this.setState({url: e.target.value})} />
                    </FormGroup>
                </Form>
                <Button
                    onClick={() => this.props.removeGift(this.props.giftID)}
                    className={'btn-remove'} >
                    Remove Gift
                </Button>
            </div>
        )
    }
}

export default Gift;