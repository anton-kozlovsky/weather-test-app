import sunny from "../../../assets/sunny.svg"


const minskForecastNow = {
    "date": "Now",
    "temperature": "-4",
    "weatherIcon": sunny,
    "weatherType": "sunny"
}

export default {
    name: "forecast",
    data: function() {
        return {
            "forecasts": [minskForecastNow]
        }
    }
}

