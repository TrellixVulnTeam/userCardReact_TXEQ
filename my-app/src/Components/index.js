import React, { Component } from 'react';
import photo from '../Components/photo.jpeg';
import styles from "../Components/index.scss"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: photo,
            name: "Alex",
            surname: "Fedos",
            at: "@fedosenko_al",
            tweets: 1337,
            following: 400,
            followers: 718,
        };
    }
    render() {
        return (
            <>
            <div className='userCard'>
            <div>
                <div>
                    <img className='userPhoto' src={this.state.photo} alt={'Ava'}/>
                </div>
                <div className='info'>
                    <div className='about'>
                        <div>{this.state.name} {this.state.surname}</div>
                        <div>{this.state.at}</div>
                        <div>{this.state.tagline}</div>
                    </div>
                    <div className='btn'><div>+</div></div>
                </div>
            </div>
            <div className='tag'>
                <div className='tagline'>
                    <div className='text'>Tweets</div>
                    <div className='value'>{this.state.tweets}</div>
                </div>
                <div className='tagline'>
                    <div className='text'>Following</div>
                    <div className='value'>{this.state.following}</div>
                </div>
                <div className='tagline'>
                    <div className='text'>Followers</div>
                    <div className='value'>{this.state.followers}</div>
                </div>
            </div>
        </div>
            </>
        );
    }
}

export default Card;
