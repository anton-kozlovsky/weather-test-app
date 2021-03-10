import Vue from 'vue'
import {BaseAPIURL} from "../../constants/common.js"

import appMenuIcon from "../../../assets/AppMenuLink.svg"


const minskLinkData = {
    "url": `${BaseAPIURL}/minsk`,
    "city": "Minsk"
}
const torontoLink = '<a href="http://localhost:3000/new-shipment"><img :src="appMenuIcon">Add Shipment</a>'
const navigationElements = [minskLinkData]

export default {
    name: "navBar",
    data: function() {
        return {
            navigationElements: navigationElements,
            appMenuIcon: appMenuIcon
        }
    },
    methods: {
        closeNavBar: function() {
            document.getElementById("navBar").classList.remove('sidenav-visible');
        }
    }
}
