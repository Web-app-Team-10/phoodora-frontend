import React from 'react';
import styles from './Product.module.css';
import { Image } from 'cloudinary-react';

export default function Product(props) {

    const deleteFromMenuClick = (productId) => {
        props.deleteFromMenu(productId);
    }
   
    return (
        <div className={ styles.container }>
            <Image className={ styles.image} cloudName="dfllxr92w" publicId={ `${props.image}` } />
            <div className={ styles.info }>   
                <div className={ styles.title }>{ props.name }</div>
                <div className={ styles.details }>{ props.description }</div>
                <div className={ styles.price }>
                    <div className={ styles.priceC }>{ props.price } €</div><div className={ styles.category }>{ props.category }</div><button onClick={ () => deleteFromMenuClick(props.id) } className={ styles.delete }>Delete</button>
                </div>
            </div>
        </div>
    )
}
