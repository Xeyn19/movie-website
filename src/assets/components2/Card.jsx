import React from 'react'
import { useState } from 'react';

const Card = ({ title , author}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [ratings, setRating] = useState(0);

  const handleLiked = () => {
    !hasLiked ? setRating(prevRating => prevRating + 1) : setRating(prevRating => prevRating - 1);
    setHasLiked(prevState => !prevState);
  }

  return (
    <div>
      <h2><b>{ title }</b></h2> 
      <h2>
        <b>Author: </b> { author ? author.author : 'No Author.'}
      </h2>
      <h2>
        <b>Rating: </b> {ratings}
      </h2> 
      <br />

      <button className={`py-3 px-7 rounded-lg mb-5 bg-red-400 cursor-pointer 
      ${hasLiked ? 'bg-slate-500 text-slate-300 ' : 'bg-red-600 text-white hover:bg-red-800'}`} 
      onClick={handleLiked}>
          {hasLiked ? 'Liked' : 'like'}
      </button>
    </div>
  )
}

export default Card