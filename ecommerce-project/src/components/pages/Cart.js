import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCartItems, deleteItem } from '../../actions/cart';

class Cart extends Component {

  static propTypes = {
    cartitems: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    getCartItems: PropTypes.func.isRequired
  }

  componentDidMount(){
      this.props.getCartItems();
  }

  getImage = (id) => {

    let imgName = (id % 20) + 1;
    return `http://localhost:4242/images/products/${imgName}.jpg`;
  }

  render() {
    
    const data = Array.from(this.props.cartitems);

    const cartHasItems = (
        data.map(cartitem => (
            <div className="row border rounded m-3" key={cartitem.id}>
                <div className="col-md-1">
                    <img src={this.getImage(cartitem.id)} className="img-thumbnail" width="100%" alt="..." />
                </div>
                <div className="col-md-8">
                    <p>{cartitem.name}</p>
                    <p>#{cartitem.discount_price}.00</p>
                </div>
                <div className="col-md-2">
                    <button 
                        className="btn btn-link text-danger p-3"
                        onClick={this.props.deleteItem.bind(this, cartitem.id)}
                    >
                        <i className="fa fa-remove"></i>
                    </button>
                </div>
            </div>
        ))
       
    )

    const emptyCart = (
      <div className="col-md-12 mt-5">
        <h5 className="text text-danger mt-3 float-center">There are no items in your cart</h5>
      </div>
    );

    const checkoutBtn =  <Link to="/checkout" className="btn btn-success rounded-pill text-light float-right">Checkout <i className="fa fa-shopping-cart"></i></Link>
    
    return (
      <div className="container">
         <h5 className="alert alert-primary mb-5">Cart</h5>
        {data.length > 0 ? cartHasItems : emptyCart}
        {data.length > 0 ? checkoutBtn : ""}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    cartitems: state.cart.cartitems
})

export default connect(mapStateToProps, { getCartItems, deleteItem })(Cart);
