import React from 'react';
class MachineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyValue: 0
        }
        this.setValue = this.setValue.bind(this);
    }
    setValue(e) {
        this.setState({currencyValue:e.target.value})
    }

    
    render() {
        return (
            <div className="machine_component">
                <h3>Enter Amount</h3>
                <input type="number" className="machine_input" value={this.state.currencyValue} onChange={this.setValue}/>
                <button className="submit_button" onClick={() => this.props.onSubmit(this.state.currencyValue)}>Submit</button>
            </div>
        )
    }
}

export default MachineComponent;