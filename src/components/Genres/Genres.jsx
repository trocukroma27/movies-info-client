import React, {useEffect, useState} from 'react'
import { useHistory, useLocation, useRouteMatch, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Container, Menu, MenuItem, Button, Grid } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import useStyles from './styles';
import { getGenres, getMoviesByGenre } from '../../actions/movies';
import Movie from '../Movies/Movie/Movie';
import notFound from '../../images/notFound.png';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Genres = () => {
    const genres = useSelector((state) => state.genres);
    const moviesByGenre = useSelector((state) => state.moviesByGenre);
    const [anchorGenreMenu, setAnchorGenreMenu] = useState(null);
    const query = useQuery();
    const dispatch = useDispatch();
    const classes = useStyles();
    const match = useRouteMatch();
    const history = useHistory();
    const page = query.get('page') || 1;
    const genreID = match.params.id || '';
    const type = useSelector((state) => state.type);

    useEffect(() => {
        dispatch({type: "SET_TYPE", payload: {type: `/${match.params.type}`}});
    }, [match]);

    useEffect(() => {
        dispatch(getGenres(type));
    }, [type]);

    useEffect(() => {
        if(type && genreID && page){
            dispatch(getMoviesByGenre(type, page, genreID));
        }else{
            dispatch({type: 'FETCH_MOVIES_BY_GENRE', payload: {}});
        }

        window.scrollTo({top: 0, behavior: "smooth"});
    }, [type, genreID, page]);

    const handleClick = (genre) => {
        setAnchorGenreMenu(null);
        history.push(`${type}/genre/${genre.genre_id}`);
    }

    if(!moviesByGenre && genreID) return <div style={{width: "100%", height: "80vh", display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "32px", textAlign: 'center'}}><img style={{display: 'block', width: '50%', minWidth: '250px', maxWidth: '400px', height: 'auto', }} src={notFound} /><span>No genre with this id</span></div>;

    return (
        <Container maxWidth="lg">
            <Button className={classes.openMenuButton} aria-controls="genreMenu" aria-haspopup="true" onClick={(e) => setAnchorGenreMenu(e.currentTarget)}>Жанр <KeyboardArrowDownIcon /></Button>
            {genres?.length ? (<Menu id="genreMenu" className={classes.genresMenu} anchorEl={anchorGenreMenu} keepMounted open={Boolean(anchorGenreMenu)} classes={{paper: classes.menu}} onClose={() => setAnchorGenreMenu(null)}>
                {genres.map((genre) => (
                    <MenuItem className={classes.genreMenuItem} key={genre.genre_id} onClick={() => handleClick(genre)}>{genre.genre}</MenuItem>
                ))}
            </Menu>) : ('')}
            {moviesByGenre?.data?.length ? <Grid container alignItems="stretch" spacing={3}>
                {moviesByGenre.data.map((movie) => (
                <Grid item key={movie.movie_id} className={classes.gridItem}>
                    <Movie movie={movie} type={type} />
                </Grid>
            ))}
            </Grid> : ('')}
            {moviesByGenre?.data?.length ? <Pagination
                className={classes.pagination}
                count={moviesByGenre.total}
                page={Number(query.get('page')) || 1}
                color="primary"
                variant="outlined"
                renderItem={(item) => (
                    <PaginationItem 
                        className={classes.paginationItem} 
                        classes={{root: classes.paginationItemRoot, selected: classes.paginationItemSelected}} 
                        {...item} 
                        component={Link} 
                        to={`${type}/genre/${genreID}?page=${item.page}`} 
                    />
                )}
            /> : ('')} 
        </Container>
    )
}

export default Genres