import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        height: '100%',
        color: "#ffffff",
        backgroundColor: "#292946",
        borderRadius: "10px 10px 0 0",
    },
    buttonBase:{
        display: "block",
    },
    moviePoster:{
        paddingTop: "150%",
        backgroundColor: "#dbdbdb",
    },
    noimage:{
        backgroundSize: "50%",
    },
    content:{
        padding: '16px !important',
    },
    contentTop: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    date: {
        fontSize: '14px !important',
        color: '#bbb',
    },
    title: {
        fontWeight: '700',
        marginRight: '10px',
    },
    rating:{
        display: 'block',
        minWidth: "40px",
        padding: "5px 0",
        marginRight: "-16px",
        fontWeight: "700",
        textAlign: 'center',
        backgroundColor: "#212138",
    },
    green: {
        color: '#b2ff59'
    },
    orange: {
        color: '#ff8f00'
    },
    red: {
        color: '#ff3d00'
    },
}))
