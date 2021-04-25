import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1> [Company Website] </h1>
            <nav>
                <Link to='about'> About </Link>
                <Link to='events'> Events </Link>
                <Link to='contact'> Contact </Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1> [About] </h1>
            <Outlet /> 
        </div>
    );
}
// Outlet is reponsible for displaying nested components

export function Services() {
    return (
        <div>
            <h1> Our services</h1>
        </div>
    );
}

export function CompanyHistory() {
    return (
        <div>
            <h1> Our CompanyHistory</h1>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h1> Our Location</h1>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1> [Events] </h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1> [Contact] </h1>
        </div>
    );
}

// unknown page component  
export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1> Resouce not found at {location.pathname} </h1>
        </div>
    );
}