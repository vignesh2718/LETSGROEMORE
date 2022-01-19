.column {
    width: 23.3%;
    float: left;
}
.image {
    background: #1a1818;
    position: relative;
    flex: 1;
    max-width: 320px;
    height: 250px;
    margin: 5px;
    transition: 0.6s;
    overflow: hidden;
}
.image:hover {
    border-radius: 5px;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.25);
}

.image img {
    opacity: 0.8;
    position: relative;
    vertical-align: top;
    transition: 0.6s;
    transition-property: opacity;
    width: 100%;
    height: 100%;
}

.image:hover img {
    opacity: .2;
}

.image .details {
    position: absolute;
    top: 0;
    right: 0;
    color: #ffffff;
    width: 100%;
    height: 100%;
}

.image .details h2 {
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 300;
    margin-top: 300px;
    transition: 0.4s;
    transition-property: transform;
}

.image .details h2 span {
    font-weight: 900;
}

.image:hover .details h2 {
    transform: translateY(-180px);
}

.image .details p {
    margin: 10px 10px 0 10px;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    opacity: 0;
    transition: 0.6s;
    transition-property: opacity, transform;
}

.image:hover .details p {
    opacity: 1;
    transform: translateY(-210px);
}

.more {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    bottom: -60px;
    transition: 0.6s;
    transition-property: bottom;
}

.image:hover .more {
    bottom: 0;
}

.more .read-more {
    color: #000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
}

.more .read-more span {
    font-weight: 900;
}

.footer {
    text-align: center;
}

.footer .col {
    width: 100%;
    background-color: #070617;
    bottom: 0;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
}

.footer .col h1 {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 12px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgba(255, 255, 255, 0.2);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
}

.footer .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.footer .col ul li a {
    color: #ffffffff;
    transition: .2s;
    text-decoration: none;
}

.footer .col ul li a:hover {
    color: rgb(255, 174, 0);
}

.footer .col ul li {
    color: #999999;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
}

.footer .col ul li:hover {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
}

.clearfix {
    clear: both;
}

.column {
    text-align: -webkit-center;
}

@media only screen and (min-width : 320px) {
    .column {
        width: 100%;
        float: left;
    }
}

@media only screen and (min-width : 480px) {
    .column {
        width: 100%;
        float: left;
    }
}

@media only screen and (min-width : 768px) {
    .column {
        width: 50%;
        float: left;
    }
}

@media only screen and (min-width : 992px) {
    .column {
        width: 50%;
        float: left;
    }
}

@media only screen and (min-width : 1200px) {
    .column {
        width: 33.3%;
        float: left;
    }
}
