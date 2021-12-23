import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Paper, InputBase, Button, Grid} from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useHistory, useLocation, Link } from 'react-router-dom';

import {search} from '../../actions/movies';
import useStyles from './styles';
import Movie from '../Movies/Movie/Movie';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const movies = useSelector((state) => state.search);
    const [searchQuery, setSearchQuery] = useState("");
    const query = useQuery();
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(query.get('query')){
            dispatch(search(query.get('query'), query.get('page') || 1));
        } else{
            dispatch({type: "SEARCH", payload: ""});
        }
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [query.get('query'), query.get('page')]);

    const handleSearch = () => {
        history.push(`/search?query=${searchQuery}`);
        setSearchQuery('');
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13 || e.charCode === 13) {
            handleSearch();
        }
    }

    return(
        <Container maxWidth='lg'>
            <Paper className={classes.searchContainer}>
                <InputBase className={classes.searchInput} onKeyPress={handleKeyPress} value={searchQuery} placeholder="Пошук фільму, серіалу..." onChange={(e) => setSearchQuery(e.target.value)} />
                <Button className={classes.searchButton} onClick={handleSearch} aria-label="search">
                    Search
                </Button>
            </Paper>
            {movies ? <Grid container alignItems="stretch" spacing={3}>
                {movies.data.map((movie) => (
                <Grid item key={movie.id} className={classes.gridItem}>
                    <Movie movie={movie} type={`/${movie.media_type}`} />
                </Grid>
            ))}
            </Grid> : (<div style={{width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700', textAlign: 'center'}}>Збігів не знайдено</div>)}
            {movies && <Pagination
                className={classes.pagination}
                count={movies.total_pages}
                page={Number(query.get('page')) || 1}
                color="primary"
                variant="outlined"
                renderItem={(item) => (
                    <PaginationItem 
                        className={classes.paginationItem} 
                        classes={{root: classes.paginationItemRoot, selected: classes.paginationItemSelected}} 
                        {...item} 
                        component={Link} 
                        to={`/search?query=${query.get('query')}&page=${item.page}`} 
                    />
                )}
            />} 
        </Container>
    )
}

export default Search