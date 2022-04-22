
export class AppUtils {
  public static getTest () {
    return 'nothing'
  }

  public static isDevEnvironment (): boolean {
    const env = ''.concat(process.env.NODE_ENV as string).trim()
    return env === 'dev'
  }

  public static isDBShowSQL (): boolean {
    const showSqlQuery = ''.concat(process.env.DB_SHOW_SQL as string).trim()
    return JSON.parse(showSqlQuery)
  }

  public static isDBSync (): boolean {
    const showSqlQuery = ''.concat(process.env.DB_SYNC as string).trim()
    return JSON.parse(showSqlQuery)
  }

  public static sleep (seconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000)
    })
  }
}
