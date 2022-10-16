import { useState } from 'react'
import { Icon } from '@iconify/react';
import useWindowSize from '../../hooks/useWindowSize'
import { styled } from '@mui/material/styles';
import { InputBase, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CardList from './content/CardList';
// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%'
}));

const SearchStyle = styled('div')(({ theme }) => ({
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    border: '0.5px solid #C6C6C6',
    borderRadius: '5px',
    padding: '5px',
    margin: '10px 0 30px 0'
}));

const ResultStyle = styled('div')(({ theme }) => ({
    width: '100%',
    backgroundColor: '#e2e4e541',
    padding: '5px 15px 5px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const ResultTextStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '16px'
});
// -------------------------------------------------------------

export default function Content() {
    const { width } = useWindowSize()
    const [open, setOpen] = useState(false)
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <RootStyle>
            <SearchStyle>
                <Icon icon="fluent:search-12-regular" color="#C6C6C6" width="20" />
                <InputBase
                    sx={{ ml: 2, flex: 1 }}
                    placeholder="Pesquisar"
                />
            </SearchStyle>

            <ResultStyle>
                <ResultTextStyle>50 resultados</ResultTextStyle>
                <FormControl size="small" sx={{ width: 200 }}>
                    <InputLabel id="demo-simple-select-label">Todos</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        placeholder="sdfsdfsd"
                    >
                        <MenuItem value={10}>Mais recentes</MenuItem>
                        <MenuItem value={20}>Mais recentes</MenuItem>
                        <MenuItem value={30}>Mais recentes</MenuItem>
                    </Select>
                </FormControl>
            </ResultStyle>

            <CardList />
        </RootStyle>
    )
}