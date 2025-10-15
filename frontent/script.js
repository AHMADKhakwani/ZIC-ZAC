const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".temp_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);

let target = "London";

const fetchResults = async (targetLocation) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=a6d1a318432b45cf8ff142137251310&q=${targetLocation}&aqi=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      alert("City not found! Try again.");
      return;
    }

    const locationName = data.location.name;
    const time = data.location.localtime;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;

    updateDetails(temp, locationName, time, condition);
  } catch (error) {
    console.error(error);
    alert("Could not fetch data. Please check your connection or API key.");
  }
};

function updateDetails(temp, locationName, time, condition) {
  temperatureField.innerText = `${temp}°C`;
  locationField.innerText = locationName;
  dateandTimeField.innerText = time;
  conditionField.innerText = condition;
}

function searchForLocation(e) {
  e.preventDefault();
  target = searchField.value.trim();
  if (target !== "") {
    fetchResults(target);
  }
}

fetchResults(target);
