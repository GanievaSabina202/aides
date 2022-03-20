import React from 'react';
import style from './InstaPost.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
const InstaPost = ({ InstaPost }) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.ImgWrapper}>
                <img src={InstaPost} />
                <div className={style.overlay}>
                    <InstagramIcon />
                </div>
            </div>
        </div>
    );
};

export default InstaPost;