// reusable card component
import CartButton from "./CartButton";
import styles from "./Product.module.css"
const GroceryItem = (props) => {
  // console.log(props)
  console.log(props)
  return (
        <div className={styles.maindiv}>
          <img src={props.imgURL} alt=""/>
          <div className={styles.disc}>{props.discount}</div>
          <h6>{props.title}</h6>
          <div className={styles.price}>
            <p><b>{props.sellingPrice}</b></p><span className={styles.mrp}>M.R.P:<p className={styles.str}>{props.mrp}</p></span>
          </div>
          <CartButton /> 
                  
        </div>
  )
        
};
export default GroceryItem;
