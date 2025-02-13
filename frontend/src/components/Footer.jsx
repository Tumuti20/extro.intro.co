import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaQuestion } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-primary">
        <div>
          <h4 className="h4">We are always here to help!</h4>
          <p>
            We're here to provide guidance and support every step of the way.
          </p>
        </div>
        <div className="flexStart flex-wrap gap-8">
          <div className="flexCenter gap-x-6">
            <FaLocationDot />
            <div>
              <h5 className="h5">Location</h5>
              <p>Nairobi</p>
            </div>
          </div>
          <div className="flexCenter gap-x-6">
            <FaPhone />
            <div>
              <h5 className="h5">Phone</h5>
              <p>+254714102214</p>
            </div>
          </div>
          <div className="flexCenter gap-x-6">
            <FaMailBulk />
            <div>
              <h5 className="h5">Email Support</h5>
              <p>@samueltumuti20.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* logo - Left side */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <div className="bold-32">
            Extro<span className="text-secondary">.Intro</span>
          </div>
          <p>
            Extro.Intro blends timeless style with affordable fashion, helping
            you express your unique personality with every piece. <br />{" "}
            Discover our curated collections designed to fit your lifestyle.
          </p>
        </div>
        <div className="flexStart gap-7 xl:gap-x-36 flex-wrap">
          <ul>
            <h4 className="h4 mb-3">Customer Service</h4>
            <li className="my-2">
              <a href="/help-center" className="text-gray-30 regular-14 ">
                Help center
              </a>
            </li>
            <li className="my-2">
              <a href="/payment-methods" className="text-gray-30 regular-14 ">
                Payment methods
              </a>
            </li>
            <li className="my-2">
              <a href="contact" className="text-gray-30 regular-14 ">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a href="shipping-status" className="text-gray-30 regular-14 ">
                Shipping status
              </a>
            </li>
            <li className="my-2">
              <a href="complaints" className="text-gray-30 regular-14 ">
                Complaints
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <a href="/privacypolicy" className="text-gray-30 regular-14 ">
                Privacy Policy
              </a>
            </li>
            <li className="my-2">
              <a href="/cookiesettings" className="text-gray-30 regular-14 ">
                Cookie settings
              </a>
            </li>
            <li className="my-2">
              <a href="termsconditions" className="text-gray-30 regular-14 ">
                Terms & conditions
              </a>
            </li>
            <li className="my-2">
              <a href="/cancellationpolicy" className="text-gray-30 regular-14 ">
                Cancellation
              </a>
            </li>
            <li className="my-2">
              <a href="imprint" className="text-gray-30 regular-14 ">
                Imprint
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Others</h4>
            <li className="my-2">
              <a href="/ourteam" className="text-gray-30 regular-14 ">
                Our teams
              </a>
            </li>
            <li className="my-2">
              <a href="/sustainability" className="text-gray-30 regular-14 ">
                Sustainability
              </a>
            </li>
            <li className="my-2">
              <a href="/press" className="text-gray-30 regular-14 ">
                Press
              </a>
            </li>
            <li className="my-2">
              <a href="/jobs" className="text-gray-30 regular-14 ">
                Jobs
              </a>
            </li>
            <li className="my-2">
              <a href="newsletter" className="text-gray-30 regular-14 ">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* copyrights */}
      <p className="max-padd-container bg-primary medium-14 py-2 px-8 rounded flexBetween mt-6">
        <span>2025 Extro.Intro</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
