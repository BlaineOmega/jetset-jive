module.exports = [
  {
    id: 1,
    no: "01",
    title: "Ideation",
    text: `We had to come up with an idea`,
    largeImg: "/img/news/idea.png",
    largeTitle: "We had a dream",
    poster: "",
    date: "05 June 2024",
    descriptions: (
      <>
        <p>
          Our team formed because we all wanted to build an app that helped people travel. 
          When we presented our original ideas to the class, all our ideas were based on travel. 
          We got together and decided to build an application based on our own ideas. 
          This allowed us to all work on something we were passionate about within the group project.  
        </p>
      </>
    ),
  },
  {
    id: 2,
    no: "02",
    title: "Sketches",
    text: `It's easier to draw things before you build them`,
    largeImg: "/img/news/pencil.png",
    largeTitle: "Creating hand drawn sketches helped with our process",
    poster: "Chloe Chen",
    date: "05 June 2024",
    descriptions: (
      <>
        <p>
          These are some of our sketches. This was where we brainstormed some basic ideas for our app. We created a large number of sketches and narrowed it down to the designs we liked. These sketches would eventually be modified throughout the process to fit the user’s needs.
        </p>
        <img src="/img/news/sketch1.png" alt="Sketch 1" style={{ width: '100%', height: 'auto' }} />
        <img src="/img/news/sketch2.png" alt="Sketch 2" style={{ width: '100%', height: 'auto' }} />

        <p>
          One of the key features we focused on was the outfit planning for our travel app. Below is a sketch of the outfit planning screen:
        </p>
        <img src="/img/news/outfit-sketch.jpg" alt="Outfit Planning Sketch" style={{ width: '100%', height: 'auto' }} />
        <p>
          This feature allows users to view suggested outfits for each day of their trip based on their itinerary and weather forecasts. Users can confirm the suggested outfit or edit it to better match their preferences. Once confirmed, the outfit is added to the packing list, ensuring that users have everything they need for their trip.
        </p>

      </>
    ),
  },
  {
    id: 3,
    no: "03",
    title: "Personas",
    text: `Who are we building this app for?`,
    largeImg: "/img/news/people.png",
    largeTitle: "Our Persona",
    poster: "Chloe",
    date: "05 June 2024",
    descriptions: (
      <>
      
        <p>
          Our primary persona is Juliana Silva, a recruiter at Amazon. She is 28 years old and lives in Los Angeles, CA.
        </p>
        <img src="/img/news/persona1.png" alt="Juliana Silva Persona" style={{ width: '100%', height: 'auto' }} />
        <p>
          <strong>Bio:</strong> Juliana holds a Bachelor's degree in Fashion Marketing. She is single and often travels with friends or for fashion events. Her interests include fashion, leisure travel, photography, and foodie adventures.
        </p>
        <p>
          <strong>Goals:</strong>
          <ul>
            <li>To discover and experience new cultures with a stylish approach.</li>
            <li>To find unique dining experiences that are both authentic and visually appealing.</li>
            <li>To always be appropriately dressed for the weather, occasion, and local fashion trends.</li>
            <li>To maximize credit card points when purchasing travel.</li>
          </ul>
        </p>
        <p>
          <strong>Pain Points:</strong>
          <ul>
            <li>Managing multiple apps for different aspects of travel planning.</li>
            <li>Finding authentic local fashion advice for each destination.</li>
            <li>Locating dining experiences that are as much about the atmosphere as they are about the food.</li>
          </ul>
        </p>
        <p>
          <strong>User Scenario:</strong> Juliana is preparing for a stylish week-long trip to Milan, where she'll enjoy fashion shows, boutique shopping, and local cuisine. She seeks chic yet practical outfits adaptable to Milan's changing spring weather. Additionally, she desires an app providing fashion tips, aligning with Milanese trends, and suggesting trendy dining spots.
        </p>
  
        <p>
          Our secondary persona is David Mac, a corporate lawyer. He is 49 years old and lives in New York, NY.
        </p>
        <img src="/img/news/persona2.png" alt="David Mac Persona" style={{ width: '100%', height: 'auto' }} />
        <p>
          <strong>Bio:</strong> David has a J.D. from a top law school. He is married with no children and enjoys business-related travel, networking, and professional development.
        </p>
        <p>
          <strong>Goals:</strong>
          <ul>
            <li>To plan and execute business trips with minimal disruption to his busy schedule.</li>
            <li>To maintain a polished and professional image through well-chosen business attire.</li>
            <li>To capitalize on credit card benefits to make the most of travel expenses.</li>
          </ul>
        </p>
        <p>
          <strong>Pain Points:</strong>
          <ul>
            <li>Inconvenience of using separate platforms for flight bookings, accommodations, and dining reservations.</li>
            <li>Last-minute changes to travel plans causing financial penalties.</li>
            <li>Ensuring wardrobe choices are appropriate for varying business contexts and climates.</li>
          </ul>
        </p>
        <p>
          <strong>User Scenario:</strong> David plans frequent business trips nationwide, 
          prioritizing preferred airlines and hotels to maximize corporate credit card benefits. He seeks
           dining venues suitable for business meetings in each city he visits. David would love an app that will assist in travel booking, suggest professional dining options, and offer wardrobe recommendations tailored to different climates and business attire standards.
        </p>


      </>
    ),
  },

  {
    id: 4,
    no: "04",
    title: "Paper Prototypes",
    text: `Paper prototypes was an interesting exercise`,
    largeImg: "/img/news/Prototype.png",
    largeTitle: "Time for arts and crafts...",
    poster: "Chloe Chen",
    date: "05 June 2024",
    descriptions: (
      <>
      <img src="/img/news/paperPrototype.png" alt="Juliana Silva Persona" style={{ width: '100%', height: 'auto' }} />
        <br/><br/>
       <p>
          Here are our paper prototypes which simulate how some of the main processes in our app would work. Here we made it interactive with buttons and popups to show users how our app would function. We would then receive feedback on how well our interactions are and improve them to cater more to our audience.
        </p>
        <p>
          E-Closet: <a href="https://imgur.com/a/e-closet-t2Tm9Qh">https://imgur.com/a/e-closet-t2Tm9Qh</a>
        </p>
        <p>
          User Preference: <a href="https://imgur.com/a/book-flight-LDGoShP">https://imgur.com/a/book-flight-LDGoShP</a>
        </p>
        <p>
          User preferences: <a href="https://imgur.com/a/onboarding-user-preferences-a9NeAjX">https://imgur.com/a/onboarding-user-preferences-a9NeAjX</a>
        </p>
        
      </>
    ),
  },
  {
    id: 5,
    no: "05",
    title: "Wireframes",
    text: `Building wireframes allowed us to better layout our application...`,
    largeImg: "/img/news/wireframe.png", // Update with correct path
    largeTitle: "Wireframes",
    poster: "Chloe Chen",
    date: "05 June 2024",
    descriptions: (
      <>
        <p>
          This is the step where we had some more detailed versions of our app. We have all the different pages laid out with the general text inputs, button sizes, and the overall structure of each page. We kept things simple with using mainly different shades of black and white so that we could focus on the shape and appearance of different pages of our app.
        </p>
        <img src="/img/news/wireFrameExample.png" alt="Wireframes" style={{ width: '100%', height: 'auto' }} />
        <br/><br/>
        <p>
          Wireframes: <a href="https://www.figma.com/design/QlNQteHVcHLBrOAsVZ4y3Y/JetsetJive-WireFrames?node-id=88-3022&t=tAWOXVHIltjMYqgn-1">https://www.figma.com/design/QlNQteHVcHLBrOAsVZ4y3Y/JetsetJive-WireFrames?node-id=88-3022&t=tAWOXVHIltjMYqgn-1</a>
        </p>

      </>
    ),
  },
  {
    id: 6,
    no: "06",
    title: "Site Map",
    text: `There is our app's site map.`,
    largeImg: "/img/news/sitemap_icon.png",
    poster: "Chloe Chen",
    date: "09 APRIL 2021",
    descriptions: (
      <>
        <p>
          This is a map of the different pages in our app. We have a login in the upper right where users would set up their preferences and then we have a flow for each major section of our app which are deciding flights, hotels, restaurants, outfits, and a profile page.
        </p>
        <img src="/img/news/sitemap.png" alt="Site Map" style={{ width: '100%', height: 'auto' }} />
        <br/><br/>
        <p>
          The app structure is as follows:
        </p>
        <ul>
          <li><strong>Welcome and Login:</strong> Users start with a welcome screen, proceed to login, and set up their preferences including user info, dining preferences, travel preferences, fashion preferences, and credit preferences.</li>
          <li><strong>Home:</strong> This is the main dashboard with navigation to all major sections of the app.</li>
          <li><strong>Flight Search:</strong> Users can search for flights by selecting the date, time, and location, choosing departing and returning flights, reviewing flight details, and completing the payment.</li>
          <li><strong>Hotel Booking:</strong> Users can search for hotels, view hotel information, and book their stay.</li>
          <li><strong>Dining Home:</strong> Users can search for restaurants, view restaurant details, and filter options by distance, cost, and rating.</li>
          <li><strong>E-closet Management:</strong> This includes managing outfits for trips, viewing planned outfits, and editing outfits. Users can upload images, take pictures, and manage their outfit lists.</li>
          <li><strong>My Account:</strong> Users can manage their travel, dining, and fashion preferences from their account settings.</li>
        </ul>

        <br/><br/>

        <p>You can view the map here: <a>https://miro.com/app/board/uXjVKKX1TFc=/?share_link_id=530050363442</a></p>
      </>
    ),
  },
  {
    id: 8,
    no: "08",
    title: "Final product",
    text: `The outcome of all our hard work`,
    largeImg: "/img/news/final.png",
    largeTitle: "Final product",
    poster: "HASAN ALI",
    date: "09 APRIL 2021",
    descriptions: (
      <>
        <p>
         These are the hi-fi prototypes of our app's flight booking feature that we created to get a clearer picture of what our app will look like and how it will function. 
         From the sketches, we can see that the flight search page has not evolved much compared to the flight review page where we added more necessary details that would be informative to our users. 
         The flight results page has been separated into two, one for departing flights and another for returning flights. When we were doing the paper prototype, 
         we realized that we needed to account for both the departing and returning flights and this was simply not a task we could accomplish with just one search result page. 
         It is also important to note that across the app, we have changed our navigation bar at the bottom of the screen to allow users to switch between the services offered in our app.
        </p>
       
      </>
    ),
  },
];
