import React, { useEffect, useState } from "react";
import "../style/elevation.css";
import Efirst from "../elevationmini/Efirst";
import Esecond from "../elevationmini/Esecond";
import Ethird from "../elevationmini/Ethird";
import Efourth from "../elevationmini/Efourth";
import Efifth from "../elevationmini/Efifth";
import axios from 'axios'
const ElevationAcademey = () => {
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [slide6, setSlide6] = useState(false);
  const [slide7, setSlide7] = useState(false);
  const [slide8, setSlide8] = useState(false);
  const [slide9, setSlide9] = useState(false);
  const [toggle, setToggle] = useState(1);
  const [data, setData] = useState();
  
 

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get("https://prepbytesclone.onrender.com/api/mentordata")
    .then((res)=>setData(res.data.user))
    .catch((err)=>console.log(err))
  }, []);

  return (
    <div className="elevation">
      <div className="elevation-first">
        <div className="elevation-first-cont">
          <p className="elevation-first-cont-heading">
            PrepBytes Elevation Academy - Full Stack Web Development Career
          </p>
          <p className="elevation-first-cont-text">
            Enroll in PrepBytes Elevation Academy - Full Stack Program and
            Guaranteed Tech Job of minimum 5 LPA.
          </p>
          <div className="elevation-first-cont-list">
            <p>→ Complete Live Class from experts</p>
            <p>→ Be the best Full stack developer</p>
            <p>→ Job Guarantee</p>
          </div>
          <div className="elevation-first-cont-btns">
            <button className="elevation-first-cont-btn1">Apply Now</button>
            <button className="elevation-first-cont-btn2">
              Get a call back
            </button>
          </div>
        </div>
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp"
          alt="not found"
          className="elevation-first-img"
        />
      </div>

      <div className="elevation-second">
        <div className="elevation-second-cont1">
          <p>For 2023, 2022 & 2021 graduates</p>
          <p>Batch Starting: 1st May 2023</p>
        </div>
        <div className="elevation-second-cont2">
       
            <div className='right-element '>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp' alt='first'/>
              <div className='right-element-inner'>
                <h2>Free Webinar</h2>
                <p>17th April</p>
              </div>
            {/* <div className='line'></div> */}
            </div>
            <div className='right-element '>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp' alt='second'/>
              <div className='right-element-inner'>
                <h2>1:1 Counselling session</h2>
                <p>From 18th April</p>
              </div>
              {/* <div className='line2'></div> */}
            </div>
            <div className='right-element'>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp' alt='third'/>
              <div className='right-element-inner'>
                <h2>Batch Start</h2>
                <p>01 May'23, Mon-Fri (7-10PM)</p>
              </div>
            </div>
           
        </div>
      </div>

      <div className="elevation-third">
        <div className="elevation-third-inner1">
          How will you reach to your dream Job?
        </div>
        <div className="elevation-third-inner">
          <div className="elevation-third-inner-cont1">
            <div>1</div>
            <p>Application & Shortlisting</p>
          </div>
          <div className="elevation-third-inner-cont2"></div>
          <div className="elevation-third-inner-cont3">
            <p>
              Apply, fill the form & wait till we review your application. You
              will be selected based on the eligibility criteria (2023, 2022 &
              2021 passouts)
            </p>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp"
              alt="not found"
            />
          </div>
        </div>

        <div className="elevation-third-inner">
          <div className="elevation-third-inner-cont1 color2">
            <div>2</div>
            <p>Attend Free Webinar</p>
          </div>
          <div className="elevation-third-inner-cont2"></div>
          <div className="elevation-third-inner-cont3">
            <p>
              Go through the free classes and learn the important concepts while
              understanding how the program unfolds.
            </p>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp"
              alt="not found"
            />
          </div>
        </div>

        <div className="elevation-third-inner">
          <div className="elevation-third-inner-cont1 color3">
            <div>3</div>
            <p>Batch Commencement</p>
          </div>
          <div className="elevation-third-inner-cont2"></div>
          <div className="elevation-third-inner-cont3">
            <p>
              Embark on your journey of success once you receive the offer
              letter for successful enrolment.
            </p>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp"
              alt="not found"
            />
          </div>
        </div>

        <div className="elevation-third-inner">
          <div className="elevation-third-inner-cont1 color4">
            <div>4</div>
            <p>7 Months Program</p>
          </div>
          <div className="elevation-third-inner-cont2"></div>
          <div className="elevation-third-inner-cont3">
            <p>
              You have now signed up for a learning-filled journey of 7 months
              that ends with you being placed in your dream company.
            </p>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp"
              alt="not found"
            />
          </div>
        </div>

        <div className="elevation-third-inner">
          <div className="elevation-third-inner-cont1 color5">
            <div>5</div>
            <p>Guaranteed Placement</p>
          </div>
          <div className="elevation-third-inner-cont2"></div>
          <div className="elevation-third-inner-cont3">
            <p>
              The program comes with interview opportunities and a placement
              guarantee of minimum 5 LPA.
            </p>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp"
              alt="not found"
            />
          </div>
        </div>
      </div>

      <div className="elevation-fifth">
        <div className="elevation-fifth-inner1">
          <p>Program Syllabus</p>
          <p>
            Learn from the best and be prepared to crack full stack developer
            jobs
          </p>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1">1st Week - 4th Week</div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3">
            <div className="elevation-fifth-inner-cont3-num">
              <div>1</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">
              Frontend Development Basics
            </p>
            <div
              onClick={() => setSlide1(!slide1)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide1 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4"
            style={{ minHeightheight: slide1 ? "200px" : "0px" }}
          >
            <div style={{ display: slide1 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2"
              style={{ display: slide1 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-blue">
            5th Week - 8th Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-blue">
            <div className="elevation-fifth-inner-cont3-num-blue">
              <div>2</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">
              Javascript Fundamentals & Problem Solving
            </p>
            <div
              onClick={() => setSlide2(!slide2)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide2 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-blue"
            style={{ minHeightheight: slide2 ? "200px" : "0px" }}
          >
            <div style={{ display: slide2 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-blue"
              style={{ display: slide2 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-blue">
            9th Week - 12th Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-blue">
            <div className="elevation-fifth-inner-cont3-num-blue">
              <div>3</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">
              Building Websites using JS
            </p>
            <div
              onClick={() => setSlide3(!slide3)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide3 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-blue"
            style={{ minHeightheight: slide3 ? "200px" : "0px" }}
          >
            <div style={{ display: slide3 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-blue"
              style={{ display: slide3 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-yellow">
            13th Week - 16th Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-yellow">
            <div className="elevation-fifth-inner-cont3-num-yellow">
              <div>4</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">React</p>
            <div
              onClick={() => setSlide4(!slide4)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide4 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-yellow"
            style={{ minHeightheight: slide4 ? "200px" : "0px" }}
          >
            <div style={{ display: slide4 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-yellow"
              style={{ display: slide4 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1">
            17th Week - 19th Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3">
            <div className="elevation-fifth-inner-cont3-num">
              <div>5</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">NodeJS</p>
            <div
              onClick={() => setSlide5(!slide5)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide5 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4"
            style={{ minHeightheight: slide5 ? "200px" : "0px" }}
          >
            <div style={{ display: slide5 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2"
              style={{ display: slide5 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-blue">
            20th Week - 22nd Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-blue">
            <div className="elevation-fifth-inner-cont3-num-blue">
              <div>6</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">Database</p>
            <div
              onClick={() => setSlide6(!slide6)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide6 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-blue"
            style={{ minHeightheight: slide6 ? "200px" : "0px" }}
          >
            <div style={{ display: slide6 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-blue"
              style={{ display: slide6 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-yellow">
            23rd - 24th Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-yellow">
            <div className="elevation-fifth-inner-cont3-num-yellow">
              <div>7</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">
              Code Review & Deployment
            </p>
            <div
              onClick={() => setSlide7(!slide7)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide7 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-yellow"
            style={{ minHeightheight: slide7 ? "200px" : "0px" }}
          >
            <div style={{ display: slide7 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-yellow"
              style={{ display: slide7 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-yellow">
            25th - 28th Week
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-yellow">
            <div className="elevation-fifth-inner-cont3-num-yellow">
              <div>8</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">
              Interview Preparation & Major Projects
            </p>
            <div
              onClick={() => setSlide8(!slide8)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide8 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-yellow"
            style={{ minHeightheight: slide8 ? "200px" : "0px" }}
          >
            <div style={{ display: slide8 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-yellow"
              style={{ display: slide8 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="elevation-fifth-inner">
          <div className="elevation-fifth-inner-cont1-blue">
            28th Week Onwards
          </div>
          <div className="elevation-fifth-inner-cont2"></div>
          <div className="elevation-fifth-inner-cont3-blue">
            <div className="elevation-fifth-inner-cont3-num-blue">
              <div>9</div>
            </div>
            <p className="elevation-fifth-inner-cont3-text">
              Interviews Opportunities
            </p>
            <div
              onClick={() => setSlide9(!slide9)}
              className="elevation-fifth-inner-cont3-plusminus"
            >
              {slide9 ? "−" : "+"}
            </div>
          </div>
          <div
            className="elevation-fifth-inner-cont4-blue"
            style={{ minHeightheight: slide9 ? "200px" : "0px" }}
          >
            <div style={{ display: slide9 ? "flex" : "none" }}>
              Frontend Development Basics - HTML, CSS AND Github
            </div>
            <div
              className="elevation-fifth-inner-cont4-inner2-blue"
              style={{ display: slide9 ? "flex" : "none" }}
            >
              <p>How websites work</p>
              <p>Web Development Overview - Advantages</p>
              <p>HTML Introduction</p>
              <p>Structure of Webpage</p>
              <p>HTML Tags</p>
              <p>Texts, Images, Videos</p>
              <p>Lists, Forms, Tables</p>
              <p>Links, Anchor tags</p>
              <p>HTML Divs</p>
              <p>Github</p>
              <p>CSS Introduction</p>
              <p>Inline vs Internal vs External styling</p>
              <p>CSS Display</p>
              <p>CSS Font Styling, background, margin, padding</p>
              <p>Styling Lists, Tables, Forms</p>
              <p>FontAwesome</p>
              <p>Transitionals, Transformations, Animations</p>
              <p>Styling button</p>
              <p>Tool tip, Box Sizing, Flex, Grid</p>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="elevation-sixth">
        <div className="elevation-sixth-cont1">
          <p>Where our Students are placed</p>
          <p>"You guarantee hard work, We guarantee placements"</p>
        </div>
        <div className="elevation-sixth-cont2">
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg"
              alt="not found"
            />
          </div>
        </div>
      </div>

      <div className="elevation-seventh">
        <div className="elevation-seventh-cont1">
          <p>How can you be part of the next batch</p>
          <p>
            Experts mentors designed to get you job-ready, designed for complete
            beginners as well. All this with absolute zero cost including
            real-time assignments that help you practice what you have learnt.
            for complete beginners as well.
          </p>
        </div>
        <div className="elevation-seventh-cont2">
          <div className="elevation-seventh-cont2-inner1">
            <div
              onClick={() => setToggle(1)}
              style={{
                background: toggle === 1 ? "#fff" : "#f3f3f3",
                borderLeft: toggle === 1 ? "thick solid #f78077" : "none",
              }}
            >
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/registeration-icon.webp"
                alt="not found"
                style={{ opacity: toggle === 1 ? "1" : "0.3" }}
              />{" "}
              <p style={{ color: toggle === 1 ? "#f78077" : "#c2c2c2" }}>
                Application
              </p>
            </div>
            <div
              onClick={() => setToggle(2)}
              style={{
                background: toggle === 2 ? "#fff" : "#f3f3f3",
                borderLeft: toggle === 2 ? "thick solid #f78077" : "none",
              }}
            >
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp"
                alt="not found"
                style={{ opacity: toggle === 2 ? "1" : "0.3" }}
              />
              <p style={{ color: toggle === 2 ? "#f78077" : "#c2c2c2" }}>
                Shortlisting
              </p>
            </div>
            <div
              onClick={() => setToggle(3)}
              style={{
                background: toggle === 3 ? "#fff" : "#f3f3f3",
                borderLeft: toggle === 3 ? "thick solid #f78077" : "none",
              }}
            >
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp"
                alt="not found"
                style={{ opacity: toggle === 3 ? "1" : "0.3" }}
              />{" "}
              <p style={{ color: toggle === 3 ? "#f78077" : "#c2c2c2" }}>
                Free Webinars
              </p>
            </div>
            <div
              onClick={() => setToggle(4)}
              style={{
                background: toggle === 4 ? "#fff" : "#f3f3f3",
                borderLeft: toggle === 4 ? "thick solid #f78077" : "none",
              }}
            >
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/payment-icon.webp"
                alt="not found"
                style={{ opacity: toggle === 4 ? "1" : "0.3" }}
              />{" "}
              <p style={{ color: toggle === 4 ? "#f78077" : "#c2c2c2" }}>
                Enrolment
              </p>
            </div>
            <div
              onClick={() => setToggle(5)}
              style={{
                background: toggle === 5 ? "#fff" : "#f3f3f3",
                borderLeft: toggle === 5 ? "thick solid #f78077" : "none",
              }}
            >
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/start-batch-icon.webp"
                alt="not found"
                style={{ opacity: toggle === 5 ? "1" : "0.3" }}
              />{" "}
              <p style={{ color: toggle === 5 ? "#f78077" : "#c2c2c2" }}>
                Batch commencement
              </p>
            </div>
          </div>

          <div className="elevation-seventh-cont2-inner2">
            {toggle === 1 ? (
              <Efirst />
            ) : toggle === 2 ? (
              <Esecond />
            ) : toggle === 3 ? (
              <Ethird />
            ) : toggle === 4 ? (
              <Efourth />
            ) : toggle === 5 ? (
              <Efifth />
            ) : (
              "nothing"
            )}
          </div>
        </div>
      </div>

      <div className="elevation-eight">
          <div className="elevation-eight-cont1">
            <p>Payment Plans</p>
            <p>Choose a payment plan suiting your needs</p>
          </div>
          <div  className="elevation-eight-cont2">
            <div className="elevation-eight-cont2-heading">
              Pay Upfront*
              </div>
              <div className="elevation-eight-cont2-textbox">
                <p>Pay Now</p>
                <p>₹ 70,000</p>
              </div>
              <div className="elevation-eight-cont2-textbox1" >
                 *Money-back guarantee on placements
              </div>
              <div className="elevation-eight-cont2-textbox">
                <p>EMI Starting at</p>
                <p>₹ 5833 <span style={{color:'black',fontSize:'1rem'}}>/month</span></p>
              </div>
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp" alt="not found"/>
          </div>
           <button className="elevation-eight-btn">Register</button>
           <div className="elevation-eight-cont3">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45OTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNS45OTggMTYiPgogIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtY2hlY2stZG91YmxlIiBkYXRhLW5hbWU9Ikljb24gYXdlc29tZS1jaGVjay1kb3VibGUiIGQ9Ik0xNS43NzcsNS40NjEsMTQuNTQsNC4yMjNhLjc0Ny43NDcsMCwwLDAtMS4wNTksMEw2LDExLjcwNywyLjUxNiw4LjIyM2EuNzQ3Ljc0NywwLDAsMC0xLjA1OSwwTC4yMTcsOS40NjNhLjc1MS43NTEsMCwwLDAsMCwxLjA2Mmw1LjI0OSw1LjI1MmEuNzQ3Ljc0NywwLDAsMCwxLjA1OSwwbDkuMjQ5LTkuMjU1QS43NTMuNzUzLDAsMCwwLDE1Ljc3Nyw1LjQ2MVpNNS42NDQsOC43NzNhLjUuNSwwLDAsMCwuNzA2LDBsNi41LTYuNTA1YS41LjUsMCwwLDAsMC0uNzA2TDExLjQzNy4xNDZhLjUuNSwwLDAsMC0uNzA2LDBMNiw0Ljg3OSw0LjI2NiwzLjE0NWEuNS41LDAsMCwwLS43MDYsMEwyLjE0NSw0LjU2MWEuNS41LDAsMCwwLDAsLjcwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA0IDAuMDAyKSIgZmlsbD0iI2Y3ODA3NyIvPgo8L3N2Zz4K" alt="not found"/>
             <p>Guaranteed Placement of minimum 5 LPA</p>
           </div>
      </div>

      <div className='home-mentor-data'>
           {
            data && data.map((item,index)=>{
              return(
                <div className='home-mentor-data-card' key={index}>
                      <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png' alt='not found' className='home-mentor-data-card-img'/>
                      <img src={item.profile} alt='not found' className='home-mentor-data-card-profile'/>
                      <p className='home-mentor-data-card-name'>{item.name}</p>
                      <p className='home-mentor-data-card-name1'>{item.company}</p>
                      <div className='home-mentor-data-card-description'>{item.description}</div>
                      <img src={item.companyimg} alt='not found' className='home-mentor-data-card-com-img'/>
                </div>
              )
            })
           }
     </div>
       {/* <div className="elevation-ninth">
            <div className="elevation-ninth-cont1">

            </div>
            <div className="elevation-ninth-cont2">
                 {
                  data && data.user.map((item,index)=>{
                    return(
                      <h1>{item.name}</h1>
                    )
                  })
                 }
            </div>
       </div> */}

       <div className="elevation-ninth">
          <div className="elevation-ninth-cont1">
            <div className="elevation-ninth-cont1-inner1">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/calendar.webp" alt="not found"/>
           <div className="elevation-ninth-cont1-inner1-cont1">
             <p>Free Webinar</p>
             <p>Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
           <div>17th April</div>
           <button>Register</button>
           </div>
            </div>
            <div className="elevation-ninth-cont1-inner2">
              <div className="elevation-ninth-cont1-inner2-box">
               <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg" alt="not found"/>
               <div className="elevation-ninth-cont1-inner2-box-inner2">
                <p>100k+</p>
                <p>Student Coding Community</p>
               </div>
            </div>
            <div className="elevation-ninth-cont1-inner2-box">
               <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg" alt="not found"/>
               <div className="elevation-ninth-cont1-inner2-box-inner2">
                <p>800+</p>
                <p>Colleges</p>
               </div>
            </div>
            <div className="elevation-ninth-cont1-inner2-box">
               <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg" alt="not found"/>
               <div className="elevation-ninth-cont1-inner2-box-inner2">
                <p>100k+</p>
                <p>Students placed</p>
               </div>
            </div>
            </div>
          </div>
          <div className="elevation-ninth-cont2">
           
          </div>
       </div>
    </div>
  );
};

export default ElevationAcademey;
