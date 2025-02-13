import React from 'react';
import './AvanceTest.css';

function AvanceTest() {
  return (
    <div className="AvanceTest-container6">
       <h2 className="title4">
        <span>Avance</span>
        <span className="italic-red">Test</span>
      </h2>
      <div className="AvanceTest-content6">
        <div className="AvanceTest-text6">
          <p>
          It is a rigorous hands-on program designed to develop competencies in lasted technologies for future-oriented technology ready academic institutions, corporates & retails. 
          The program builds a solid foundation by covering the most user-friendly and widely used reporting tools.
          </p>
          <h3>AvanceTest Modules:-</h3>
          <ul className="AvanceTest-computer-list6">
            <li>Students & Teachers (MockTest, Practice Test, Final assessment etc.)</li>
            <li>Revenue sharing model for Independent Content providers</li>
            <li>Online Answer Sheet checking Process</li>
            <li>Examine Employee, hiring candidates, Integrity & Other Assessments</li>
             {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="AvanceTest-image-container6">
        <img src={`${process.env.PUBLIC_URL}/Img/p3.jpeg`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AvanceTest;
