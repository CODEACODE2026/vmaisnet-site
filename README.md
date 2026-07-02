# VMaisNet Site

Base inicial estatica para o redesign do site institucional da VMaisNet.

## Estrutura
- `index.html`: home inicial com secoes aprovadas no planejamento.
- `assets/config/site.json`: configuracao editavel de imagens, contatos e links.
- `assets/css/styles.css`: estilos responsivos.
- `assets/js/main.js`: menu mobile, configuracao do site, estado do header e seletor de planos.
- `assets/img/`: assets locais usados na primeira base.

## Configuracao editavel
Edite `assets/config/site.json` para alterar dados principais sem mexer no HTML.

Campos disponiveis:
- `contact.phoneDisplay`: telefone exibido no site.
- `contact.phoneHref`: link telefonico no formato `tel:+554836264545`.
- `contact.whatsappUrl`: link usado em todos os botoes de WhatsApp.
- `contact.email` e `contact.emailHref`: e-mail exibido e link `mailto:`.
- `links.speedtest`: link do teste de velocidade.
- `links.portal`: link da central do assinante.
- `links.privacy`, `links.facebook`, `links.instagram`: links do rodape.
- `images.logo`: caminho da logo.
- `images.championBanner`: caminho do banner do topo.
- `images.hero`: caminho da imagem principal do hero.
- `imageAlt.*`: textos alternativos das imagens.

Para trocar uma imagem, envie o arquivo novo para `assets/img/` e altere o caminho em `assets/config/site.json`.
O HTML continua com valores de fallback caso o arquivo de configuracao nao carregue.

## Fontes de planejamento
- `/opt/codeacode/ai-office/projects/vmaisnet-site/discovery.md`
- `/opt/codeacode/ai-office/projects/vmaisnet-site/master-prompt.md`
- `/opt/codeacode/ai-office/projects/vmaisnet-site/requisitos.md`
- `/opt/codeacode/ai-office/projects/vmaisnet-site/arquitetura.md`
- `/opt/codeacode/ai-office/projects/vmaisnet-site/direcao-criativa.md`
- `/opt/codeacode/ai-office/projects/vmaisnet-site/assets-plan.md`

## Assets temporarios
- `logo-vmaisnet.png`: baixado do site atual da VMaisNet.
- `banner-champion-vmaisnet.jpg`: banner enviado pelo cliente para manter no topo do site.
- `provedor-vmaisnet.jpeg`: baixado do site atual da VMaisNet.
- `casa-vmaisnet.png`: baixado do site atual da VMaisNet.
- `escritorio-vmaisnet.png`: baixado do site atual da VMaisNet.

Antes de publicar, confirmar permissao/licenca e substituir por assets finais quando necessario.

## Links reais usados
- WhatsApp: `https://wa.me/554836264545`
- Speedtest: `https://vmaisnet.speedtestcustom.com/`
- Central do assinante: `https://srv.vmaisnet.com/`
- Planos para voce: `https://vmaisnet.com.br/paravoce/`
- Planos para empresa: `https://vmaisnet.com.br/para-sua-empresa-internet/`
- Politica de privacidade: `https://vmaisnet.com.br/politica-de-privacidade/`
- Facebook: `https://www.facebook.com/vmaisnettubarao`
- Instagram: `https://www.instagram.com/vmaisnet/`

## Pendencias
- Confirmar planos, precos, velocidades, cobertura e condicoes comerciais.
- Confirmar texto institucional final.
- Confirmar horarios e enderecos finais com o cliente.
- Validar direcao visual com o usuario antes de avancar para acabamento.
