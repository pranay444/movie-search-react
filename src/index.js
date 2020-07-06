import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import SearchMovies from './searchMovie'
class Main extends React.Component {
    render() {
        return (
			<div className='container'>
            	<h1 className='title' > React Movie App </h1>
			    <SearchMovies/>
			</div>
        );
    }
}

ReactDOM.render( < Main / > , document.getElementById('root'));