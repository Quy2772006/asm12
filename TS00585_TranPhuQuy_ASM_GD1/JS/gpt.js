function showLoggedInUser(user) {
  var headerElement = document.getElementById("header");

  // Clear any previous content
  headerElement.innerHTML = '';

  // Create a new span element for the welcome message
  var welcomeElement = document.createElement("span");
  welcomeElement.textContent = "Chào mừng " + user.username + "!";
  headerElement.appendChild(welcomeElement);

  // Create the "Đăng xuất" (Logout) button
  var logoutButton = document.createElement("button");
  logoutButton.textContent = "Đăng xuất";
  logoutButton.addEventListener("click", function() {
    logout();
  });
  headerElement.appendChild(logoutButton);

  // Create the rest of the header elements as before
  var logoElement = document.createElement("img");
  logoElement.src = "./images/logocf.png";
  logoElement.width = "154";
  logoElement.height = "120";
  logoElement.className = "header-logo";
  headerElement.appendChild(logoElement);

  // Add the icon-search and menu-toggle elements as before
  var searchIconElement = document.createElement("img");
  searchIconElement.src = "./images/icon-search.png";
  searchIconElement.alt = "";
  searchIconElement.className = "icon-search";
  headerElement.appendChild(searchIconElement);

  var menuToggleElement = document.createElement("img");
  menuToggleElement.src = "./images/icon-menu.png";
  menuToggleElement.alt = "";
  menuToggleElement.className = "menu-toggle";
  headerElement.appendChild(menuToggleElement);
}

// Function to handle the logout action
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.reload(); // Reload the page to update the header after logout
}
