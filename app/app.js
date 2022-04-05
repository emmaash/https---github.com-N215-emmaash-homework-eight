var homeContent = `<div class="hero"></div>

<div class="content">
  <div class="products">
    <div class="product">
      <div class="prod-desc">
        <h4>Wedding invitations for your wondrous day</h4>
        <p>
          Paper and passion go hand in hand. Explore designs for every
          style of celebration and make them distinctly yours. Shop
          wedding invitations
        </p>
        <a href="#">Shop wedding invitations</a>
      </div>
      <div class="prod-image1"></div>
    </div>
  </div>

  <div class="products">
    <div class="product">
      <div class="prod-image2"></div>
      <div class="prod-desc">
        <h4>Greeting Cards</h4>
        <p>
          Send a little love in the mail with our personalized greeting
          cards. Add a photo to make them extra special or choose an
          illustrated design by our family of artists.
        </p>
        <a href="#">Shop greeting cards</a>
      </div>
    </div>
  </div>
</div>`;
var aboutContent = `
<div class="about-header-text">
  <p>ABOUT PAPIER</p>
  <h1>Stationery as a space to become</h1>
  <p>
    Since 2015, we've created stationery that invites curiosity and
    contemplation. In every piece of Papier is the promise of what's to
    come, the endless possibilities of a blank page.
  </p>
</div>
<div class="about-hero"></div>

<div class="about">
  <div class="products">
    <div class="product">
      <div class="prod-image1"></div>
      <div class="prod-desc">
        <h4>The artistic friends we collaborate with</h4>
        <p>
          Alongside our in-house collections, we collaborate with
          bright, up-and-coming artists, iconic brands and exciting
          fashion labels. They're all fellow paper people whose varied
          creative talents bring a magical touch to our stationery.
        </p>
      </div>
    </div>
  </div>

  <div class="products">
    <div class="product">
      <div class="prod-desc">
        <h4>Striving for sustainability</h4>
        <p>
          From made-to-order products (which means reduced waste and
          carbon emissions) to sustainably sourced paper and recyclable
          packaging, we've made decisions and efforts to lessen our
          footprint since the very beginning. And we're constantly
          looking for ways to improve.
        </p>
      </div>
      <div class="prod-image2"></div>
    </div>
  </div>

  <div class="about-end"></div>
</div>`;
var productsContent = ` <div class="about-header-text">
<h1>Personalized Notebooks & Journals</h1>
<p>
  Pages of potential. Our notebooks are yours to fill with whatever
  you fancy, from little to-dos to big dreams. How it looks is up to
  you – pick your print, then choose from lined, dotted or plain
  paper. Personalize the cover with your name or any words that
  inspire.
</p>
</div>
<div class="hero"></div>

<div class="product">
<div class="prod-image1"></div>
<div class="prod-desc">
  <div class="small-image"></div>
  <div class="bloom-price">
    <p>Bloom</p>
    <p>$32.99</p>
  </div>
</div>
</div>

<div class="products-page">
<div class="journals">
  <div class="image1"></div>
  <div class="image2"></div>
  <div class="image3"></div>
</div>
</div>`;
var contactContent = `<div class="contact-header-text">
<h1>Contact Customer Service</h1>
<p>Our lovely team are on hand to help</p>
</div>

<div class="contact">
<div class="email">
  <div class="text1"><h1>Email us</h1></div>
  <div class="text2">
    <p>
      Click here to email us. We'll get back to you in 12-24 hours,
      Monday to Friday
    </p>
  </div>
</div>
<div class="email">
  <div class="text1"><h1>Live chat with us</h1></div>
  <div class="text2">
    <p>
      Please use the black live chat button in the bottom right corner
      to talk to a member of the team
    </p>
  </div>
</div>
<div class="email">
  <div class="text1"><h1>Message us on Whatsapp</h1></div>
  <div class="text2">
    <p>
      Click here. We'll get back to you in 12-24 hours, Monday to
      Friday
    </p>
  </div>
</div>
</div>`;


function initListeners(){
    $("nav a").click(function (e) {
        let btnID = e.currentTarget.id;
        loadPageContent(btnID);

       
        // console.log("click" + contentID);
    });
}

function loadPageContent(pageName){
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));


}

function initApp(){
    initListeners();
}

$(document).ready(function(){
    loadPageContent("home");
    initApp();


});

