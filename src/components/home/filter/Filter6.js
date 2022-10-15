import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Stack, FormControlLabel, FormGroup, Checkbox } from '@mui/material';
// -------------------------------------------------------------
const FilterTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
});
// -------------------------------------------------------------

export default function Filter6({ filter }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <FilterTitleStyle>Nível exigido</FilterTitleStyle>
            <Stack>
                <FormGroup>
                    {filter.map((item, index) => (
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
        </>
    )
}