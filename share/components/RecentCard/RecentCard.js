import React from 'react';
import style from './RecentCard.module.scss'
const RecentCard = ({ img, title, time }) => {

    return (
        <div className={style.Wrapper}>
            <div className={style.CardWrap}>
                <div className={style.imgWrap}>
                    <img src={img} className={style.img}/>
                </div>
                <div className={style.Content}>
                    <p>{title}</p>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default RecentCard;