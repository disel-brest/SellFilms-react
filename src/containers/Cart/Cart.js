import React from 'react';
import './Cart.scss';

import CartList from '../../components/CartList';
import { connect } from 'react-redux';

import { removeFromCart, increaseCountCart, decreaseCountCart } from '../../redux/actions';

function Cart(props) {
    return (
        <>
            <div className="cart">
                <div className="cart__top">
                    <h2>Корзина</h2>
                </div>
                <CartList 
                    list={props.cart.list}
                    removeFromCart={props.removeFromCart}
                    increaseCountCart={props.increaseCountCart}
                    decreaseCountCart={props.decreaseCountCart}
                />
                <div className="cart__total">Итоговая сумма: {props.cart.total} руб</div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart                    // state.cart = { list: [{count:0, id:1, data:{}}],
});                                     //                total: 0 }

export default connect(mapStateToProps, {
    removeFromCart: removeFromCart,
    increaseCountCart: increaseCountCart,
    decreaseCountCart: decreaseCountCart
})(Cart);