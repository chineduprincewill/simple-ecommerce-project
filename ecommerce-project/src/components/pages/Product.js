import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProduct, addToCart } from '../../actions/products';


class Product extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        getProduct: PropTypes.func.isRequired,
        addToCart: PropTypes.func,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount(){
        
        const prdid  = this.props.location.productid;
        this.props.getProduct(prdid);
    }

    addToCart = (id) => {

      const { isAuthenticated } = this.props;
      console.log(isAuthenticated);

      if(!isAuthenticated){
        this.props.history.push('/login');
      }
      else{
        const data = {
          product_id: id
        }

        this.props.addToCart(data);
      }
    }

  render() {
    
    const { id, name, description, regular_price, discount_price } = this.props.product;
    const imgName = `/images/products/${name}`;
    return (
      <div className="container">
          <div className="col-md-12 mt-3">
            <Link to="/" className="btn btn-primary  mb-5 float-right">Return to store</Link>
          </div>
          <div className="col-md-12 row">
              <div className="col-md-4">
                  <img src={imgName} width="100%" alt="product"/>
              </div>
              <div className="col-md-8">    
                  <h3 className="pb-3">{name}</h3>
                  <h5 className="text text-danger"><span className="mr-5"><strike><b>#{regular_price}.00</b></strike></span><span><b>#{discount_price}.00</b></span></h5>
                  <p className="pb-1">{description}</p>
                  <button 
                    className="btn btn-warning"
                    onClick={this.addToCart.bind(this, id)}
                  >
                      add to <i className="fa fa-shopping-cart"></i>
                  </button>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    product: state.products.product,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getProduct, addToCart })(withRouter(Product));
