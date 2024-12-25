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

document.addEventListener('DOMContentLoaded', () => {
    const overlayWrapper = document.querySelector('.hidden'); // 오버레이의 부모 div
    const closeButton = document.getElementById('close-overlay'); // 닫기 버튼
    const projectCards = document.querySelectorAll('.project-card'); // 프로젝트 카드

    // 프로젝트 카드 클릭 시 오버레이 표시
    projectCards.forEach((card) => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title'); // 프로젝트 제목 가져오기

            // 오버레이에 제목과 설명 삽입
            document.getElementById('overlay-title').textContent = title;

            // hidden 클래스 제거하여 오버레이 표시
            overlayWrapper.classList.remove('hidden');
        });
    });

    // 닫기 버튼 클릭 시 오버레이 숨기기
    closeButton.addEventListener('click', () => {
        overlayWrapper.classList.add('hidden');
    });

    // 오버레이 외부 클릭 시 숨기기
    overlayWrapper.addEventListener('click', (event) => {
        if (event.target === overlayWrapper) {
            overlayWrapper.classList.add('hidden');
        }
    });
});
