import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { InputLabel, Stack, Select, MenuItem, FormControl } from '@mui/material';


// -------------------------------------------------------------

const FilterTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
});
// -------------------------------------------------------------

export default function Filter2() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <FilterTitleStyle>País de pesquisa</FilterTitleStyle>
            <Stack sx={{ mb: 2 }}>
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Todos</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        placeholder="sdfsdfsd"
                    >
                        <MenuItem value={10}>Todos países</MenuItem>
                        <MenuItem value={20}>Todos países</MenuItem>
                        <MenuItem value={30}>Todos países</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </>
    )
}