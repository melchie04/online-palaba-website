import bannerImage from "../assets/images/banner-image.png";
import bannerIcon from "../assets/icons/sparkles.png";
import googlePlayButton from "../assets/images/google-play.png";
import appStoreButton from "../assets/images/app-store.png";
import servicesIcon from "../assets/icons/fire.png";
import serviceSchedule from "../assets/images/schedule-laundry.jpg";
import servicePickup from "../assets/images/pickup-laundry.jpg";
import serviceDeliver from "../assets/images/deliver-laundry.jpg";
import laundry1 from "../assets/images/laundry-1.jpg";
import laundry2 from "../assets/images/laundry-2.jpg";
import laundry3 from "../assets/images/laundry-3.jpg";

export const navData = {
  links: [
    { name: "Home", href: "home", offset: -100 },
    { name: "Services", href: "services", offset: 0 },
    { name: "About", href: "about", offset: 0 },
  ],
  btnText: "Contact Us",
  btnRef: "contact",
};

export const homeData = {
  title: "Online Palaba",
  pretitle: "Clean Clothes In An Instant",
  subtitle:
    "We're here to get your clothes dry, clean, and folded. From wash to dry and from pickup to delivery, we've got you covered.",
  icon: bannerIcon,
  btnImage: { google: googlePlayButton, apple: appStoreButton },
  image: bannerImage,
};

export const servicesData = {
  title: "Our Services",
  pretitle: "How Online Palaba Works",
  subtitle:
    "We save you time, money, and energy! Start your laundry with us and get a free pickup or delivery when you order online.",
  icon: servicesIcon,
  schedule: {
    title: "Schedule",
    pretitle: "Schedule a pickup",
    subtitle:
      "Schedule a pickup for laundry. You can schedule a delivery or pickup on our mobile app. How to schedule?",
    instructions: {
      0: "Download App",
      1: "Start schedule your laundry",
      2: "Wait for confirmation",
    },
    image: serviceSchedule,
  },
  pickup: {
    title: "Pickup",
    pretitle: "We pickup",
    subtitle:
      "We'll pick up your laundry wherever you are, so you can spend more time with your loved ones. Please make sure to relax and enjoy your coffee. We ensure that your clothes are safe with us until they're ready for delivery.",
    image: servicePickup,
  },
  deliver: {
    title: "Deliver",
    pretitle: "We deliver",
    subtitle:
      "We'll deliver your clothes dry, folded, and cleaned to your home, making your life a lot easier. We love seeing happy customers, and we're here to make sure you get the clothes you love in your hands as quickly as possible.",
    image: serviceDeliver,
  },
};

export const aboutData = {
  title: "About Us",
  pretitle: "Our Excelent Works",
  subtitle:
    "We offer high-quality laundry services that take the hassle out of the process and save our customers time, money, and energy. In Online Palaba, we've got you—from wash to dry, from pickup to delivery.",
  btnText: "Follow us on Facebook",
  img1: laundry1,
  img2: laundry2,
  img3: laundry3,
};

export const contactData = {
  title: "Contact Us",
  pretitle: "Have Question In Mind? Let Us Help You",
  placeholder: "Enter your email here",
  btnText: "Submit",
};

export const footerData = {
  text: "We will use all our strength to shorten the time it takes for the laundry to take place",
  copyright: "Copyright © 2023 Online Palaba. All rights reserved.",
  developer: "Developed by Melchor Bendanillo Callos",
};
