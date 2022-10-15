import { useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { styled, useTheme } from '@mui/material/styles';
import { Box, InputLabel, Select, MenuItem, Divider, FormControlLabel, FormGroup, FormControl } from '@mui/material';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';


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

const FilterTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
});
// -------------------------------------------------------------
const filter1 = ["Nascimento/Batismo", "Casamento", "Óbito", "Imigração", "Outros"]
const filter2 = ["Iniciante", "Casamento", "Especialista", "Assessor"]
const filter3 = ["Digital", "Casamento", "Físico", "Apostilado"]

// -------------------------------------------------------------

export default function Filter() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <RootStyle>
            <ContainerStyle>
                <FilterTitleStyle>Tipo de documento</FilterTitleStyle>
                <FormGroup>
                    {filter1.map((item, index) => (
                        <FormControlLabel key={index}
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 16 },
                                        color: '#17686E',
                                        '&.Mui-checked': {
                                            color: '#17686E',
                                        }
                                    }}
                                />
                            }
                            label={item} size="small"
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
                        />
                    ))}
                </FormGroup>

                <Divider />

                <FilterTitleStyle>País de pesquisa</FilterTitleStyle>
                <FormControl fullWidth size="small">
                    {/* <InputLabel id="demo-simple-select-label">Todos países</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        placeholder="sdfsdfsd"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <Divider />

                <FilterTitleStyle>Quantidade propostas recebidas</FilterTitleStyle>
                <Divider />
                <FilterTitleStyle>Avaliação do Cliente</FilterTitleStyle>
                <Divider />
                <FilterTitleStyle>Data de Publicação</FilterTitleStyle>
                <Divider />
                <FilterTitleStyle>Nível exigido</FilterTitleStyle>
                <Divider />
                <FilterTitleStyle>Forma de recebimento do documento</FilterTitleStyle>
            </ContainerStyle>
        </RootStyle>
    )
}