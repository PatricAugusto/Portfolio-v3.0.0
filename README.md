# 🌐 Cyber-Corporate Portfolio | AI & Full Stack

Este é um portfólio de alta performance desenvolvido com **Next.js 14**, focado em uma estética futurista "Cyber-Corporate". O projeto foi construído para destacar habilidades em Inteligência Artificial e Desenvolvimento Full Stack, utilizando animações fluidas e uma interface responsiva de última geração.

![Status do Projeto](https://img.shields.io/badge/Status-Operational-00f2ff?style=for-the-badge&logo=target)
![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

---

## 🚀 Tech Stack

O projeto utiliza o que há de mais moderno no ecossistema React:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Estilização:** [Styled Components](https://styled-components.com/) (CSS-in-JS)
* **Animações:** [Framer Motion](https://www.framer.com/motion/) (Scroll Reveal & Micro-interactions)
* **Comunicação:** [EmailJS](https://www.emailjs.com/) (Integração de formulário direto no Client-side)
* **Design:** Glassmorphism, Neon Accents e Responsive Fluid Design.

---

## 🛠️ Funcionalidades Principais

-   **Interface Holográfica:** Uso intenso de Glassmorphism com filtros de desfoque (`backdrop-filter`).
-   **Sistema de Transmissão:** Formulário de contato funcional com feedback de estados (Loading, Success, Error).
-   **Conexão Direta:** Integração com API do WhatsApp para contato imediato via Navbar.
-   **Performance UI:** Animações de entrada sincronizadas com o scroll para evitar fadiga visual.
-   **Totalmente Responsivo:** Layout adaptativo que escala de monitores Ultrawide até smartphones pequenos, utilizando `clamp()` e `aspect-ratio`.

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:** Crie um arquivo .env.local na raiz e adicione suas chaves do EmailJS:
    ```code snippet
    NEXT_PUBLIC_SERVICE_ID=seu_service_id
    NEXT_PUBLIC_TEMPLATE_ID=seu_template_id
    NEXT_PUBLIC_KEY=sua_public_key
    ```

4. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

### 📡 Deployment

O projeto está configurado para deploy contínuo na Vercel. Ao realizar um push para a branch main, o build é gerado automaticamente.

## 👨‍💻 Autor
Desenvolvido por Patric Augusto. Especialista em soluções escaláveis de software e integração de modelos de IA.