




import React from 'react'
// import styled from 'styled-components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style/Carousel.css'

const Carousel1 = () => {

  const data=[  {
    id:1,
     type:"student",
     name:"Chelsea",
    company:"Juspay",
    description:"Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.",
      profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp",
     
  },
  {
      id:2,
      type:"student",
      name:"Susovan Gosh",
    company:"StepSetGo",
     description:"It's absolutely awesome guys. Go for it without a second thought and you won't regret it!",
     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp",
     
  },
  {
     id:3,
     type:"student",
     name:"Akash Bhist",
     company:"AccelQ",
     description:"Thank you prepbytes for providing wonderful opportunity during Covid time. Its constant mentorship support program helped me to enhance my coding skills and also to get a job at a reputed company. Thanks a lot.",
     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/akash_bisht.webp",
     
  },
  {
      id:4,
      type:"student",
      name:"Tanej",
      company:"Authbridge",
     description:"Prepbytes helped  me in getting a job.I helps to fill the gap between theory and practice. Mainly what I like is the set of problems which are given just after the concept is very useful. Their doubt solving platform is good and fast. They don't give answer directly instead they ask your approach and correct that approach, this helps very much in technical interview.",
     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Tanej+Kumar+Kata.webp",
     
  },
  {
      id:5,
      type:"student",
      name:"Akshay",
      company:"Indiamart",
      description:"A wonderful place to learn. PrepBytes helped me in learning important topics for coding interiew and also getting placed in Indiamart. ",
      profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Akshay_indiamart.webp",
     
  },
  {
     id:6,
     type:"student",
     name:"Shubham Mishra",
    company:"Blowhorn",
    description:"I enrolled in Placement Program in the month of November and within 6 months Prepbytes arranged 3-4 interviews in Product based companies/startup. The course content and practice questions are up to mark, the biggest advantage of this is that you will get a doubt clearing platform and weekly live sessions from engineers working in top product based MNCs.",
     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Shubham+Mishra.webp",
     
  },
  {
      id:7,
      type:"student",
      name:"Shivam Gupta",
      description:"My coding experience has improved very much. After joining the program, I am able to write optimized code. The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.",
      profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg",
      company:"BuyHatke"
     
  },
  {
      id:8,
      type:"student",
     name:"Shivani Ravi",
     description:"PrepBytes have helped me improve my analytical skills & helped me in all the ways possible. My understanding of questions and logic has also increased. The best thing about PrepBytes are the lectures, it is so simple and everything is explained with examples. ",
      profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/shivani+Ravi.svg",
     company:"Sap Labs"
     
  },
  {
      id:9,
      type:"student",
      name:"Abhishek Kumar",
      description:"Lectures are up to the mark, concepts are crystal clear by the mentors. And the best part about the course is weekly assignments were provided to us which were not just good but ensuring that we were understanding the concepts but also improved our coding skills considerably ",
      profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Abhishek+Kumar.svg",
     company:"Tek System"
     
  },
  {
      id:10,
      type:"student",
      name:"Nikhil",
      description:"I got a mentor who was very knowledgeable & guided me throughout my placement journey. She explained everything very precisely and clearly & helped me with my doubts and coding problems. PrepBytes helped me a lot in gaining confidence. I thank PrepBytes for their effort. ",
      profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Nikhil.svg",
      company:"Sap Labs"
     
  }]
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
  
        <div  className='carsoul-container'>
       
        <Carousel responsive={responsive} infinite={true}>
               {
                data && data.map((item,index)=>{
                    return(
                        <div className='student'  key={index}>
                    <div className='studen-inner1'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp' alt='comma'/>
                        <h2>{item.name}</h2>
                    </div>
                    <p>{item.description}</p>
                    <img className='caursole-img1' src={item.profile} alt='shivani'/>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp' alt='coma2' className='caursole-img2'/>
                </div>
                    )
                })
               }

                
</Carousel>
        </div>
   
  )
}

  
  
export default Carousel1