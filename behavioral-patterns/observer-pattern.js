class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = null;
    }

    addObservers(observer){
        this.observers.push(observer);
    }

    removeObserver(observers){
        const index = this.observers.indexOf(observers);
        if(index !== -1){
            this.observers.splice(index,1);
        }
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.displayTemperature(this.temperature))
    }

    setTemperature(temperature) {
        console.log(`Setting temperature to ${temperature}°C`);
        this.temperature = temperature;
        this.notifyObservers();
    }
}

class TemperatureDisplay {
    constructor(name) {
        this.name = name;
    }

    displayTemperature(temperature){
        console.log(`${this.name} received temperature update: ${temperature}°C`);
    }
}

const weatherStation = new WeatherStation();

const display1 = new TemperatureDisplay("Delhi");
const display2 = new TemperatureDisplay("Mumbai");

weatherStation.addObservers(display1);
weatherStation.addObservers(display2);

weatherStation.setTemperature(30);
weatherStation.setTemperature(25);