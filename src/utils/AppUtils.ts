
export class AppUtils {
  public static getTest () {
    return 'nothing'
  }

  public static isLocalEnvironment (): boolean {
    const env = ''.concat(process.env.NODE_ENV as string).trim()
    return env === 'local'
  }

  public static isDBShowSQL (): boolean {
    const showSqlQuery = ''.concat(process.env.DB_SHOW_SQL as string).trim()
    if (showSqlQuery === 'true') {
      return true
    }
    return false
  }

  public static isDBSync (): boolean {
    const dbSync = ''.concat(process.env.DB_SYNC as string).trim()
    if (dbSync === 'true') {
      return true
    }
    return false
  }

  public static isUseTunnel (): boolean {
    const useTunnel = ''.concat(process.env.USE_TUNNEL as string).trim()
    if (useTunnel === 'true') {
      return true
    }
    return false
  }

  public static isUseSSL (): boolean {
    const useSSL = ''.concat(process.env.USE_SSL as string).trim()
    if (useSSL === 'false') {
      return false
    }
    return true
  }

  public static getJwtSecret (): string {
    return ''.concat(process.env.JWT_SECRET as string).trim()
  }

  public static getJwtTokenExpiration (): number {
    return parseInt(''.concat(process.env.JWT_EXPIRATION as string).trim())
  }

  public static sleep (seconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000)
    })
  }
}
