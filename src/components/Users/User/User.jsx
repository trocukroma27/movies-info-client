import React, {useState} from 'react';
import { Paper, Grid, Avatar, FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';

import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { setRoles } from '../../../actions/users';

const Movie = ({user}) => {
    const classes = useStyles();
    const roles = useSelector(state => state.roles)
    const [userRoles, setUserRoles] = useState(user.roles.map(role => role.role_id))
    const dispatch = useDispatch();

    const handleCheck = (e, isInputChecked) => {
        console.log(e.target.value)
        if (isInputChecked) {
            setUserRoles([...userRoles, Number(e.target.value)])
        } else {
            setUserRoles(userRoles.filter(role => role !== Number(e.target.value)))
        }
    }

    const save = () => {
        dispatch(setRoles(user.user_id, {roles: userRoles.join(",")}))
    }

    return (
        <Paper className={classes.card} elevation={3}>
            <Grid container alignItems="stretch" spacing={3}>
                <Grid item className={classes.avatarContainer} xs={6}>
                    <Avatar className={classes.avatar} alt={user.username}>{user.username.charAt(0)}</Avatar>
                    <h3>{user.username}</h3>
                    <h3 className={classes.name}>{user.first_name} {user.last_name}</h3>
                </Grid>
                <Grid item className={classes.roleContainer} xs={6}>
                    <FormGroup >
                        {roles && roles.map(role => (
                            <FormControlLabel disabled={role.role_id == 3} key={role.role_id} style={{color: "#fff"}} value={role.role_id} control={<Checkbox color="primary" defaultChecked={userRoles.includes(role.role_id)} className={classes.radio} onChange={handleCheck}/>} label={role.role} />
                        ))}
                    </FormGroup>
                    <Button onClick={save} fullWidth variant="contained" color="primary" style={{marginTop: '5px'}}>Зберегти</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Movie