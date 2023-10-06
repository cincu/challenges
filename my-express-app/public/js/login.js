document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = { email, password };

    try {
    const response = await fetch("/login", {
      //post method
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      //account page redirect
      window.location.href = "/my-account";
    } else {
      //error page redirect
      window.location.href = "/error";
    }
    } catch (error) {
    //   console.log("Error:", error);
    // }
  });
});
