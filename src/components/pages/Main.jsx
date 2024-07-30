import React, {useState} from 'react';
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
                    fdsfgdsfhgwrthtwertwwuerfhieuifnvliidsjlbvb<br/>
                    eefrgaesiuryhgioaesrhgoraeyghjhjhjhhh<br/>
                    pgtjwu9-8rthg-w09rght-w97rtgyhhyyyyyyyy<br/>
                    hhhhhighow09ugh0w8guhv0w87rgt<br/>
                    irjjjfhghsa0e9urgh0wuhtg8qwyrhtg08gytekr
                </p>
                <button className="learn-more-button">Learn more</button>
            </main>
        </div>
    );
}

