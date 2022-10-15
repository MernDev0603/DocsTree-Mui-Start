import { useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, IconButton, InputBase, useMediaQuery, Typography } from '@mui/material';


// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '30px 0',
    backgroundColor: '#E2E4E540'
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px',
    margin: '0px auto',
    [theme.breakpoints.up('sm')]: {
        padding: '0px 30px',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
        width: '80%',
        padding: '0px'
    }
}));

const InnerContainerStyle = styled('div')(({ theme }) => ({
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const MenuWrapperStyle = styled('div')(({ theme }) => ({
    display: 'flex',
}));

const HeaderBTNStyle = styled('button')({
    color: '#17686E',
    border: '1px solid #17686E',
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: '10px'
});

const MenuItemStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '18px',
    padding: '0 10px'
});
// -------------------------------------------------------------

export default function Content() {
    const { width } = useWindowSize()
    const [open, setOpen] = useState(false)

    const menuList1 = [
        { name: 'Como funciona' },
        { name: 'Seja pesquisador' },
        { name: 'Ajuda' }
    ]

    const menuList2 = [
        { name: 'Cadastre-se' },
        { name: 'Entrar' }
    ]

    return (
        <RootStyle>
            <ContainerStyle>
                <InnerContainerStyle>
                    <MenuWrapperStyle>
                        {menuList1.map((item, index) => (
                            <MenuItemStyle key={index}>{item.name}</MenuItemStyle>
                        ))}
                    </MenuWrapperStyle>
                    <MenuWrapperStyle>
                        {menuList2.map((item, index) => (
                            <MenuItemStyle key={index}>{item.name}</MenuItemStyle>
                        ))}
                    </MenuWrapperStyle>
                </InnerContainerStyle>
                <HeaderBTNStyle>
                    Buscar documento
                </HeaderBTNStyle>
            </ContainerStyle>
        </RootStyle>
    )
}