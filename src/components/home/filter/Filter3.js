import { styled } from '@mui/material/styles';
import { Stack, TextField } from '@mui/material';
// -------------------------------------------------------------
const LineStyle = styled('div')(({ theme }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#C6C6C6'
}));

const FilterTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
});
// -------------------------------------------------------------

export default function Filter3() {

    return (
        <>
            <FilterTitleStyle>Quantidade propostas recebidas</FilterTitleStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
                <TextField id="outlined-basic" label="Mínimo" variant="outlined" size="small" />
                <LineStyle />
                <TextField id="outlined-basic" label="Máximo" variant="outlined" size="small" />
            </Stack>
        </>
    )
}