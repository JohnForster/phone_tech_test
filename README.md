## John Forster Vodafone Tech Test
A simple React application that displays a phone, along with colour and capacity options. A monthly and up front price is generated when a colour and capacity are chosen.

## Usage
Visit **\<enter heroku url here\>** or alternatively:
* Clone this repo and navigate to the folder on your local machine.
* Run npm install (requires Node to be installed)
* Run npm start
* If it doesn't open automatically, navigate to localhost:3000 in your browser.

## Decisions
#### React
My initial thought was to write this app in React, as it is the technology I have used most recently. After some thought I realised that this might be unnecessary, and that it could be achieved simply with javascript and jQuery, without having to use node or react at all. This approach would bring a number of advantages. Firstly, the lack of node would mean that the stack would be much simpler, requiring only jquery and a testing framework. Secondly, testing would be simpler as well, as there would be no need to use additional technologies such as enzyme, which I had little experience with.

Despite the attractiveness of using such a simple stack, I ultimately decided that React would allow me to write more dynamic and reusable code, as the individual components could be used elsewhere. React's use of the virtual DOM also meant that if expanded, the application would run more efficiently. Additionally, it seemed more relevant to the position I was applying for.

#### Testing
I chose Jest for testing, as this is the framework I have had the most experience with, and is included when building a simple react application with `create-react-app`, requiring additional set up.

I also used Enzyme for snapshot testing.

## Process
#### Step 0 - Mock Up
In order to get a feel for how the app would fit together, I generated a basic HTML/CSS skeleton for each component in a separate repo, and added a black border for visualisation.

#### Step 1 - OfferContainer
The first step was to create the outside container for the offers. I decided not to put the Image, Specifications and Price directly into the App, as this reduces how reusable the components are. Instead I created an OfferContainer component, which would contain a separate ImageContainer and SpecsContainer, allowing easy modification to allow multiple phones to be displayed within one page.

#### Step 2 - ImageContainer
I wanted as much of the state as possible to be contained within the OfferContainer component, and so decided that the ImageContainer would take the device to be displayed, and the ID of the desired image, but not store them as state. This means that multiple images could be included within the MerchandisingMedia field of the phone data json, and the desired image can be specified when calling the ImageContainer component.

#### Step 3 - SpecsContainer
The Specs container was designed to carry the rest of the information about the chosen phone, including the name, rating, description, colour selection, capacity selection and price. These would be further broken down into components to keep ensure that the single responsibility principle was maintained.

#### Step 4 - Selectors
Two selector components were created, for the colour and memory capacity of the phone. These took functions as props which were executed on selection. Functions within the OfferContainer component that could change the phone by selection were passed down into the selectors as props.


<a href="https://preview.ibb.co/mcAYep/mock_up.png"><img  src="https://preview.ibb.co/mcAYep/mock_up.png" width=350/></a>
<a href="https://preview.ibb.co/hOVAQU/mock_up_code.png"><img src="https://preview.ibb.co/hOVAQU/mock_up_code.png" width=350/></a>


