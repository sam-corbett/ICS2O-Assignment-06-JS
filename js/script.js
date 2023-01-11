// Copyright (c) 2023 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-06-JS/sw.js", {
    scope: "/ICS2O-Assignment-06-JS/",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getCat = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData[0].url)
    document.getElementById("api-image").innerHTML = '<img src"https://cdn2.thecatapi.com/images/' + '@2x.png" alt="API image" class="center" width= 20% height 20%' +
      ">"



  } catch (err) {
    console.log(err)
  }
}

getCat("https://api.thecatapi.com/v1/images/search")