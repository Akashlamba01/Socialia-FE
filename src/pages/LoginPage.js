const LoginPage = () => {
  return (
    <div>
      <div class="heading">
        {/* <!-- <h2>Connectopia</h2>
      <h2>SocialSphere</h2> --> */}
        <h2>Socialia</h2>
      </div>
      <div class="login-section">
        <form id="login-form">
          <input type="text" placeholder="Email or Phone" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <br />
        <p>
          <a href="">Forgotten Password?</a>
        </p>

        <br />
        <hr />
        <br />
        <p>oR</p>
        <br />

        <a href="./signup.html">
          <button>Create a new account !</button>
        </a>

        <a href="#">
          <button class="google-login-btn">
            <i class="fa-brands fa-google"></i> Login with google
          </button>
        </a>
      </div>

      {/* <script>
      let navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }
    </script> */}
    </div>
  );
};

export default LoginPage;
