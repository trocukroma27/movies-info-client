import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        minHeight: "calc(100vh - 80px)",
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
    },
    gridContainer: {
        flexGrow: 1,
    },
    gridItem:{
        [theme.breakpoints.up(1200.1)]:{
            flexGrow: "0",
            maxWidth: "33.333333%",
            flexBasis: "33.333333%",
        },
        [theme.breakpoints.down(1200.1)]:{
            flexGrow: "0",
            maxWidth: "50%",
            flexBasis: "50%",
        },
        [theme.breakpoints.down(700.1)]:{
            flexGrow: "0",
            maxWidth: "100%",
            flexBasis: "100%",
        },
    },
    pagination:{
        margin: "20px 0",
        '& > ul':{
            justifyContent: "center",
        }
    }, 
    paginationItem:{
        '&:hover':{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        }
    },
    paginationItemRoot:{
        color: "#fff",
        borderColor: "#fff",
    },
    paginationItemSelected:{
        color: '#81d4fa !important',
        borderColor: "#81d4fa !important",
        transform: "scale(0.98)",
    },
}))