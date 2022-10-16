import { useState } from 'react'
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { Box, Stack, InputBase, FormControl, InputLabel, Select, MenuItem, Divider } from '@mui/material';
// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%',
    border: '1px solid #c6c6c6',
    borderRadius: '7px',
    padding: '20px 20px 10px 20px',
    margin: '10px 0'
}));

const TitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '18px',
    margin: '10px 0'
});

const TextStyle = styled('span')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '18px',
    marginLeft: '5px'
});

const InfoStyle = styled('div')(({ theme }) => ({
    width: '25%',
    backgroundColor: '#F1F1F1',
    borderRadius: '7px',
    padding: '3px',
    display: 'flex'
}));

const InfoTextStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '10px',
    padding: '0 5px',
    margin: 0
});

const InfoSpanStyle = styled('span')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '12px',
    marginLeft: '5px'
});

const MoreContainerStyle = styled('div')(({ theme }) => ({
    backgroundColor: '#E2E4E546',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '12px'
}));

const MoreTitleStyle = styled('p')({
    color: '#313131',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '13px',
    margin: 0
});

const InnerContainerStyle = styled('div')(({ theme }) => ({
    margin: '0 30px'
}));

const MakeProposalBTNStyle = styled('button')(({ theme }) => ({
    color: '#17686E',
    fontWeight: 600,
    fontSize: '14px',
    backgroundColor: '#fff',
    border: '1px solid #17686E',
    borderRadius: '5px',
    padding: '10px'
}));

// -------------------------------------------------------------

export default function CardItem({ card }) {

    return (
        <RootStyle>
            <TitleStyle>
                Nome completo:
                <TextStyle>{card.fullName}</TextStyle>
            </TitleStyle>
            <InfoStyle>
                <InfoTextStyle>Publicado há: {card.time}</InfoTextStyle>
                <InfoTextStyle>Propostas: {card.proposals}</InfoTextStyle>
            </InfoStyle>

            <Stack direction="row" justifyContent="space-between" sx={{ pr: '20px', mt: '10px' }}>
                <TitleStyle sx={{ fontSize: '14px' }}>
                    Tipo do documento:
                    <TextStyle sx={{ fontSize: '14px' }}>{card.doucumentType}</TextStyle>
                </TitleStyle>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <TitleStyle sx={{ fontSize: '14px' }}>
                        País de pesquisa:
                        <TextStyle sx={{ fontSize: '14px' }}>{card.researchCountry}</TextStyle>
                    </TitleStyle>
                    <Icon icon="twemoji:flag-italy" width="24" />
                </Stack>

                <TitleStyle sx={{ fontSize: '14px' }}>
                    Nível exigido:
                    <TextStyle sx={{ fontSize: '14px' }}>{card.level}</TextStyle>
                </TitleStyle>
            </Stack>

            <Divider />

            <MoreContainerStyle>
                <MoreTitleStyle>Mais informações:</MoreTitleStyle>
                <InnerContainerStyle>
                    <Stack direction="row" justifyContent="space-between" sx={{ my: '3px' }}>
                        <InfoTextStyle sx={{ fontSize: '12px' }}>
                            Nome alternativo:
                            <InfoSpanStyle>{card.alternativeName}</InfoSpanStyle>
                        </InfoTextStyle>

                        <InfoTextStyle sx={{ fontSize: '12px' }}>
                            Forma de recebimento do documento:
                            <InfoSpanStyle>{card.documentForm}</InfoSpanStyle>
                        </InfoTextStyle>
                    </Stack>

                    <InfoTextStyle sx={{ fontSize: '12px', my: '3px' }}>
                        Nome completo do cônjuge:
                        <InfoSpanStyle>{card.Spouse}</InfoSpanStyle>
                    </InfoTextStyle>

                    <InfoTextStyle sx={{ fontSize: '12px', my: '3px' }}>
                        Link do perfil do Family Search:
                        <InfoSpanStyle>{card.familyLink}</InfoSpanStyle>
                    </InfoTextStyle>
                </InnerContainerStyle>
            </MoreContainerStyle>

            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '10px' }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Icon icon="healthicons:ui-user-profile-outline" color="#E2E4E5" width="27" />
                    <TitleStyle sx={{ fontSize: '12px' }}>{card.author}</TitleStyle>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <InfoTextStyle>Ver mais detalhes</InfoTextStyle>
                    <MakeProposalBTNStyle>Fazer proposta</MakeProposalBTNStyle>
                </Stack>
            </Stack>

        </RootStyle>
    )
}