import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';

import { Book, Character } from '../../models';
import ListItem from '../ListItem';
import Title from '../Title';
import './MapPanel.css';
import colors from '../../assets/colors';

const MapPanel = (
  props: {
    title: string,
    characters: Character[],
    books: Book[],
    visibleRange: number[],
    selectedCharacters: string[], selectedBooks: number[],
    selectCharacter: (name: string) => void,
    selectBook: (index: number) => void
  }
) => {
  const {
    title, characters, books, visibleRange,
    selectedCharacters, selectedBooks,
    selectCharacter, selectBook
  } = props;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className='container'>
      <div className={`MapPanel content-container ${ open ? 'open' : '' }`}>
        <Link className='exit' to={'/'}><GiExitDoor size={15} color={colors.primary.whiteTransparent}/></Link>
        <Link to={'/'}><h1 className='alt'>Cosmere Maps</h1></Link>
        <Title title={title} subtitle='Series'/>
        <Title subtitle='Characters'/>
        <div className='list-container'>
          {
            characters
              .filter(character => (
                !character.firstAppearance ||
                (
                  Math.max(...selectedBooks) >
                  (Number(Object.keys(character.firstAppearance)[0]) - 1) ||
                  (
                    character.firstAppearance[Math.max(...selectedBooks) + 1] &&
                    (
                      books[Math.max(...selectedBooks)].chapters[visibleRange[1]].chapter >=
                      character.firstAppearance[Math.max(...selectedBooks) + 1].chapter
                    )
                  )
                )
              ))
              .map(character => (
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
            books.map((book, index) => (
              <ListItem
                key={`book-item-${book.title}`}
                selected={selectedBooks.includes(index)}
                title={book.title}
                image={book.image}
                callback={() => selectBook(index)}
              />
            ))
          }
        </div>
      </div>
      <div className={`panel-control ${ open ? 'open' : '' }`} onClick={() => setOpen(!open)}>
        <p className='alt'>{ open ? 'Close' : 'Menu' }</p>
      </div>
    </div>
    
  );
}

export default MapPanel;
