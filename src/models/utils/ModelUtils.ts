import SysExternalSystem from '@models/sys/SysExternalSystem'
import DomsSystemType from '@models/doms/DomsSystemType'

export class ModelUtils {
    private static readonly modelInstances: any = {
      SysExternalSystem,
      DomsSystemType
    }

    public static getInstance (modelName: string) {
      return this.modelInstances[modelName]
    }
}
