function aboutButton() {
  var section = document.getElementById("content-about");
  var section_1 = document.getElementById("content-services");
  var section_2 = document.getElementById("content-experiences");
  var section_3 = document.getElementById("content-contact");

  if (section.classList.contains("hide-section")) {
    showSection(section);
    hideSection(section_1);
    hideSection(section_2);
    hideSection(section_3);
  }
}

function servicesButton() {
  var section = document.getElementById("content-services");
  var section_1 = document.getElementById("content-about");
  var section_2 = document.getElementById("content-experiences");
  var section_3 = document.getElementById("content-contact");

  if (section.classList.contains("hide-section")) {
    showSection(section);
    hideSection(section_1);
    hideSection(section_2);
    hideSection(section_3);
  }
}

function experiencesButton() {
  var section = document.getElementById("content-experiences");
  var section_1 = document.getElementById("content-services");
  var section_2 = document.getElementById("content-about");
  var section_3 = document.getElementById("content-contact");

  if (section.classList.contains("hide-section")) {
    showSection(section);
    hideSection(section_1);
    hideSection(section_2);
    hideSection(section_3);
  }
}

function contactButton() {
  var section = document.getElementById("content-contact");
  var section_1 = document.getElementById("content-services");
  var section_2 = document.getElementById("content-experiences");
  var section_3 = document.getElementById("content-about");

  if (section.classList.contains("hide-section")) {
    showSection(section);
    hideSection(section_1);
    hideSection(section_2);
    hideSection(section_3);
  }
}

function hideSection(element) {
  element.classList.remove("show-section");

  element.classList.add("hide-section");
}

function showSection(element) {
  element.classList.remove("hide-section");

  element.classList.add("show-section");
}