import React from 'react';
import Pagination from '@mui/material/Pagination';
import style from './Pagination.module.scss'
const Paginations = ({ postsPerPage, page, handleChange }) => {
    return (
        <div className={style.Wrapper}>
            <Pagination
                count={postsPerPage}
                page={page}
                onChange={handleChange}
                shape="rounded" />
        </div>
    );
};

export default Paginations;