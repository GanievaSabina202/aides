import Card from './components/Card/Card';
import style from './WhatWeDo.module.scss'
const WhatWeDo = () => {
    const desc = "Lorem ipsum dolor sit amet Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
    const title = "ENGAGING, PURPOSEFUL AND CREATIVE SOURCESESE"
    const img1 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Services-img-1.jpg"
    const img2 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Services-img-2.jpg"
    const img3 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Services-img-3.jpg"
    const img4 = "https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/05/Services-img-4.jpg"
    return (
        <>
            <div className={style.Wrapper}>
                <h1 className={style.Title}>What We Do</h1>
            </div>

            <Card
                img={img1}
                title={title}
                desc={desc}
            />
            <Card
                img={img2}
                title={title}
                desc={desc}
                order='true'
            />
            <Card
                img={img3}
                title={title}
                desc={desc}
            />
            <Card
                img={img4}
                title={title}
                desc={desc}
                order='true'
            />
        </>
    );
};

export default WhatWeDo;