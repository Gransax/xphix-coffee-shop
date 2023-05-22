import Navbar from "./components/Navbar";
import Home from "./scenes/home/Home";
import AboutUs from "./scenes/about/AboutUs";
import Features from "./scenes/features/Features";

import { mainFont } from "./font";
import Menu from "./scenes/menu/Menu";
import Presentation from "./scenes/presentation/Presentation";
import Gallery from "./scenes/gallery/Gallery";
import Offer from "./scenes/offer/Offer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Chefs from "./scenes/chefs/Chefs";
import Reservation from "./scenes/reservation/Reservation";
import Testimonials from "./scenes/testimonials/Testimonials";
import Footer from "./scenes/footer/Footer";

export const metadata = {
  title: "Coffee Shop",
  description: "My coffee shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-body ${mainFont.className} bg-fixed`}>
        <Navbar />
        <Home />
        <AboutUs />
        <Features />
        <Menu />
        <Presentation />
        <Gallery />
        <Offer />
        <Chefs />
        <Reservation />
        <Testimonials />
        <Footer />
      </body>
    </html>
  );
}
