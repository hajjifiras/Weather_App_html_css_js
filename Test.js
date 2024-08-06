fetch(
  "https://api.geoapify.com/v1/ipinfo?apiKey=a773af5971da4c61be0b1a4bf88db3a4"
)
  .then((response) => response.json())
  .then((data) => {
    // You can now access the location data in the "data" object
    document.getElementById("result").value = data.city.names.en.slice(
      0,
      data.city.names.en.indexOf(" ")
    );
    test();
  });

function test() {
  const city = document.getElementById("result").value;
  const api_key = "7abe26c6a3fa21cbd0ccc61d21cfeb03";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      document.getElementById("result1").innerText = Math.round(temp) + "°C";

      const country = data.sys.country;
      document.getElementById("place").innerText = city + "," + country;

      const deg = data.wind.deg;
      const wind = data.wind.speed;
      document.getElementById("w").innerText =
        "Wind speed: " + Math.round(wind) + " Km/h, Degree: " + deg;

      const humidity = data.main.humidity;
      document.getElementById("h").innerText = "Humidity: " + humidity + "%";

      const description = data.weather[0].description;
      const main = data.weather[0].main;
      document.getElementById("dis").innerText = main + ", " + description;

      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
      const result2Element = document.getElementById("result2");

      // Check if an existing icon element exists
      const existingIcon = result2Element.querySelector("img");
      if (existingIcon) {
        // Replace the existing icon with a new one
        existingIcon.setAttribute("src", iconUrl);
      } else {
        // Create a new icon element and set its attributes
        const newIconElement = document.createElement("img");
        newIconElement.setAttribute("src", iconUrl);
        newIconElement.setAttribute("alt", "Weather Icon");

        // Append the new icon element to the result2 element
        result2Element.appendChild(newIconElement);
      }
    })
    .catch((error) => console.error(error));
}
