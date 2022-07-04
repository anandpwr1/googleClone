import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Search from '../components/Search';

const googleLogo = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
const Home = () => {

    return (
        <div className='home'>
            <div className="home__header">
                {/* for links we will use react router */}
                <div className="home__headerLeft">
                    {/* link */}
                    <Link to="about">About</Link>
                    <Link to="store">Store</Link>
                </div>

                {/* for icon and avatar we will use  material ui*/}
                <div className="home__headerRight">
                    {/* link */}
                    <Link to="gmail">Gmail</Link>
                    <Link to="images">Images</Link>

                    {/* icon */}
                    <AppsIcon />
                    {/* avatar */}
                    <AccountCircleSharpIcon />
                </div>
            </div>

            <div className="home__body">
                <img src={googleLogo} alt="google logo" />
                <div className="home__inputContainer">
                    {/* Search */}
                    <Search />
                </div>

            </div>
        </div>
    )
}

export default Home
