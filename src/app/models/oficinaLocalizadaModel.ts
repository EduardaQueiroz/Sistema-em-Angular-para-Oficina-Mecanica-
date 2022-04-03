export interface OficinaLocalizadaModel {
    nome: string,
    distancia_oficina: {
        distancia_em_km: number,
        descricao_oficina: string
    }
}