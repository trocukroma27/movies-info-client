import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        height: "80vh",
        display: 'flex',
        alignItems: 'center'
    },
    paper: {
        margin: "0 auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "15px 25px"
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#3f51b5",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));