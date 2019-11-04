import React,  { Component } from 'react';

class FetchExample extends Component {
    state = {
        bpi: {}
    }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => response.json()).then(data => {
            console.log('data -> ')
            console.log(data);
            const { bpi } = data;
            this.setState({ bpi })
        })
    }

    _renderCurrencies() {
        console.log(this.state.bpi)
        const { bpi } = this.state;
        const currencies = Object.keys(bpi)
        return currencies.map(currency => (
            <div key={currency}>
                1 BTC is { bpi[currency].rate } {currency}
            </div>
          )
        )
    }

    render() {
        return (
            <div>
                <h4>Fetch Example</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;
