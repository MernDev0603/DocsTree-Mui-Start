import { useState } from 'react'
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { Pagination, Box, Stack, InputBase, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CardItem from './CardItem';
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
const cardContent = [
    {
        id: 1,
        fullName: 'LUIGI D’ARPINO',
        time: '1min',
        proposals: 0,
        doucumentType: 'Nascimento/Batismo',
        researchCountry: 'Itália',
        level: "Iniciante",
        alternativeName: 'LUIGI DALPINO',
        Spouse: '--',
        familyLink: '--',
        documentForm: 'Digital',
        author: 'Guilherme Matheus'
    },
    {
        id: 1,
        fullName: 'LUIGI D’ARPINO',
        time: '1min',
        proposals: 0,
        doucumentType: 'Nascimento/Batismo',
        researchCountry: 'Itália',
        level: "Iniciante",
        alternativeName: 'LUIGI DALPINO',
        Spouse: '--',
        familyLink: '--',
        documentForm: 'Digital',
        author: 'Guilherme Matheus'
    },
    {
        id: 2,
        fullName: 'LUIGI D’ARPINO',
        time: '1min',
        proposals: 0,
        doucumentType: 'Nascimento/Batismo',
        researchCountry: 'Itália',
        level: "Iniciante",
        alternativeName: 'LUIGI DALPINO',
        Spouse: '--',
        familyLink: '--',
        documentForm: 'Digital',
        author: 'Guilherme Matheus'
    },
    {
        id: 3,
        fullName: 'LUIGI D’ARPINO',
        time: '1min',
        proposals: 0,
        doucumentType: 'Nascimento/Batismo',
        researchCountry: 'Itália',
        level: "Iniciante",
        alternativeName: 'LUIGI DALPINO',
        Spouse: '--',
        familyLink: '--',
        documentForm: 'Digital',
        author: 'Guilherme Matheus'
    },
    {
        id: 4,
        fullName: 'LUIGI D’ARPINO',
        time: '1min',
        proposals: 0,
        doucumentType: 'Nascimento/Batismo',
        researchCountry: 'Itália',
        level: "Iniciante",
        alternativeName: 'LUIGI DALPINO',
        Spouse: '--',
        familyLink: '--',
        documentForm: 'Digital',
        author: 'Guilherme Matheus'
    },
    {
        id: 5,
        fullName: 'LUIGI D’ARPINO',
        time: '1min',
        proposals: 0,
        doucumentType: 'Nascimento/Batismo',
        researchCountry: 'Itália',
        level: "Iniciante",
        alternativeName: 'LUIGI DALPINO',
        Spouse: '--',
        familyLink: '--',
        documentForm: 'Digital',
        author: 'Guilherme Matheus'
    }
]
// -------------------------------------------------------------

export default function CardList() {

    return (
        <RootStyle>
            {cardContent.map((card, index) => (
                <CardItem key={index} card={card} />
            ))}

            <Stack alignItems="center" sx={{ my: 5 }}>
                <Pagination count={10} />
            </Stack>
        </RootStyle>
    )
}