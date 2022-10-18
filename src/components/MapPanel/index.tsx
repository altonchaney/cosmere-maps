import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Book, Character } from '../../models';
import ListItem from '../ListItem';
import Title from '../Title';
import './MapPanel.css';

const MapPanel = (
  props: {
    title: string,
    characters: Character[],
    books: Book[],
    selectedCharacters: string[], selectedBooks: string[],
    selectCharacter: (name: string) => void,
    selectBook: (name: string) => void
  }
) => {
  const {
    title, characters, books,
    selectedCharacters, selectedBooks,
    selectCharacter, selectBook
  } = props;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={`MapPanel content-container ${ open ? 'open' : '' }`}>
      <Link to={'/'}><h1 className='alt'>Cosmere Maps</h1></Link>
      <Title title={title} subtitle='Series'/>
      <Title subtitle='Characters'/>
      <div className='list-container'>
        {
          characters.map(character => (
            <ListItem
              key={`character-item-${character.name}`}
              selected={selectedCharacters.includes(character.name)}
              title={character.name}
              image={character.image}
              color={character.color}
              callback={() => selectCharacter(character.name)}
            />
          ))
        }
      </div>
      <Title subtitle='Books'/>
      <div className='list-container'>
        {
          books.map(book => (
            <ListItem
              key={`book-item-${book.title}`}
              selected={selectedBooks.includes(book.title)}
              title={book.title}
              image={book.image}
              callback={() => selectBook(book.title)}
            />
          ))
        }
      </div>
      <div className='panel-control' onClick={() => setOpen(!open)}>
        <p className='alt'>{ open ? 'Close' : 'Open' }</p>
      </div>
    </div>
  );
}

export default MapPanel;
