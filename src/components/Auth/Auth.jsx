import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input.jsx';
import {signin, signup} from '../../actions/auth';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const error = useSelector((state) => state.error);
    const errorMessage = useSelector((state) => state.errorMessage);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup){
            dispatch(signup(formData, history));
        } else{
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleClose = () => {
        setOpenDialog(false);
        dispatch({type: 'SAVE_ERROR', payload: null});
    }

    if(error) {
        setOpenDialog(true);
        dispatch({type: 'SAVE_ERROR', payload: error.message});
        dispatch({type: 'ERROR', payload: null});
    };

    return(
        <Container className={classes.container} component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Зареєструватись' : 'Увійти'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="first_name" label="Ім'я" handleChange={handleChange} autoFocus />
                                    <Input name="last_name" label="Прізвище" handleChange={handleChange} />
                                    <Input name="username" label="Нікнейм" handleChange={handleChange} />
                                </>  
                        )}
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Пароль" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Повторіть пароль" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Зареєструватися' : 'Увійти'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Вже маєте акаунти? Увійти" : "Немаєте акаунта? Зареєструватися"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Dialog open={openDialog}>
                <DialogTitle>{errorMessage}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>OК</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default Auth;