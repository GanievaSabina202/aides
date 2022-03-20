import React from 'react';
import Link from 'next/link';
import style from './Categories.module.scss'

const Categories = () => {
    return (
        <>
            <Link passHref href="https://www.linkedin.com">
                <a className={style.Links}>Albums (3)</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a className={style.Links}>Events (1)</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a className={style.Links}>Festivals (3)</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a className={style.Links}>Music (2)</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a className={style.Links}>Photography (16)</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a className={style.Links}>Videos (6)</a>
            </Link>

        </>
    );
};

export default Categories;