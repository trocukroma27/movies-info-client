import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formContainer: {
        height: "90vh",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        width: "100%",
        maxWidth: "700px",
        padding: "40px",
        backgroundColor: "#292946"
    },
    title: {
        color: "#3f51b5",
        marginBottom: "20px",
        textAlign: "center"
    },
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        },
    },
    form: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    input: {
        "& .MuiTextField-root": {
            margin: "8px 0"
        },
        "& .MuiOutlinedInput-root": {
            '&:hover fieldset ': {
                borderColor: "#fff",
            },
            "& fieldset": {
                borderColor: "#fff",
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
            },
        },
        "& label": {
            color: "#fff",
        },
        "& .MuiInputBase-input": {
            color: "#fff",
        },
        "& .MuiButtonBase-root":{
            color: "#fff"
        }
    },
    select: {
        margin: "8px 0",
        "& .MuiSelect-select": {
            padding: "10.5px 14px",
        },
        "& .MuiButtonBase-root":{
            color: "#fff"
        }
    },
    radio: {
        color: "#fff"
    },
    submit: {
        marginTop: "8px"
    }
}));