import React from "react";
import { useNavigate } from 'react-router';


import "./Card.css";

/* CandidateCard component */
export const Card = ({ candidates }) => {

  const navigate = useNavigate();

  return (
    <div className='card-list'>
      {candidates.map(candidate => {
        const {name , email, id} = candidate;
        return (
          <div className='card-container' onClick={() => navigate(`/candidate/${candidate.id}`)} key={id}>
            <img 
              alt={`candidate ${name}`} 
              src={`https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )
      })}
    </div>
  )
}


