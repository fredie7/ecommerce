import React, { useEffect, useContext } from 'react';
import classes from './Products.module.css';
import Fishimg from '../../asset/stock-fish.jpg'
import Theme from '../Theme/Theme'
import {ProductContext} from '../../context/ProductContext';
import ProductApi from '../../apis/ProductApi';

const Products = props => {
    const { products, setProducts } = useContext(ProductContext)

    useEffect(()=> {
        const fetchData = async ()=> {
            // try {
            //     const response = await ProductApi.get('/getAllProducts')
            //     setProducts(response.data.data)
            // } catch (error) {
            //     console.log(error)
            // }
            // try {
                let res = await fetch('http://localhost:5001/api/v1/product/getAllProducts')
                let response = await res.json()
                setProducts(response.data)
            // } catch (error) {
            //     console.log(error)
            // }
        }
        fetchData()
    },[]);


    return (
        <React.Fragment>
        <Theme />
        <div className={classes.Products}>
            <h1>Products</h1>
            <div className={classes.AllProducts}>
                {products && products.map((product,i) => {
                    let retrievedImage = (product.image.split(''))
                    let filteredImage = retrievedImage.splice(0,8,'http://localhost:5001/uploads/')
                    let image = retrievedImage.join('')
                    return (

                <div className={classes.ProductWrapper} key={i}>
                    <div className={classes.ProductImg}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={classes.ProductDetails}>
                        <div className={classes.ProductName}>{product.product_name}</div>
                        <div className={classes.ProductPrice}><span>$</span>{product.price}</div>
                    </div>
                </div>
                    )
                })}
                {/* <div className={classes.ProductWrapper}>
                    <div className={classes.ProductImg}>
                        <img src={Fishimg} alt=""/>
                    </div>
                    <div className={classes.ProductDetails}>
                        <div className={classes.ProductName}>name</div>
                        <div className={classes.ProductPrice}>price</div>
                    </div>
                </div>
                <div className={classes.ProductWrapper}>
                    <div className={classes.ProductImg}>
                        <img src={Fishimg} alt=""/>
                    </div>
                    <div className={classes.ProductDetails}>
                        <div className={classes.ProductName}>name</div>
                        <div className={classes.ProductPrice}>price</div>
                    </div>
                </div>
                <div className={classes.ProductWrapper}>
                    <div className={classes.ProductImg}>
                        <img src={Fishimg} alt=""/>
                    </div>
                    <div className={classes.ProductDetails}>
                        <div className={classes.ProductName}>name</div>
                        <div className={classes.ProductPrice}>price</div>
                    </div>
                </div>
                <div className={classes.ProductWrapper}>
                    <div className={classes.ProductImg}>
                        <img src={Fishimg} alt=""/>
                    </div>
                    <div className={classes.ProductDetails}>
                        <div className={classes.ProductName}>name</div>
                        <div className={classes.ProductPrice}>price</div>
                    </div>
                </div>
                <div className={classes.ProductWrapper}>
                    <div className={classes.ProductImg}>
                        <img src={Fishimg} alt=""/>
                    </div>
                    <div className={classes.ProductDetails}>
                        <div className={classes.ProductName}>name</div>
                        <div className={classes.ProductPrice}>price</div>
                    </div>
                </div> */}
            </div>
        </div>
        </React.Fragment>
    )
}

export default Products;