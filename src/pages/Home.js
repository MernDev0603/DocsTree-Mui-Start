import useWindowSize from '../hooks/useWindowSize';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
// components
import Banner from '../components/home/Banner';
import Filter from '../components/home/Filter';
import Content from '../components/home/Content';

// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%'
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    margin: '10px auto',
    [theme.breakpoints.up('sm')]: {
        // padding: '30px',
    },
    [theme.breakpoints.up('md')]: {
        width: '80%',
        // padding: '10px'
    }
}));
// -------------------------------------------------------------

export default function Home() {
    const { width } = useWindowSize()

    return (
        <RootStyle>
            <Banner />
            <ContainerStyle>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Filter />
                    </Grid>

                    <Grid item xs={12} sm={6} md={9}>
                        <Content />
                    </Grid>
                </Grid>
            </ContainerStyle>
        </RootStyle>
    )
}