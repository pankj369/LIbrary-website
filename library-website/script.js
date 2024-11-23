const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Automatically show the modal when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
  promoModal.show();
});

// Login functionality
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Dummy credentials
    const username = "student";
    const password = "12345";

    const userUsername = document.getElementById("username").value;
    const userPassword = document.getElementById("password").value;

    if (userUsername === username && userPassword === password) {
      alert("Login successful!");
      // Hide the modal after successful login
      $("#loginModal").modal("hide");
      // You can now show the user's profile or redirect to a dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });

// Dummy Data (In real app, this would come from a database)
const userPreferences = {
  username: "student",
  favoriteGenres: ["Science", "History", "Technology"],
};

// Function to display personalized recommendations
function displayRecommendations() {
  const recommendedBooks = document.getElementById("recommendedBooks");

  userPreferences.favoriteGenres.forEach((genre) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<h3>${genre} Books</h3><p>Recommendations will appear here...</p>`;
    recommendedBooks.appendChild(bookCard);
  });
}

// Call the function after user logs in
displayRecommendations();

// Search functionality
const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

const books = [
  "JavaScript for Beginners",
  "Learning React.js",
  "HTML and CSS Design",
  "Web Development Essentials",
  "React in Action",
  "JavaScript: The Good Parts",
  "Mastering CSS",
  "Frontend Development with React",
  // Add your own book list here
];

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (query.length > 0) {
    const filteredBooks = books.filter((book) =>
      book.toLowerCase().includes(query)
    );

    if (filteredBooks.length > 0) {
      suggestionsList.style.display = "block";
      filteredBooks.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.textContent = book;
        suggestionsList.appendChild(listItem);
      });
    } else {
      suggestionsList.style.display = "none";
    }
  } else {
    suggestionsList.style.display = "none";
  }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
  if (
    !searchInput.contains(event.target) &&
    !suggestionsList.contains(event.target)
  ) {
    suggestionsList.style.display = "none";
  }
});

const chatButton = document.getElementById("chatButton");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");
const sendMessage = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

chatButton.addEventListener("click", () => {
  chatWindow.style.display = "block";
});

closeChat.addEventListener("click", () => {
  chatWindow.style.display = "none";
});

sendMessage.addEventListener("click", () => {
  const message = chatInput.value.trim();

  if (message) {
    // Add user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Clear the input
    chatInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.classList.add("bot-message");
      botMessage.textContent = "We are processing your query...";
      chatMessages.appendChild(botMessage);

      // Auto-scroll to the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    // Auto-scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

// Fade-in effect for sections
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Review form submission
document
  .getElementById("reviewSubmitForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values from the form fields
    const userName = document.getElementById("userName").value;
    const userReview = document.getElementById("userReview").value;
    const rating = document.getElementById("rating").value;

    // Create a review object
    const review = {
      name: userName,
      review: userReview,
      rating: rating,
    };

    // Display the review
    displayReview(review);

    // Clear the form
    document.getElementById("reviewSubmitForm").reset();
  });

// Function to display the review in the reviews container
function displayReview(review) {
  const reviewsContainer = document.getElementById("reviewsContainer");

  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  reviewElement.innerHTML = `
    <h4>${review.name} (${review.rating} Stars)</h4>
    <p>${review.review}</p>
  `;

  reviewsContainer.appendChild(reviewElement);
}

// Exit-Intent Popup
let isPopupShown = false;
document.addEventListener("mouseout", (e) => {
  if (e.clientY < 0 && !isPopupShown) {
    document.getElementById("exitPopup").style.display = "flex";
    isPopupShown = true;
  }
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("exitPopup").style.display = "none";
});

// Promo page popup
document.addEventListener("DOMContentLoaded", function () {
  const promoPage = document.getElementById("promoPage");
  const closePopup = document.getElementById("closePopup");

  // Show the popup
  promoPage.style.display = "flex";

  // Close the popup when the "Close" button is clicked
  closePopup.addEventListener("click", function () {
    promoPage.style.display = "none"; // Hide the popup
  });
});
// Close the modal when the close button is clicked
document.getElementById("closeModal").addEventListener("click", function () {
  const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
  promoModal.hide();
});
