import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCartItems, deleteItem, checkout } from '../../actions/cart';

class Checkout extends Component {

  static propTypes = {
    cartitems: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    getCartItems: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired
  }

  componentDidMount(){
      this.props.getCartItems();
  
    }

  onCheckout = () => {

    const items = Array.from(this.props.cartitems);

    const prods_ids = [];

    items.forEach(function(item){

        prods_ids.push(item.id);

        //this.props.checkout(data);
    });

    const cartData = {
        product_ids: prods_ids
    }

    this.props.checkout(cartData);

    this.props.history.push('/');
  }

  render() {
    
    const data = Array.from(this.props.cartitems);

    return (
      <div className="container col-md-12">
        <div className="row m-auto">
            <div className="col-md-4 mt-5 mr-5">
                <p className="text text-primary">You are about to pay for the following items:</p>
                <ul className="">
                {data.map(cartitem => (
                    <li className="m-3" key={cartitem.id}>
                        {cartitem.name}: <span className="float-right">#{cartitem.discount_price}.00</span>
                    </li>
                ))}
                </ul>
            </div>

            <div className="col-md-4 mt-5">
                <p className="text text-primary">Enter your card detail</p>
                <form className="mt-5">
                    <div className="form-group">
                        <input 
                            type="text"
                            name="card" 
                            className="form-control mb-3" 
                            onChange={this.onChange} 
                            placeholder='Card number' 
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="cvc" 
                            className="form-control mb-3" 
                            onChange={this.onChange} 
                            placeholder="CVC"
                        />
                    </div>

                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-success btn-block text-light float-right mb-3"
                            onClick={this.onCheckout}
                        >
                            Complete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
    cartitems: state.cart.cartitems
})

export default connect(mapStateToProps, { getCartItems, deleteItem, checkout })(withRouter(Checkout));
