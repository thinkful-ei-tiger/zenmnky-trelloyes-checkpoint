import React from 'react';
import Card from './Card';
import '../styles/List.css';

const List = (props) => {
    let header = props.header;
    let cards = props.cards; //array of card objects

    return (
        <section className="List">
            <header className="List-header">
            <h2>{header}</h2>
            </header>
            <div className="List-cards">
                {
                       //for each card id in the cards array
                        //access the corresponding object
                        //use that object to generate a Card component
                    cards.map(card => {
                        return (
                            <Card 
                                key={card.id}
                                title={card.title}
                                content={card.content}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default List;