import { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { Box, InputLabel, Stack, Select, MenuItem, Divider, FormControlLabel, FormGroup, FormControl, TextField, Checkbox } from '@mui/material';
// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%'
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    border: '1px solid #E2E4E5',
    borderRadius: '7px',
    padding: '10px'
}));

const InnerContainerStyle = styled('div')(({ theme }) => ({
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const LineStyle = styled('div')(({ theme }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#C6C6C6'
}));

const HeaderBTNStyle = styled('button')({
    color: '#17686E',
    border: '1px solid #17686E',
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: '10px'
});

const FilterTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
});

// -------------------------------------------------------------

export default function Filter4() {

    return (
        <>
            <FilterTitleStyle>Avaliação do Cliente</FilterTitleStyle>
        </>
    )
}