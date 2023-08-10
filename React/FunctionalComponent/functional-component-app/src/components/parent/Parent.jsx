import React from 'react'
import Child from '../child/Child';
import Car from '../Car/Car';
function Parent() {
  return (
    <>
        <h1>Parent Component</h1>
        <Child firstName='Tom' petType='cat'></Child>
        <Child firstName='Charlie' petType='dog'></Child>
        <Child firstName='Daisy' petType='hamster'></Child>
        <Child></Child>

        <Car />


        {/* rfce shorcut for react functional component export*/}
        {/* rce for class component export */}

    </>
  )
}

export default Parent


