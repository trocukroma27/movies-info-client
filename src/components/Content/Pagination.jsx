import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {getMovies} from '../../actions/movies';
import useStyles from './styles';


export default function Paginate({page, path}) {
    const numberOfPages = useSelector((state) => state.movies.total);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(page){
            dispatch(getMovies(path, page));
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }, [page, path])

    useEffect(() => {
        dispatch(getMovies(path, page));
        window.scrollTo({top: 0, behavior: "smooth"});
    })
    
    if(!numberOfPages) return null;

    return (
        <Pagination
            className={classes.pagination}
            count={numberOfPages}
            page={Number(page) || 1}
            color="primary"
            variant="outlined"
            renderItem={(item) => (
                <PaginationItem 
                    className={classes.paginationItem} 
                    classes={{root: classes.paginationItemRoot, selected: classes.paginationItemSelected}} 
                    {...item} 
                    component={Link} 
                    to={`${path}?page=${item.page}`} 
                />
            )}
        />
    )
}