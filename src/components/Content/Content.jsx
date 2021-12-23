import React, {useEffect} from 'react';
import Movies from '../Movies/Movies';
import Pagination from './Pagination';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styles';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function Content() {
    const query = useQuery();
    const dispatch = useDispatch();
    const page = query.get('page') || 1;
    const classes = useStyles();
    const match = useRouteMatch();
    const type = useSelector((state) => state.type);

    useEffect(() => {
        dispatch({type: "SET_TYPE", payload: {type: `/${match.url.split('/')[1]}`}})
    }, [match]);

    return (
        <div className={classes.content}>
            <Movies type={type}/>
            <Pagination path={`${type}`} page={page}/>
        </div>
    )
}