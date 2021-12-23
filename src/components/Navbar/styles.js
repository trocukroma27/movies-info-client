import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navBar: {
        backgroundColor: "#292946",
    },
    navBarContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        [theme.breakpoints.down(900.1)]:{
            justifyContent: "space-between",
        }
    },
    logo: {
        fontWeight: "700",
        fontSize: "32px",
        background: 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    navBarToolbar:{
        padding: "0",
        flexGrow: "1",
        [theme.breakpoints.down(900.1)]:{
            flexGrow: "0",
        }
    },
    toolbarInner: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    openMenuButton:{
        padding: "10px 15px",
        color: "#fff",
        fontWeight: "700",
        '&:hover':{
            backgroundColor: "transparent",
        }
    },
    menu:{
        padding: "0",
    },
    menuItem:{
        padding: "10px 20px",
        minHeight: "auto",
        fontSize: "14px",
        color: "#292946",
        fontWeight: "700",
        textDecoration: "none",
        whiteSpace: "nowrap",
        '&:hover':{
            backgroundColor: "#d9d9d9",
        }
    },
    navBarButton:{
        color: "#fff",
    },
    drawer:{
        backgroundColor: "#292946",
    },
    drawerHeader:{
        display: "flex",
        justifyContent: "flex-start",
    },
    drawerButton:{
        color: "#fff",
    },
    mobileMenuItem:{
        margin: "10px auto", 
        color: "#81d4fa",
        textAlign: "center",
    },
    mobileMenuBtn: {
        color: "#81d4fa",
        fontWeight: 600,
        fontSize: "18px",
        textTransform: "none",
        '&:hover, &:active':{
            backgroundColor: "#1e1e34",
        }
    },
    mobileMenuInner:{
        padding: "0",
    },
    mobileMenuInnerItem:{
        padding: "10px 50px",
        color: "#fff",
        fontWeight: "700",
        textDecoration: "none",
        whiteSpace: "nowrap",
        '&:hover, &:active':{
            backgroundColor: "#1e1e34",
        }
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: "#fff",
        [theme.breakpoints.down(900.1)]: {
            margin: "10px 10px",
            width: 'auto',
            justifyContent: 'center',
        },
      },
      logout: {
        marginLeft: '20px',
      },
      signin: {
        margin: "5px 0",
        [theme.breakpoints.down(900.1)]: {
            margin: "10px 30px"
          },
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: '10px',
      },
      avatar: {
        color: "white",
        backgroundColor: "#617ADB",
      },
}));