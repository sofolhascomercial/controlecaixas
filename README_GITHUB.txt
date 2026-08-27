SÓ FOLHAS - CONTROLE DE CAIXAS
VERSÃO: 2026.08.27-estabilidade-diagnostico-periodo-v1

ARQUIVOS PARA PUBLICAR NO GITHUB PAGES
- index.html
- script.js
- style.css
- logo-sofolhas.png

IMPORTANTE
Substitua os quatro arquivos no repositório mantendo exatamente estes nomes.
Depois do commit, aguarde o GitHub Pages atualizar e abra a página novamente.
O index usa versão de cache nova para script.js e style.css.

ALTERAÇÕES DESTA VERSÃO
1. Proteção do lançamento de folhagens por separador:
   - atualização do Firebase não desmonta o formulário enquanto há digitação;
   - a aba atual do usuário é preservada na sincronização;
   - rascunho das quantidades é salvo localmente e restaurado;
   - atualização remota fica em segundo plano até o salvamento;
   - se o salvamento falhar por exceção, o rascunho permanece.

2. Diagnóstico / Erros:
   - nova aba somente para ADM;
   - códigos por área, como ERR-SEP, ERR-FB, ERR-UI e ERR-BOOT;
   - registra data/hora, usuário, aba, ação, navegador, sistema operacional,
     tamanho da tela, versão do sistema, mensagem e stack técnico;
   - não registra senhas;
   - botão para copiar código do erro.

3. Compatibilidade iOS / Android / Desktop:
   - viewport-fit e safe areas de iPhone/iPad;
   - fallback de vh/svh/dvh;
   - -webkit-backdrop-filter;
   - proteção de localStorage/sessionStorage;
   - leitura de arquivos Excel com FileReader como fallback;
   - fallback para download de Excel;
   - cache-busting do JS/CSS e metatags contra cache antigo;
   - tratamento de erro de inicialização para evitar tela branca sem diagnóstico.

4. Seletor de período no topo:
   - Hoje;
   - Ontem;
   - Últimos 7 dias;
   - Este mês;
   - Período personalizado.
   O período altera análises do Dashboard, Resumo de Envios, Divergências e
   Pendências. Ele NÃO altera a data operacional dos formulários de lançamento.
   Estoque é exibido como saldo atual e não é somado pelo período.

5. Mantidas as alterações anteriores:
   - usuários compactos com busca por nome/login;
   - separadores compactos com renomear/excluir e propagação do nome;
   - planilhas operacionais: CD por separador, MÉRCIA/César por rede,
     Roberto por rota;
   - promotores validam somente Dia a Dia, Comper/Fort e Costa;
   - demais redes ficam somente com validação do motorista;
   - Excel prevalece como fonte oficial quando houver conflito.

VALIDAÇÕES EXECUTADAS
- node --check no script.js: OK
- avaliação JavaScript em ambiente simulado: OK
- teste de preservação da aba durante reconciliação: OK
- teste de bloqueio de renderização remota durante edição: OK
- teste de diagnóstico com detecção de iOS/Safari: OK
