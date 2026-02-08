// Fungsi untuk mendownload CV
document.getElementById("downloadCV").addEventListener("click", function () {
  // Buat link temporary
  const link = document.createElement("a");
  link.href = "../CV_Davin Ammar Muhammad.pdf"; // Ganti dengan path CV Anda
  link.download = "Davin Ammar Muhammad-CV.pdf"; // Nama file saat didownload
  link.click();
});

// Data untuk setiap service
const servicesData = {
  1: {
    title: "UI/UX Design",
    image: "../image/Image5.jpg", // Ganti dengan path gambar Anda
    heading: "Creating Intuitive User Experiences",
    description: "Designing interfaces that prioritize clarity and ease of use. The process involves crafting visual elements that are not only aesthetic but also functional, ensuring a smooth and meaningful interaction for every user.",
  },
  2: {
    title: "Web Development",
    image: "../image/Image2.jpg",
    heading: "Building Robust Web Solutions",
    description: "Focus on creating scalable and high-performance web applications. Every project is built with clean code and modern technologies to ensure a reliable digital presence that meets professional standards.",
  },
};

// Fungsi untuk mengupdate konten
function updateServiceContent(serviceId) {
  const service = servicesData[serviceId];

  // Update gambar dengan fade effect
  const imageElement = document.querySelector("#service-image");
  const headingElement = document.querySelector("#service-heading");
  const descriptionElement = document.querySelector("#service-description");

  // Fade out
  imageElement.style.opacity = "0";
  headingElement.style.opacity = "0";
  descriptionElement.style.opacity = "0";

  setTimeout(() => {
    // Update content
    imageElement.src = service.image;
    imageElement.alt = service.title;
    headingElement.textContent = service.heading;
    descriptionElement.textContent = service.description;

    // Fade in
    imageElement.style.opacity = "1";
    headingElement.style.opacity = "1";
    descriptionElement.style.opacity = "1";
  }, 300);
}

// Fungsi untuk mengatur active state pada button
function setActiveButton(activeButton) {
  // Remove active class dari semua buttons
  const allButtons = document.querySelectorAll(".service-item");
  allButtons.forEach((btn) => {
    btn.classList.remove("border-lime-400", "bg-lime-400/5");
    btn.classList.add("border-gray-700");
  });

  // Add active class ke button yang diklik
  activeButton.classList.remove("border-gray-700");
  activeButton.classList.add("border-lime-400", "bg-lime-400/5");
}

// Initialize event listeners
document.addEventListener("DOMContentLoaded", function () {
  const serviceButtons = document.querySelectorAll(".service-item");

  serviceButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const serviceId = index + 1;
      updateServiceContent(serviceId);
      setActiveButton(this);
    });
  });

  // Set default active (service 1 - Web Development sesuai tampilan awal)
  setActiveButton(serviceButtons[0]);
});
