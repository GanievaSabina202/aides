import { ListItem } from '@mantine/core';
import Buttons from '../../../../share/components/Buttons/Buttons';
import {
    Wrapper, ImgWrap, Img, Content, Title, Hr, Desc,
    SosialNet, SosialTitle, ListWrap, ListItems
} from './Card.styled';

const Card = ({ order, desc, title, img }) => {
    return (
        <Wrapper>
            <ImgWrap order={order}>
                <Img src={img} alt='img' />
            </ImgWrap>
            <Content>
                <Title>{title}</Title>
                <Hr></Hr>
                <Desc>{desc}</Desc>
                <Buttons BTtitle="Read More" />
            </Content>
     
        </Wrapper>
    );
};
export default Card;