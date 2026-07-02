# Roberto Carlos Elias — Advogado

Site/blog em Next.js (App Router + TypeScript + Tailwind CSS) para o
advogado Roberto Carlos Elias, especialista em Direito do Consumidor.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `/` — página inicial (hero, áreas de atuação, prévia do blog)
- `/blog` — listagem de artigos
- `/blog/[slug]` — artigo individual (conteúdo em `lib/posts.ts`)
- `/sobre` — sobre o advogado, com o cartão de visita
- `/contato` — WhatsApp e Instagram

Para adicionar um novo artigo, edite `lib/posts.ts` e adicione um objeto
ao array `posts` — a página é gerada automaticamente.

## Paleta de cores

Extraída do cartão de visita (fundo preto quente com relevo dourado):

| Token       | Hex       | Uso                              |
|-------------|-----------|-----------------------------------|
| `ink`       | `#0B0A08` | Fundo principal                  |
| `panel`     | `#151310` | Cartões e seções elevadas         |
| `panelLine` | `#2A2418` | Bordas sutis                      |
| `gold`      | `#C9A24B` | Cor de destaque principal         |
| `goldLight` | `#E8CD8A` | Hover / realces                   |
| `bronze`    | `#8C6A3F` | Acento secundário, mais discreto  |
| `parchment` | `#EDE7D8` | Texto sobre fundo escuro          |

## Tipografia

- **Playfair Display** — títulos (ecoa o serifado clássico do logo RCE)
- **Work Sans** — corpo de texto

## Elemento de assinatura

Um SVG de linha da balança da justiça (`components/Scales.tsx`), a mesma
referência usada no verso do cartão, aparece de forma discreta no hero,
no rodapé e na página "Sobre".
