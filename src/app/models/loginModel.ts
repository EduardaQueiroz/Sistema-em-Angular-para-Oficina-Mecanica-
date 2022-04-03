export interface LoginModel {
    login: string,
    senha: string,
    auth: boolean,
    codfuncionario: number,
    get_funcionario: {
        cod_oficina: number,
        descricao_oficina: string,
        cod_funcionario: number,
        cargo_funcionario: string
    }
}