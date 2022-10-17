import React, { useState } from 'react';

import { Book, Character } from '../../models';
import './MapPanel.css';

const MapPanel = (
  props: {
    title: string,
    characters: Character[],
    books: Book[],
    selectCharacter: (name: string) => void,
    selectBook: (name: string) => void
  }
) => {
  const { title, characters, books, selectCharacter, selectBook } = props;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={`panel ${ open ? 'open' : '' }`}>
      <h2>{ title }</h2>
      <div className='character-list'>
        {
          characters.map(character => (
            <div key={character.name} className='character-card'>
                <input type='checkbox' name={character.name} id={`checkbox${character.name}`} onChange={() => selectCharacter(character.name)}/>
                <label htmlFor={`checkbox${character.name}`} tabIndex={0} >
                    <img src={character.image} alt={`${ character.name }'s Path`} />
                    <p>{character.name}</p>
                </label>
            </div>
          ))
        }
      </div>
      <h2>{ title }</h2>
      <div className='character-list'>
        {
          books.map(book => (
            <div key={book.title} className='character-card'>
                <input type='checkbox' name={book.title} id={`checkbox${book.title}`} onChange={() => selectBook(book.title)}/>
                <label htmlFor={`checkbox${book.title}`} tabIndex={0} >
                    <img src={book.image} alt={`${ book.title }'s Cover`} />
                    <p>{book.title}</p>
                </label>
            </div>
          ))
        }
      </div>
      <div className='panel-control' onClick={() => setOpen(!open)}>{'>'}</div>
    </div>
  );
}

export default MapPanel;
