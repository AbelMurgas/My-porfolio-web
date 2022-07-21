import "../styles/utilities.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container grid grid-3">
        <div class="thanks flex-c">
          <div>
            <h3>
              Thank you for viewing my website, I appreciate you taking your
              time to view my information. If you want to know more about me,
              I'm waiting for your email.
            </h3>
          </div>
          <div>
            <a href="myProyects.htlm" class="btn btn-outline btn-contact">
              Contact me
            </a>
          </div>
        </div>
        <div class="reduce-menu flex-c">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">Projects</a>
          </div>
          <div>
            <a href="">Technologies</a>
          </div>
        </div>
        <div class="contact-information flex-c">
          <div class="general-information flex-c">
            <div>
              <i class="fa-solid fa-phone"></i> <span> + 507 6899-3354</span>
            </div>
            <div>
              <i class="fa-solid fa-house"></i>
              <span> Panama Don Boscom, Bello Horizonte</span>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <span> abelmurgasdev@gmail.com</span>
            </div>
          </div>
          <div class="social-media flex-r flex-join-separate">
            <div>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a href="">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div>
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
