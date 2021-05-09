import React from 'react';
import Header from '../Header';
import './securemyphone.css';
import {FaKeyboard} from "@react-icons/all-files/fa/FaKeyboard";
import {FaKey} from "@react-icons/all-files/fa/FaKey";
import {FaGooglePlay} from "@react-icons/all-files/fa/FaGooglePlay";
import {FaAppStore} from "@react-icons/all-files/fa/FaAppStore";
import {FaApple} from "@react-icons/all-files/fa/FaApple";
import {FaAndroid} from "@react-icons/all-files/fa/FaAndroid";




const SecuringMyPhone = () => {
  return (
    <div className="SecuringMyPhone Page">
      <Header label="Securing My Phone" />

      <section>
      <p> The steps and questions outlined here provide a way for you to make your
      device just a bit safer and more private. The following is a simple outline
      of general safety and security practices that anyone can implement on their
      phone or tablet.  There are even more options available if you would want
      to get a bit more technical! </p>

      <h1> Does your device require a PIN, Password, or biometric to unlock? </h1>
      <FaKeyboard size="100px" color="#051956"/>

      <p> Requiring some form of user login is always a smart first step in keeping
      your device and information secure.  This is your overall first line of defense
      in preventing unwanted access to your device.  If you do not have this enabled,
      it is best to set it up as soon as possible.  Typically, most users already
      have this established.  If so, consider how secure your login is.  For those using a PIN,
      is it a passcode that someone can easily guess or figure out?  If using a password,
      is it the same as your other accounts? </p>


      <p>When using a PIN or password login, try to make them as random as possible.
      Understandably, you don’t want to make it something that you will easily forget.
      However, you want to avoid codes or passwords that are easy for someone else to guess.
      For example, many tend to use birthdates for their passcode entry.  Although this is easy
      to remember, this is also simple for another person to guess. </p>

      <p>In addition to PINs and passwords, there is also the option to implement biometrics.
      This may sound like something from the future, but this actually refers to fingerprints,
      facial recognition, and even iris scanning technology.  Although this is relatively new,
      most recently manufactured devices have some form of biometric technology that you can use
      to protect your phone or tablet.  Arguably this may be the most secure way to lock your device
       as it requires you to be present for it to unlock. </p>

       <h1> Passwords </h1>
       <FaKey size="100px" color="#051956"/>

      <p> As best as you can, try to use different passwords for different accounts.
      If you repeat the same login over and over, someone who has access to one of your
      accounts will then have access to others as well.  Yes, the list can add up quickly
      and trying to remember them all can be a bit difficult.  Fortunately, Apple devices
      have password managers that can both save and remember your passwords for you while also
      informing you if you have duplicate login credentials. </p>

      <p>To access the password manager on Apple devices, go to <b>Settings</b>,
      the scroll down to <b>Passwords</b>.  Here, you can see what passwords are saved,
      edit existing login credentials, and even add new accounts.</p>

      <p>If you have an Android phone, there are a number of options available.
      If you want to implement password management on your phone, you can download
      one of several recommended apps that manage your logins and passwords for you.
      A quick search on the web will show you lists of recommended apps that you can use.
      Just make sure you confirm that what you are using is a legitimate app (more on that below).</p>


      <h1> Only Download Legitimate Apps </h1>
      <FaAppStore/> <FaGooglePlay/>

      <p>When downloading new apps to your device, it is important to remember that not all are safe to get.
      One way to tell is to go to the vendor’s website.  If there is a link on their page that directs you
      to the App Store or Google Play, then it is a good indication of its validity.</p>

      <h1> Make your device ask for permission. </h1>

      <p>When using your phone, have you seen when the app asks to use your location?
      Access your contacts?  If so, then you are on the right track!  Where you are able to,
      make it so all of your apps ask for permission before accessing any part of your phone.
      Yes, this can be annoying but that extra acceptance can help to keep you more secure! </p>

      <FaApple />
      <p> On your Apple devices, you can go to Settings, then scroll down until you see your various app.
      You can select each one and it will show you what that app has access to.  From here, you can adjust as necessary.</p>

      <FaAndroid />
      <p> Coming Soon! </p>

      <h1> Clean Up! </h1>

      <p>Just like the junk drawer in the kitchen, our phones and devices often get cluttered.
      Going through your phone and uninstalling unused apps has several benefits.
      First, this can mitigate the possibility of an app collecting your information or tracking
      your activity without your knowledge.  Decluttering your device can also improve its speed.
      Additionally, fewer apps running and bogging down your phone or tablet make it easier to notice
      if there are any performance changes or issues with your device. </p>

      <p> On your Apple devices, you can simply press and hold the app icon.  After about two seconds,
      a small window will appear.  Select <b>Remove App</b> to uninstall it. </p>

      <h1> Is your device sick? </h1>

      <p> There are some situations where we suspect our device may have caught some kind of bug.
      (The kind that may be monitoring what we are doing or tracking our activity and movements.)
      If you feel as though your device is a bit under the weather, there are a few “symptoms” that you can look out for.  For instance, if your battery runs out fairly quickly, even though you are not using it that much.  Unexpected text messages, strange noises during phone calls, and unexpected reboots are also potential signs of a sick device.  Or if you happen to check your data usage and see that it is much higher than it should be.  If this seems to be the case, your device may need a checkup.  Refer to our “Learn More” page for further information. </p>

      </section>

    </div>
  )
}

export default SecuringMyPhone;
