import React from 'react'
import { Container } from '../Components'
import postform from "../Components/Post-form/Postform"

function Addpost() {
  return (
    <div className='py-8'>
        <Container>
            <postform/>
        </Container>
    </div>
  )
}

export default Addpost;