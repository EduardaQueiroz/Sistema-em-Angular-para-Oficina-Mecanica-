export interface ClientesDevedoresModel {
    nome: string,
    oficinas: [
        {
            total: number,
            descricao: string
        }
    ],
    total: number
}