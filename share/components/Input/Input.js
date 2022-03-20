import Buttons from '../Buttons/Buttons';
import style from './Input.module.scss';
const Input = () => {
    return (
        <>
            <div className={style.inputWrap}>
                <div className={style.group}>
                    <input type="text" required className={style.input} />
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    <label className={style.label}>Name</label>
                </div>
                <div className={style.group}>
                    <input type="text" required className={style.input} />
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    <label className={style.label}>subject</label>
                </div>

                <div className={style.group}>
                    <textarea type="text" placeholder='subject' className={style.textareaa} />
                </div>
                <Buttons BTtitle="Message Us" bg="true" />
            </div>

        </>
    );
};

export default Input;