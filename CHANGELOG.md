# CHANGELOG — CHAPEU DE PALHA HACKER CLUB

Todas as mudanças notáveis do projeto, desde o primeiro esqueleto até hoje.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

---

## [0.4.0] — POLIMENTO FINAL
**Data:** 2026-08-16

### Adicionado

- **CHANGELOG.md oficial** do projeto (este arquivo)
- **Atualizações dinâmicas via GitHub**: a página de atualizações agora puxa o CHANGELOG.md direto do repositório público, com fallback automático para o conteúdo local quando não há internet
- **Easter eggs quase invisíveis**: os objetos de hardware escondidos agora ficam praticamente imperceptíveis (opacidade mínima + brilho reduzido) — detalhes de localização e ativação ficam a cargo da descoberta

### Corrigido

- **Hover acidental revelando os easter eggs**: passar o mouse rápido por cima não revela mais nada — agora é preciso manter o cursor parado sobre o elemento (800ms) para revelar
- **Tremor/flicker ao passar o mouse** nos easter eggs (loop expandir/colapsar em certas posições do cursor) — reestruturado para hover no container com geometria fixa
- **Pasta `data/` ausente do build**: atualizações e anúncios quebravam no executável empacotado — agora incluída no `extraResources`
- **Easter eggs confundidos com celular**: Flipper Zero redesenhado em orientação deitada (silhueta fiel ao hardware real, sem tela à mostra)

### Otimizado

- Canvas de fundo da rede reduzido de 60fps para ~25fps (visual quase idêntico, CPU bem mais leve)
- Animações CSS pausam quando a janela perde o foco (economia em segundo plano)
- Efeitos de blur reduzidos com fundos mais opacos compensando (menos carga em PCs sem GPU dedicada)
- Executável portátil (~68MB) sem necessidade de instalação ou dependências

---

## [0.3.0] — EASTER EGGS REALISTAS
**Data:** 2026-08-15

### Adicionado

- **Easter eggs Flipper Zero e ESP32**: modelos visuais realistas recriados do zero, com fidelidade ao hardware real (D-pad laranja, tela LCD, módulo WROOM-32, antena, pinos dourados)
- **Revelação ao hover**: os objetos revelam o aparelho inteiro em tamanho reduzido ao passar o mouse (comportamento posteriormente refinado na 0.4.0)
- **Mensagens misteriosas** ao clicar nos objetos escondidos (fora da cadeia secreta)

### Corrigido

- **Página LABS com elementos fora do lugar**: rotações empilhadas (container + objeto + casca) causando distorção — rotação consolidada no container
- **Easter eggs recortados/cortados incorretamente** na exibição
- **Flipper Zero parecendo celular**: proporções e silhueta revisadas
- **ESP32 com USB cortado**: overflow ajustado para exibir a placa por inteiro quando revelada

### Alterado

- Posições dos easter eggs movidas para pontos discretos (atrás de painéis e rodapés)
- Opacidade dos objetos reduzida progressivamente (0.2 → 0.08) até ficarem quase invisíveis

---

## [0.2.0] — SEGREDOS E LOCALIZACAO
**Data:** 2026-08-14

### Adicionado

- **Cadeia secreta de descobertas** com recompensa final (flag) — a brincadeira completa fica para ser encontrada
- **Painel CLASSIFICADO**: canal restrito com terminal de acesso (termo correto: terminal de comando) e sistema de verificação de identidade
- **Replay da sequência de boot** na estação (REDE)
- **Easter eggs Flipper Zero e ESP32** adicionados pela primeira vez (modelos iniciais)
- **Mensagens ocultas** espalhadas pela interface (dicas, cliques casuais, scroll)
- **Painel de atualizações do programa** (esta tela)
- **Sistema de anúncios**
- **Timer de sessão** com contagem real em tempo real

### Alterado

- **Localização completa pt-BR**: mensagens dos objetos escondidos, terminal CLASSIFICADO, sequência da flag e botões traduzidos
- Indicador de tempo ativo agora usa contador real (não mock)
- Terminal com animações de digitação melhoradas
- Substituição visual dos cards secundários

### Corrigido

- Scrollbar invisível em todos os painéis internos
- Layout responsivo revisado em viewports 1080–1366

---

## [0.1.0] — LAUNCHER BASE
**Data:** 2026-08-10

### Adicionado

- **Boot cinematográfico**: intro estilo terminal com letreiro animado, fluxo de hex e pular
- **Estação de trabalho (REDE)**: mapa de nós animado, terminais de sistema, painel de métricas mock
- **Laboratórios (LABS)**: painel de laboratórios virtuais (WEB, REDE, LINUX, WINDOWS, HARDWARE)
- **Página CTF**: categorias (WEB, REDE, CRIPTO, FORENSE, ENG. REVERSA, OSINT), cards de missões
- **Terminal de sessão**: logs fictícios com digitação animada e heartbeat periódico
- **Visualização de rede animada** (canvas)
- **Navegação modular**: arquitetura css / js / pages / services separados
- **Localização pt-BR**

### Corrigido

- Caracteres especiais escapados corretamente no terminal

---

## Próximos passos (planejado)

- Hub de desafios CTF com engines híbridas (embutido + Docker opcional)
- Modo "junto com amigo" via rede local
