import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import {Avatar, Grid, Container, Chip, Typography, TextField, Button, IconButton} from "@material-ui/core";
import { Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { getMovie, setRating, changeRating, commentMovie, deleteMovie } from '../../actions/movies';
import notFound from '../../images/notFound.png';
import useStyles from './styles';


const MovieDetails = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const movie = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    const history = useHistory();
    const {type, id} = useParams();
    const classes = useStyles();
    const userRating = movie?.ratings?.length && user ? movie.ratings.filter((rating) => rating.user_id === user.result.user_id)[0]?.rating : 0;
    const [rateValue, setRateValue] = useState(userRating);
    const ratingAvarage = movie?.ratings?.length ? (Math.round(movie.ratings.reduce((sum, curr) => sum + curr.rating, 0) / movie.ratings.length * 10) / 10) : "NR";
    const [comment, setComment] = useState("");

    useEffect(() => {
        dispatch(getMovie(id, type));
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [type, id]);

    const editMovie = () => {
        history.push(`/edit/${id}`);
    }

    const deleteMov = () => {
        dispatch(deleteMovie(id));
        history.push(`/${type}/all`);
    }

    const formateDate = (d) => {
        let date = new Date(d);

        return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
    }

    const formateTime = (time) => {
        let hours = time.split(':')[0]
        let minutes = time.split(':')[1]
        if(hours === "00"){
            return minutes + 'm';
        } else {
            return `${hours}h ${minutes}m`;
        }
    }

    const rate = (e) => {
        setRateValue(e.target.value);

        if(!userRating){
            dispatch(setRating({movie_id: movie.movie_id, user_id: user.result.user_id, rating: Number(e.target.value)}));
        } else{
            let rating_id = movie.ratings.filter((rating) => rating.user_id === user.result.user_id)[0].rating_id;
            dispatch(changeRating({rating_id, rating: Number(e.target.value)}));
        }
    }

    const handleClick = async () => {
        dispatch(commentMovie(movie.movie_id, {user_id: user.result.user_id, comment_text: comment, post_date: Date()}));
        
        setComment('');
    };

    if(!movie) return <div style={{width: "100%", height: "80vh", display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "32px", textAlign: 'center'}}><img style={{display: 'block', width: '50%', minWidth: '250px', maxWidth: '400px', height: 'auto', }} src={notFound} /><span>No movie with this id</span></div>;

    return (
        <>
        <div style={{background: `0 0 / cover url(${movie.background}) no-repeat`}}>
        <div style={{background: "linear-gradient(to right, rgba(18, 17, 28, 1) 150px, rgba(18, 17, 28, 0.84) 100%)"}}>
        <Container maxWidth="lg">
            <Grid container className={classes.gridContainer}>
                <Grid item className={classes.poster}>
                    <img src={`${movie.poster_url}`}/>
                </Grid>
                <Grid item className={classes.content}>
                    <h3 className={classes.title}>
                        {movie.title} <span className={classes.year}>({movie.release_date.split('-')[0]})</span>
                        {user?.result?.roles.some(role => role.role === "Модератор") ? <span className={classes.movieEditBtns}>
                            <IconButton size="small" onClick={editMovie}><EditIcon color="primary" /></IconButton>
                            <IconButton size="small" onClick={deleteMov}><DeleteIcon className={classes.deleteBtn} /></IconButton>
                        </span> : ("")}
                    </h3>
                    <div className={classes.shortInfo}>
                        <span className={classes.shortInfoItem}>{formateDate(movie.release_date)}</span>
                        {movie?.genres?.length ? <span className={`${classes.genres} ${classes.shortInfoItem}`}>{movie.genres.map((genre) => (
                            <Chip key={genre['genre_id']} label={genre['genre']} onClick={() => history.push(`/${type}/genre/${genre['genre_id']}`)} />
                        ))}</span> : ('')}
                        {movie.duration && <span className={classes.shortInfoItem} style={{whiteSpace: 'nowrap'}}>{formateTime(movie.duration)}</span>}
                    </div>
                    <div className={classes.voteContainer}>
                        <div className={classes.voteAverage}>{ratingAvarage}</div>
                        <div>
                            <div className={classes.voteAverageLabel}>Оцінка користувачів</div>
                            <div className={classes.voteCount}>{movie.ratings.length}</div>
                        </div>
                    </div>
                    {user ? <Rating
                        max={10}
                        value={rateValue}
                        className={classes.rating}
                        onChange={(e) => rate(e)}
                    /> : <Rating
                        max={10}
                        precision={0.5}
                        value={ratingAvarage}
                        className={classes.ratingReadOnly}
                        readOnly
                    />}
                    {movie.description && <><h4 className={classes.overviewTitle}>Опис</h4>
                    <p className={classes.overview}>{movie.description}</p></>}
                </Grid>
            </Grid>
        </Container>
        </div>
        </div>
        <div>
        <Container maxWidth="lg">
            <h3 className={classes.videoTitle}>Відгуки</h3>
            <div className={classes.commentsOuterContainer}>
                {movie?.comments?.length ? <div className={classes.commentsInnerContainer}>
                    {movie.comments.map((c, i) => (
                        <Typography className={classes.commentItem} key={i} gutterBottom variant="subtitle1">
                            <div className={classes.commentAuthor}>
                                <Avatar className={classes.avatar} alt={c.user.username}>{c.user.username.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{c.user.username}</Typography>
                            </div>
                            <div className={classes.comment}>{c.comment_text}</div>
                        </Typography>
                    ))}
                </div> : <div style={{marginBottom: "20px"}}>Відгуків про цей фільм поки що немає.</div>}
                <div className={classes.commentsTextAreaContainer}>
                    <TextField 
                        className={classes.commentsTextArea}
                        
                        fullWidth
                        rows={6}
                        variant="filled"
                        label="Відгук"
                        multiline
                        disabled={!user}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button className={classes.sendCommentBtn} style={{ marginTop: '10px' }} fullWidth disabled={!comment || !user} variant="contained" color="primary" onClick={handleClick}>
                        Надіслати
                    </Button>
                </div>
            </div>
        </Container>
        </div>
        {movie.trailer_url ? <Container maxWidth='lg'>
            <h3 className={classes.videoTitle}>Трейлер</h3>
            <div className={classes.video}>
                <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${movie.trailer_url}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </Container> : ('')}
        </>
    )
}

export default MovieDetails