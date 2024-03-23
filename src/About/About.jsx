import React from 'react';
import '../App.css';

function About() {
  return (
    <div className='about container'>
      <div className='aleft w-50'>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae laboriosam optio dicta in ad suscipit quibusdam neque.
          Reprehenderit nemo illum laboriosam necessitatibus id.
          Delectus cupiditate doloribus minus veniam ratione sapiente iusto similique? Iusto nihil iure nobis itaque! Magni,
          dolor at? Officia cumque unde ab aliquid veniam quisquam debitis inventore commodi!</p>
        <button className='btn btn-warning'>Load More</button>
      </div>
      <div className='aright w-50 bg-dark'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2q8yaqRyDeB1fQoNPvIRe7g1Rlkdve0bjA&usqp=CAU'
          height='50%' width='100%' alt=''></img>
      </div>
    </div>
  )
}

export default About