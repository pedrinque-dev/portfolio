# 🖥️ Pedro Lombardi — Portfólio

Portfólio profissional desenvolvido com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS v4**. Conta com tema dark/light sem flash no carregamento, internacionalização (PT/EN), páginas de detalhes de projetos, formulário de contato validado e imagens otimizadas em AVIF/WebP.

🔗 **[portfolio-psi-six-7im3e06qol.vercel.app](https://portfolio-psi-six-7im3e06qol.vercel.app)** ← acesse ao vivo

---

## ✨ Funcionalidades

- **Dark / Light mode** com persistência em `localStorage` e aplicação pré-renderização (sem flash)
- **Internacionalização (i18n)** em Português (`pt-BR`) e Inglês (`en`) com `react-i18next` e atualização dinâmica de `<html lang>`
- **Roteamento SPA** com `react-router` e carregamento sob demanda (`React.lazy`) para `/` e `/projects/:slug`
- **Animações acessíveis** com `motion` respeitando `prefers-reduced-motion`
- **Formulário de contato** validado com `react-hook-form` + `zod` e envio via Web3Forms
- **Imagens otimizadas** em formatos modernos (`AVIF` e `WebP`) via `<picture>` e `srcset`
- **SEO e Acessibilidade (WCAG AA)** — metadados por rota, Open Graph, JSON-LD `Person`, `sitemap.xml`, `robots.txt`, skip link e navegação por teclado

---

## 🛠️ Tecnologias

| Camada | Tecnologias |
|---|---|
| Front-end | React 19, TypeScript (strict), Tailwind CSS v4 |
| Roteamento | React Router v7 |
| Internacionalização | i18next, react-i18next |
| Formulário e Validação | React Hook Form, Zod |
| Animações e Ícones | Motion, Lucide React, React Icons |
| Qualidade e Build | Vite, ESLint, Prettier, Sharp |
| Deploy e CI | Vercel, GitHub Actions |

---

## 📁 Estrutura de Pastas

```text
portfolio/
├── public/               # Arquivos estáticos (curriculo.pdf, favicon.svg, og-image.png, robots.txt, sitemap.xml, fonts/)
├── scripts/              # Script de otimização de imagens com Sharp
├── src/
│   ├── assets/           # Imagens originais e variantes otimizadas (AVIF/WebP)
│   ├── components/
│   │   ├── layout/       # Container, Footer, Navbar, PageMeta, Section, ThemeProvider
│   │   ├── sections/     # Hero, About, Stacks, Projects, Contact
│   │   └── ui/           # Button, Card, LanguageSwitcher, Tag, ThemeToggle
│   ├── config/           # Dados gerais do site e links (site.ts)
│   ├── data/             # Dados tipados de projetos e tecnologias (projects.ts, stack.ts)
│   ├── hooks/            # Hooks customizados (useTheme, useReducedMotion)
│   ├── lib/              # Configuração de i18n e schemas Zod
│   ├── locales/          # Traduções (pt.json, en.json)
│   ├── pages/            # Home, ProjectDetail, NotFound
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── vercel.json
└── package.json
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com base no `.env.example`:

```env
VITE_WEB3FORMS_KEY=sua_chave_do_web3forms
```

| Variável | Descrição |
|---|---|
| `VITE_WEB3FORMS_KEY` | Chave pública de acesso da API do [Web3Forms](https://web3forms.com/) para envio do formulário de contato |

---

## 🚀 Como rodar localmente

```bash
git clone https://github.com/pedrinque-dev/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

### Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento Vite
- `npm run build` — verifica tipos e gera o bundle de produção em `dist/`
- `npm run preview` — visualiza o build de produção localmente
- `npm run lint` — executa o ESLint em todo o projeto
- `npm run typecheck` — executa o compilador TypeScript (`tsc --noEmit`)

---

## 📬 Contato

- **E-mail:** lombardipedro169@gmail.com
- **LinkedIn:** [linkedin.com/in/pedro-lombardi-7781522b7](https://linkedin.com/in/pedro-lombardi-7781522b7)
- **GitHub:** [github.com/pedrinque-dev](https://github.com/pedrinque-dev)

---

<p align="center">Feito com ♥ por Pedro Lombardi · 2026</p>
