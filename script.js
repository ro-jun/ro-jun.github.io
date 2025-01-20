document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('btn-about');
    const skillsButton = document.getElementById('btn-contact');
    const projectsButton = document.getElementById('btn-projects');
    const portfolioButton = document.getElementById('ro-jun-Portfolio');

    // 섹션 참조
    const aboutSection = document.getElementById('about-me-detail-container');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('project');

    // 부드럽게 스크롤 함수
    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 버튼 클릭 이벤트
    aboutButton.addEventListener('click', () => scrollToSection(aboutSection));
    skillsButton.addEventListener('click', () => scrollToSection(skillsSection));
    projectsButton.addEventListener('click', () => scrollToSection(projectsSection));
    portfolioButton.addEventListener('click', () => scrollToSection(document.body)); // 상단으로 이동
});

// 프로젝트 데이터 정의
const projectData = [
    {
        id: "project1",
        title: "LangChain OpenTutorial",
        description: "영어버전 LangChain OpenTutorial을 제작하여 실리콘 벨리로 제공 하기 위한 프로젝트입니다.",
        images: ["images/Langchain-00.png", "images/Langchain-01.png", "images/pinecone-01.png", "images/pinecone-02.png", "images/pinecone-03.png", "images/pinecone-04.png", "images/embedding-01.png", "images/embedding-02.png"],
        developmentProcess: ""
    },
    {
        id: "project2",
        title: "Data_Market_Platform",
        description: "사용자 요구를 파악하여 맞춤형 데이터를 제공하는 챗봇",
        images: ["images/datamarket-01.png", "images/datamarket-02.png", "images/datamarket-03.png", "images/datamarket-04.png", "images/datamarket-05.png"],
        developmentProcess: ""
    },
    {
        id: "project3",
        title: "수강신청 도우미",
        description: "",
        images: ["images/", "images/", "images/", "images/"],
        developmentProcess: ""
    },
    {
        id: "project4",
        title: "연합 기숙사 최적지 분석",
        description: "",
        images: ["images/edu-01.png", "images/edu-02.png", "images/edu-03.png", "images/edu-04.png", "images/edu-05.png", "images/edu-06.png", "images/edu-07.png", "images/edu-08.png", "images/edu-09.png", "images/edu-10.png", "images/edu-11.png", "images/edu-12.png", "images/edu-13.png", "images/edu-14.png",],
        developmentProcess: ""
    }
];

// 부드럽게 스크롤 함수
function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" }); // 스크롤을 부드럽게 이동
}

function updateArrowState() {
    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentProject && currentImageIndex === currentProject.images.length - 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const overlayWrapper = document.querySelector('.hidden'); // 오버레이를 감싸는 부모 div
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
            const projectId = card.getAttribute('data-id'); // data-id를 가져옵니다.
            currentProject = projectData.find(project => project.id === projectId); // data-id와 일치하는 프로젝트 데이터 찾기
            if (currentProject) {
                // 제목 및 설명 업데이트
                document.getElementById('overlay-title').textContent = currentProject.title;
                document.getElementById('overlay-description').textContent = currentProject.description;
                document.getElementById('overlay-development').textContent = currentProject.developmentProcess;

                // 첫 번째 이미지 표시
                currentImageIndex = 0;
                showImage(currentImageIndex);

                // 오버레이 표시
                overlayWrapper.classList.remove('hidden');
            }
        });
    });

    prevButton.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--; // 현재 이미지 인덱스를 감소
            showImage(currentImageIndex); // 이미지를 업데이트
            updateArrowState(); // 화살표 상태를 업데이트
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentProject && currentImageIndex < currentProject.images.length - 1) {
            currentImageIndex++; // 현재 이미지 인덱스를 증가
            showImage(currentImageIndex); // 이미지를 업데이트
            updateArrowState(); // 화살표 상태를 업데이트
        }
    });

    // 닫기 버튼 클릭 시 오버레이 숨기기
    closeButton.addEventListener('click', () => {
        overlayWrapper.classList.add('hidden');
        currentProject = null; // 현재 프로젝트 데이터 초기화
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotSendButton = document.getElementById('chatbot-send');
    const chatbotTextInput = document.getElementById('chatbot-text');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    let chatbotVisible = false;

    chatbotButton.addEventListener('click', toggleChatbot);

    chatbotSendButton.addEventListener('click', sendMessage);

    chatbotTextInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // 기본 Enter 동작 방지
            sendMessage();
        }
    });

    function toggleChatbot() {
        chatbotVisible = !chatbotVisible; // 상태 토글
        chatbotContainer.style.display = chatbotVisible ? 'block' : 'none'; // 표시 상태 변경
    }

    function sendMessage() {
        const userMessage = chatbotTextInput.value.trim(); // 입력값 가져오기
        if (userMessage) {
            // 사용자 메시지 추가
            appendMessage(`사용자: ${userMessage}`, 'user');
            
            chatbotTextInput.value = ''; // 입력창 초기화

            // 챗봇 답변 추가 (간단한 예제)
            const botResponse = `챗봇: "${userMessage}"에 대한 답변입니다.`;
            appendMessage(botResponse, 'bot');
        }
    }

    /**
     * 메시지 추가 함수
     * @param {string} text - 추가할 메시지 내용
     * @param {string} sender - 'user' 또는 'bot' (보낸 사람)
     */
    function appendMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = text;
        messageElement.className = sender === 'user' ? 'chatbot-user-message' : 'chatbot-bot-message';
        chatbotMessages.appendChild(messageElement);

        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});