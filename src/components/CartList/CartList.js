import React from 'react';
import './CartList.scss';

import CartItem from '../CartList/CartItem';

function CartList(props) {
    return (
        <div className="cart__list">
            {props.list.map((film, index)=> {
                return <CartItem 
                            film={film}
                            key={index}
                            removeFromCart={props.removeFromCart}
                            increaseCountCart={props.increaseCountCart}
                            decreaseCountCart={props.decreaseCountCart}
                        />
            })}
        </div>
    );
}

export default CartList;