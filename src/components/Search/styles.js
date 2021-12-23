import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    searchContainer:{
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderRadius: '30px',
        marginTop: '30px',
        marginBottom: '30px',
    },
    searchInput:{
        flex: '1',
        marginRight: '10px',    
    },
    searchButton:{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        background: 'linear-gradient(to right, #1ed5aa 0%, #0089b2 100%)',
        color: '#fff',
        textTransform: 'none',
        fontWeight: '700',
        margin: "0 -20px 0 0",
        borderRadius: '30px',
        fontSize: '16px',
        '&:hover':{
            color: '#032541',
        }
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