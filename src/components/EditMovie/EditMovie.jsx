import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container, TextField, Button, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormGroup, Checkbox } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { getGenres, createMovie, updateMovie } from '../../actions/movies';
import useStyles from './styles';

export default function EditMovie() {
    const {id} = useParams();
    const movie = useSelector((state) => id ? state.movie : {});
    const allGenres = useSelector((state) => state.genres)
    const [title, setTitle] = useState(movie?.title);
    const [description, setDescription] = useState(movie?.description);
    const [duration, setDuration] = useState(movie?.duration);
    const [release_date, setReleaseDate] = useState(movie?.release_date ? movie.release_date : moment().format("YYYY-MM-DD"));
    const [type, setType] = useState(movie?.type);
    const [poster_url, setPosterURL] = useState(movie?.poster_url);
    const [background, setBackground] = useState(movie?.background);
    const [trailer_url, setTrailerURL] = useState(movie?.trailer_url);
    const [genres, setGenres] = useState(movie?.genres ? movie?.genres.map(genre => genre.genre_id) : []);
    console.log(movie);

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres(type));
    }, []);

    const handleCheck = (e, isInputChecked) => {
        if (isInputChecked) {
            setGenres([...genres, Number(e.target.value)])
        } else {
            setGenres(genres.filter(genre => genre !== Number(e.target.value)))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(id){
            dispatch(updateMovie(id, {title, release_date, description, duration, type, poster_url, background, trailer_url, genres: genres.join(",")}));
            history.push(`/${type}/${id}`);
        } else {
            dispatch(createMovie({title, release_date, description, duration, type, poster_url, background, trailer_url, genres: genres.join(",")}));
            history.push(`/${type}/all`);
        }
    }
    
    return (
        <Container maxWidth="lg">
            <div className={classes.formContainer}>
                <Paper className={classes.paper} elevation={6}>
                    {id ? <h2 className={classes.title}>Редагувати</h2> : <h2 className={classes.title}>Створити</h2>}
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <TextField name="title" style={{margin: "8px 0"}} size="small" className={classes.input} variant="outlined" fullWidth label="Назва" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <TextField name="description" style={{margin: "8px 0"}} multiline rows="3" size="small" className={classes.input} variant="outlined" fullWidth label="Опис" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <TextField name="duration" style={{margin: "8px 0"}} size="small" className={classes.input} variant="outlined" fullWidth label="Тривалість" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Дата виходу"
                                value={release_date}
                                onChange={(newValue) => {
                                    setReleaseDate(moment(newValue).format("YYYY-MM-DD"));
                                }}
                                renderInput={(params) => <TextField {...params} name="duration" style={{margin: "8px 0"}} size="small" className={classes.input} variant="outlined" fullWidth/>}
                            />
                        </LocalizationProvider>
                        <FormControl style={{margin: "8px 0"}} component="fieldset">
                            <FormLabel style={{color: "#fff"}} component="legend">Тип</FormLabel>
                            <RadioGroup
                                defaultValue={type}
                                name="type"
                                onChange={(e) => setType(e.target.value)}
                            >
                                <FormControlLabel style={{color: "#fff"}} value="movie" control={<Radio color="primary" className={classes.radio} />} label="Фільм" />
                                <FormControlLabel style={{color: "#fff"}} value="tv_series" control={<Radio color="primary" className={classes.radio} />} label="Серіал" />
                            </RadioGroup>
                        </FormControl>
                        <TextField name="poster" style={{margin: "8px 0"}} size="small" className={classes.input} variant="outlined" fullWidth label="Постер" value={poster_url} onChange={(e) => setPosterURL(e.target.value)}/>
                        <TextField name="background" style={{margin: "8px 0"}} size="small" className={classes.input} variant="outlined" fullWidth label="Фонове зображення" value={background} onChange={(e) => setBackground(e.target.value)}/>
                        <TextField name="trailer" style={{margin: "8px 0"}} size="small" className={classes.input} variant="outlined" fullWidth label="YouTube ключ трейлера" value={trailer_url} onChange={(e) => setTrailerURL(e.target.value)}/>
                        <div style={{height: "100px", overflow: "auto"}}>
                            <FormGroup >
                                {allGenres && allGenres.map(genre => (
                                    <FormControlLabel key={genre.genre_id} style={{color: "#fff"}} value={genre.genre_id} control={<Checkbox color="primary" defaultChecked={genres ? genres.includes(genre.genre_id) : false} className={classes.radio} onChange={handleCheck}/>} label={genre.genre} />
                                ))}
                            </FormGroup>
                        </div>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {id ? 'Зберегти' : 'Створити'}
                        </Button>
                    </form>
                </Paper>
            </div>
        </Container>
    )
}
