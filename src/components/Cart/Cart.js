import React from 'react';
import classes from './Cart.module.css';
import Image from '../../asset/onion.jpg'
import Fish from '../../asset/stock-fish.jpg'
import Tomato from '../../asset/toma1.jpg'
import Yam from '../../asset/yam.jpg'
import Tom from '../../asset/toma2.jpg'

const Cart = () => {
    return (
        <div className={classes.Cart}>
            <div className={classes.OrderDetails}>
                <div className={classes.Image}>
                    <img src={Image} alt=""/>
                </div>
                <div className={classes.Chevron}>
                    <div className={classes.Chev}>
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className={classes.Quantity}>
                    <p>2</p>
                </div>
                <div className={classes.Price}>
                    <p>price</p>
                </div>
                <div className={classes.Subtotal}>
                    <p>88.45</p>
                </div>
            </div>
            <div className={classes.OrderDetails}>
                <div className={classes.Image}>
                    <img src={Fish} alt=""/>
                </div>
                <div className={classes.Chevron}>
                    <div className={classes.Chev}>
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className={classes.Quantity}>
                    <p>2</p>
                </div>
                <div className={classes.Price}>
                    <p>price</p>
                </div>
                <div className={classes.Subtotal}>
                    <p>88.45</p>
                </div>
            </div>
            <div className={classes.OrderDetails}>
                <div className={classes.Image}>
                    <img src={Tomato} alt=""/>
                </div>
                <div className={classes.Chevron}>
                    <div className={classes.Chev}>
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className={classes.Quantity}>
                    <p>2</p>
                </div>
                <div className={classes.Price}>
                    <p>price</p>
                </div>
                <div className={classes.Subtotal}>
                    <p>88.45</p>
                </div>
            </div>
            <div className={classes.OrderDetails}>
                <div className={classes.Image}>
                    <img src={Yam} alt=""/>
                </div>
                <div className={classes.Chevron}>
                    <div className={classes.Chev}>
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className={classes.Quantity}>
                    <p>2</p>
                </div>
                <div className={classes.Price}>
                    <p>price</p>
                </div>
                <div className={classes.Subtotal}>
                    <p>88.45</p>
                </div>
            </div>
            <div className={classes.OrderDetails}>
                <div className={classes.Image}>
                    <img src={Image} alt=""/>
                </div>
                <div className={classes.Chevron}>
                    <div className={classes.Chev}>
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className={classes.Quantity}>
                    <p>2</p>
                </div>
                <div className={classes.Price}>
                    <p>price</p>
                </div>
                <div className={classes.Subtotal}>
                    <p>88.45</p>
                </div>
            </div>
            <div className={classes.OrderDetails}>
                <div className={classes.Image}>
                    <img src={Tom} alt=""/>
                </div>
                <div className={classes.Chevron}>
                    <div className={classes.Chev}>
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className={classes.Quantity}>
                    <p>2</p>
                </div>
                <div className={classes.Price}>
                    <p>price</p>
                </div>
                <div className={classes.Subtotal}>
                    <p>88.45</p>
                </div>
            </div>

            <div className={classes.Check}>
                <button>checkout</button>
                <div className={classes.Total}>
                    <p>TOTAL:</p>
                    <p>$200</p>
                </div>
            </div>
        </div>
    )
}
export default Cart;