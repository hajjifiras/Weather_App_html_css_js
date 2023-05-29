const api = {
    "coord": {
        "lon": -3.7026,
        "lat": 40.4165
    },
    "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
    }],
    "base": "stations",
    "main": {
        "temp": 15.76,
        "feels_like": 15.48,
        "temp_min": 14.51,
        "temp_max": 16.73,
        "pressure": 1014,
        "humidity": 80
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.06,
        "deg": 50
    },
    "clouds": {
        "all": 75
    },
    "dt": 1684865916,
    "sys": {
        "type": 2,
        "id": 2007545,
        "country": "ES",
        "sunrise": 1684817544,
        "sunset": 1684870258
    },
    "timezone": 7200,
    "id": 3117735,
    "name": "Madrid",
    "cod": 200
};
function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
    } else {
      alert("Error: Geolocation is not supported on this browser.");
    }
  }
  
  function handleLocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  console.log(latitude+" "+longitude);
    // Use latitude and longitude values for further processing

  }
  
  function handleLocationError(error) {
    console.error(error);
  }
  
  // Call the function to get the user's location
console.log(getUserLocation());
  
  
  