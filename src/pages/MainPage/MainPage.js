import React from 'react';
import Favorites from '../../components/Favorites/Favorites';
import Header from '../../components/Header/Header';
import Movies from '../../components/Movies/Movies';
import SearchBox from '../../components/SearchBox/SearchBox';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox />
                    </div>
                    <div className="main-page__movies">
                        <Movies />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites />
                </aside>
            </main>
        </div>
    );
}

export default MainPage;
