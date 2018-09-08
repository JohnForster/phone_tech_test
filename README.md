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

<a href="https://preview.ibb.co/mcAYep/mock_up.png"><img  src="https://preview.ibb.co/mcAYep/mock_up.png" width=350/></a>
<a href="https://preview.ibb.co/hOVAQU/mock_up_code.png"><img src="https://preview.ibb.co/hOVAQU/mock_up_code.png" width=350/></a>


