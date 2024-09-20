document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Definindo o ano atual no copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Funções de rolagem suave
document.getElementById('scrollUp').addEventListener('click', function() {
    window.scrollBy({ top: -200, behavior: 'smooth' }); // Rolagem suave para cima
});

document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollBy({ top: 200, behavior: 'smooth' }); // Rolagem suave para baixo
});
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Definindo o ano atual no copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Funções de rolagem
document.getElementById('scrollUp').addEventListener('click', function() {
    window.scrollBy(0, -200); // Rolagem para cima
});

document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollBy(0, 200); // Rolagem para baixo
});
document.addEventListener('DOMContentLoaded', function() {
    const passwordList = document.getElementById('passwordList');
    const themeToggle = document.getElementById('themeToggle');
    const slideshowTitle = document.getElementById('slideshowTitle');

    loadPasswords();
    applyTheme();

    document.getElementById('passwordForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const service = document.getElementById('service').value;
        const password = document.getElementById('password').value;

        savePassword(service, password);
        addPasswordToList(service, password);

        document.getElementById('service').value = '';
        document.getElementById('password').value = '';
    });

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        document.querySelector('.container').classList.toggle('dark');
        document.querySelectorAll('li').forEach(li => li.classList.toggle('dark'));
    });

    // Efeito de digitação
    const titleText = "Gerenciador de Senhas";
    let index = 0;

    function typeTitle() {
        if (index < titleText.length) {
            slideshowTitle.textContent += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, 100); // Ajuste a velocidade aqui
        }
    }

    typeTitle();
});

function savePassword(service, password) {
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.push({ service, password });
    localStorage.setItem('passwords', JSON.stringify(passwords));
}

function loadPasswords() {
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.forEach(({ service, password }) => {
        addPasswordToList(service, password);
    });
}

function addPasswordToList(service, password) {
    const passwordList = document.getElementById('passwordList');
    const listItem = document.createElement('li');
    listItem.textContent = `${service}: ${password}`;
    passwordList.appendChild(listItem);
}
document.addEventListener('DOMContentLoaded', function() {
    const passwordList = document.getElementById('passwordList');
    const themeToggle = document.getElementById('themeToggle');

    loadPasswords();
    applyTheme();

    document.getElementById('passwordForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const service = document.getElementById('service').value;
        const password = document.getElementById('password').value;

        savePassword(service, password);
        addPasswordToList(service, password);

        document.getElementById('service').value = '';
        document.getElementById('password').value = '';
    });

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        document.querySelector('.container').classList.toggle('dark');
        document.querySelectorAll('li').forEach(li => li.classList.toggle('dark'));
    });
});

function savePassword(service, password) {
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Definindo o ano atual no copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();