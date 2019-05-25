Bundle App
Help people who don't travel often or are going somewhere new to feel less anxious about preparing and packing right for the trip. Our app helps with managing overall details of the trip and packing from one hub.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents
* **[Usage and Installation](#usage-and-installation)**

### Usage and Installation
In /src rename * **`firebaseConfigExample`** to * **`firebaseConfig`** and replace the Firebase Configurations with your own.

```
export default {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
```

In /src rename * **`configExample.json`** to * **`config.json`** and replace the API configurations with your own.

```
// Map Quest API used to parse city name into longitude and latitude coordinates
// Dark Sky API to get the weather 
{
    "MQ_API_KEY":"",
    "DARKSKY_API_KEY":""
}
```
