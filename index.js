const climates = ['Despejado', 'Nublado', 'Lluvioso'];

        function getWeather() {

            let randomNumber = Math.floor(Math.random() * 3);
            let climate = climates[randomNumber];
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (true) {
                        resolve(climate);
                    }
                    else {
                        reject(Error("No se pudo obtener la informacion del clima"));
                    }
                }, 2000);
            });
        }

        function getTemperature() {
            let min = 5;
            let max = 30;
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

            return randomNum + "\u2103";
        }

        function consultWeather() {
            const timeOfDay = ["Ma\u00F1ana", "Tarde", "Noche"];
            let displayWeather = document.getElementById('display-weather');

            displayWeather.innerHTML = "";

            for (let i = 0; i < 3; i++) {
                // create weather
                const weatherContainer = document.createElement('div');
                weatherContainer.classList.add('weather-container');
                displayWeather.appendChild(weatherContainer);

                const timeWeather = document.createElement('p');
                timeWeather.textContent = timeOfDay[i];
                timeWeather.classList.add('time-weather');
                weatherContainer.appendChild(timeWeather);

                getWeather().then(res => {
                    const infoWeather = document.createElement('p');
                    infoWeather.textContent = res + " " + getTemperature();
                    infoWeather.classList.add('info-weather');
                    weatherContainer.appendChild(infoWeather);
                }).catch(err => {
                    alert("No se pudo obtener la informacion del clima");
                });
            }
        }

        document.getElementById('consult-button').addEventListener('click', function() {
            let weatherDate = document.getElementById('weather-date');
            
            if (weatherDate.value === "") {
                alert("Selecione una fecha");
            }
            else {
                consultWeather();
            }
        });