import React from 'react';
import style from './BlogHeader.module.scss'
const BlogHeader = () => {
    return (
        <>
            <div className={style.Wrapper}>
                <h1 className={style.Title}>BLOG STANDARD</h1>
            </div>
        </>
    );
};

export default BlogHeader;