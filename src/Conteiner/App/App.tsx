import CssBaseline from '@mui/material/CssBaseline';
import Header from 'Conteiner/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles';
import Main from 'Conteiner/Main/Main';

const App =() =>{
    return(
        <StyledEngineProvider injectFirst>
        <CssBaseline>
        <Header />
        <Main/>
        </CssBaseline>
        </StyledEngineProvider>
    )
}
export default App