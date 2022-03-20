import React from 'react';
import style from './BlogSlugCard.module.scss'
const BlogSlugCard = ({ data }) => {
    return (
        <>
            <div className={style.Wrapper} key={data.omdbID}>
                <div className={style.ImgWrapper}>
                    <img src={data.Poster} />
                </div>
                <div className={style.ContentWrap}>
                    <h5>{data.Title}</h5>
                    <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu qui. Donec quam felis, ultricies nec,</p>
                </div>
            </div>
        </>
    );
};

export default BlogSlugCard;