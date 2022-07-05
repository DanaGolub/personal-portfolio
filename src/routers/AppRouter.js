import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PagePortfolioItem from './PagePortfolioItem';
import PageNotFound from './PageNotFound';


function AppRouter() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Nav />
                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="portfolio/:id" element={<PagePortfolioItem />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRouter

