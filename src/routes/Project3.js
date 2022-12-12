import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Project3.css";

const publicURL = process.env.PUBLIC_URL;

export default function Project3() {
  // Source
  // https://www.w3schools.com/howto/howto_js_read_more.asp

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  return (
    <div className="projectContainer">
      <a id="back-to-top-anchor"></a>
      <Navbar title="Iterative Design" isProjectPage="true" />
      <div className="body-content">
        <br />
        <h2>Mooji Meats</h2>
        <div class="questions">
          <div>
            <ul>
              <li>
                Mooji Meats is a startup focused on creating the next generation of
                alternative meats
              </li>
              <li>
                With a custom 3D-print like process, Mooji Meats is able to create plant
                based meat without the tradeoff in taste, look, feel, and nutrition
              </li>
              <li id="logo">
                <span>
                  <img src={publicURL + "images/p3assets/logo.png"} />
                </span>
              </li>
              <li>
                This Project Encompasses 4 Main Parts, 3 Of Which Will be Shown On This
                Page
              </li>
              <ul>
                <li>
                  <b>Part 1: Sketching & Wireframing</b>
                </li>
                <li>
                  <b>Part 2: Mockups</b>
                </li>
                <li>
                  <b>Part 3: User Testing</b>
                </li>
                <li>Part 4: Contact The Startup</li>
              </ul>
            </ul>
          </div>
        </div>

        <h2>Part 1: Sketching & Wireframing</h2>
        <h4>
          To Get Some Ideas We Started By Making 13 Screen Sketches On What Mooji Meat's
          Website Could Be:
        </h4>
        <object
          data={publicURL + "images/p3assets/sketches.pdf"}
          type="application/pdf"
          id="pdfView"
        >
          <iframe
            src={`https://docs.google.com/viewer?url=${publicURL}images/p3assets/sketches.pdf&embedded=true`}
          ></iframe>
        </object>

        <br />
        <h4>Using These Sketches We Were Able To Consoloidate Our Design Into a Lofi</h4>
        <object
          data={publicURL + "images/p3assets/lofi.pdf"}
          type="application/pdf"
          id="pdfView"
        >
          <iframe
            src={`https://docs.google.com/viewer?url=${publicURL}images/p3assets/lofi.pdf&embedded=true`}
          ></iframe>
        </object>

        <br />
        <h2>Part 2: Mockups</h2>

        <h4>Using The Previous Lofi We Were Able to Make a Hifi Mockup!</h4>
        <object
          data={publicURL + "images/p3assets/hifi_org.pdf"}
          type="application/pdf"
          id="pdfView"
        >
          <iframe
            src={`https://docs.google.com/viewerurl=${publicURL}images/p3assets/hifi_org.pdfifi_org.pdf&embedded=true`}
          ></iframe>
        </object>

        <h4>We Then Received Critique From Our Peers!</h4>
        <p>
          A <b class="check">✔</b> means we fixed that feedback in our next hifi!
        </p>
        <div class="observations">
          <div>
            <ul>
              <li>Professional Critique:</li>
              <ul>
                <li>
                  Making a add to cart step instead of taking users directly to the
                  checkout page. <b class="check">✔</b>
                </li>
                <li>
                  Maybe make a small overlay to show what is currently in the user’s cart.
                </li>
                <li>
                  Rename the “order” tab to see your cart, or checkout{" "}
                  <b class="check">✔</b>
                </li>
                <li>
                  For Why mooji, try to add more visual assets to engage the user
                  <b class="check">✔</b>
                </li>
                <li>
                  Iconify, Splash - plugins to add visual assets <b class="check">✔</b>
                </li>
                <li>
                  Reduce the width of textboxes, make them slimmer and have a scroll bar
                  instead.
                </li>
              </ul>

              <br />
              <li>Peer Feedback:</li>
              <ul>
                <li>
                  Enhance spacing. Ex: the top and bottom margins are a little off.
                  Readjust
                </li>
                <li>
                  At the bottom, make the icons more consistent. <b class="check">✔</b>
                </li>
                <li>
                  There is a lot of white space. Incorporate more textboxes to provide
                  more relevant information.
                </li>
                <li>
                  On the landing page, put the name closer to the logo{" "}
                  <b class="check">✔</b>
                </li>

                <span id="dots">...</span>
                <span id="more">
                  <li>
                    On the order page, break it up into smaller phases instead of one big
                    page. <b class="check">✔</b>
                  </li>
                  <li>
                    Bold the headings on the why mooji page and combine some textboxes
                    <b class="check">✔</b>
                  </li>
                  <li>
                    Add some more pictures since it is advertising food. Maybe the farms,
                    process, 3D printing. Present more stories about how we get the food.
                    Make things look more delicious. <b class="check">✔</b>
                  </li>
                  <li>
                    On the payment page, if the payment address matches, make the address
                    input boxes disappear. - Also fixed the issue with other “Buy Now”
                    pages not connecting to the overlay <b class="check">✔</b>
                  </li>
                  <li>
                    Delete the drop shadow if we are not planning on making things
                    clickable on the why mooji page. <b class="check">✔</b>
                  </li>
                  <li>In the about us page, separate the texts more with text boxes</li>
                  <li>
                    Make the shopping cart more noticeable on the products page
                    <b class="check">✔</b>
                  </li>
                  <li>
                    Add logo and formatting on the navBar to help with branding and
                    memorability <b class="check">✔</b>
                  </li>
                  <li>
                    On the products page, make a “add to cart” button instead of having
                    the shopping cart directly take you to the checkout screen
                  </li>
                </span>
                <br />
                <button
                  onClick={() => {
                    myFunction();
                  }}
                  id="myBtn"
                >
                  Read more
                </button>
              </ul>
            </ul>
          </div>
        </div>

        <br />
        <h4>After Following the Critique We Received We Made This Updated Hifi!</h4>
        <video controls>
          <source src={publicURL + "images/p3assets/demo.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h4>Below Is Also a PDF Version</h4>
        <object
          data={publicURL + "images/p3assets/hifi_new.pdf"}
          type="application/pdf"
          id="pdfView"
        >
          <iframe
            src={`https://docs.google.com/viewerurl=${publicURL}images/p3assets/hifi_new.pdf&embedded=true`}
          ></iframe>
        </object>

        <br />
        <h2>Part 3: User Testing</h2>

        <h4>
          Using UserTesting.com We Conducted User Testing By Giving Them This Overarching
          Task
        </h4>
        <div class="questions">
          <div>
            <ul>
              <li>
                <b>Overarching Task</b>
              </li>
              <ul>
                <li>
                  Imagine you are a recently converted vegan who is craving meat and
                  interested in finding a vegan meat alternative. Navigate to the 'Why
                  Mooji?' page and summarize the main benefits of Mooji meat products.
                </li>
                <li>
                  Afterwards, navigate to the shopping cart and order the existing item in
                  the cart. Since this is an interactive mock-up, there will be a
                  pre-filled item present there for you to checkout. Please think aloud as
                  you perform these tasks, describing your thought process as you navigate
                  and interact with each page
                </li>
                <li>
                  This is not an actual website, but an interactive mockup made on a
                  prototyping software.
                </li>
              </ul>
              <li><b>Extra Tasks</b></li>
              <ul>
                <li>
                  Task 1: Without leaving the homepage, what are your initial impressions
                  of the website? Explain your answer.
                </li>
                <li>
                  Task 2: Without leaving this page, in your own words, describe what do
                  you think you can do on this website.
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <h4>Testing Results</h4>
        <div class="questions">
          <div>
            <ul>
              <li>
                <b>Users</b>
              </li>
              <ul>
                <li>
                  <b>User1:</b> completed all tasks, no errors, told us to fix payment
                  page, understood the company after the home page and got the general
                  concept of the mock up
                </li>
                <li>
                  <b>User2:</b> didn’t complete the task, understood the company after
                  looking at homepage
                </li>
                <li>
                  <b>User3:</b> understood the company after looking at the homepage,
                  understood the concept of the mock up, completed the checkout
                  successfully
                </li>
              </ul>
              <li>
                <b>Summary</b>
              </li>
              <ul>
                All of the users had a good understanding of what the company was about
                and the main problem that we were trying to solve. They were able to
                correctly identify the main purpose of the website (buying alternative
                meats) without leaving the homepage, and they were able to navigate to the
                correct pages to do so. One of the main errors we saw was during the
                actual checkout process, where a common complaint was that the page was
                rather overwhelming. This was actually in line with our expectations,
                since that was the same feedback we received from the studio critiques. To
                address this, we did make some changes to the final interface, splitting
                up the checkout section into multiple pages so that the user does not feel
                as overwhelmed. Overall, the user testing did line up with our
                expectations and the users did well in most of their tasks.
              </ul>
            </ul>
          </div>
        </div>

        <h4>User Testing Video Links!</h4>
        <div class="questions">
          <div>
            <ul>
              <li>
                <a href={publicURL + "images/p3assets/userTest1.mp4"} target="_blank">
                  User Test 1 Video
                </a>
              </li>
              <li>
                <a href={publicURL + "images/p3assets/userTest2.mp4"} target="_blank">
                  User Test 2 Video
                </a>
              </li>
              <li>
                <a href={publicURL + "images/p3assets/userTest3.mp4"} target="_blank">
                  User Test 3 Video
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
