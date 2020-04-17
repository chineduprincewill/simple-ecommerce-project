import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderHistory } from '../../actions/order';
import PropTypes from 'prop-types';

class Order extends Component {
  
  static propTypes = {
    orders: PropTypes.array.isRequired,
    getOrderHistory: PropTypes.func.isRequired
  }

  componentDidMount(){
        this.props.getOrderHistory();
    }


  formatDate = (userDate) => {

    return (new Date(userDate).toJSON().slice(0,10).split('-').reverse().join('-'));
  }


  render() {

    const data = Array.from(this.props.orders);

    const hasOrders = (
        data.map(order => (
            <div className="row border-bottom m-3" key={order.product.id}>
                <div className="col-md-3 p-3">
                    <span className="text text-default">{this.formatDate(order.time_ordered)}</span>
                </div>
                <div className="col-md-4 ml-3 p-3">
                  <span className="text text-primary">{order.product.name}</span>
                </div>
                <div className="col-md-3 ml-3 p-3">
                  <span className="text text-danger">#{order.product.discount_price}.00</span>
                </div>
            </div>
        ))
       
    )

    const noOrders = (
        <div className="col-md-12 mt-5">
          <h5 className="alert alert-danger mt-3 float-center">You have not ordered for any item yet</h5>
        </div>
      );
     
    return (
      <div className="container">
        <h5 className="alert alert-primary mb-5">Order History</h5>
        {data.length > 0 ? hasOrders : noOrders}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    orders: state.order.orders
})

export default connect(mapStateToProps, { getOrderHistory })(Order);
