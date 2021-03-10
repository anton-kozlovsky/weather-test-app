import navBar from "../navBar/navBar.vue"
import pageHeader from "../pageHeader/pageHeader.vue"
import forecast from "../forecast/forecast.vue";

export default {
    name: "pageContent",
    components: {
        navBar,
        pageHeader,
        forecast
    },
    data: function() {
        return {
            "currentCity": "Minsk",
            "change": {
                "url": "http://nowhere.com",
                "text": "change"
            }
        }
    }
}

