import { useRouter } from "next/router";
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Paginations from "../../share/components/Pagination";
import BlogHeader from "../../features/Blog/components/BlogHeader";
import BlogRight from "../../features/Blog/components/BlogRight";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import style from '../../features/Blog/components/DataCard/DataCard.module.scss'

function BlogCard({ data }) {
    let DataWrap = data.Search

    const [page, setPage] = useState(1);
    const postsPerPage = Math.ceil(DataWrap && DataWrap.length / 4);
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = DataWrap && DataWrap.slice(indexOfFirstPost, indexOfLastPost)
    const handleChange = (event, value) => {
        setPage(value);
    };

    const router = useRouter();
    return (
        <>
            <BlogHeader />
            <Container>
                <Row>
                    <Col lg={9}>
                        {currentPosts.map((i) => (
                            <div className={style.Wrapper} key={i.omdbID}>
                                <div className={style.ImgWrapper}
                                    onClick={() => router.push(`/blog/${i.Title}`)}
                                >
                                    <img src={i.Poster} />
                                </div>
                                <div className={style.ContentWrap}>
                                    <h5>{i.Title}</h5>
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
                        ))}
                        <Paginations postsPerPage={postsPerPage} page={page} handleChange={handleChange} />
                    </Col>
                    <Col lg={3}>
                        <BlogRight />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://www.omdbapi.com/?s=movie&apikey=a407a7b3')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default BlogCard