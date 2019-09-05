import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button-component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {

    const { name, price, image, info } = item;

    return (
    <div className="collection-item">
        <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}.00</span>
            </div>
        <div className="image" style={{backgroundImage: `url(${image})`}} />
        <p className="info">{info}</p>
        <CustomButton onClick={() => addItem(item)} inverted>Añadir a Carrito</CustomButton>
    </div>
)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
