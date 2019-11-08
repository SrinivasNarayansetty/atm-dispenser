import React from 'react';
class MoneyDispenser extends React.Component {
    componentDidMount() {

    }
    getDerivedStateFromProps(props) {
        debugger;
    }
    render() {
        let moneyObj = this.props.moneyObj;
        let keys = Object.keys(moneyObj);
        let counter = this.props.counter
        let listItem = keys.map((key)=> {
           return  <li className="dispenser_item" key={key}>Count of {key}Rs. note would be: {moneyObj[key]}</li>
        });

        return (
            <div className="money_dispenser">
                <h3 className="dispenser_heading"> You will get</h3>
                <ul className="dispenser_list">
                    {listItem}
                </ul>  
                <p className="counter">Total count of notes is: {counter}</p> 
            </div>

        )
    }
}

export default MoneyDispenser;