import React from "react";

function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();


    return (<footer>

    <p>&#169; {year} Made by Cindy</p>

</footer>)
}

export default Footer;