# 🏢 Institutional Site Template

Um boilerplate completo e pronto para uso para sites institucionais, construído com as melhores tecnologias do mercado.

## 🚀 Tecnologias

- **[Next.js 14](https://nextjs.org/)** — App Router, SSR, otimização de imagens
- **[TailwindCSS](https://tailwindcss.com/)** — Estilização utility-first
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática
- **[Lucide React](https://lucide.dev/)** — Ícones modernos e consistentes
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Utilitários de classes

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx        # Layout raiz com Header e Footer
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── components/
│   ├── ui/
│   │   ├── Button.tsx    # Componente de botão reutilizável
│   │   └── Container.tsx # Container responsivo
│   ├── layout/
│   │   ├── Header.tsx    # Cabeçalho com navegação responsiva
│   │   └── Footer.tsx    # Rodapé completo
│   └── sections/
│       ├── Hero.tsx      # Seção principal
│       ├── About.tsx     # Seção sobre a empresa
│       ├── Services.tsx  # Seção de serviços
│       └── Contact.tsx   # Seção de contato com formulário
├── lib/
│   ├── constants.ts      # Configurações e constantes do site
│   ├── utils.ts          # Função utilitária cn()
│   └── hooks/
│       └── useMediaQuery.ts # Hook para media queries
└── types/
    └── index.ts          # Definições de tipos TypeScript
```

## ⚡ Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/institutional_site_template.git
cd institutional_site_template
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Acesse **http://localhost:3000** no seu navegador.

## 🎨 Personalização

### Dados da empresa
Edite o arquivo `src/lib/constants.ts`:

```ts
export const siteConfig = {
  name: 'Sua Empresa',
  description: 'Descrição da sua empresa',
  url: 'https://seusite.com',
}
```

### Cores
Edite o `tailwind.config.js` para ajustar a paleta de cores `primary`.

### Navegação
Adicione ou remova links em `src/lib/constants.ts` no array `navLinks`.

### Novas seções
Crie componentes em `src/components/sections/` e importe-os em `src/app/page.tsx`.

### Novas páginas
Crie pastas em `src/app/` seguindo as convenções do Next.js App Router.  
Exemplo: `src/app/sobre/page.tsx`

## 📜 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o linter |

## 📋 Regras de desenvolvimento

- **DRY** — Don't Repeat Yourself: reutilize componentes
- **KISS** — Keep It Simple: mantenha o código simples e legível
- **Clean Code** — código limpo, nomes descritivos, funções pequenas
- Use **TailwindCSS** para todos os estilos
- Use **Lucide React** para todos os ícones
- Componentes reutilizáveis em `src/components/ui/`

## 📦 Deploy

### Vercel (recomendado)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SEU_USUARIO/institutional_site_template)

1. Faça push para o GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. Deploy automático!

---

Feito com ❤️ — pronto para ser customizado ao seu projeto.
