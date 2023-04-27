import React from 'react';
import './App.css';
import CarCard from './CarCard';

import BannerImage from './car-dealer-g4742aa766_1920.jpg';
import LogoImage from './images-for-design/mylogo.png';

import SearchIcon from './images-for-design/searchIcon2.png';
//SearchIcon Image by <a href="https://pixabay.com/users/andreas160578-2383079/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2138927">andreas160578</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2138927">Pixabay</a>


const carImagesLocalPath=[
    {
        name: "2013 Nissan Serena Hybrid",
        engine: "2000cc, Hybrid",
        odometer: "126,137km",
        price: "$11,499.99",
        src: "./products-images/2CC-c4541ded-3149-4eb8-9ba2-7369fac6755c-1-1.jpg",
    },
    {
        name: "2010 Toyota Prius Hybrid",
        engine: "1800cc, Hybrid",
        odometer: "117,739km",
        price: "$11,199.99",
        src: "./products-images/2CC-1245b767-01e0-4be9-b0a6-6a13e440e64b-1.jpg",

    },
    {
        name: "2009 Honda Insight Hybrid",
        engine: "1300cc, Hybrid",
        odometer: "150,000km",
        price: "$7,899.99",
        src: "./products-images/2CC-c1e7cb0f-61af-4ea9-958f-db0dfde2f37e-1-1.jpg"
    }
]

const App = () => {
    return (
        <div className="app">
            <div className="topBanner">
                <table className="tableStyle">
                <tr><td className="divInTopBanner"><a className="menuItem" href="./">Home</a></td>
                <td className="divInTopBanner"><a className="menuItem" href="./">About</a></td>
                    
                <td className="divInTopBanner"><a className="menuItem" href="./">Services</a></td>
                <td className="divInTopBanner"><a className="menuItem" href="./">Contact Us</a></td>
                <td className="divInTopBanner"><a className="menuItem" href="./">Log In</a></td>
                </tr>
                </table>

            </div>
            <img className="BannerImage" alt="banner" src={BannerImage} />
            <img className="LogoImage" alt="logo" src={LogoImage} />
            
            <div className="logoContainer">
                <div className="message">We offer the best car deals.</div>

            </div>
            <div className="searchContainer">
                <h1 className="bannerTitle">Cars for Sale</h1>
                <div className="searchCarsOuterTextbox">

                <input className="searchCarsTextBox" placeholder="Search for cars"></input>
                <img className="searchCarsButton" src={SearchIcon}></img>
                </div>
            </div>

            <div className="featuredDisplay">Featured Cars:</div>

            <div className="container">
                {carImagesLocalPath.map((Car) => (
                    <CarCard Car={Car}/>
                ))}
            </div>


        </div>
    );
}

export default App;