// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <>
      {/* FOOTER SECTION */}
      <footer className="footer">
        {/* FIRST FOOTER SECTION */}
        <div className="footer-top">
          <div className="footer-col">
            <h4>Get to Know Us</h4>
            <a href="#">About Amazon</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
            <a href="#">Amazon Science</a>
          </div>

          <div className="footer-col">
            <h4>Connect with Us</h4>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </div>

          <div className="footer-col">
            <h4>Make Money with Us</h4>
            <a href="#">Sell on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Fulfilment by Amazon</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Amazon Pay on Merchants</a>
          </div>

          <div className="footer-col">
            <h4>Let Us Help You</h4>
            <a href="#">Your Account</a>
            <a href="#">Returns Centre</a>
            <a href="#">100% Purchase Protection</a>
            <a href="#">Help</a>
          </div>
        </div>

        {/* LOGO + LANGUAGE SECTION */}
        <div className="footer-middle">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            className="logo"
            alt="amazon"
          />

          <select>
            <option>English</option>
            <option>हिन्दी</option>
            <option>বাংলা</option>
            <option>తెలుగు</option>
            <option>मराठी</option>
            <option>தமிழ்</option>
            <option>ગુજરાતી</option>
            <option>ಕನ್ನಡ</option>
            <option>മലയാളം</option>
            <option>ਪੰਜਾਬੀ</option>
          </select>

          <select>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>Germany</option>
            <option>France</option>
            <option>Italy</option>
            <option>Spain</option>
            <option>Japan</option>
          </select>
        </div>

        {/* SECOND FOOTER SECTION */}
        <div className="footer-services">
          <div>
            <a href="#"><strong>AbeBooks</strong><br />Books, art & collectibles</a>
          </div>
          <div>
            <a href="#"><strong>Amazon Web Services</strong><br />Scalable Cloud Computing Services</a>
          </div>
          <div>
            <a href="#"><strong>Audible</strong><br />Download Audio Books</a>
          </div>
          <div>
            <a href="#"><strong>IMDb</strong><br />Movies, TV & Celebrities</a>
          </div>
          <div>
            <a href="#"><strong>Shopbop</strong><br />Designer Fashion Brands</a>
          </div>
          <div>
            <a href="#"><strong>Amazon Business</strong><br />Everything For Your Business</a>
          </div>
          <div>
            <a href="#"><strong>Prime Now</strong><br />2-Hour Delivery on Everyday Items</a>
          </div>
          <div>
            <a href="#">
              <strong>Amazon Prime Music</strong><br />
              100 million songs, ad-free<br />
              Over 15 million podcast episodes
            </a>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="footer-bottom">
          <a href="#">Conditions of Use & Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
          <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </>
  );
}
