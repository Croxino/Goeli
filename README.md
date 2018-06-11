Readme.md

# Goeli Library

My very first library, currently very basic. Will expand further with more options when knowledge of Javascript improves.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Jquery Library is needed which you can find on their official site [https://code.jquery.com/](https://code.jquery.com/)

### Installing

Simply download the Javascript file and link it to your HTML.

## Features

calling the .jump and bounce function in your html.

Jump  
![jump](https://i.imgur.com/OqAd1fJ.gif)

Bounce  
![bounce](https://i.imgur.com/DPD034u.gif)

## Usage

For the bounce and jump function simply add this in your script tags

```
`$(HTMLelement).jump(bounceheight);`
or
`$().bounce(bounceheight);`

```

for example

`$("img").jump("100px");`

To use the bounce function you need to add “bounceimg” as ID to the element you want to bounce.

## Demo

[Demo](http://i373610.hera.fhict.nl/S4/Library/index.html)


## Built With

-   [Jquery](https://jquery.com/) \- The web library used.

## Authors

-   **Goeli Cheng** \- _Initial work_

## Acknowledgments

-   LearnCode.academy channel for teaching me how to use Jquery
