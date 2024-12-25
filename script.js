// 프로젝트 데이터 정의
const projectData = [
    {
        id: "project1",
        title: "프로젝트 1",
        description: "이것은 프로젝트 1의 설명입니다. 프로젝트 1은 인공지능 모델을 활용한 분석 프로젝트입니다.",
        images: ["images/DALLE_winter.jpg", "images/hojun.jpg", "images/DALLE_winter.jpg"],
        developmentProcess: "이 프로젝트는 Python과 Flask를 사용해 개발되었으며, 데이터 분석에 중점을 두었습니다."
    },
    {
        id: "project2",
        title: "프로젝트 2",
        description: "이것은 프로젝트 2의 설명입니다. 프로젝트 2는 웹 기반의 대규모 데이터 처리 시스템입니다.",
        images: ["images/DALLE_winter.jpg", "images/DALLE_winter.jpg"],
        developmentProcess: "React와 Node.js를 사용해 개발되었으며, MongoDB를 활용해 데이터를 처리합니다."
    },
    {
        id: "project3",
        title: "프로젝트 3",
        description: "이것은 프로젝트 3의 설명입니다. 프로젝트 3은 클라우드 기술을 활용한 서비스입니다.",
        images: ["images/DALLE_winter.jpg", "images/hojun.jpg", "images/DALLE_winter.jpg", "images/hojun.jpg"],
        developmentProcess: "AWS Lambda와 DynamoDB를 사용하여 서버리스 환경에서 실행됩니다."
    }
];

// 버튼 요소 가져오기
const btnAbout = document.getElementById("btn-about"); // About 버튼
const btnProjects = document.getElementById("btn-projects"); // Projects 버튼
const btnContact = document.getElementById("btn-contact"); // Contact 버튼

// 섹션 요소 가져오기
const sectionAbout = document.getElementById("about-me"); // About 섹션
const sectionProjects = document.getElementById("project"); // Projects 섹션
const sectionContact = document.getElementById("contact"); // Contact 섹션

// 부드럽게 스크롤 함수
function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" }); // 스크롤을 부드럽게 이동
}

document.addEventListener('DOMContentLoaded', () => {
    const overlayWrapper = document.querySelector('.hidden'); // 오버레이를 감싸는 부모 div
    const closeButton = document.getElementById('close-overlay'); // 닫기 버튼
    const projectCards = document.querySelectorAll('.project-card'); // 모든 프로젝트 카드

    // 프로젝트 카드 클릭 시 오버레이 표시
    projectCards.forEach((card) => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title'); // 클릭한 카드의 제목 가져오기
            const description = card.getAttribute('data-description'); // 클릭한 카드의 설명 가져오기
            const detail = card.getAttribute('data-detail'); // 클릭한 카드의 상세 내용 가져오기

            // 오버레이에 데이터를 삽입
            document.getElementById('overlay-title').textContent = title; // 제목 삽입
            document.getElementById('overlay-description').textContent = `${description}\n\n${detail}`; // 설명 및 상세 내용 삽입

            // hidden 클래스를 제거하여 오버레이 표시
            overlayWrapper.classList.remove('hidden');
        });
    });

    // 닫기 버튼 클릭 시 오버레이 숨기기
    closeButton.addEventListener('click', () => {
        overlayWrapper.classList.add('hidden'); // hidden 클래스를 추가하여 오버레이 숨김
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('project-overlay');
    const closeButton = document.getElementById('close-overlay');
    const prevButton = document.getElementById('prev-slide')
    const nextButton = document.getElementById('next-slide');
    const projectCards = document.querySelectorAll('.project-card');

    let currentImageIndex = 0; // 현재 활성화된 이미지 인덱스
    let currentProject = null; // 현재 활성화된 프로젝트 데이터

    // 슬라이드 전환 함수
    function showImage(index) {
        const imageElement = document.getElementById('overlay-image');
        if (currentProject && currentProject.images) {
            // 이미지 배열 범위를 넘지 않도록 제한
            if (index >= 0 && index < currentProject.images.length) {
                currentImageIndex = index;
                imageElement.src = currentProject.images[currentImageIndex]; // 이미지 변경
            }
        }
    }

    // 프로젝트 카드 클릭 시 오버레이 표시
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentProject = projectData[index]; // 현재 프로젝트 데이터 가져오기
            if (currentProject) {
                // 제목 및 설명 업데이트
                document.getElementById('overlay-title').textContent = currentProject.title;
                document.getElementById('overlay-description').textContent = currentProject.description;
                document.getElementById('overlay-development').textContent = currentProject.developmentProcess;

                // 첫 번째 이미지 표시
                currentImageIndex = 0;
                showImage(currentImageIndex);

                // 오버레이 표시
                overlay.classList.remove('hidden');
            }
        });
    });

    // 이전 이미지 버튼 클릭 이벤트
    prevButton.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            showImage(currentImageIndex - 1);
        }
    });

    // 다음 이미지 버튼 클릭 이벤트
    nextButton.addEventListener('click', () => {
        if (currentProject && currentImageIndex < currentProject.images.length - 1) {
            showImage(currentImageIndex + 1);
        }
    });

    // 닫기 버튼 클릭 시 오버레이 숨기기
    closeButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
        currentProject = null; // 현재 프로젝트 데이터 초기화
    });
});