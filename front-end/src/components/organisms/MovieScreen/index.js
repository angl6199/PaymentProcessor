//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import Loading from '../../molecules/Loading/index'

//Imágenes
import b1 from './../../../assets/img/b1.jpg'
import b2 from './../../../assets/img/b2.jpg'
import b3 from './../../../assets/img/b3.jpg'
import b4 from './../../../assets/img/b4.jpg'
import b5 from './../../../assets/img/b5.jpg'
import b6 from './../../../assets/img/b6.jpg'
import b7 from './../../../assets/img/b7.jpg'
import b8 from './../../../assets/img/b8.jpg'
import b9 from './../../../assets/img/b9.jpg'
import b10 from './../../../assets/img/b10.jpg'


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HomeMovies({id}){
    const [background, setbackground] = useState(false)
    const [movies, setMovies] = useState();
    const [movie, setMovie] = useState();
    const [ready, setReady] = useState(false);
    const [ready2, setReady2] = useState(false);
    

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    background == false && handleBack();

    function handleBack() {
        id == '1' && setbackground(b1);
        id == '2' && setbackground(b2);
        id == '3' && setbackground(b3);
        id == '4' && setbackground(b4);
        id == '5' && setbackground(b5);
        id == '6' && setbackground(b6);
        id == '7' && setbackground(b7);
        id == '8' && setbackground(b8);
        id == '9' && setbackground(b9);
        id == '10' && setbackground(b10); 
    }

    function handleMovie(data) {
        setMovies(data)
        data.forEach(movie => {
            if (movie.identificador == id) {
                setMovie(movie)
                setReady(true)
                setTimeout(() => {
                    setReady2(true)
                }, 1000);
            }
        });
    }



    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://mlwebapi.herokuapp.com/movies/all')
            .then(response => handleMovie(response.data))
            .catch((error) => console.log(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
            { ready &&
            <>
            <div style={{'backgroundImage': `url(${background})`}} className={`screensaver-layout`}></div>
            <div className={`d-flex flex-column w-90-2 z`}>
                <p className={`a-bold-white xl ml-12`}>{movie.titulo}</p>
                <div className={`d-flex ml-12`}>
                    <div className={`d-flex flex-column mxw-50`}>
                        <p className={`a-regular-white-dark h3 special-text`}>{movie.coleccion}</p>
                        <p className={`a-regular-white-dark text-big special-text`}>{movie.categoria}</p>
                        <p className={`a-regular-white-dark text-big text-align-justify`}>{movie.sinopsis}</p>
                    </div>
                    <div className={`video-container`}>
                        <iframe width="560" height="315" src={`${movie.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                </div>
            </div>
            </>
            }
            <>
            <Loading hide={ready2}></Loading>
            </>
            
        </>
    )
}