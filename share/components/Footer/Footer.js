import style from './Footer.module.scss';
import Link from 'next/link';
import SosialN from '../SosialN/index';
const Footer = () => {
    return (
        <footer>
            <div className={style.Wrapper}>
                <img alt='logo' src='https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/06/logo-kenozoik-footer-2.png' />

                <div className={style.LinksWrap}>
                    <div className={style.linkWrapper}>
                        <Link href="/our-team" >
                            <a className={style.linkhover}>ABOUT</a>
                        </Link>
                    </div>
                    <div className={style.linkWrapper}>
                        <Link href="/what-we-do" >
                            <a className={style.linkhover} >WORK</a>
                        </Link>
                    </div>
                    <div className={style.linkWrapper}>
                        <Link href="/" >
                            <a className={style.linkhover} >BLOG</a>
                        </Link>
                    </div>
                    <div className={style.linkWrapper}>
                        <Link href="/" >
                            <a className={style.linkhover} >PORTFOLIO</a>
                        </Link>
                    </div>
                    <div className={style.linkWrapper}>
                        <Link href="/" >
                            <a className={style.linkhover} >SHOP</a>
                        </Link>
                    </div>
                    <div className={style.linkWrapper}>
                        <Link href="/contact-us" >
                            <a className={style.linkhover} >CONTACT</a>
                        </Link>
                    </div>
                </div>

                <div className={style.Content}>
                    <div className={style.title}>
                        <h5> feel free to contact us, anytime, anywhere</h5>
                    </div>
                    <Link passHref href="https://www.linkedin.com">
                        <a target="_blank">kenozoik@qodeinteractive.com</a>
                    </Link>
                </div>
                <SosialN color='color' />

                <div className={style.copyright}>
                    <p>
                        © 2018
                        <Link passHref href="https://www.linkedin.com">
                            <a target="_blank"> Qode Interactive</a>
                        </Link>
                        , All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;