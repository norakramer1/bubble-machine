# Bubble Machine

The Bubble Machine is an online simulation that displays how disinformation through social networks influences the creation of filter bubbles. The API is developed by *Marcio Fuckner*, a researcher at the university of applied sciences of Amsterdam.

For this project we used his API and made the front-end interface together with students from the minor *User Experience Design*. The goal is to give journalists a clear and nice experience when using this tool.

## Table of contents

- [Bubble Machine](#bubble-machine)
  - [Table of contents](#table-of-contents)
  - [Design challenge](#design-challenge)
  - [The final product](#the-final-product)
    - [How does it work](#how-does-it-work)
  - [Installation](#installation)
  - [License](#license)

## Design challenge

>The Responsible IT computer model is currently not accessible to the public. The resulting outcome of this project is a public web application that is a pleasure to use. The researchers have created a web API and data source for the model. Students from the minor User Experience design will design the User Experience and a UI.
>
>Develop a interactive, instructive an intuitive web application with the API. By running the simulator with different parameters, users can visualise, compare and analyse the consequence of combining various factors.

## The final product

This is the final interface of our assignment. Because the API changed last minute we weren't able to fully incorporate all the features we had plannend.

![Overview](/docs/assets/initial.png)

### How does it work

The first step is to make a session with the desired parameters. Which looks like this.

![View with parameters](/docs/assets/parameters.png)

After that you run the simulation. If everything is working accordingly you'll see the persons moving.

![Gif of animated graph]()

It is possible to hover over nodes to see the connected nodes. Which looks like this.

![Node hover](/docs/assets/nodes.png)

## Installation

1. Clone this repository.
2. In your terminal, go to the repository folder and write `npm install`
3. Write `npm start` in your terminal
4. go to [localhost:4100](localhost:4100) in your browser

## License

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)
