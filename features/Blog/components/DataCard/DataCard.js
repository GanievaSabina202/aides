import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import style from './DataCard.module.scss'
import { useRouter } from "next/router";

const DataCard = ({ key, srcC, title}) => {
    const router = useRouter();

    return (
        <div className={style.Wrapper} key={key}>
            <div className={style.ImgWrapper}
                onClick={() => router.push(`/blog/${title.Title}`)}
            >
                <img src={srcC} />
            </div>
            <div className={style.ContentWrap}>
                <h5>{title}</h5>
                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu qui. Donec quam felis, ultricies nec,</p>
            </div>
            <div className={style.InfoWrapper}>
                <div className={style.IconWrap}>
                    <div className={style.leftSec}>
                        <CalendarMonthIcon />
                        <span>May 28, 2018 </span>
                    </div>
                    <div className={style.rightSec}>
                        <ChatBubbleIcon />
                        <span>3 comments </span>
                    </div>
                </div>
                <div className={style.SosialWrap}>
                    <p className={style.SosialTitle}>SHARE: </p>
                    <ul className={style.listWrap}>
                        <li>Fb.</li>
                        <li>Tw.</li>
                        <li>Li.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DataCard;