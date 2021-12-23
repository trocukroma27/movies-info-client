import React, {useState} from 'react';
import {Container, Paper, InputBase, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const classes = useStyles();
    const history = useHistory();

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
        <div className={classes.container}>
        <div className={classes.background}>
            <Container maxWidth='lg'>
                <h1 className={classes.mainBannerTitle}>Ласкаво просимо!</h1>
                <h3 className={classes.mainBannerSubtitle}>Знайдіть фільм собі до душі</h3>
                <Paper className={classes.searchContainer}>
                    <InputBase className={classes.searchInput} onKeyPress={handleKeyPress} value={searchQuery} placeholder="Пошук фільму, серіалу..." onChange={(e) => setSearchQuery(e.target.value)} />
                    <Button className={classes.searchButton} onClick={handleSearch} aria-label="search">
                        Search
                    </Button>
                </Paper>
            </Container>
        </div>
        </div>
    )
}

export default Search