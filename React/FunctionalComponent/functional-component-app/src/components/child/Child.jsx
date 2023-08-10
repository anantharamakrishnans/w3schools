import React from 'react';
import Pet from '../Pet/Pet';
import Card from '../Card/Card';
// function Child(props) {
//     const {firstName} = props;

function Child({ firstName = 'UNKNOWN', petType }) {
  return (
    <Card>
       <h2>Child name: {firstName}</h2>
       <Pet type={petType} />
    </Card>
  )
}

export default Child