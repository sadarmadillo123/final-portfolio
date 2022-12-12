import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Project2.css";
export default function Project2() {
  return (
    <div className="projectContainer">
      <a id="back-to-top-anchor"></a>
      <Navbar title="Responsive Redesign" isProjectPage="true" />
      <div id="project-content-container">
        <div id="overview" class="section">
          <h3>Overview</h3>
          <div class="section-row-flush-left">
            <p>
              The goal of this project was to resdesign a simple website with an emphasis
              on making the resdesigned page responsive for different screen sizes. The
              workflow consisted of identifying usability problems, generating wireframes
              and prototypes at different screen sizes to address those issues, and
              finally creating the actual responsive webpage using HTML and CSS.
            </p>
          </div>
          <p>
            The website I chose to examine was the 'Cupcakes' page for Toronto Cupcakes, a
            bakery based in Toronto, Ontario that specializes in selling various kinds of
            cupcakes. I chose the webpage because I was drawn to the product, but felt the
            site was difficult to use and had a lackluster presentation overall.
          </p>
          <div class="section-row-space-evenly">
            <figure style={{ marginTop: "1rem" }}>
              <img
                class="zoom-img"
                src={process.env.PUBLIC_URL + "/images/p2assets/toronto-cupcakes.PNG"}
                width="760.5px"
                height="1300px"
              />
              <figcaption>
                Fig 1) This is a partial screenshot of the original website. Hover for a
                closer look or {""}
                <a href="https://www.torontocupcake.com/cupcakes.html" target="_blank">
                  <b>click here</b>
                </a>{" "}
                {""}
                to view the full page!
              </figcaption>
            </figure>
          </div>
        </div>

        <div id="part1" class="section">
          <h3>Part 1: Identifying Usability Problems</h3>

          <div class="section-row-flush-left">
            <h4>Usability Issues:</h4>
            <ol style={{ marginTop: "0.3em" }}>
              <li>
                The website design makes shopping a tedious process. Each individual
                product has an associated <b>"Add to Cart"</b> button, but multiple items
                cannot be added to the cart at the same time without leaving the shopping
                page. As shown below, clicking any of the individual <b>"Add to Cart"</b>{" "}
                buttons makes the user navigate away from the shopping page to the cart
                page, where the selected price and quantity is shown only for
                <b>
                  <u>that specific item</u>
                </b>
                .
                <figure>
                  <div
                    style={{
                      "display": "flex",
                      "alignItems": "center",
                      "justifyContent": "center",
                      "marginTop": "0.6rem",
                    }}
                  >
                    <div style={{ "marginRight": "1rem", "position": "relative" }}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/p2assets/beforeclick.PNG"}
                        height="230px"
                        style={{ display: "block" }}
                      />
                      <i
                        id="cursor"
                        class="fa-solid fa-arrow-pointer fa-sm"
                        style={{
                          "position": "absolute",
                          "bottom": "15px",
                          "left": "120px",
                        }}
                      ></i>
                    </div>

                    <i class="fa-solid fa-angles-right"></i>

                    <i class="fa-solid fa-angles-right"></i>

                    <div style={{ marginLeft: "1rem" }}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/p2assets/afterclick.PNG"}
                        height="230px"
                      />
                    </div>
                  </div>
                  <figcaption>
                    Fig 2) This figure shows how anytime you add to cart, it takes you
                    directly to the cart page. This behavior is acceptable for smaller
                    orders, but for orders with multiple types of cupcakes it can be quite
                    annoying to navigate back and forth for each type of item.
                  </figcaption>
                </figure>
              </li>
              <li>
                There are also clear formatting issues on various screen sizes. The
                website is not responsive, which makes it even more difficult to use for
                mobile users.
                <ul>
                  <li>
                    The cupcakes in the shop are often misaligned in various ways, which
                    could lead to users think there are missing entries and overall
                    contributes to visual clutter.
                  </li>
                  <li>
                    Additionally, there are buttons that take you to top of the page, but
                    they also have inconsistent formatting. On smaller screens, there are
                    an unncessary amount of these icons.
                  </li>
                  <div
                    style={{
                      "display": "flex",
                      "justifyContent": "space-evenly",
                      "marginTop": "1em",
                    }}
                  >
                    <figure>
                      <img
                        class="zoom-img-small"
                        src={process.env.PUBLIC_URL + "/images/p2assets/weird_image2.PNG"}
                        height="430px"
                      />
                      <figcaption>
                        Fig 3) Formatting issue on a smaller screen size, ideally all
                        items are aligned.
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        class="zoom-img-small"
                        src={process.env.PUBLIC_URL + "/images/p2assets/weird_image.PNG"}
                        height="430px"
                      />
                      <figcaption>
                        Fig 4) Similar formatting problem. Notice also the repeated "to
                        top" buttons for each cupcake.
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        class="zoom-img-small"
                        src={process.env.PUBLIC_URL + "/images/p2assets/weird_image3.PNG"}
                        height="430px"
                      />
                      <figcaption>
                        Fig 5) Formatting issue on a slightly larger screen size. Here
                        there are no missing cupcakes but the rows are awkwardly aligned.
                      </figcaption>
                    </figure>
                  </div>
                </ul>
              </li>

              <li>
                The visual hierarchy between different elements/sections in the webpage is
                also unclear at times due to similarities in the header font style and
                size.
                <div style={{ "display": "flex", "justifyContent": "center" }}>
                  <figure>
                    <img
                      class="zoom-img"
                      src={process.env.PUBLIC_URL + "/images/p2assets/h1vsh2.PNG"}
                    />
                  </figure>
                </div>
              </li>

              <li>
                The website consistently displays images for each cupcake, but less
                attention is given to displaying the price or availability of each
                cupcake, particularly for seasonal/holiday cupcakes. Prices are often
                shown at the top of each section, but the pricing of cupcakes can get
                confusing when cupcakes belonging to the same section have different
                prices.
                <figure style={{ width: "100%" }}>
                  <div
                    style={{
                      "display": "flex",
                      "justifyContent": "space-evenly",
                      "marginTop": "1em",
                      "width": "100%",
                    }}
                  >
                    <img
                      class="zoom-img"
                      src={process.env.PUBLIC_URL + "/images/p2assets/price1.PNG"}
                      height="300px"
                    />
                    <img
                      class="zoom-img"
                      src={process.env.PUBLIC_URL + "/images/p2assets/price2.PNG"}
                      height="300px"
                    />
                    <img
                      class="zoom-img"
                      src={process.env.PUBLIC_URL + "/images/p2assets/price3.PNG"}
                      height="300px"
                    />
                  </div>
                  <figcaption>
                    Fig 7) Here are two cupcakes adjacent to each other, so we might
                    expect their prices are the same. If we click on the image however,
                    there is another description which shows us that the two actually have
                    different prices.
                  </figcaption>
                </figure>
              </li>
            </ol>
          </div>
        </div>

        <div id="part2" class="section">
          <h3>Part 2 Visual Redesign:</h3>
          <div class="section-row-flush-left">
            <p>
              To start the redesign process I began created lo-fi wireframes targeted
              towards addressing the 4 main usability issues discussed above. The
              annotated yellow numbers <b>1-4</b> highlight changes to the layout that
              address the associated usability concerns (above).
            </p>
          </div>
          <h4>
            <i>Low-Fidelity Wireframing</i>
          </h4>
          <div class="section-row-space-evenly">
            <img
              class="zoom-img"
              src={process.env.PUBLIC_URL + "/images/p2assets/lofi-browser.PNG"}
              height="550px"
            />
            <img
              class="zoom-img"
              src={process.env.PUBLIC_URL + "/images/p2assets/lofi-tablet.PNG"}
              height="550px"
            />
            <img
              class="zoom-img"
              src={process.env.PUBLIC_URL + "/images/p2assets/lofi-phone.PNG"}
              height="550px"
            />
          </div>

          <div class="section-row-flush-left">
            <ol>
              <li>
                <h4>Shopping for Multiple Items</h4>
                <p style={{ marginTop: "0.2rem" }}>
                  To address the usability issues relating to the shopping experience, I
                  redesigned the previous "add to cart" functionality. Instead of forcing
                  the user to navigate to the shopping cart for each cupcake, I instead
                  make it so that adding an element to cart the cart reflects in the
                  shopping cart (located in the top right corner of each screen).
                </p>
                <p>
                  In order to add an item to cart, the user first clicks on an item that
                  interests them which displays a corresponding pop-up. The user can then
                  select the quantity of that item to add to cart
                  <b>without leaving the screen</b>. Closing the pop-up will allow the
                  user to continue browsing and later checkout all items at once. There
                  would be also be a red-bubble by the shopping cart that would count the
                  number of items in the cart as users make updates.
                </p>
                <div
                  style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "marginTop": "1rem",
                  }}
                >
                  <img
                    class="zoom-img-large"
                    src={process.env.PUBLIC_URL + "/images/p2assets/lofi-popup.PNG"}
                  />
                </div>
              </li>
              <li>
                <h4>Layout and Responsiveness</h4>
                <p style={{ marginTop: "0.2rem" }}>
                  To address responsiveness issues, I highlighted the grid-like layout of
                  store elements at different screen sizes. Items in the store should not
                  be misaligned or appear to be missing at various screen sizes, as
                  mentioned previously.
                </p>
                <p>
                  Additionally, also note that the <b>"back to top"</b> icon is only
                  included at the end of every section rather than being placed next to
                  each cupcake.
                </p>
              </li>
              <li>
                <h4>Visual Hierarchy</h4>
                <p style={{ marginTop: "0.2rem" }}>
                  To address visual hiearchy, I established clear sections with whitespace
                  between each to demarcate each type of cupcake. This prevents issues
                  mentioned before where similarly styled headers are placed directly next
                  to each other in the document. Each type of cupcake is in its own
                  rectangular section, which clearly separates the different types of
                  cupcakes from each other as well.
                </p>
              </li>
              <li>
                <h4>Pricing Information</h4>I made an effort to make pricing information
                available to the customer wherever possible. This means pricing
                information is present for each store item, and additionally when each
                item is clicked and the associated pop-up is displayed. When elements are
                added to the cart, the cart total should be shown along with the
                additional cost of adding the selected item (before the user chooses to do
                so).
              </li>
            </ol>
          </div>

          <h4>
            <i>Visual Design Style Guide:</i>
          </h4>

          <div style={{ "marginTop": "0.8rem, display: flex, justify-content: center" }}>
            <figure>
              <img
                class="zoom-img-large"
                src={
                  process.env.PUBLIC_URL + "/images/p2assets/visualdesignstyleguide.PNG"
                }
              />
              <figcaption>
                Fig 8) Visual design guide detailing the main re-usable components for the
                Hi-Fi Figma Prototype.
              </figcaption>
            </figure>
          </div>
        </div>

        <h4>
          <i>Hi-Fi Prototyping:</i>
        </h4>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            class="zoom-img-large"
            src={process.env.PUBLIC_URL + "/images/p2assets/hifi-browser.PNG"}
            style={{ marginTop: "3rem" }}
          />
          <img
            class="zoom-img-large"
            src={process.env.PUBLIC_URL + "/images/p2assets/hifi-tablet.PNG"}
            style={{ marginTop: "3rem" }}
          />
          <img
            class="zoom-img-large"
            src={process.env.PUBLIC_URL + "/images/p2assets/hifi-phone.PNG"}
            style={{ marginTop: "3rem" }}
          />
        </div>
        <p>
          Overall the hi-fi prototypes rely primarily on flexboxes for responsiveness at
          different screen sizes, with the interaction between store sections and store
          items being the most critical. Looking at the desktop hi-fi, you see how store
          items are created with a flex-basis: 1 1 0%. This ensures that all of the
          store-items in the store-container flex-box have consistent sizing.
          Additionally, the store-container flex-box has a wrapping property and even
          spacing along each row, so when three items can no longer fit on the page, the
          container naturally shrinks to holding two or even one items in the case with
          the phone.
        </p>

        <p>
          Many of the other changes are primarily quality of life changes, with additional
          hover states and tricks like using @media queries to show a different number of
          cupcake logos depending on the screen size.
        </p>

        <div id="part3" class="section">
          <h3>Part 3: Responsive Redesign</h3>
          <strong>
            Click {""}
            <a
              href="https://sadarmadillo123.github.io/responsive-redesign/"
              target="_blank"
            >
              here
            </a>{" "}
            {""}
            to see the redesigned website!
          </strong>
        </div>
      </div>
      <Footer />
    </div>
  );
}
