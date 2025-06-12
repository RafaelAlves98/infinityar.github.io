document.addEventListener('DOMContentLoaded', function () {
    console.log('[DEBUG] contato.js carregado em ' + new Date().toLocaleString('pt-BR'));

    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (!form) {
        console.error('[ERRO] Formulário com ID "contact-form" não encontrado. Verifique se o <form> tem id="contact-form".');
        return;
    }
    if (!formMessage) {
        console.error('[ERRO] Elemento de mensagem com ID "form-message" não encontrado. Verifique se o <div id=\"form-message\"> existe.');
        return;
    }
    console.log('[DEBUG] Formulário e elemento de mensagem encontrados com sucesso.');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('[DEBUG] Submissão do formulário interceptada em ' + new Date().toLocaleString('pt-BR'));

        // Limpa mensagem anterior
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
        formMessage.style.display = 'none';

        // Obtém valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validações
        if (!name) {
            formMessage.textContent = 'Por favor, preencha o campo Nome.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            console.log('[DEBUG] Erro: Campo Nome vazio.');
            return;
        }
        if (!email) {
            formMessage.textContent = 'Por favor, preencha o campo E-mail.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            console.log('[DEBUG] Erro: Campo E-mail vazio.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = 'Por favor, insira um e-mail válido.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            console.log('[DEBUG] Erro: E-mail inválido.');
            return;
        }
        if (!message) {
            formMessage.textContent = 'Por favor, preencha o campo Mensagem.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            console.log('[DEBUG] Erro: Campo Mensagem vazio.');
            return;
        }

        // Sucesso
        formMessage.textContent = 'Mensagem enviada com sucesso! \n Retornaremos com uma resposta em breve.'
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        console.log('[DEBUG] Sucesso: Dados do formulário:', { name, email, message });

        // Reseta formulário
        form.reset();
    });
});