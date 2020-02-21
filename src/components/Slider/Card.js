import React from 'react'

const Card = (professor) => {
    return(
        <div>
            <img style={{ width:'100px', height:'100px', marginRight: '20em' }} src={professor.avatar} alt='profilepic' />
            <h1>{professor.nome} {professor.sobrenome}</h1>
        </div>
    );
}

export default Card