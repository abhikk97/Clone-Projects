import React from 'react';
import './header.css';

const Header = () => {
    return (<div className='max-width header'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='Zamato logo' className='header-logo'/>

        <div className='header-right'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                    <div className='location-icon-name '>
                    <i className="fi fi-rr-marker absolute-center location-icon"></i>
                    <div>Banglore</div>                  
                      </div>
                      <i class="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className='location-search-seperator'></div>
                <div className='header-search-bar'>
                <i className="fi fi-rr-search absolute-center search-icon"></i>
                <input placeholder='Search for restaurant, cuisine or a dish' className='search-input'/>
                </div>
            </div>
            <div className='profile-wrapper'>
                <img className='header-profile-image' alt='profile' src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'/>
                <span className='header-username'>Abhishek</span>
                <i class="fi fi-rr-angle-down absolute-center profile-option-icon"></i>

            </div>

        </div>
    </div>);
}

export default Header;