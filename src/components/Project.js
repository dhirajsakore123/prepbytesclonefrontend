import React from 'react'
import {  NavLink, useParams } from 'react-router-dom';
import '../style/project.css'


const Project = () => {
    const id =useParams().id
 
   const project=[  {
    id:1,
    type:"html",
    name:"BACKTRACKING PROJECT",
    description:"In this project I have used Pure HTML to create the page about backtracking algorithm. I have used different tags like heading tag, paragraph tag, image tag, div and span tags ,list tags like ul ,ol and table tags. It is a readonly page application to only read about Backtracking algorithm",
    topic:["HTML Introduction","HTML Attributes","HTML Elements","HTML Headings and Paragraphs","HTML Links","HTML Tables and Form","HTML Iframes","HTML Media","HTML Lists","ordered List", "Unordered List"],
    img:"https://i.ibb.co/X2Td7tV/image.png",
    link:'https://dhirajsakore123.github.io/HTML-project/'
},
{
    id:2,
    type:"css",
    name:"TO-DO-LIST WEB Version",
    description:"In this project I have used  HTML and CSS to create the to do app list. It is a static todo list. I have used HTMl tags and css properties to create this project.  It has multiple pages in it .I have created multiple static forms in this project.I have used external styling in this project. Styling properties like margin , padding, flex ,background-color etc are used in this project. ",
    topic:["Inline vs Internal vs External styling","CSS Font Styling"," background,margin", "padding,Styling Lists", "Tables", "Forms","Styling button", "Flex and properties","Grid and properties","Transition and Animations", "Combinators","PseudoElements and PseudoClasses","Media Queries"],
    img:"https://i.ibb.co/mqQryM5/image.png",
    link:"https://dhirajsakore123.github.io/CSSproject1/index.html"
},
{
    id:3,
    type:"css",
    name:"TO-DO-LIST Mobile Version",
    description:"In this project I have used  HTML and CSS to create the to do app list. It is a static todo list. I have used HTMl tags and css properties to create this project.  It has multiple pages in it .I have created multiple static forms in this project.I have used external styling in this project. Styling properties like margin , padding, flex ,background-color etc are used in this project. It is same as web version but It has Media Queries in it Which makes it responsive and user friendly ",
    topic:["Inline vs Internal vs External styling","CSS Font Styling"," background,margin", "padding,Styling Lists", "Tables", "Forms","Styling button", "Flex and properties","Grid and properties","Transition and Animations", "Combinators","PseudoElements and PseudoClasses"],
    img:"https://i.ibb.co/9hVwb0W/image.png",
    link:"https://dhirajsakore123.github.io/CSSproject1/index.html"

},
{
    id:4,
    type:"javascript",
    name:"Clock Project",
    description:"In this project I have used  HTML, CSS and Javascript to create the clock project. It is mobile responsive and dynamic. User can set time and alarm in this project. There is a real time clock in the right side of the project . Then user can select the time from the four present select in the left side and set alarm by hitting the button set alarm. Now our function will check if the real time is equal to the set time and if it matches then it will change the data accordingly",
    topic:["Introduction to JavaScript","Variables", "scoping", "Data type","Logic Building", "Strings and Numbers", "Operators", "Loops","Functions", "Arrays","Objects","Data Structures - Stack, Queues, Maps, Sets", "Searching Algorithms"," Sorting Algorithms","Problem Solving"],
    img:"https://i.ibb.co/TR2G3bx/image.png",
    link:"https://dhirajsakore123.github.io/clockapp/"

},
{
    id:5,
    type:"javascript",
    name:"TO-DO-LIST ",
    description:"In this project I have used  HTML,CSS and javascript to create the to do app list. It is a dynamic todo list. It is mobile responsive and user Friendly. I have created multiple pages and toggling between them with links. In this project user can create his own multiple todo lists and can create different todos for different list. User can mark the tasks which are completed by clicking on the task and then the task will have a line-through which shows that the task is completed ",
    topic:["Introduction to JavaScript","Variables", "scoping", "Data type","Logic Building", "Strings and Numbers", "Operators", "Loops","Functions", "Arrays","Objects","Data Structures - Stack, Queues, Maps, Sets", "Searching Algorithms"," Sorting Algorithms","Problem Solving"],
    img:"https://i.ibb.co/MGJGH5F/image.png",
    link:" https://dhirajsakore123.github.io/toaddtaskjs/"

},{
    id:6,
    type:"reactjs",
    name:"The Siren -Blog Project",
    description:"The Siren is a blog project created with the help of html,css,javascript and reactjs. As it is created with the help of react js it is a single page application . I have created different routes for differnt components like Home, Bollywood, Hollywood,Technology,Fitness and Food. User can read differnt types of articles about some static topics. I have used npm to download the necessary modules required by the projects . I have used the concept of contextapi to circulate the data in different component and avoid props drilling. It is mobile responsive website",
    topic:["React Intro","Node installation","Create an app using create-react-app","Understanding basics of react app","Understanding JSX","Understanding virtual DOMS ,Single page apps","React Lifecycle","States ,class components vs functional components","Event handling and Props","Building forms in React","Routes","Conditional Rendering","Pure Components","High order components","Controlled vs Uncontrolled components","React Hooks","Redux","Babel, Webpack","Axios, Creating a mock server","SASS overview"],
    img:"https://i.ibb.co/Yy1m5J8/image.png",
    link:"https://keen-squirrel-7ad9d9.netlify.app/"

},{
    id:7,
    type:"nodejs",
    name:"The Siren -Blog Project with Backend",
    description:"The Siren is a blog project created with the help of html,css,javascript, reactjs and nodejs. It is a mobile responsive blog website. In This project I have created a backend using node js. Backend was created using express and routing and controllers in it. All the data used in the Front end of the website was called from the backend through different routes . I have used cors policy to maintain the realation between front and backend . Front-end part have used axios in the useEffect hook to call the data from backend and stored the data inside a state hook to manage the state of data.",
    topic:["Nodejs Intro","Creating a Simple Server using HTTP read and write", "Creating a Simple Server using Express","Response types - HTML, JSON","Routing","Express Introduction","ntergrate Frontend and Backend","Express Params ","Express Querry ","Express Middleware","API Authentication","JWT Token","Bcrypt","Login and Logout","Socket Programming"],
    img:"https://i.ibb.co/60dhvdB/image.png",
    link:"https://keen-squirrel-7ad9d9.netlify.app/"

},
{
    id:8,
    type:"mongodb",
    name:"IShop",
    description:"Tech Shop is an ecommerce website created with the help of html, css, javascript, reactjs, nodejs and mongodb. It is a responsive single page application . Their is a login signup system where user can create his account and browse through all the products . User can use the add to cart functionality to add the product in his cart. Their is a search engine present indide the store component with which user can search the product with names. I have used monngo db to save the data and user credintials . Razorpay is used as the payment gateway and after the user hit make payment button the data of the cart will be removed from the cart and will be saved in the diffent collection ",
    topic:["Database Intro","SQL vs NOSQL","MongoDb Overview","Installing MongoDB","Connecting and Inserting Data","Mongo Shell","Mongo Client","Mongoose","Deleting and updating Data","Understanding CRUD operations","NodeMailer","Multer","FsModulea"],
    img:"https://i.ibb.co/jHzx4ZB/image.png",
    link:"https://graceful-phoenix-5f8dd8.netlify.app"

}]


   
  
  return (
  
      <div className='projects'>
           <div className='project-first' >
          {
            project.filter(item=>item.type===`${id}`).map((item,index)=>{
              return (
                <div className='project-first-inner' key={index}>
                  <img src={item.img} alt={item.name} width={"40%"}/>
                  <NavLink to={item.link}> <h3>Click to visit</h3></NavLink>
                  <h1>{item.name}</h1>
                  <p style={{textAlign:"center",width:'80%'}}>{item.description}</p>
                  

                </div>
                
              )
            })
          }
           </div>
           <div className='project-second'>
          <h1>Topics</h1>
          {
             project.filter(item=>item.type===`${id}`).slice(0,1).map((item,index)=>{
              return(
                <div key={index} style={{listStyleType:'none'}} >
                    {item.topic.map((item,index)=>{
                      return <li key={index} className='project-second-topics' >{item}</li>
                    })}
                </div>
              )
            })
          }
          </div>
      </div>

      
  )
}


export default Project
