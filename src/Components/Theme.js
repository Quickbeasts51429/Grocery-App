
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const arcBlue='#0B72B9';
 const arcOrange='#FFBA60';

export default createMuiTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`,
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcOrange}`
        }
    },
    typography:{
        tab:{
             fontSize:"1rem",
            textDecoration:"none",
            fontWeight:"700",
        },
        estimate:{
            fontFamily:"Pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"#fff",
        }
    }
});