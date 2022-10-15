import { styled } from '@mui/material/styles';

// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '30px 0',
    backgroundColor: '#E2E4E540'
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    padding: '0px 15px',
    margin: '0px auto',
    [theme.breakpoints.up('sm')]: {
        padding: '0px 30px',
    },
    [theme.breakpoints.up('md')]: {
        width: '80%',
        padding: '0px'
    }
}));

const BannerTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '100px',
    margin: 0
});

const BannerTextStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '16px'
});

const BannerBTNStyle = styled('button')({
    color: '#fff',
    backgroundColor: '#17686E',
    borderRadius: '5px',
    padding: '15px 10px',
    border: 'none'
});


// -------------------------------------------------------------

export default function Banner() {

    return (
        <RootStyle>
            <ContainerStyle>
                <BannerTitleStyle>Publicações</BannerTitleStyle>
                <BannerTextStyle>Cria uma publicação e encontre um pesquisador ideal.</BannerTextStyle>
                <BannerBTNStyle>Solicitar documento</BannerBTNStyle>
            </ContainerStyle>
        </RootStyle>
    )
}