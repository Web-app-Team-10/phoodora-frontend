import React from 'react';
import styles from './RestaurantView.module.css';
import Welcome from './Welcome';
import Categories from './Categories';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Restaurant(props) {
    
    /*const shoppingCart = [];*/
    const { id } = useParams();
    const { category } = useParams("");
    
    let restaurant = [];
    let uniqCategory = [];
    let sortedMenu = [];
    let menu;
    props.restaurants.map(find => { if (find.id == id){ restaurant = find } });

    restaurant.menu.map( unique => { 
        if ( uniqCategory.indexOf(unique.category) === -1) { uniqCategory.push(unique.category) } 
    });

    if(category !== null) {
        sortedMenu = restaurant.menu.filter((menu) => menu.category.toLowerCase().includes(category.toLowerCase()))
        menu = <>{ sortedMenu.map( menu => <Menu key={ menu.id } menu={ menu } products={ props.products } setShoppingCart={ props.setShoppingCart } addToCart={ props.addToCart } shoppingCart={ props.shoppingCart }/>)}</>
    } else {
        menu = <>{ restaurant.menu.map( menu => <Menu key={ menu.id } menu={ menu } products={ props.products } setShoppingCart={ props.setShoppingCart } addToCart={ props.addToCart } shoppingCart={ props.shoppingCart } />)}</>
    }



    /*const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userJwt}`
          }*/
    const getMenu = async () => {
        try {
          
          const result = await axios.get('https://phoodora-app.herokuapp.com/restaurants/'+ `${id}`);
          console.log(result);
        } catch(error) {
          console.log(error);
        }
      }

    return (
        <div className={ styles.container }>
            <Welcome restaurant={ restaurant }/> 
            <div className={ styles.second }><button onClick={ getMenu }>TESTI</button>
                <div className={ styles.categoryContainer }> <span className={ styles.title }>Select from category</span>
                <Link to={`/restaurants/${restaurant.id}`}><button className={ styles.all }>All</button></Link>
                { uniqCategory.map( category => <Categories key={ category } restaurant={ restaurant } category={ category } />) }</div>
                <div className={ styles.menuContainer }><div className={ styles.menuTitle }>Menu</div>
                    <div className={ styles.products }>{ menu }</div>
                </div> 
            </div>
        </div>
    )
}