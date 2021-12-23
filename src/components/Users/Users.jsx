import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Grid, Container} from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useLocation, Link } from 'react-router-dom';

import User from "./User/User";
import { getUsers, getRoles } from '../../actions/users';
import useStyles from './styles';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function Users() {
    const classes = useStyles();
    const users = useSelector((state) => state.users);
    const query = useQuery();
    const page = query.get('page') || 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(page){
            dispatch(getUsers(page));
            dispatch(getRoles());
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }, [])

    if(!users) return <div style={{minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center"}}><CircularProgress size="20%"/></div>;

    return (
        <Container maxWidth="lg" className={classes.container}>
        <div className={classes.gridContainer}>
            <Grid container alignItems="stretch" spacing={3}>
                {users.data.map((user) => (
                    <Grid item key={user.user_id} className={classes.gridItem}>
                        <User user={user} /> 
                    </Grid>
                ))}
            </Grid>
        </div>
        <Pagination
                className={classes.pagination}
                count={users.total}
                page={Number(query.get('page')) || 1}
                color="primary"
                variant="outlined"
                renderItem={(item) => (
                    <PaginationItem 
                        className={classes.paginationItem} 
                        classes={{root: classes.paginationItemRoot, selected: classes.paginationItemSelected}} 
                        {...item} 
                        component={Link} 
                        to={`/users?page=${item.page}`} 
                    />
                )}
            />
        </Container>
    )
}