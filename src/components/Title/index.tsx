import React from 'react';


const Title = (props: { title?: string, subtitle: string }) => {
  const { title, subtitle } = props;

  return (
    <div className='title'>
      <div className='subtitle'>
        <hr/>
        <p className='alt'>{ subtitle }</p>
        <hr/>
      </div>
      { title && <h2>{ title }</h2> }
    </div>
  );
}

export default Title;
