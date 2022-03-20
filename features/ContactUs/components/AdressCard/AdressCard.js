
import { Wrapper, Country, ListWrap, ListItems, IconWrap, ItemTitle } from './AdressCard.styled'
import { Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FolderIcon from '@mui/icons-material/Folder';
import AndroidIcon from '@mui/icons-material/Android';
const AdressCard = ({ CountryName, MailAddress, PhoneNumber, Folder}) => {
    return (
        <>

            <Grid xl={3}>
                <Wrapper>
                    <Country>{CountryName}</Country>
                    <ListWrap>
                        <ListItems>
                            <IconWrap>
                                <EmailIcon />
                            </IconWrap>
                            <ItemTitle>{MailAddress}</ItemTitle>
                        </ListItems>
                        <ListItems>
                            <IconWrap>
                                <AndroidIcon />
                            </IconWrap>
                            <ItemTitle>{PhoneNumber}</ItemTitle>
                        </ListItems>
                        <ListItems>
                            <IconWrap>
                                <FolderIcon />
                            </IconWrap>
                            <ItemTitle>{Folder}</ItemTitle>
                        </ListItems>
                    </ListWrap>
                </Wrapper>
            </Grid>
        </>
    );
};

export default AdressCard;