import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProducts, getProduct, addToCart } from '../../actions/products';


class Home extends Component {

    static propTypes = {
        allproducts: PropTypes.array.isRequired,
        addToCart: PropTypes.func,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount(){
        this.props.getProducts();
    }

    viewProduct (id) {
        
        //this.props.getProduct(id);
        //this.props.history.push(`/product-detail:${id}`);
        this.props.history.push({
            pathname: '/product-detail',
            productid: id,
          });
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

        const data = Array.from(this.props.allproducts);

        return (
            <div className="container">
                <h3 className="text text-primary text-center mt-5">
                    WELCOME TO OUR REACT E-COMMERCE PROJECT
                </h3>
                <div className="col-md-12 row mt-5" >
                    
                    {data.map(product => (
                     <div className="col-sm-3 card m-1" key={product.id}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title">{product.name}</p>
                            <p className="text text-danger">
                                <span className="mr-5">
                                    <strike><b>#{product.regular_price}.00</b></strike>
                                </span>
                                <span>
                                    <b>#{product.discount_price}.00</b>
                                </span>
                            </p>
                            <button 
                                className="btn btn-link mr-5"
                                onClick={this.viewProduct.bind(this, product.id)}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                            <button 
                                className="btn btn-warning"
                                onClick={this.addToCart.bind(this, product.id)}
                            >
                                add to <i className="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allproducts: state.products.allproducts,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getProducts, getProduct, addToCart })(withRouter(Home));
