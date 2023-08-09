// function signup(event) {
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
    
//     var user = {
//       username: username,
//       email: email,
//       password: password,
//     };
  
//     var json = JSON.stringify(user);
//     localStorage.setItem(email, json);
//     alert("Đăng kí thành công!");
//   }
  
// function login(event) {
//   event.preventDefault(); 
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
  
//     // Check if both username and password fields are not empty
//     if (username.trim() === "" || password.trim() === "") {
//       alert("Vui lòng nhập username và password.");
//       return;
//     }
  
//     // Fetch the user data from local storage based on the email as the key
//     var userData = localStorage.getItem(email);
  
//     // Check if the user exists in local storage
//     if (userData === null) {
//       alert("Tài khoản không tồn tại. Vui lòng đăng ký trước.");
//       return;
//     }
  
//     // Parse the user data from JSON format to a JavaScript object
//     var data = JSON.parse(userData);
  
//     // Check if the provided username, email, and password match the stored user data
//     if (username === data.username && email === data.email && password === data.password) {
//       alert("Đăng nhập thành công!");
//       window.location.href = "index.html";
//     } else {
//       alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
//     }
//   }



  function signup(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var user = {
      username: username,
      email: email,
      password: password,
    };
  
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Đăng kí thành công!");
  }
  function login(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Check if both username and password fields are not empty
    if (username.trim() === "" || password.trim() === "") {
      alert("Vui lòng nhập username và password.");
      return;
    }
  
    // Fetch the user data from local storage based on the email as the key
    var userData = localStorage.getItem(email);
  
    // Check if the user exists in local storage
    if (userData === null) {
      alert("Tài khoản không tồn tại. Vui lòng đăng ký trước.");
      return;
    }
  
    // Parse the user data from JSON format to a JavaScript object
    var data = JSON.parse(userData);
  
    // Check if the provided username, email, and password match the stored user data
    if (username === data.username && email === data.email && password === data.password) {
      // Store the logged-in user in the session or local storage
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
    } else {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
    }
  }
  
  // Function to get the logged-in user from local storage

  function getLoggedInUser() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      return JSON.parse(loggedInUser);
    }
    return null;
  }
  
  function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html"; // Chuyển hướng đến trang index.html sau khi đăng xuất
  }
  // function login(event) {
  //   event.preventDefault();
  //   var username = document.getElementById("username").value;
  //   var email = document.getElementById("email").value;
  //   var password = document.getElementById("password").value;
  
  //   // Check if both username and password fields are not empty
  //   if (username.trim() === "" || password.trim() === "") {
  //     alert("Vui lòng nhập username và password.");
  //     return;
  //   }
  
  //   // Fetch the user data from local storage based on the email as the key
  //   var userData = localStorage.getItem(email);
  
  //   // Check if the user exists in local storage
  //   if (userData === null) {
  //     alert("Tài khoản không tồn tại. Vui lòng đăng ký trước.");
  //     return;
  //   }
  
  //   // Parse the user data from JSON format to a JavaScript object
  //   var data = JSON.parse(userData);
  
  //   // Check if the provided username, email, and password match the stored user data
  //   if (username === data.username && email === data.email && password === data.password) {
  //     // Store the logged-in user in the session or local storage
  //     localStorage.setItem("loggedInUser", JSON.stringify(data));
  //     alert("Đăng nhập thành công!");
  //     window.location.href = "index.html";
  //   } else {
  //     alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
  //   }
  // }
  
  // // Function to get the logged-in user from local storage
  // function getLoggedInUser() {
  //   var loggedInUser = localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {
  //     return JSON.parse(loggedInUser);
  //   }
  //   return null;
  // }
  
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
  
    // Create the <ul> element for the menu items
    var menuListElement = document.createElement("ul");
    menuListElement.className = "menu-list";
  
    // Add the menu items to the menuListElement
    var menuItems = [
      { text: "Home", href: "index.html" },
      { text: "Về chúng tôi", href: "#about" },
      { text: "Dịch vụ", href: "#work" },
      { text: "Mua hàng", href: "#experience" },
      { text: "Tin tức", href: "#contact" }
    ];
  
    menuItems.forEach(function (menuItem) {
      var liElement = document.createElement("li");
      liElement.className = "menu-item";
  
      var aElement = document.createElement("a");
      aElement.href = menuItem.href;
      aElement.className = "menu-link";
      aElement.textContent = menuItem.text;
  
      liElement.appendChild(aElement);
      menuListElement.appendChild(liElement);
    });
  
    // Create a separate list item for "Đăng xuất" (Logout) button
    var logoutLiElement = document.createElement("li");
    logoutLiElement.className = "menu-item";
  
    logoutLiElement.appendChild(logoutButton);
    menuListElement.appendChild(logoutLiElement);
  
    // Append the menuListElement to the header
    headerElement.appendChild(menuListElement);
  
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

  function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "./login.html"; // Redirect the user to the login page
  }
  