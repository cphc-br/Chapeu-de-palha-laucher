# Changelog — CHAPEU DE PALHA HACKER CLUB

## [0.1.0] — Launcher base

### Adicionado
- Launcher local completo: boot com intro hacker, terminal de sessão, navegação entre páginas e relógio de sessão ao vivo
- Páginas principais: Estação (REDE), Laboratórios (LABS), CTF, Atualizações e Anúncios
- Conteúdo fake (sem conexões reais com redes externas): mapa de nós, terminais, painéis de sistema, cards de CTF, laboratórios
- Sequência de boot com letreiro estilo terminal e opção de replay
- Mensagens ocultas espalhadas pela interface (dicas, cliques casuais, scroll)
- **Easter eggs adicionados**: Detalhes de localização e ativação ficam para serem descobertos
- **Easter egg painel adicionado**: Detalhes de localização e ativação ficam para serem descobertos
- Sessão local: timer de atividade em tempo real
- Painel CLASSIFICADO com terminal de acesso restrito (parte da brincadeira interna)
- Tradução completa das mensagens para pt-BR

### Corrigido
- Bugs de visual dos easter eggs 
- Página LABS exibindo elementos fora do lugar
- Pasta `data/` (atualizações e anúncios) agora é incluída no build do executável — corrige UPDATES/ANUNCIOS quebrando no app empacotado

### Otimizado
- Canvas de fundo da rede reduzido de 60fps para ~25fps (visual quase idêntico, bem mais leve)
- Animações CSS pausam quando a janela perde o foco (economia de CPU em segundo plano)
- Efeitos de blur reduzidos e fundos mais opacos compensando (menos carga em PCs sem GPU dedicada)
- Executável portátil (~68MB) sem necessidade de instalação

## Próximos passos (planejado)
- Hub de desafios CTF com engines híbridas (embutido + Docker opcional)
- Modo "junto com amigo" via rede local
