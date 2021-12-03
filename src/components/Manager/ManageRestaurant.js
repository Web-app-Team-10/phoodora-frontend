import React from 'react';
import styles from './ManageRestaurant.module.css';
import { Link } from 'react-router-dom';

export default function ManagerRestaurant(props) {

    const deleteRestaurantClick = (restaurantId) => {
        props.deleteRestaurant(restaurantId);
    }
    return (
        <div className={ styles.container }>
            <img src={ `/images/${props.image}`} className={ styles.image }></img>
            <div>
                <div className={ styles.title }>Name of the restaurant:<span className={ styles.description }>{ props.name }</span> </div>
                <div className={ styles.title }>Address of the restaurant: <span className={ styles.description }>{ props.address }, { props.city }</span></div>
                <div className={ styles.title }>Restaurant type: <span className={ styles.description }>{ props.type }</span></div>
                <div className={ styles.title }>Restaurant pricerange: <span className={ styles.description }>{ props.pricerange }</span></div>
                <div className={ styles.title }>Opening hours: <span className={ styles.description }>{ props.hours }</span></div>
            </div>
            <div className={ styles.edit }>
                <button className={ styles.button }>Edit details</button>
                <Link to={`/manager/${props.id}/menu`}><button className={ styles.button }>Edit menu</button> </Link>
                <div className={ styles.lowerB }><button className={ styles.button3 }>View order history</button><button className={ styles.button2 } onClick={ () => deleteRestaurantClick(props.id) }>Delete restaurant</button></div>
            </div>
        </div>
    )
}