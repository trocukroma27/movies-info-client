import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Genres from './components/Genres/Genres.jsx';
import Content from './components/Content/Content.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails.jsx';
import Auth from './components/Auth/Auth.jsx';
import EditMovie from './components/EditMovie/EditMovie.jsx';
import Users from './components/Users/Users.jsx'
import Search from './components/Search/Search';
import Main from './components/Main/Main';

import notFound from './images/notFound.png';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path={["/:type(movie|tv)/genres", "/:type(movie|tv)/genre/:id"]} component={Genres}/>
                <Route exact path="/:type(movie|tv)/all" component={Content}/>
                <Route exact path="/:type(movie|tv)/:id(\d+)" component={MovieDetails}/>
                <Route exact path={["/edit/:id", "/create"]} component={EditMovie} />
                <Route exact path="/auth" component={Auth} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/search" component={Search} />
                <Route 
                render={() => <div style={{width: "100%", height: "80vh", display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "32px", textAlign: 'center'}}>
                    <img style={{display: 'block', width: '50%', minWidth: '250px', maxWidth: '400px', height: 'auto', }} src={notFound} />
                    <span>Page not found</span>
                </div>}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;