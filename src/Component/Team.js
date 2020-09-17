import React from "react";
import logo from "../pictures/logo2.png";
import "./Team.css";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import BusinessIcon from "@material-ui/icons/Business";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";

function Team() {
  return (
    <div className="team">
      <div className="team__container">
        <div className="team__container__left">
          <div className="team__container__left_logo">
            <img src={logo} />
            <div className="team__container__left__info">
              <div className="team__container__left__info__wrapper">
                <div className="team__container__left__info__phone">
                  <PhoneInTalkIcon />
                  <p>402.359.1555</p>
                </div>
                <div className="team__container__left__info__address">
                  <BusinessIcon />
                  <p>
                    15825 W. Maple Rd.
                    <br />
                    Omaha, Nebraska <br />
                    68116
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="team__container__left__info__social__wrapper">
                <div className="team__container__left__info__social">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Square-Donut-2663381550379435/"
                  >
                    <FacebookIcon className="facebook" fontSize="large" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/SquareDonutOMA"
                  >
                    <TwitterIcon className="twitter" fontSize="large" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/squaredonutoma/"
                  >
                    <InstagramIcon className="instagram" fontSize="large" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team__container__right">
          <div className="caption">
            <h1>Join our team!</h1>
            <p>
              Want to become a Donut Master?
              <br />
              Fill out this form and we'll be in touch!
            </p>
          </div>
          <div className="container__formBox">
            <form className="formBox__contents">
              <input type="text" required />
              <label>First name </label>

              <input type="text" required />
              <label>Last name </label>

              <input type="text" required />
              <label>Email </label>

              <textarea type="text" required />
              <label>Experience </label>

              <Button variant="contained" color="secondary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
