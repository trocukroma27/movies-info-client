import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridContainer: {
        paddingTop: '30px',
        paddingBottom: '30px',
        marginBottom: '20px',
        flexWrap: 'nowrap',
        alignItems: 'center',
        [theme.breakpoints.down(768)]:{
            flexDirection: 'column',
        },
    }, 
    movieEditBtns: {
        whiteSpace: "nowrap",
    },
    deleteBtn: {
        color: "#f44336",
    },
    poster: {
        width: "300px",
        minWidth: "300px",
        height: "auto",
        [theme.breakpoints.down(768)]:{
            marginBottom: '20px',
        },
        [theme.breakpoints.down(320)]:{
            width: "100%",
            height: 'auto',
            minWidth: "0",
        },
        '& > img':{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "15px",
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '40px',
        [theme.breakpoints.down(768)]:{
            marginLeft: '0',
        },
    },
    title: {
        marginBottom: "20px",
        color: '#8090ea',
        fontSize: "32px",
        fontWeight: "700",
        [theme.breakpoints.down(480)]:{
            fontSize: "24px",  
        },
    },
    year: {
        fontWeight: "400",
    },
    shortInfo:{
        marginBottom: '20px',
    },
    shortInfoItem:{
        '&:not(:last-child):after':{
            content: '" "',
            display: 'inline-block',
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            marginRight: "10px",
            marginLeft: "10px",
            marginBottom: "3px",
        }
    },
    genres: {
        '& > *':{
            margin: '4px',
            [theme.breakpoints.down(480)]:{
                height: '24px', 
            },
        },
    },
    voteContainer:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
    },
    voteAverage: {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8090ea',
        borderRadius: '50%',
        marginRight: "10px",
    },
    voteCount: {
        color: '#aaa',
        fontSize: '14px',
    },
    rating: {
        marginBottom: '20px',
        '& > label > span': {
            color: "#faaf00"
        }
    },
    ratingReadOnly: {
        marginBottom: '20px',
        '& > span > span > span': {
            color: "#faaf00"
        }
    },
    overviewTitle:{
        fontSize: "20px",
        marginBottom: "10px",
        [theme.breakpoints.down(480)]:{
            fontSize: "18px",  
        },
    },
    overview: {
        marginBottom: '20px', 
        [theme.breakpoints.down(480)]:{
            fontSize: "14px",  
        },
    },
    noimage:{
        backgroundSize: "50%",
    },
    videoTitle:{
        fontSize: "24px",
        marginBottom: "10px",
        [theme.breakpoints.down(480)]:{
            fontSize: "20px",  
        },
    },
    video:{
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto 20px',
        maxWidth: '920px',
        '&:before':{
            content: '""',
            display: 'block',
            paddingTop: '56.25%',
        },
        '& > iframe':{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '1', 
        }
    },
    commentsOuterContainer: {
        display: 'flex',
        marginBottom: "20px",
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    commentsInnerContainer: {
        maxHeight: '300px',
        width: '50%',
        overflowY: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginRight: '0',
            marginBottom: "20px"
        },
    },
    commentsTextAreaContainer: {
        width: '50%',
        marginLeft: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    commentItem: {
        marginBottom: "10px",
    },
    commentAuthor: {
        display: "flex",
        alignItems: "center",
        padding: "5px",
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: "18px",
        marginLeft: '10px',
    },
    avatar: {
        width: "32px",
        height: "32px",
        fontSize: "16px",
        color: "white",
        backgroundColor: "#796698",
    },
    comment: {
        backgroundColor: "#617ADB",
        borderRadius: '0 0 5px 5px',
        padding: "10px 10px 10px 47px",
        fontSize: "15px"
    },
    commentsTextArea: {
        backgroundColor: "#fff",
        borderRadius: "5px 5px 0 0"
    },
    sendCommentBtn: {
        '&:disabled': {
            backgroundColor: "#555",
            color: "#fff"
        }
    },
}))