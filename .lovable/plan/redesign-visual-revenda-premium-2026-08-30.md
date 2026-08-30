# Redesign visual — Revenda Premium

## Situação

O repositório `abelflopes1/revendas-premium` é privado, então não consigo lê-lo. Vou construir o protótipo visual aqui no Lovable a partir das telas típicas de uma revenda (dashboard de gestão + catálogo de veículos). Se depois você colar prints ou trechos do seu código, eu ajusto os componentes para casarem com a sua estrutura real.

## O que vou entregar

Duas telas estáticas, com dados fictícios, apenas para aprovar o visual:

**1. Catálogo (`/`)**
- Cabeçalho enxuto com marca, busca e alternância de visualização
- Barra de filtros: marca, faixa de preço, ano, câmbio, combustível
- Grade de cards de veículo: foto grande, modelo, ano/km, preço em destaque, selo de condição
- Card destaque (veículo em oferta) ocupando duas colunas
- Página de detalhe simplificada: galeria, ficha técnica, bloco de contato

**2. Dashboard (`/dashboard`)**
- Sidebar de navegação
- Faixa de KPIs: estoque, vendas do mês, ticket médio, leads
- Gráfico de vendas por mês e gráfico de mix por marca
- Tabela de estoque com status, dias em pátio e ações
- Painel lateral de leads recentes

## Direção visual proposta

Showroom premium noturno, sem cara de template genérico:
- Paleta grafite profundo com acento âmbar/cobre e superfícies em vidro sutil
- Tipografia: títulos condensados de peso alto, corpo neutro e legível
- Cantos pouco arredondados, bordas finas, sombras discretas
- Fotos de veículo como protagonista; interface se apaga em volta

Tudo em tokens semânticos no `src/styles.css` (nada de cor fixa nos componentes), com suporte a tema claro e escuro.

## Detalhes técnicos

- Rotas TanStack: `src/routes/index.tsx` (catálogo), `src/routes/dashboard.tsx`, `src/routes/veiculo.$id.tsx`
- Dados mockados em `src/data/vehicles.ts` — sem backend nesta etapa
- Gráficos com Recharts; ícones Lucide
- Imagens dos veículos geradas para o protótipo e salvas em `src/assets/`
- `head()` próprio por rota com título e descrição
