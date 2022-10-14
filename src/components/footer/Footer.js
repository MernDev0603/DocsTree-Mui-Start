import { useState } from 'react'
import footerLogo from '../../assets/image/footer-logo.png'
import useWindowSize from '../../hooks/useWindowSize'
import { styled, useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Box, Stack } from '@mui/material';


// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '20px 0',
    backgroundColor: '#313131',
    position: 'relative'
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'flex-end',
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

const InnerContainerStyle = styled('div')(({ theme }) => ({
    width: '85%',
    margin: 'auto',
    padding: '35px 0'
}));

const FooterTextWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}));

const MenuItemStyle = styled('p')({
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '12px',
});

const LeftBoxStyle = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}));

const RightBoxStyle = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}));


// -------------------------------------------------------------
const options = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' }
];
// -------------------------------------------------------------

export default function Footer() {
    const { width } = useWindowSize()
    const [val, setVal] = useState('latest')

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    return (
        <RootStyle>
            <ContainerStyle>
                <TextField select size="small" value={val} onChange={handleChange}>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </ContainerStyle>
            <ContainerStyle>
                <InnerContainerStyle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box component="img" src={footerLogo} alt="footer-logo" />
                            <MenuItemStyle>All Rights Reserved</MenuItemStyle>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Box>
                                <MenuItemStyle>Links</MenuItemStyle>
                                <MenuItemStyle>Buscar documento</MenuItemStyle>
                                <MenuItemStyle>Ser pesquisador</MenuItemStyle>
                                <MenuItemStyle>Blog</MenuItemStyle>
                                <MenuItemStyle>Sobre</MenuItemStyle>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Box>
                                <MenuItemStyle>Empresa</MenuItemStyle>
                                <MenuItemStyle>Termos e Condições</MenuItemStyle>
                                <MenuItemStyle>Privacidade</MenuItemStyle>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Box>
                                <MenuItemStyle>Fale conosco</MenuItemStyle>
                                <MenuItemStyle>email@teste.com</MenuItemStyle>
                            </Box>
                        </Grid>
                    </Grid>
                </InnerContainerStyle>
            </ContainerStyle>
            <ContainerStyle>
                <FooterTextWrapper>
                    <MenuItemStyle>© 2022 DocsTree. All rights reserved</MenuItemStyle>
                </FooterTextWrapper>
            </ContainerStyle>
            <LeftBoxStyle />
            <RightBoxStyle />
        </RootStyle>
    )
}