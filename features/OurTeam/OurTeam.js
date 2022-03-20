import Teams from './components/Teams';
import style from './OurTeam.module.scss'
const OurTeam = () => {
    return (
        <>
            <div className={style.Wrapper}>
                <h1 className={style.Title}>Our Team</h1>
            </div>

            <div className={style.TeamAboutWrap}>
                <h1 className={style.AboutTitle}>MEET THE TEAM</h1>
                <div className={style.Hr}></div>
                <p className={style.Paragraph}>Lorem ipsum dolor sit amet Lorem Ipsum. Proin qual de suis erestopius liqueenean sollicituin, lorem quis bibendum auct or</p>
            </div>

            <Teams/>
        </>
    );
};

export default OurTeam;