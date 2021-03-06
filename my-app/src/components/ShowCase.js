import "../styles/utilities.css";
import "../styles/showcase.css";

export default function ShowCase() {
 return (
  <section class="showcase">
   <div class="container grid">
    <div class="showcase-text">
     <div class="container flex-c">
      <div>
       <h1>Full Stack Python Developer</h1>
      </div>
      <div>
       <p>
        Hello! I am a software engineer who loves all areas of
        technology especially data science,dedicated to finding
        solutions through technology and teaching these solutions to
        people who want to learn.
       </p>
       <p>
        I always try to learn every day, and most likely in a week this
        resume will change
       </p>
      </div>
      <div>
       <a href="myProyects.htlm" class="btn btn-outline btn-contact">
        See my Projects
       </a>
      </div>
     </div>
    </div>
    <div class="showcase-form card">
     <h2>Request an interview</h2>
     <form action="">
      <div class="form-control">
       <input type="text" name="name" placeholder="Name" required />
      </div>
      <div class="form-control">
       <input type="email" name="email" placeholder="Email" required />
      </div>
      <div class="form-control">
       <input type="text" name="company" placeholder="Company" />
      </div>
      <input type="submit" value="Send" class="btn btn-forms" />
     </form>
    </div>
   </div>
  </section>
 );
}
