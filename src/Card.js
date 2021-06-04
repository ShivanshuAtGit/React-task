import { Component } from "react";
import './Css/Card.css'


class Card extends Component{

    render(){
        return <div className='Card'>
            <div className='Card__pic'></div>
            <h2 className='Card__name' >Name</h2>
            <div className='Card__content'>
                {this.props.children}
            </div>
            
        </div>
    }
}

export default Card;