# HOMEM REPARADOR — CONTEXTO DO PROJETO

## O que é este app
Plataforma de conteúdo digital masculino. Usuários compram acesso e recebem login por email. O app entrega "receitas e truques masculinos personalizados" via vídeo aulas, PDFs e textos formatados.

## Status atual
Frontend visual apenas. Sem backend. Todo dado é mockado via localStorage + mock-data.ts.

## Design System
- Tema escuro masculino: fundo #0D0D14, ouro #C9A84C, roxo #7B5CF0
- Fonte display: Montserrat (headings)
- Fonte corpo: Inter
- Ver tailwind.config.ts para todos os tokens

## Fluxo de navegação
Login → Quiz (12 perguntas) → Loading I.A. (30s) → Dashboard → Truques → Aula

## Regras importantes
- TODO estado de usuário usa localStorage (prefixo hr_)
- NÃO usar dados reais — tudo é mock
- Mobile-first: toda tela deve funcionar perfeitamente em 375px
- Manter consistência visual com o design system definido
- Não usar imagens externas — usar placeholders com bg colorido + ícone/emoji

## Módulo atual de conteúdo
Truque do Vick VapoRub — 4 aulas, 3 PDFs

## Prioridade de qualidade
1. Quiz flow (impressão inicial do produto)
2. Tela de Loading I.A. (momento de maior impacto emocional)  
3. Dashboard (primeira impressão após o quiz)
4. Consistência visual entre todas as telas