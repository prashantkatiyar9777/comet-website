import { createMuiTheme } from '@material-ui/core/styles';

const primaryTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#0D81FD',
            light: '#3D9AFD',
            dark: '#0A67CA'
        },
        secondary: {
            main: '#2BDE6A',
            light: '#55E588',
            dark: '#22B255'
        },
        warning: {
            main: '#FFC207',
            light: '#FFCE39',
            dark: '#CC9B06'
        }
    },
    typography: {
        fontFamily: "Poppins",
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
});

export default primaryTheme;