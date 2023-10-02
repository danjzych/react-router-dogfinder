"use strict";

const API_URL = "http://localhost:5001/dogs";

async function getDogData() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

module.exports = {
  getDogData,
};
