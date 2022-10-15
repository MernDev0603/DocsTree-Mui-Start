import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Filter1 from './filter/Filter1';
import Filter2 from './filter/Filter2';
import Filter3 from './filter/Filter3';
import Filter4 from './filter/Filter4';
import Filter5 from './filter/Filter5';
import Filter6 from './filter/Filter6';
import Filter7 from './filter/Filter7';


// -------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    width: '100%'
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    border: '1px solid #E2E4E5',
    borderRadius: '7px',
    padding: '10px'
}));
// -------------------------------------------------------------
const filterOne = ["Nascimento/Batismo", "Casamento", "Óbito", "Imigração", "Outros"]
const filterTwo = ["Iniciante", "Especialista", "Assessor"]
const filterThree = ["Digital", "Físico", "Apostilado"]

// -------------------------------------------------------------

export default function Filter() {

    return (
        <RootStyle>
            <ContainerStyle>
                <Filter1 filter={filterOne} />
                <Divider />

                <Filter2 />
                <Divider />

                <Filter3 />
                <Divider />

                <Filter4 />
                <Divider />

                <Filter5 />
                <Divider />

                <Filter6 filter={filterTwo} />
                <Divider />

                <Filter7 filter={filterThree} />
            </ContainerStyle>
        </RootStyle>
    )
}