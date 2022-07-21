import '../styles/utilities.css'
import '../styles/expirience.css'
import MibusLogo from '../assets/mibus-logo.png'
export default function Expirience() {
 return (
  <section class="expirience">
   <div class="container flex-r flex-join-separate">
    <div class="expirience-title text-center">
     <div class="image-container">
      <a href=""><img src={MibusLogo} alt="" /></a>
     </div>
     <div class="position">
      <h3>Programmer</h3>
      <h4><em>2021 sep - Today</em></h4>
     </div>
    </div>
    <div class="expirience-information">
     <p>&middot; Automate processes</p>
     <p>&middot; Transfer programs from one technology to another</p>
     <p>&middot; Manage .shp files and route graphing</p>
     <p>&middot; Server maintenance</p>
     <p>&middot; Work with the database</p>
     <p>&middot; GTFS management</p>
    </div>
   </div>
  </section>
 )
}