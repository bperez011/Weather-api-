let weatherAPIkey = 'fbf6b4b529599f770b43ac74a42846';
let weatheBaseEndpoint = 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid='+ weatherAPIkey;

let getWeatherbycityname = async (city) => {
     let endpoint = weatheBaseEndpoint = "q=" = city;
     let response = await fetch(endpoint);

     console.log(response);
}

getWeatherbycityname('userimput');