import React from 'react';
import style from './404.module.scss'
const NotFound = () => {
    return (
        <>
            <div className={style.Content}>
                <h1>404</h1>
                <h3>PAGE NOT FOUND</h3>
                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            </div>
        </>
    );
};

export default NotFound;