import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/public/reviews.json').then(res => res.json())


const Home = () => {
    return (
        <div>
            <h2>hello hi iam home</h2>
            <Banner></Banner>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;