import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
  <meta name="viewport" content="with=device-width, initial-scale=1.0" />
  <title> Mister Bangus - Home </title>
  <link rel="stylesheet" href="stylesheet.css" />
  {/* Poppins font link from GoogleFonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
    rel="stylesheet"
  />
  {/* Bootstrap4 & Font-Awesome CDN link */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/*------ Header -------*/}
  <section className="header">
    <nav>
      <a href="index.html">
        <img src="Images/logo.png" />
      </a>
      <div className="navlinks" id="navLinks">
        <i className="fa fa-times" onclick="hideMenu()" />
        <ul>
          <li>
            <a href="home.html">HOME</a>
          </li>
          <li>
            <a href="about.html">ABOUT</a>
          </li>
          <li>
            <a href="catalog.html">CATALOG</a>
          </li>
          <li>
            <a href="blog.html">BLOG</a>
          </li>
          <li>
            <a href="review.html">REVIEWS</a>
          </li>
          <li>
            <a href="faq.html">FAQS</a>
          </li>
          <li>
            <a href="contact.html">CONTACT</a>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars" onclick="showMenu()" />
    </nav>
    <div className="textbox">
      <h1> Mister Bangus Official</h1>
      <p> Welcome to Mister Bangus</p>
      <a href="catalog.html" className="mainbutton">
        Shop Now
      </a>
    </div>
  </section>
  {/*------ Course -------*/}
  <section className="course">
    <h1>What We Offer</h1>
    <p>
      {" "}
      Mister Bangus offers only the best quality of boneless bangus, fresh from
      the catch.
    </p>
    <div className="row">
      <div className="course-col">
        <h3> Wholesale Prices </h3>
        <p>
          As the source of our boneless bangus comes straight from us from
          Jaime's farm in Dagupan City, expect no increased prices.
        </p>
      </div>
      <div className="course-col">
        <h3> The Best of the Best </h3>
        <p>
          Mister Bangus guarantees that our bangus and other goods will be the
          best you have ever tasted.
        </p>
      </div>
      <div className="course-col">
        <h3> Fresh from Dagupan </h3>
        <p>
          Our products are from Jaime's farm, straight from Dagupan, so expect
          the authentic taste of Dagupan Bangus and seafood to arrive at your
          doorstep.
        </p>
      </div>
    </div>
  </section>
  {/*------ Campus -------*/}
  <section className="campus">
    <h1>Where We Deliver</h1>
    <p>
      {" "}
      Mister Bangus' delivery range covers the entirety of Mega Manila, composed
      of:
    </p>
    <div className="row">
      <div className="campus-col">
        <img src="Images/ilocos.jpg" />
        <div className="layer">
          <h3> CENTRAL LUZON </h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="Images/manila.jpg" />
        <div className="layer">
          <h3> NCR &amp; CALABARZON </h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="Images/palawan.jpg" />
        <div className="layer">
          <h3> MIMAROPA </h3>
        </div>
      </div>
    </div>
  </section>
  {/*------ Call To Action --------*/}
  <section className="cta">
    <h1>
      Any Inquiries/Concerns?
      <br />
      Let Us Know!
    </h1>
    <a href="contact.html" className="mainbutton">
      CONTACT US
    </a>
  </section>
  {/*------ Footer --------*/}
  <section className="footer">
    <h4>About Us</h4>
    <p>
      Mister Bangus is a seafood-selling business rooted in Dagupan City.
      <br />
      Part of its earnings are also sent for a cancer patient's treatment.
    </p>
    <div className="icons">
      <a href="https://www.instagram.com/misterbangusfarmph/">
        <i className="fa fa-instagram"> Mister Bangus</i>
      </a>
    </div>
    <p>
      Made with <i className="fa fa-heart-o" /> by Cahate, Ravacio, Suelto,
      Urmenita{" "}
    </p>
    <p> © 2021 MISTER BANGUS </p>
  </section>
</>

  
  );
}

export default App;
