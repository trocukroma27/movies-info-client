import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        color: "#ffffff",
        backgroundColor: "#292946",
        borderRadius: "10px",
        padding: "10px"
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        color: "white",
        backgroundColor: "#617ADB",
    },
    name: {
        width: "100%",
        overflow: "hidden",
        whiteSpace: "pre",
        textOverflow: 'ellipsis',
        marginTop: "10px",
        textAlign: "center"
    },
    roleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    radio: {
        color: "#fff"
    },
}))