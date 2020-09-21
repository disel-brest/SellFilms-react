import React from 'react';
import './Header.scss';

import { connect } from 'react-redux';
import HeaderInfo from '../../components/HeaderInfo/HeaderInfo';

function Header(props) {   // лучше HeaderContainer
    return (
        <>
           <HeaderInfo list={props.list}/>
        </>
    );
}

const mapStateToProps = (state) => ({
    list: state.cart.list                    // state.cart = { list: [{count:0, id:1, data:{}}],
});

export default connect(mapStateToProps)(Header);