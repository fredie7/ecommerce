import React from 'react'
import classes from './ProductDetails.module.css';
import Fishimg from '../../asset/stock-fish.jpg'



const ProductDetails = () => {
    return (
        <div className={classes.ProductDetails}>
            <div className={classes.Product}>
                <div className={classes.ProductImg}>
                    <img src={Fishimg} alt="Fishimg"/>
                </div>
                <div className={classes.Price}>
                    <p>$20</p>
                </div>
                <div className={classes.ProductDescription}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo 
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                        iusto velit mollitia hic quo saepe accusamus inventore magnam fugiat quibusdam!
                    </p>
                </div>
            </div>
            <div className={classes.Addtocart}>
                <button type='submit'>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductDetails;