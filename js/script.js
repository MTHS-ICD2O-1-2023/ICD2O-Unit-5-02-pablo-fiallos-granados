// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  let randomNumber = Math.floor(Math.random() * 6) + 1
  console.log(randomNumber)
  let positiveClicked = document.getElementById('on-check').checked
  // output
  if (positiveClicked == true) {
    document.getElementById("user-info").innerHTML =
      randomNumber
  } else {
    document.getElementById("user-info").innerHTML =
      -1 * randomNumber
  }
}
