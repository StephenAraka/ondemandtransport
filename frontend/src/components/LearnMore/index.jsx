import React from 'react';
import Header from '../Header';
import './LearnMore.css';
import {FaUsers} from "@react-icons/all-files/fa/FaUsers";


const LearnMore = () => {
  return (
    <div className="LearnMore Page">
      <Header label="Learn More" />

      <section>
      <h1> Learn More </h1>

      <p>If you would like to learn more about how to secure your online accounts
      and create a safer and more private mobile experience, please feel free to check
      out the links below. <strong> *Please note that these are merely available resources and
      Eirrands is not specifically affiliated with any of these sources.  Also, once
      you navigate to these pages, you are subject to the specific site’s privacy policy
      and data practices.*</strong> </p>

      <h1> Securing your Social Media </h1>

      <a href="https://www.techuntold.com/how-to-make-facebook-completely-private/#:~:text=Make%20Your%20Facebook%20Completely%20Private%20Step%20By%20Step,Info.%20Now%20let%E2%80%99s%20hide%20your%20personal%20information."> Facebook Security</a>
      <a href="https://www.lifewire.com/make-instagram-account-private-3485850"> Instagram Security </a>
      <a href="https://www.justice.gov/usao-ndga/protecting-yourself-while-using-internet"> Protect Yourself While Using the Internet </a>


      <h1> How to disable location and tracking on your devices. </h1>

      <a href="https://support.apple.com/en-us/HT207092#:~:text=How%20to%20turn%20Location%20Services%20on%20or%20off,is%20visible%20on%20screen%20...%20More%20items"> Location / GPS Settings on iOS </a>
      <a href="https://support.google.com/accounts/answer/3467281?hl=en#:~:text=Turn%20location%20on%20or%20off%20for%20your%20device,Location.%206%20Turn%20Use%20location%20on%20or%20off."> Android Location Settings </a>
      <a href="https://www.techrepublic.com/article/how-to-disable-facebook-location-tracking/"> Facebook Tracking </a>
      <a href="https://www.windowscentral.com/how-disable-location-tracking-windows-10#:~:text=1%20Click%20on%20the%20Start%20Menu.%20It's%20the,switch%20under%20Location%20to%20turn%20location%20tracking%20off."> Windows Location Tracking </a>
      <a href="https://appsliced.co/ask/how-do-i-disable-location-services-on-my-mac"> Mac Location Settings </a>

      <h1> If you think your computer is sick. </h1>

      <a href="https://www.clevguard.com/tips/how-to-tell-if-someone-is-remotely-viewing-your-computer/#:~:text=Checking%20your%20browser%20history%20is%20also%20a%20way,you%20use,%20you%20can%20check%20it%E2%80%99s%20brsowing%20history."> How to Tell if Someone is Accessing Your Computer </a>
      <a href="https://www.malwarefox.com/detect-android-spyware/#:~:text=How%20to%20Detect%20Spyware%20on%20Android%20Phone%201,Ads%20in%20Notification%20Area.%20...%20More%20items..."> Androids and Spyware </a>
      <a href="https://pixelprivacy.com/resources/spying-on-your-cell-phone/"> Is Someone Spying on Your Cell Phone </a>



      </section>
    </div>
  )
}

export default LearnMore;
