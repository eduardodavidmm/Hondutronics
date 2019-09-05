import React from 'react';
import { Link } from 'react-router-dom';
import Bubbles from '../../components/bubbles/bubbles.component';
import './error.styles.scss';

export default function Error() {
    return (
        <div className="error">
            <Bubbles></Bubbles>
            <h1 className="title">Error 404: Página no encontrada</h1>
            <Link to="/" className="link">
                Volver a Hondutronics</Link>
        </div>
    );
}