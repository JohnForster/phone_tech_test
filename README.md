# John Forster Vodafone Tech Test
A simple React application that displays a phone, along with colour and capacity options. A monthly and up front price is generated when a colour and capacity are chosen.

## Usage
Visit http://vodafone-tech-test.herokuapp.com or alternatively:
* Clone this repo and navigate to the folder on your local machine.
* Run `npm install` (requires Node to be installed)
* Run `npm start`
* If it doesn't open automatically, navigate to `localhost:3000` in your browser.

## Decisions
#### React
My initial thought was to write this app in React, as it is the technology I have used most recently. After some thought I realised that this might be unnecessary, and that it could be achieved simply with javascript and jQuery, without having to use node or react at all. This approach would bring a number of advantages. Firstly, the lack of node would mean that the stack would be much simpler, requiring only jquery and a testing framework. Secondly, testing would be simpler as well, as there would be no need to use additional technologies such as enzyme, which I had little experience with.

Despite the attractiveness of using such a simple stack, I ultimately decided that React would allow me to write more dynamic and reusable code, as the individual components could be used elsewhere. React's use of the virtual DOM also meant that if expanded, the application would run more efficiently. Additionally, it seemed more relevant to the position I was applying for.

#### Testing
I chose Jest for testing, as this is the framework I have had the most experience with, and is included when building a simple react application with `create-react-app`, requiring additional set up.

I also used Enzyme for snapshot testing, and jest-enzyme to allow usage of matchers such as `toHaveStyle()`

## Process
#### Step 0 - Mock Up
In order to get a feel for how the app would fit together, I generated a basic HTML/CSS skeleton for each component in a separate repo, and added a black border for visualisation.

<a href="https://drive.google.com/uc?id=1OlcVP20GAd_3HJqmbhcvBcZqRpP66Cj8"><img  src="https://drive.google.com/uc?id=1OlcVP20GAd_3HJqmbhcvBcZqRpP66Cj8" width=400/></a>
<a href="https://drive.google.com/uc?id=1lxwmRCub7y_0NTB1-4HQQWa14VuoDfw9"><img src="https://drive.google.com/uc?id=1lxwmRCub7y_0NTB1-4HQQWa14VuoDfw9" width=400/></a>

#### Step 1 - OfferContainer
The first step was to create the outside container for the offers. I decided not to put the Image, Specifications and Price directly into the App, as this reduces how reusable the components are. Instead I created an OfferContainer component, which would contain a separate ImageContainer and SpecsContainer, allowing easy modification to allow multiple phones to be displayed within one page.

#### Step 2 - ImageContainer
I wanted as much of the state as possible to be contained within the OfferContainer component, and so decided that the ImageContainer would take the device to be displayed, and the ID of the desired image, but not store them as state. This means that multiple images could be included within the MerchandisingMedia field of the phone data json, and the desired image can be specified when calling the ImageContainer component.

#### Step 3 - SpecsContainer
The Specs container was designed to carry the rest of the information about the chosen phone, including the name, rating, description, colour selection, capacity selection and price. These would be further broken down into components to keep ensure that the single responsibility principle was maintained.

#### Step 4 - Selectors
Two selector components were created, for the colour and memory capacity of the phone. These took functions as props which were executed on selection. Functions were passed down as props from the OfferContainer into the selectors that could change the current device, by selecting specific colors or storage capacities.

#### Step 5 - PriceContainer
A simple price container was created to display the upfront and monthly costs, which were determined from the current device.

#### Step 6 - Rating
The star rating component was added that converts the given rating into a percentage, and sets that as the width for a set of red stars overlaid over grey stars in the background.

The final product looks like this:

<a href="https://drive.google.com/uc?id=1na8pTirKya5ZGziv0ZkPBVKdwpKkdxgy"><img  src="https://drive.google.com/uc?id=1na8pTirKya5ZGziv0ZkPBVKdwpKkdxgy" width=400/></a>

#### Step 7 - Adapting for Mobile
While I was happy with the way the app looked, it didn't scale properly when viewed on a mobile device, so I adjusted the css of a few files to better allow scaling.

This can be seen below:

<a align="center" href="https://drive.google.com/uc?id=1ap7leHhRcACwhJz-dYlannoFoyX3lRP_"><img src="https://drive.google.com/uc?id=1ap7leHhRcACwhJz-dYlannoFoyX3lRP_" width=300/></a>


