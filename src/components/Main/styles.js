import { makeStyles } from '@material-ui/core/styles';
import mainPoster from '../../images/mainPoster.jpeg';

export default makeStyles((theme) => ({
    background:{
        background: "linear-gradient(to right, rgba(3, 37, 65, 0.9) 0%, rgba(3, 37, 65, 0.3) 100%)",
        paddingTop: "12%",
        height: "100%"
    },
    container: {
        height: "calc(100vh - 64px)",
        background: `0 0 / cover url(${mainPoster}) no-repeat`,
    },
    mainBannerTitle:{
        fontSize: '40px',
        [theme.breakpoints.down(480)]:{
            fontSize: "28px",  
        },
    },
    mainBannerSubtitle:{
        fontSize: '24px',
        marginBottom: '5%',
        [theme.breakpoints.down(480)]:{
            fontSize: "18px",  
        },
    },
    searchContainer:{
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderRadius: '30px',
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
}))