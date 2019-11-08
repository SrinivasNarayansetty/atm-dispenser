import React from 'react';
import MachineComponent from './machine-component.js';
import MoneyDispenser from './money-dispenser.js';

class AtmMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyValue:0,
            moneyObj: {2000:0, 500:0, 200:0, 100:0, 50:0, 20:0, 10:0, 5:0, 2:0, 1:0},
            counter:0,
            keys : []
        }
        this.setValue = this.setValue.bind(this);
        this.calculateDenomination = this.calculateDenomination.bind(this);

    }

    setValue(val) {
        this.setState({currencyValue:val})
        this.calculateDenomination(val);
    }

    calculateDenomination(val) {
        debugger;
        let counter = 0;
        let moneyValue = val;
        let moneyObj = {...this.state.moneyObj}
        let keys = Object.keys(moneyObj);
        let keysLen = keys.length;

        for(let i = keysLen-1;i>=0;i--) {
            let key = keys[i];
            if(moneyValue > 0) {
                let multipe = parseInt(moneyValue/key);
                counter += multipe;
                moneyObj[key] = multipe;
                moneyValue -=  multipe * key;
            }
            
        }
        this.setState({counter:counter,moneyObj:moneyObj})
    }
    render() {
        return (
            <div className="money_dispnser">  
               <MachineComponent onSubmit={this.setValue}></MachineComponent>
               <MoneyDispenser counter={this.state.counter} moneyObj={this.state.moneyObj}></MoneyDispenser>
            </div>
    )
 } 
}

export default AtmMachine;