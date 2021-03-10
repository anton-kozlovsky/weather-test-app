export default {
    name: "pageHeader",
    methods: {
    showNavBar: function() {
            document.getElementById("navBar").classList.add('sidenav-visible');
        }
    },
    data: function() {
        return {
            title: "Weather Forecast"
        }
    }
}

