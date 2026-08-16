# CHANGELOG — CHAPEU DE PALHA HACKER CLUB

Todas as mudanças notáveis do projeto, desde o primeiro esqueleto até a versão atual.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

---

## [0.4.0] — POLIMENTO AAAaaaaaaaaaaaa
**Data:** 2026-08-16

### Adicionado

- **CHANGELOG.md oficial** do projeto
- **Atualizações dinâmicas via GitHub**: a página de atualizações agora consulta o CHANGELOG.md diretamente do repositório público, utilizando o conteúdo local como fallback quando não há conexão com a internet
- **Detalhes ocultos na interface**: novos elementos discretos foram incorporados ao ambiente, mantendo a exploração e a descoberta como parte da experiência

### Corrigido

- **Revelações acidentais**: elementos ocultos não são mais revelados ao passar rapidamente o cursor — determinadas interações exigem que o cursor permaneça sobre a área por alguns instantes
- **Tremor e flicker durante interações**: comportamento de hover reestruturado para manter a geometria estável e evitar alterações visuais indesejadas
- **Pasta `data/` ausente no build**: atualizações e anúncios apresentavam problemas no executável empacotado — agora incluída corretamente no `extraResources`
- **Elementos visuais fora de proporção**: ajustes realizados para preservar a aparência e integração dos detalhes com o ambiente
- **Compatibilidade visual dos elementos interativos**: pequenos ajustes de posicionamento e renderização realizados

### Otimizado

- Canvas de fundo da rede reduzido de 60fps para aproximadamente 25fps, mantendo aparência semelhante e reduzindo o uso de CPU
- Animações CSS pausam quando a janela perde o foco, reduzindo consumo de recursos em segundo plano
- Efeitos de blur reduzidos, utilizando fundos mais opacos para manter o resultado visual
- Redução da carga gráfica em computadores sem GPU dedicada
- Elementos secundários receberam ajustes para reduzir impacto no desempenho
- Executável portátil com aproximadamente 68MB, sem necessidade de instalação ou dependências externas
- **Elementos ocultos ainda mais discretos**, reduzindo contraste, brilho e presença visual para preservar a experiência de descoberta

---

## [0.3.0] — DETALHES OCULTOS
**Data:** 2026-08-15

### Adicionado

- **Elementos interativos ocultos**: novos detalhes foram incorporados ao ambiente, alguns baseados em referências de hardware
- **Interações contextuais**: determinados elementos podem ser percebidos ou revelados através de interações específicas
- **Mensagens misteriosas** ao interagir com alguns pontos da interface
- Novos detalhes visuais integrados às páginas existentes

### Corrigido

- **Página LABS com elementos fora do lugar**: rotações empilhadas entre container, objeto e camada visual causando distorções — rotação consolidada no container
- **Elementos ocultos recortados incorretamente** durante a exibição
- **Proporções e silhuetas** revisadas para melhorar a integração dos elementos ao ambiente
- **Overflow de elementos** ajustado para garantir a exibição completa quando necessário
- Pequenos problemas de posicionamento em diferentes resoluções

### Alterado

- Posições dos elementos ocultos movidas para áreas mais discretas
- Opacidade reduzida progressivamente para tornar a descoberta menos óbvia
- Interações ajustadas para evitar revelações acidentais
- Elementos visuais integrados de forma mais natural ao restante da interface

---

## [0.2.0] — SEGREDOS E LOCALIZAÇÃO
**Data:** 2026-08-14

### Adicionado

- **Cadeia secreta de descobertas** com recompensa final — a sequência completa permanece como parte da exploração do projeto
- **Painel CLASSIFICADO**: canal restrito com terminal de comando e sistema de verificação de identidade
- **Replay da sequência de boot** na estação REDE
- **Mensagens ocultas** espalhadas pela interface, incluindo dicas, interações e elementos descobríveis durante a navegação
- **Painel de atualizações do programa**
- **Sistema de anúncios**
- **Timer de sessão** com contagem em tempo real

### Alterado

- **Localização completa pt-BR**: mensagens, terminal CLASSIFICADO, sequência de descoberta e botões traduzidos
- Indicador de tempo ativo agora utiliza contador real em vez de valores simulados
- Terminal com animações de digitação aprimoradas
- Substituição visual dos cards secundários
- Melhor integração entre as páginas e os elementos interativos

### Corrigido

- Scrollbar invisível em todos os painéis internos
- Layout responsivo revisado para viewports entre 1080 e 1366 pixels
- Pequenos problemas de posicionamento e espaçamento
- Ajustes de compatibilidade entre diferentes tamanhos de janela

---

## [0.1.0] — LAUNCHER BASE
**Data:** 2026-08-10

### Adicionado

- **Boot cinematográfico**: introdução em estilo terminal com letreiro animado, fluxo hexadecimal e opção de pular
- **Estação de trabalho (REDE)**: mapa de nós animado, terminais de sistema e painel de métricas
- **Laboratórios (LABS)**: painel de laboratórios virtuais para WEB, REDE, LINUX, WINDOWS e HARDWARE
- **Página CTF**: categorias para WEB, REDE, CRIPTO, FORENSE, ENGENHARIA REVERSA e OSINT
- **Cards de missões** para os desafios disponíveis
- **Terminal de sessão**: logs com digitação animada e heartbeat periódico
- **Visualização de rede animada** utilizando Canvas
- **Navegação modular** com arquitetura separada em CSS, JS, páginas e serviços
- **Localização pt-BR**
- Estrutura inicial para futuras expansões do launcher

### Corrigido

- Caracteres especiais escapados corretamente no terminal
- Pequenos problemas de renderização durante a sequência inicial de boot

---

## Próximos passos

- **Hub de desafios CTF** com engines híbridas, incluindo desafios embutidos e suporte opcional a Docker
- **Modo "Junto com Amigo"** utilizando rede local
- Sistema de gerenciamento e atualização dos desafios
- Melhorias na integração entre launcher e ambiente de laboratório
- Novos conteúdos e experiências interativas
- Expansão dos sistemas de descoberta e exploração
