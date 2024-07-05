import React, { useState } from "react";
import "./refer.css";
import Modal from "../Components/Model";

import img6 from "../assests/img7.png";
import logo from "../assests/logo.png";
import img1 from "../assests/img1.png";
import img2 from "../assests/img3.png";
import img3 from "../assests/img4.png";
import img4 from "../assests/img5.png";
import img5 from "../assests/img2.png";
import img9 from "../assests/img9.png";
import c1 from "../assests/c1.png";
import c2 from "../assests/c2.png";
import c3 from "../assests/c3.png";
import cap from "../assests/cap.png";
import showmore from "../assests/showmore.png";
import article1 from "../assests/article1.png";
import footer1 from "../assests/footer.png";
import icon1 from "../assests/icon1.png";

const Refer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function handleClick() {
    window.open("https://home.accredian.com/", "_blank");
  }

  function handleLogin() {
    window.open("https://home.accredian.com/login");
  }

  function handleTry() {
    window.open("https://trial.accredian.com/");
  }

  return (
    <div className="container">
      <div className="header">
        <div className="heading-1">
          <div className="text-1">
            Navigate your ideal career path with tailored expert advice
          </div>
          <button className="text-2">Contact Expert</button>
        </div>
        <div className="navbar">
          <div className="lists">
            <div className="inner-container">
              <img
                src={logo}
                alt="logo"
                className="btn-1"
                onClick={handleClick}
              />

              <select className="btn-2">
                <option name="" id="">
                  Courses
                </option>
              </select>
              <div className="inner-container-2">
                <div className="heading-2">Refer & Earn</div>
                <div className="text-3">Resources</div>
                <div className="text-4">About Us</div>
                <div className="login" onClick={handleLogin}>
                  Login
                </div>
                <div className="tryfree" onClick={handleTry}>
                  Try For Free
                </div>
              </div>
            </div>
            <div className="inner-cont-4">
              <div className="refer-container">
                <div className="refer">Refer</div>
                <div className="ellipse"></div>
              </div>
              <div className="benifits">Benefits</div>
              <div className="faqs">FAQs</div>
              <div className="faqs">Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle">
        <img src={img6} alt="img-6" className="rect-img" />
        <img src={img1} alt="img-8" className="money1" />
        <img src={img2} alt="img-5" className="money2" />
        <img src={img3} alt="img-4" className="money3" />
        <img src={img4} alt="img-3" className="money4" />
        <img src={img5} alt="img-2" className="money5" />
        <div className="grid-text">
          <div className="t-1">Let’s Learn & Earn</div>
          <div className="t-2">
            Get a chance to win <br />
            up-to <span className="rs">Rs. 15,000</span>
          </div>
          <button className="btn-3" onClick={handleOpenModal}>
            Reffer Now
          </button>
        </div>
      </div>
      <div className="circles">
        <div className="c-1">
          How Do I <span className="c-2">Refer?</span>
        </div>
        <div className="circles-images">
          <img src={img9} alt="img9" className="circles-container" />
        </div>
        <img src={c1} alt="c1" className="c1" />
        <img src={c2} alt="c2" className="c2" />
        <img src={c3} alt="c3" className="c3" />
        <div className="cct1">
          Submit referrals easily via our website’s referral section.
        </div>
        <div className="cct2">
          Earn rewards once your referral joins an Accredian program.
        </div>
        <div className="cct3">
          Both parties receive a bonus 30 days after program enrollment.
        </div>
        <button className="btn-4" onClick={handleOpenModal}>
          Refer Now
        </button>
      </div>
      <div className="boxes">
        <div className="b-1">
          What Are The <span className="b-2">Referral Benefits?</span>
        </div>
        <div className="enrolled">Enrolled</div>
        <div className="toggele"></div>
        <div className="ellipse-2"></div>
      </div>
      <div className="tables-container">
        <div className="d-1">
          <div className="d-3">ALL PROGRAMS</div>
          <div className="arw-1">&gt;</div>
        </div>
        <div className="d-2">
          <div className="flexed">
            <div className="line-1">Product Management</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Strategy & Leadership</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Business Management</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Fintech</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Senior Management</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Data Science</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Digital Transformation</div>
            <div className="arw-2">&gt;</div>
          </div>
          <div className="bordered"></div>
          <div className="flexed">
            <div className="line-1">Business Analytics</div>
            <div className="arw-2">&gt;</div>
          </div>
        </div>
      </div>
      <div className="table-2">
        <div className="head-1">Programs</div>
        <div className="head-2">Referrer Bonus</div>
        <div className="head-3">Referee Bonus</div>
      </div>
      <div className="table-body-2">
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">
            Professional Certificate Program in Product Management
          </div>
        </div>
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">
            PG Certificate Program in Strategic Product Management
          </div>
        </div>
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">
            Executive Program in Data Driven Product Management
          </div>
        </div>
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">
            Executive Program in Product Management and Digital Transformation
          </div>
        </div>
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">Executive Program in Product Management</div>
        </div>
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">
            Advanced Certification in Product Management
          </div>
        </div>
        <div className="flex-1">
          <img src={cap} alt="caps" className="cap" />
          <div className="body-1">
            Executive Program in Product Management and Project Management
          </div>
        </div>
        <div className="hor-line"></div>
        <div className="hor-line-1"></div>
        <div className="table-body-3">
          <div className="te-1">₹ 7,000</div>
          <div className="te-1">₹ 9,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
        </div>
        <div className="table-body-4">
          <div className="te-1">₹ 9,000</div>
          <div className="te-1">₹ 11,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
          <div className="te-1">₹ 10,000</div>
        </div>
      </div>
      <img src={showmore} alt="show" className="showmore" />
      <button className="btn-6" onClick={handleOpenModal}>
        Refer Now
      </button>
      <div className="te-2">
        Frequently Asked <span className="te-3">Questions</span>
      </div>
      <div className="te-4">Eligibility</div>
      <div className="te-5">How to Use?</div>
      <div className="te-6">Terms & Conditions</div>
      <div className="te-7">
        Do I need to have prior Product Management and Project Management
        experience to enroll in the program? <span className="arw-top">^</span>
      </div>
      <div className="te-8">
        No, the program is designed to be inclusive of all levels of experience.
        All topics will be covered from the basics, making it suitable for
        individuals from any field of work.
      </div>
      <div className="te-9">
        What is the minimum system configuration required?{" "}
        <span className="te-10">&#8595;</span>
      </div>
      <img src={article1} alt="article1" className="article1" />
      <img src={footer1} alt="footer1" className="footer1" />
      <img src={icon1} alt="icon1" className="icon-call" />
      <Modal showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Refer;
