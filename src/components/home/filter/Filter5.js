import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// -------------------------------------------------------------
const FilterTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
});
// -------------------------------------------------------------

export default function Filter5() {
    const [value, setValue] = useState(null);

    return (
        <>
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
        </>
    )
}