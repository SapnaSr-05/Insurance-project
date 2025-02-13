import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const product = [
    { text: 'InsureITPro', link: '/Product' },
    { text: 'InvestAI', link: '/Product' },
    { text: 'AvanceTest', link: '/Product' },
    { text: 'AvanceEdu Pro', link: '/Product' },
   
  ];
  const services = [
    { text: 'Systems Integrator', link: '/AvanceSolution' },
    { text: 'Custom Software Development', link: '/AvanceSolution' },
    { text: 'PMO Outsourcing', link: '/AvanceSolution' },
    { text: 'Call Center Setup & Operations', link: '/AvanceSolution' },
    { text: 'Customized ERP Solutions', link: '/ERPSolution' },
    { text: 'Digital Marketing', link: '/AvanceSolution' },
  ];

  const quickLinks = [
    { text: 'About Us', link: '/DiscoverAvance' },
    { text: 'Case Study', link: '/Infrastructure' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'Blogs', link: '/ERPSolution' },
  ];

  const contactInfo = [
    { text: 'Phone: +91-120-4362095', link: 'tel:+911204362095' },
    { text: 'Email: info@avanceglobal.in', link: 'mailto:info@avanceglobal.in' },
    { text: 'Address: C-54 Second Floor, Sector 2 Noida - 201301, Uttar Pradesh, India', link: '#' },
  ];

  return (
    <div className="footerContainer11">
      <div className="footerPart11">
        <div className="firstPart11">
        <h3 className='OurService11'>Our Product</h3>
          <ul className="serviceList11">
            {product.map((product, index) => (
              <li key={index}>
                <a href={product.link}>{product.text}</a>
              </li>
            ))}
          </ul>
          <div className="icons11">
            <FontAwesomeIcon icon={faFacebookF} className="socialIcon11" />
            <FontAwesomeIcon icon={faTwitter} className="socialIcon11" />
            <FontAwesomeIcon icon={faInstagram} className="socialIcon11" />
            <FontAwesomeIcon icon={faLinkedin} className="socialIcon11" />
          </div>
        </div>
      </div>
      <div className="footerPart11">
        <div className="secondPart11">
          <h3 className='OurService11'>Our Services</h3>
          <ul className="serviceList11">
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.link}>{service.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footerPart11">
        <div className="thirdPart11">
          <h3 className='QuickLinks11'>Quick Links</h3>
          <ul className="quickLinksList11">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footerPart11">
        <div className="fourthPart11">
          <h3 className='ContactInfo11'>Contact Information</h3>
          <div className="verticalTitles11">
            <ul className="contactList11">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a href={info.link}>{info.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
