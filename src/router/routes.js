
const routes = [
  {
    path: '/',
    component: () => import('layouts/PainelUsuario.vue'),
    children: [
      { path: '', component: () => import('pages/navegation/Index.vue') },
      { path: 'localizacao', component: () => import('pages/navegation/Localizacao.vue') },
      { path: 'pesquisar', component: () => import('pages/navegation/Pesquisar.vue') },
      { path: 'lista-empresas', component: () => import('pages/navegation/ListaEmpresas.vue') },
      { path: 'login', component: () => import('pages/navegation/Login.vue') },
      { path: 'perfil', component: () => import('pages/navegation/PerfilAnunciante.vue') },
      { path: 'quero-anunciar', component: () => import('pages/navegation/QueroAnunciar.vue') },
      { path: 'ofertas', component: () => import('pages/navegation/Ofertas.vue') },
      { path: 'favoritos', component: () => import('pages/navegation/Favoritos.vue') },
      { path: 'novo-anuncio', component: () => import('pages/navegation/NovoAnuncio.vue') },
      { path: 'cadastro-ofertas', component: () => import('pages/navegation/CadastroDeOfertas.vue') },
      { path: 'beneficios-do-plano', component: () => import('pages/anunciantes/BeneficiosPlano.vue') },
      { path: 'prazo-de-validade', component: () => import('pages/anunciantes/PrazoDeValidade.vue') },
      { path: 'cadastro-anunciante', component: () => import('pages/anunciantes/CadastroAnunciante.vue') },
      { path: 'cadastro-logo-anunciante', component: () => import('pages/anunciantes/CadastroLogo.vue') },
      { path: 'cadastro-endereco-anunciante', component: () => import('pages/anunciantes/CadastroEnderecoAnunciante.vue') },
      { path: 'cadastro-contato-anunciante', component: () => import('pages/anunciantes/CadastroContatoAnunciante.vue') },
      { path: 'cadastro-categoria-empresa', component: () => import('pages/anunciantes/CadastroCategoriaEmpresa.vue') },
      { path: 'cadastro-perfil-anunciante', component: () => import('pages/anunciantes/CadastroPerfilAnunciante.vue') },
      { path: 'avaliacao', component: () => import('pages/anunciantes/Avaliacao.vue') },
      { path: 'login-usuario', component: () => import('pages/anunciantes/LoginUsuario.vue') },
      { path: 'voucher', component: () => import('pages/anunciantes/Voucher.vue') },
      { path: 'gerenciar-anuncios', component: () => import('pages/anunciantes/GerenciarAnuncios.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
