import React, { Component } from 'react';
import { MyComsumer } from '../../context/context';

class Child extends Component {
    
    render() { 

        let {users} = this.props

        return (
            <div>
                <MyComsumer>
                    {
                        (value) => {
                            return(<div>{value}</div>);
                        }
                    }
                </MyComsumer>
            </div>
        )
    }
}
 
export default Child;