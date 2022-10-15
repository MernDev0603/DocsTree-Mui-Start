import { useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { styled, useTheme } from '@mui/material/styles';
import { Box, InputLabel, Stack, Select, MenuItem, Divider, FormControlLabel, FormGroup, FormControl, TextField, Checkbox } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
const filter1 = ["Nascimento/Batismo", "Casamento", "Óbito", "Imigração", "Outros"]
const filter2 = ["Iniciante", "Especialista", "Assessor"]
const filter3 = ["Digital", "Físico", "Apostilado"]

// -------------------------------------------------------------

export default function Filter() {
    const [age, setAge] = useState('');
    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <RootStyle>
            <ContainerStyle>
                <FilterTitleStyle>Tipo de documento</FilterTitleStyle>
                <Stack>
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
                </Stack>


                <Divider />


                <FilterTitleStyle>País de pesquisa</FilterTitleStyle>
                <Stack sx={{ mb: 2 }}>
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
                </Stack>


                <Divider />

                <FilterTitleStyle>Quantidade propostas recebidas</FilterTitleStyle>
                <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
                    <TextField id="outlined-basic" label="Mínimo" variant="outlined" size="small" />
                    <LineStyle />
                    <TextField id="outlined-basic" label="Máximo" variant="outlined" size="small" />
                </Stack>

                <Divider />

                <FilterTitleStyle>Avaliação do Cliente</FilterTitleStyle>

                <Divider />

                <FilterTitleStyle>Data de Publicação</FilterTitleStyle>
                <Stack sx={{ mb: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} size="small" />}
                        />
                    </LocalizationProvider>
                </Stack>

                <Divider />

                <FilterTitleStyle>Nível exigido</FilterTitleStyle>
                <Stack>
                    <FormGroup>
                        {filter2.map((item, index) => (
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
                </Stack>

                <Divider />

                <FilterTitleStyle>Forma de recebimento do documento</FilterTitleStyle>
                <Stack>
                    <FormGroup>
                        {filter3.map((item, index) => (
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
                </Stack>

            </ContainerStyle>
        </RootStyle>
    )
}