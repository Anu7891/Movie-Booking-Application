import React, { Component } from 'react'
import './Home.css';
import Header from '../../common/header/Header';
import SingleLineGridList from '../../component/SingleLineGridList';
import Left from '../../component/Left';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='header-home'>
                    <span >Upcoming Movies</span>
                </div>
                <SingleLineGridList />
                <div className='flex-container'>
                    <div className='left'>
                        <Left />

                    </div>
                    <div className='right'>

                    </div>
                </div>

            </div>
        )
    }
}