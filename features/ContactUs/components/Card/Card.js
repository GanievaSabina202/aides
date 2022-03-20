import Buttons from '../../../../share/components/Buttons/Buttons';
import style from './Card.module.scss'
const Card = () => {
    return (
        <>
            <div className={style.ContactAboutWrap}>
                <h1 className={style.ContactTitle}>GET IN TOUCH WITH US</h1>
                <div className={style.Hr}></div>
                <p className={style.Paragraph}>
                    Lorem ipsum dolor sit amet Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenaean sollicitudin, lorem quis bibendum auct or, elit consequat ipsum, nec sagittis sem nibhi. vulsputate cursus a sit amet mauris. Morbi accumsan.
                </p>
                <div className={style.SosialNet}>
                    <h5 className={style.SosialTitle}>FOLLOW US:</h5>
                    <ul className={style.ListWrap}>
                        <li className={style.ListItems}>Fb.</li>
                        <li className={style.ListItems}>Tw.</li>
                        <li className={style.ListItems}>Li.</li>
                    </ul>
                </div>
            </div>


        </>
    );
};

export default Card;