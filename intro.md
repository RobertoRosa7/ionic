## Ionic o que é?

[x] É um Framework para desenvolvimento mobile - usando HTML5, CSS e JavaScript

## Como funciona?

[x] Usando para desenvolver app hídrido que roda em várias plataformas
[x] Utiliza WebView - como um browser
[x] App nativos - roda diretamente no celular - sem WebView

## NavController
[x] Importar ViewChild no document root - core
[x] Importar NavController no document root - ionic-angular
[x] Referenciar no html na tag `ion-nav #nav`
[x] Precisa declarar na class root `@viewChild('nav') nav: NavController`
[x] Em seguida aplicar no contructor da class para utilização de todas as propriedades
[x] Para fazer uso basta importar em cada página o NavController, se caso não vier por default
  [x] popToRoot() - retira todas as páginas e vai para página root atual
  [x] popAll() - desempilha seguidamente todas as views da pilha, um de cada vez
  [x] insert(index, page, params) - insere uma nova página na posição atrás do index (root é 0)
  [x] insertPages(index, array) - insere mais de uma página
  [x] remove(index, quantidade) - funciona igual ao splice
  [x] getActive() - pegar o index da página atual
  [x] canGoBack() - verificar se pode voltar para página anterior, volta na pilha

## Lifecycle Hooks
[x] Eventos disparado que segue uma ordem desde sua criação até sua destruíção
[x] Hooks
  [x] ionViewDidLoad() - quando a página é criada, executado uma vez (load quando requer uma vez)
  [x] ionViewWillEnter() - executado quando a página está preste a ficar ativa
  [x] ionViewDidEnter() - executado quando a página terminou de carregar (enter quando requer sempre usar)
  [x] ionViewDidLeave() - executado quando deixou de ser a página atual
  [x] ionViewWillLeave() - executado momento antes de sair da página atual
  [x] ionViewWillunload() - executado quando a página é destruída
[x] NavsGuards - verificar comportamento da página, e também verificar se há permissões para acesso
  [x] ionViewCanLeave() - verificar se pode sair
  [x] ionViewCanEnter() - verificar se pode entrar, executado antes do ionViewDidLoad, se há condições para entrar