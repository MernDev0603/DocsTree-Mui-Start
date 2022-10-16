import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl, Stack } from '@mui/material';
// -------------------------------------------------------------
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
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="5"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="5"
                        control={
                            <Radio
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 16 },
                                    color: '#17686E',
                                    '&.Mui-checked': {
                                        color: '#17686E',
                                    },
                                    '& .css-1l5uw3e-MuiButtonBase-root-MuiRadio-root': {
                                        padding: '5px'
                                    }
                                }}
                            />}
                        label={
                            <Stack direction="row">
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                            </Stack>
                        }
                    />
                    <FormControlLabel value="4"
                        control={
                            <Radio
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 16 },
                                    color: '#17686E',
                                    '&.Mui-checked': {
                                        color: '#17686E',
                                    }
                                }}
                            />
                        }
                        label={
                            <Stack direction="row">
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                            </Stack>
                        }
                    />
                    <FormControlLabel value="3"
                        control={<Radio
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 16 },
                                color: '#17686E',
                                '&.Mui-checked': {
                                    color: '#17686E',
                                }
                            }}
                        />} label={
                            <Stack direction="row">
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                            </Stack>
                        }
                    />
                    <FormControlLabel value="2"
                        control={<Radio
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 16 },
                                color: '#17686E',
                                '&.Mui-checked': {
                                    color: '#17686E',
                                }
                            }}
                        />}
                        label={
                            <Stack direction="row">
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                            </Stack>
                        }
                    />
                    <FormControlLabel value="1"
                        control={<Radio
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 16 },
                                color: '#17686E',
                                '&.Mui-checked': {
                                    color: '#17686E',
                                }
                            }}
                        />}
                        label={
                            <Stack direction="row">
                                <Icon icon="el:star" color="#17686e" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                                <Icon icon="bytesize:star" color="#c6c6c6" width="22" />
                            </Stack>
                        }
                    />
                </RadioGroup>
            </FormControl>
        </>
    )
}