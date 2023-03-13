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

        function createWeatherWidget(timeOfDay, weather, temperature) {
            const weatherWidget = document.createElement('article');
            weatherWidget.classList.add('widget');

            const weatherIcon = document.createElement('div');
            weatherIcon.classList.add('weatherIcon');
            weatherWidget.appendChild(weatherIcon);

            const wi = document.createElement('i');
            wi.classList.add('wi');
            wi.classList.add('wi-day-sunny');
            weatherIcon.appendChild(wi);

            const weatherInfo = document.createElement('div');
            weatherInfo.classList.add('weatherInfo');
            weatherWidget.appendChild(weatherInfo);

            const temperatureDiv = document.createElement('div');
            temperatureDiv.classList.add('temperature');
            weatherInfo.appendChild(temperatureDiv);

            const span = document.createElement('span');
            span.innerHTML = temperature;
            temperatureDiv.appendChild(span);

            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('description');
            weatherInfo.appendChild(descriptionDiv);

            const weatherCondition = document.createElement('div');
            weatherCondition.classList.add('weatherCondition');
            weatherCondition.innerHTML = weather;
            descriptionDiv.appendChild(weatherCondition);

            const dateDiv = document.createElement('div');
            dateDiv.classList.add('date');
            dateDiv.innerHTML = timeOfDay;
            weatherWidget.appendChild(dateDiv);

            return weatherWidget;
        }

        function consultWeather() {
            const timeOfDay = ["Ma\u00F1ana", "Tarde", "Noche"];
            let displayWeather = document.getElementById('display-weather');

            displayWeather.innerHTML = "";

            for (let i = 0; i < 3; i++) {
                // create weather widget
                getWeather().then(res => {
                    let weatherWidget = createWeatherWidget(timeOfDay[i], res, getTemperature());
                    displayWeather.appendChild(weatherWidget);
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