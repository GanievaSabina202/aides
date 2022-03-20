import React from 'react';
import Link from 'next/link';


import Categories from '../../../../share/components/Categories';
import InstaPost from '../../../../share/components/InstaPost';
import RecentCard from '../../../../share/components/RecentCard';
import SosialN from '../../../../share/components/SosialN';
import TagName from '../../../../share/components/TagName/TagName';

import style from './BlogRight.module.scss'
const BlogRight = () => {
    const img1 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Blog-singl-img-5-150x150.jpg"
    const title1 = "TEAMWORK ABILITY"
    const time1 = "May 29, 2018"

    const img2 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Blog-singl-img-6-550x550.jpg"
    const title2 = "URBAN STREETSTYLE"
    const time2 = "May 29, 2018"

    const img3 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Blog-singl-img-7-150x150.jpg"
    const title3 = "TYPO DESIGN"
    const time3 = "May 29, 2018"

    const InstaPost1 = "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/33788189_194418107865271_2037956780746604544_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=iKs9SRkNNwgAX_KPsbq&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8Jgpn_uGIdMCsT4bu4aXHq7t8JmVl36S-oSlcEsZtKrQ&oe=6237E716"
    const InstaPost2 = "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/33400292_2029908917268613_9142733587785711616_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=S3WswA5rnEEAX_UoXUh&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9abDtzaaAenTWwDRSIYd5G5qTWP8PZYlgjeYdH_UskOw&oe=62399539"
    const InstaPost3 = "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/33210246_198547450780051_441696944981540864_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=WZDxJujIyfoAX_zDVY4&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_E7leRgxO62fnYaUahmmlrG6hSVFUcYBkNdm1-0C6lVg&oe=62384423"
    const InstaPost4 = "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/33141415_2013918505524072_8524457729673134080_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=R8KAlk4GrWAAX96VZ8d&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-GHBTlskwEBfUrz1I42EV8qjbualO1yPWk248xsiHw1g&oe=62392580"
    const InstaPost5 = "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/32606097_2065935013662563_8028586803114016768_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=ZD9_KTXqx5cAX-3QDsi&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT84Asm1fGjGXtwuHW2kyWXhPkIkvKWrf80QSIHmi2kmOg&oe=6239869E"
    const InstaPost6 = "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/33038850_452642361833102_2924870486603071488_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=H9lsUodQu3IAX-tDthK&_nc_oc=AQmAz-IGlB3quw1maJh5bX9bCh20XsJLhg7IVnccAuZtNsRJaT3MeJLdgYtdeZX4kSg&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-hxV6GqQFtCTpCEpx_BfoB5pk1gq_XuRh6olyOb1vsWw&oe=6237F408"

    return (
        <div className={style.Wrapper}>
            <div className={style.RecentCardWrap}>
                <h5>RECENT POSTS</h5>
                <RecentCard img={img1} title={title1} time={time1} />
                <RecentCard img={img2} title={title2} time={time2} />
                <RecentCard img={img3} title={title3} time={time3} />
            </div>

            <div className={style.CategoriesWrapper}>
                <h4 className={style.AllTitle}>CATEGORIES</h4>
                <div className={style.Wrap}>
                    <Categories />
                </div>
            </div>

            <div className={style.InstaIcons}>
                <h4 className={style.AllTitle}>INSTAGRAM</h4>
                <div className={style.Wrap}>
                    <InstaPost InstaPost={InstaPost1} />
                    <InstaPost InstaPost={InstaPost2} />
                    <InstaPost InstaPost={InstaPost3} />
                    <InstaPost InstaPost={InstaPost4} />
                    <InstaPost InstaPost={InstaPost5} />
                    <InstaPost InstaPost={InstaPost6} />
                </div>
            </div>

            <div className={style.TagWrapper}>
                <h4 className={style.AllTitle}>TAG</h4>
                <div className={style.Wrap}>
                    <TagName />
                </div>
            </div>


            <div className={style.Banner}>
                <Link passHref href="https://www.linkedin.com">
                    <a>
                        <img src='https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Blog-sidebar-banner-300x202.jpg' />
                    </a>
                </Link>
            </div>

            <div className={style.sosialIcons}>
                <h4 className={style.AllTitle}>FOLLOW US</h4>
                <SosialN />
            </div>
        </div>
    );
};

export default BlogRight;