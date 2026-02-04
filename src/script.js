// Data untuk setiap service
const servicesData = {
  1: {
    title: "UI/UX Design",
    image: "../image/Image5.jpg", // Ganti dengan path gambar Anda
    heading: "Creating Intuitive User Experiences",
    description: "We design user interfaces that are not only visually appealing but also intuitive and user-friendly. Our UI/UX design process focuses on understanding user behavior to create seamless digital experiences.",
  },
  2: {
    title: "Web Development",
    image: "../image/Image2.jpg",
    heading: "Building Robust Web Solutions",
    description: "We combine creativity with technical expertise to deliver solutions that not only look great but also drive results. Our team is dedicated to bringing your vision to life.",
  },
  3: {
    title: "3D Designs",
    image: "../image/3d-design.jpg", // Ganti dengan path gambar Anda
    heading: "Bringing Ideas to Life in 3D",
    description: "Our 3D design services transform concepts into stunning three-dimensional visualizations. From product modeling to architectural renders, we create immersive experiences that captivate your audience.",
  },
  4: {
    title: "Motion Graphics",
    image: "../image/motion-graphics.jpg", // Ganti dengan path gambar Anda
    heading: "Animating Your Brand Story",
    description: "We create engaging motion graphics that tell your brand story in a dynamic way. Our animations combine creativity with strategic messaging to capture attention and communicate effectively.",
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
