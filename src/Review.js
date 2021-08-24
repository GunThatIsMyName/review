import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] =useState(0);
  const {id,name,job,image,text}=people[index];
  // newIndex 를 체크하는 2가지 방법
  // prevPerson 이벤트 안에서 처리하는방법.
  // checkNumber fn 만들기
  const checkNumber = (number)=>{
      if(number > people.length-1){
          return 0
      }
      if(number < 0){
          return people.length -1
      }
      return number;
  }
  const prevPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index-1
        if(newIndex < 0){
          return people.length-1
        }
        return newIndex;
    })
  }
  const nextPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index+1
        if(newIndex > people.length-1){
          return 0
        }
        return newIndex;
    })
  }
  const randomPerson =()=>{
      let random = Math.floor(Math.random()*people.length)
      if(random === index){
        return random +1;
      }
      setIndex(checkNumber(random))
  }
  return <article className="review">
    <div className="img-container">
      <img src={image} alt="name" className="person-img"/>
      <span className="quote-icon"><FaQuoteRight /></span>
    </div>
    <h4 className="authour">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button onClick={prevPerson} className="prev-btn"><FaChevronLeft/></button>
      <button onClick={nextPerson} className="next-btn"><FaChevronRight/></button>
    </div>
      <button onClick={randomPerson} className="random-btn">surprise me</button>
  </article>;
};

export default Review;
