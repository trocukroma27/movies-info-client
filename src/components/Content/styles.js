import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        marginTop: "20px",
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
    }
}))
