export interface OrdemServicoModel {
    codordemservico: number,
    entrada: string,
    saida: string,
    total: number,
    codcliente: number,
    placa: string,
    codfuncionario: number,
    pendente: string,
    totalservico: number,
    valordesconto: number,
    get_cliente_info: {nome: string, cpf: number, codEndereco: number},
    get_funcionario_info: {nome: string},
    get_veiculo_info: {marca: string, modelo: string}
}