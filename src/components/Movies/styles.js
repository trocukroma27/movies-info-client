import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridItem:{
        [theme.breakpoints.up(992.1)]:{
            flexGrow: "0",
            maxWidth: "20%",
            flexBasis: "20%",
        },
        [theme.breakpoints.down(992.1)]:{
            flexGrow: "0",
            maxWidth: "25%",
            flexBasis: "25%",
        },
        [theme.breakpoints.down(768.1)]:{
            flexGrow: "0",
            maxWidth: "33.333333%",
            flexBasis: "33.333333%",
        },
        [theme.breakpoints.down(560.1)]:{
            flexGrow: "0",
            maxWidth: "50%",
            flexBasis: "50%",
        },
        [theme.breakpoints.down(420.1)]:{
            flexGrow: "0",
            maxWidth: "100%",
            flexBasis: "100%",
            padding: "12px 30px !important"
        },
        [theme.breakpoints.down(320.1)]:{
            padding: "12px !important"
        },
    }
}))