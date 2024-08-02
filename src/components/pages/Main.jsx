import React from 'react';
import './Main.css';
import imgLogo from '../../assets/axIcon.png';


export default function Main() {
    return (
        <div className="app">
            <main className="main-content">
                <div className="icon-container">
                    <div className="icon"><img src={imgLogo}/></div>
                </div>
                <h2 className="main-heading">Inside Window</h2>
                <p className="description">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. <br/>
                    Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus<br/>
                    ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.<br/>
                    Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
                </p>
                <button className="learn-more-button">Learn more</button>
            </main>
        </div>
    );
}

