import React from 'react';
import about from '../../../img/banner/banner.avif';
import './ResaleAbout.css';

const ResaleAbout = () => {
    return (
        <>
        <section className="resale_about_sec">
        <div className="resale_about_container">
          <div className="row align-items-center introducingTeam_wrapper m-0 p-0">
            <div className="col-lg-5">
              <div className="about_img" data-aos="fade-up">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="introducing_team_info" data-aos="fade-up">
                <h2>What is Resale Cars?</h2>
                <p>It is a classifieds web site where you can buy and sell nearly everything. We started out our adventure on January 1, 2023. This site is to help you to promote you New Used & Recondition vehicles product which you want to sell & buy. In a nutshell to make a connection between the buyer & seller. The best arrangements are frequently finished with individuals who live in your own city or all alone road. it's anything but difficult to purchase and offer locally. You should simply choose your Country.Our site has more than three hundred above distinctive model. We also cautiously evaluate all advertisements that are being published, to make certain the pleasant is up to our standards.You Can sell your existing Vehicle for a good deal. Looking for your dream about your vehicle ResaleCars is here to help you. You can sign up for post ads easily every time. It takes you under a few minutes to post an advertisement on ResaleCars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  
        </>
    );
};

export default ResaleAbout;