import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCartItems, deleteItem } from '../../actions/products';

class Cart extends Component {

  static propTypes = {
    cartitems: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    getCartItems: PropTypes.func.isRequired
  }

  componentDidMount(){
      this.props.getCartItems();
  }

  render() {
    
    const data = Array.from(this.props.cartitems);

    return (
      <div className="container">
        <div className="col-md-12 mt-5">
            {data.map(cartitem => (
                <div className="row border rounded m-3" key={cartitem.id}>
                    <div className="col-md-2">
                        <img src="..." className="img-thumbnail" width="100%" alt="..." />
                    </div>
                    <div className="col-md-7">
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
            ))}
        </div>

        <Link to="/checkout" className="btn btn-success rounded-pill text-light float-right">Checkout <i className="fa fa-shopping-cart"></i></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    cartitems: state.products.cartitems
})

export default connect(mapStateToProps, { getCartItems, deleteItem })(Cart);
