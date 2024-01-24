import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { CartDropDownContainer, CartItemsContainer, EmptyCartMessage, StyledCustomButton } from "./cart-dropdown.styles";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyCartMessage>Your Cart is empty</EmptyCartMessage>
        )}
      </CartItemsContainer>
      <StyledCustomButton
        onClick={() => {
          navigate('/checkout'); // Use the navigate function instead of history.push
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </StyledCustomButton>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
