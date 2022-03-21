import React from "react";
import "./Home.css";
import banner from "../../images/banner.jpg";
import Product from "../Product/Product";
import laptop from "../../images/laptop.jpg";
import usb from "../../images/usb.jpg";
import headphone from "../../images/HeadPhone.jpg";
import monito from "../../images/monitor.jpg";
import printer from "../../images/printer.jpg";
import tab from "../../images/tab.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={banner} alt="missong" />
        <div className="home_row">
          <Product
            id="12321341"
            title="Lenovo IdeaPad 1 Laptop, 14.0 HD Display, Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Windows 11 in S Mode, Ice Blue"
            image={laptop}
            price={290.26}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title=" VANSUNY Micro USB Flash Drive 32G OTG Flash Drive Compatible with Android Smartphone   Stick for Laptop PC Mac Computer Car Audio Projector, Blue"
            image={usb}
            price={20.26}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={headphone}
            price={50.26}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="Lenovo IdeaPad 1 Laptop, 14.0 HD Display, Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Windows 11 in S Mode, Ice Blue"
            image={monito}
            price={80}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="Lenovo IdeaPad 1 Laptop, 14.0 HD Display, Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Windows 11 in S Mode, Ice Blue"
            image={laptop}
            price={420}
            rating={5}
          ></Product>
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={printer}
            price={22}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={tab}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={usb}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={tab}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={printer}
            price={29}
            rating={5}
          ></Product>
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={usb}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={monito}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={tab}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={monito}
            price={29}
            rating={5}
          ></Product>
          <Product
            id="12321341"
            title="layajia Wireless Earbuds, Bluetooth 5.0 in Ear Headphones IPX7 Waterproof Earbuds with LED Display 156 Playtime 2200mAh   Clear   Work"
            image={laptop}
            price={29}
            rating={5}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
