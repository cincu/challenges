document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = { email, password };

    try {
      const response = await fetch("/login", {
        //i don't understand this part so much ::
        method: "POST",
        headers: {
          "Content-Type": "applicaton/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        // Redirect to the My Account page
        window.location.href = "/my=account";
      } else {
        // Redirect to the Error page

        window.location.href = "/error";
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
});
