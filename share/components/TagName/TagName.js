import React from 'react';
import Link from 'next/link';
import style from './TagName.module.scss'
const TagName = () => {
    return (
        <>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Advertising</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Art</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Branding</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Client</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Design</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Digital</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Innovation</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Marketing</a>
            </Link>

            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>News</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Photography</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Technology</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Travel</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Trend</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Vintage</a>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <a  className={style.Links}>Viral</a>
            </Link>

        </>
    );
};

export default TagName;