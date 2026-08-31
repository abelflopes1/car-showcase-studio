# Dashboard clean — menu preto, área branca

## Objetivo
Mudar apenas as cores do dashboard (`/dashboard`): manter o menu lateral esquerdo preto e tornar a área de conteúdo (direita) branca, com visual clean. Sem efeitos que pareçam "jogo". O catálogo (`/`) não é alterado.

## Estado atual
- `src/routes/dashboard.tsx`: o container usa `showroom-bg` (gradiente escuro); o `<aside>` usa `bg-sidebar` (preto, oklch 0.1); o `<main>` herda o fundo escuro e os cards usam `bg-card` (escuro).
- `src/styles.css`: tema global monocromático escuro (`:root` com `--background` near-black). Tokens de sidebar já são pretos.

## Mudanças (apenas cor, escopadas ao dashboard)

### 1. `src/styles.css` — tema claro local para o conteúdo
Adicionar uma classe utilitária `.dash-light` (escopada ao `<main>` do dashboard) que sobrescreve os tokens semânticos para claro, mantendo o preto e branco:
- `--background: oklch(1 0 0)` (branco)
- `--foreground: oklch(0.13 0 0)` (preto)
- `--card: oklch(1 0 0)`, `--card-foreground: oklch(0.13 0 0)`
- `--popover: oklch(1 0 0)`, `--popover-foreground: oklch(0.13 0 0)`
- `--muted: oklch(0.96 0 0)`, `--muted-foreground: oklch(0.45 0 0)`
- `--border: oklch(0.13 0 0 / 10%)`, `--input: oklch(0.13 0 0 / 12%)`
- `--primary: oklch(0.13 0 0)`, `--primary-foreground: oklch(1 0 0)` (botões pretos)
- charts invertidos para fundo branco: `--chart-1: oklch(0.13 0 0)` (preto), `--chart-5: oklch(0.6 0 0)` (cinza para a linha tracejada de meta)
- manter `--sidebar` preto inalterado (a classe não atinge o `<aside>`)

### 2. `src/routes/dashboard.tsx` — aplicar a classe
- Trocar `showroom-bg` por fundo neutro (remover o gradiente escuro).
- Adicionar `dash-light` ao `<main>` para que toda a área de conteúdo use os tokens claros.
- O `<aside>` continua `bg-sidebar` (preto) com texto claro.
- Ajustar o estado ativo do item de menu para um look clean (fundo branco sutil no item ativo com a barra lateral preta, ou traço branco) em vez do `shadow-[inset...]` atual.
- Pequenos ajustes de contraste: deltas de KPI continuam pretos/cinza; status badges usam tons de cinza/borda (já ok com tokens).

## Resultado
- Menu esquerdo: preto, texto claro, clean.
- Área direita: branca, cards brancos com bordas finas, gráficos em preto/cinza, tipografia preta.
- Sem gradientes "de jogo", sem efeitos de vidro. Apenas preto e branco, profissional.

## Não inclui
- Mudanças no catálogo (`/`) ou na página de detalhes do veículo.
- Mudanças de layout, tipografia ou dados.
