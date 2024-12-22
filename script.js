// 버튼 요소 가져오기
const btnAbout = document.getElementById("btn-about");
const btnProjects = document.getElementById("btn-projects");
const btnContact = document.getElementById("btn-contact");

// 섹션 요소 가져오기
const sectionAbout = document.getElementById("about-me");
const sectionProjects = document.getElementById("project");
const sectionContact = document.getElementById("contact");

// 부드럽게 스크롤 함수
function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" });
}

// 각 버튼에 클릭 이벤트 추가
btnAbout.addEventListener("click", () => scrollToSection(sectionAbout));
btnProjects.addEventListener("click", () => scrollToSection(sectionProjects));
btnContact.addEventListener("click", () => scrollToSection(sectionContact));