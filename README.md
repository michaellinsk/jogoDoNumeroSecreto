
# Jogo do Número Secreto

## 📋 Sobre o Projeto  
O **Jogo do Número Secreto** é um projeto simples desenvolvido com HTML, CSS e JavaScript, onde o usuário deve adivinhar um número aleatório entre 1 e 100. Durante o jogo, o sistema fornece dicas sobre se o número é maior ou menor que o chute e, adicionalmente, indica se o número secreto é múltiplo de 2, 3, 5 ou 7.  

Além disso, o projeto utiliza a biblioteca **ResponsiveVoice** para ler mensagens em voz alta, adicionando uma camada extra de interatividade à aplicação.  

---

## 🚀 Funcionalidades  
- **Adivinhe o número secreto:** O jogador faz chutes até descobrir o número gerado aleatoriamente.
- **Dicas de múltiplos:** Durante o jogo, o sistema informa se o número secreto é múltiplo de 2, 3, 5 ou 7.
- **Voz interativa:** A cada interação, mensagens de texto são lidas em voz alta usando a biblioteca `responsivevoice.js`.
- **Reinício de jogo:** Opção para reiniciar a partida e jogar novamente.
- **Input por Enter:** O usuário pode enviar o chute pressionando a tecla **Enter** no teclado.

---

## 🛠️ Tecnologias Utilizadas  
- **HTML5**: Estrutura do conteúdo.  
- **CSS3**: Estilização e responsividade.  
- **JavaScript**: Lógica do jogo e interatividade.  
- **ResponsiveVoice.js**: API de síntese de voz para leitura das mensagens.  

---

## 📂 Estrutura do Projeto  
```plaintext
jogoDoNumeroSecreto/
│
├── index.html      # Página principal do projeto
├── style.css       # Arquivo de estilo CSS
├── app.js          # Script JavaScript com a lógica do jogo
├── img/            # Diretório de imagens usadas na aplicação
│   ├── code.png
│   └── Ruido.png
└── README.md       # Arquivo de documentação
```

---


## 🧩 Sobre o Código

### HTML (index.html)  
- Define a estrutura básica do jogo, contendo um campo de entrada para o número, botões de interação e uma imagem decorativa.
- Inclui a API **ResponsiveVoice** para síntese de voz e carrega o CSS e JavaScript.

### CSS (style.css)  
- Utiliza gradientes e imagens para criar um design moderno.
- Responsividade para se ajustar a diferentes telas, escondendo elementos desnecessários em telas menores.

### JavaScript (app.js)  
- **Função `gerarNumeroAleatorio`:** Gera um número aleatório entre 1 e 100, sem repetição.
- **Função `verificarChute`:** Avalia o chute do usuário e fornece feedback se o número é maior ou menor.
- **Função `reiniciarJogo`:** Reinicia o jogo com um novo número secreto.
- **Interação com Enter:** Adiciona a funcionalidade de enviar o chute pressionando a tecla **Enter**.

---

## 🖼️ Screenshots  
<img src="img/screenshot.png" alt="Screenshot do Jogo do Número Secreto" width="600">

---

## 🤝 Contribuições  
Sinta-se à vontade para contribuir com melhorias ou sugerir novas funcionalidades!  

1. **Fork** o repositório.
2. Crie uma nova branch:  
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commite:  
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o GitHub:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## 📄 Licença  
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo como desejar.

---

## 📞 Contato  
Michael Rodrigues  
[GitHub](https://github.com/michaellinsk)  
