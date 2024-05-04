const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes')
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
}

console.log(calcularValorTotalProjeto(['setup'], 6));
// 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'
exports.calcularValorTotalProjeto = calcularValorTotalProjeto;
