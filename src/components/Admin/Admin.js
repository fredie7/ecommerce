import React from 'react';
import classes from './Admin.module.css';
import Item from '../../asset/pepper.jpg';
import Tom from '../../asset/toma2.jpg'
import Mab from '../../asset/mab1.jpg';

const Admin = () => {
    return (
        <React.Fragment>
            <div className={classes.AdminWrapper}>
            <h4>new supply</h4>
            <form action="" className={classes.Form}>
                <input type="text" placeholder='product name'/>
                <input type="text" placeholder='product price'/>
                <input type="text" placeholder='product quantity'/>
                <input type="file"/>
                <textarea name="" id="" cols="30" rows="10" className={classes.Text} placeholder='enter product description...............'>

                </textarea>
                <input type="submit"/>
            </form>

            <div className={classes.ProductTable}>
            <h4>products stock inventory</h4>

                <table className={classes.Tab}>
                    <thead>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>sold</th>
                        <th>in stock</th>
                    </thead>
                    <tbody>
                        <tr className={classes.Row}>
                            <td className={classes.Pix}><img src={Tom} alt=""/></td>
                            <td className={classes.Num}>potato</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={classes.Row}>
                            <td className={classes.Pix}><img src={Tom} alt=""/></td>
                            <td className={classes.Num}>potato</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={classes.Row}>
                            <td className={classes.Pix}><img src={Tom} alt=""/></td>
                            <td className={classes.Num}>potato</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={classes.Row}>
                            <td className={classes.Pix}><img src={Tom} alt=""/></td>
                            <td className={classes.Num}>potato</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                            <td className={classes.Num}>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <img src={Mab} className={classes.Mab} alt=""/> */}

            </div>
        </React.Fragment>
    )
}

export default Admin;