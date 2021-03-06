import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';


class App extends Component {
    constructor( ) {
        super();

        this.state = {
            gifts: []
        }
    }

    // auto binding of this to the component
    addGift = () => {
         // this is a copy (?) of the state.gifts array
        const { gifts } = this.state;

        // firstly it'll be empty arr
        const ids = this.state.gifts.map(gift => gift.id);

        const max_id = max_number(ids);
        gifts.push({id: max_id + 1});

        this.setState({gifts});
    }

    removeGift = ( id ) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    }

    render() {
        const {gifts} = this.state;
        return (
            <div>
                 <h2>Gift Giver</h2>
                 <div className='gift-list'>
                     {gifts.map(gift => <Gift key={gift.id}
                        gift={gift}
                        removeGift={this.removeGift}

                     />)}
                 </div>
                 <Button className='btn-add'
                 onClick={this.addGift}
                 >Add Gift</Button>
            </div>
        )
    }
}

export default App;