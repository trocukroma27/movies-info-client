import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    openMenuButton:{
        margin: '10px 0 20px',
        padding: "10px 15px",
        color: "#fff",
        fontWeight: "700",
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }
    },
    genresMenu: {
        overflowY: 'auto',
        maxHeight: '400px',
    },
    menu:{
        '&::-webkit-scrollbar':{
            width: '5px',
        },
        '&::-webkit-scrollbar-track':{
            borderRadius: '5px',
            backgroundColor: 'rgba(187, 187, 187, 0.4)',
        },
        '&::-webkit-scrollbar-thumb':{
            backgroundColor: '#aaa',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        '&::-webkit-scrollbar-thumb:active':{
            backgroundColor: '#aaa',
        },
    },
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