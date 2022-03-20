import { ButtonWrap } from './Buttons.styled';

const Buttons = ({ BTtitle, bg}) => {
    return (
        <ButtonWrap bg={bg}>
            {BTtitle}
        </ButtonWrap>
    );
};

export default Buttons;