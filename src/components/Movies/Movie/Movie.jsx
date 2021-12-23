import React from 'react';
import { Card, CardMedia, CardContent, ButtonBase, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import noimage from '../../../images/noimage.svg';

const Movie = ({movie, type}) => {
    const history = useHistory();
    const classes = useStyles();

    let rating = movie.ratings?.length ? (Math.round(movie.ratings.reduce((sum, curr) => sum + curr.rating, 0) / movie.ratings.length * 10) / 10) : "NR";

    const getRatingColor = (rating) => {
        if(rating >= 7.5){
            return classes.green;
        } else if (rating >= 5){
            return classes.orange;
        } else{
            return classes.red;
        }
    }

    const getFormatedDate = (d) => {
        let date = new Date(d);

        let options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        };

        return date.toLocaleString("uk", options);
    }

    return (
        <Card className={classes.card}>
            <ButtonBase 
                className={classes.buttonBase}
                component="span"
                onClick={() => history.push(`${type}/${movie.movie_id}`)}
            >
                <CardMedia className={`${classes.moviePoster} ${movie.poster_url ? '' : classes.noimage}`} image={movie.poster_url ? movie.poster_url : noimage} />
            </ButtonBase> 
            <CardContent className={classes.content}>
                <div className={classes.contentTop}>
                    <Typography className={classes.title} component="h3">{movie.title}</Typography>
                    <Typography className={`${classes.rating} ${getRatingColor(rating)}`} component="span">{rating}</Typography>
                </div>
                <div>
                    <Typography className={classes.date} component="p">{getFormatedDate(movie.release_date)}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Movie