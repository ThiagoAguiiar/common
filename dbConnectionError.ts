export class DataBaseConnectionError extends Error {
  message = 'Erro de conexão ao banco de dados'

  constructor() {
    super()
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype)
  }
}
