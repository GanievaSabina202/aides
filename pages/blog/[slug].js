import BlogRight from "../../features/Blog/components/BlogRight";
import { Container, Row, Col } from 'react-bootstrap'
import Input from "../../share/components/Input";
import style from '../../features/Blog/components/DataCard/DataCard.module.scss'
import BlogSlugCard from "../../features/Blog/components/BlogSlugCard";
const BlogSlug = ({ data }) => {
    return (
        <>

            <Container>
                <Row>
                    <Col lg={9}>
                        <BlogSlugCard data={data} />
                        <Input />
                    </Col>
                    <Col lg={3}>
                        <BlogRight />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`http://www.omdbapi.com/?t=${context.query.slug}&apikey=a407a7b3`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}
export default BlogSlug;