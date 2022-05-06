// sys
import SysCurrency from '@models/sys/SysCurrency'
import SysCurve from '@models/sys/SysCurve'
import SysCurveUnderlyingLink from '@models/sys/SysCurveUnderlyingLink'
import SysExternalSystem from '@models/sys/SysExternalSystem'
import SysUnderlying from '@models/sys/SysUnderlying'
import SysUnderlyingType from '@models/sys/SysUnderlyingType'
// doms
import DomsAccrualBasis from '@models/doms/DomsAccrualBasis'
import DomsCcyConvType from '@models/doms/DomsCcyConvType'
import DomsSystemType from '@models/doms/DomsSystemType'

export class ModelUtils {
    private static readonly modelInstances: any = {
      // sys
      SysCurrency,
      SysCurve,
      SysCurveUnderlyingLink,
      SysExternalSystem,
      SysUnderlying,
      SysUnderlyingType,
      // doms
      DomsAccrualBasis,
      DomsCcyConvType,
      DomsSystemType
    }

    public static getInstance (modelName: string) {
      return this.modelInstances[modelName]
    }
}
