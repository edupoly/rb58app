import React from "react";
import Card from "./Card";
function HotelCards() {
  return (
    <div className="container d-flex justify-content-center flex-wrap gap-4 mt-5">
      <Card imgurl="https://m.ahstatic.com/is/image/accorhotels/HCM_P_8147067:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80"></Card>
      <Card imgurl="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"></Card>
      <Card imgurl="https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/hgh-daylight-wide-angle-exterior-rounded-b.png"></Card>
      <Card imgurl="https://www.cvent.com/sites/default/files/image/2021-08/exterior%20view%20of%20the%20sign%20at%20the%20front%20of%20a%20hotel.jpg"></Card>
      <Card imgurl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o="></Card>
      <Card imgurl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/20/c9/facadenight.jpg?w=1200&h=-1&s=1"></Card>
    </div>
  );
}

export default HotelCards;
