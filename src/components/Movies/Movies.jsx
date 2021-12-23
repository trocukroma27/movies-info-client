import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Container} from '@material-ui/core';

import useStyles from './styles';
import Movie from './Movie/Movie';


export default function Movies({type}) {
    const movies = useSelector((state) => state.movies.data);
    const classes = useStyles();

    if(!movies) return <div style={{minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center"}}><CircularProgress size="20%"/></div>;

    return (
        <Container maxWidth="lg">
        <Grid container alignItems="stretch" spacing={3}>
            {movies.map((movie) => (
                <Grid item key={movie.movie_id} className={classes.gridItem}>
                    <Movie movie={movie} type={type} /> 
                </Grid>
            ))}
        </Grid>
        </Container>
    )
}