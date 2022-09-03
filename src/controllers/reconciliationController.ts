import { database } from '@config/database'
import logger from '@config/logger'
import { EditionService } from '@services/EditionService'
import { ReconciliationService } from '@services/ReconciliationService'
import express from 'express'
import httpMiddleware from 'src/middleware/http.middleware'

const reconciliationRoutes = express.Router()
reconciliationRoutes.use(httpMiddleware)

const editionService = new EditionService()
const reconciliationService = new ReconciliationService()
const modelName = 'ReconDimensionGroup'

reconciliationRoutes.get('/', async (req: any, res: any) => {
  logger.info('GET /' + req.params?.model)
  try {
    const items = await reconciliationService.find({ model: modelName, searchOptions: req.query })
    if (!items) {
      return res.status(400).json({ message: 'No content.' })
    }
    return res.status(200).json(items)
  } catch (message) {
    return res.status(400).json({ message })
  }
})

reconciliationRoutes.get('/account', async (req: any, res: any) => {
  logger.info('GET /' + req.params?.model)
  try {
    // const items = await reconciliationService.find({ model: modelName, searchOptions: req.query })
    // if (!items) {
    //   return res.status(400).json({ message: 'No content.' })
    // }

    // TODO
    const items = {
      data: [
        {
          reconDimensionGroup: 1,
          genldgAccountPlan: {
            glAccountCode: '2.3.9.42.83.9.423-1',
            glAccountName: 'description for genldgAccountPlan'
          }
        }, {
          reconDimensionGroup: 2,
          genldgAccountPlan: {
            glAccountCode: '2.4.9.42.83.9.423-2',
            glAccountName: 'description for genldgAccountPlan'
          }
        }, {
          reconDimensionGroup: 3,
          genldgAccountPlan: {
            glAccountCode: '2.3.9.42.83.9.423-9',
            glAccountName: 'description for genldgAccountPlan'
          }
        }, {
          reconDimensionGroup: 4,
          genldgAccountPlan: {
            glAccountCode: '2.3.9.42.83.9.423-5',
            glAccountName: 'description for genldgAccountPlan'
          }
        }, {
          reconDimensionGroup: 5,
          genldgAccountPlan: {
            glAccountCode: '2.3.9.42.83.9.423-4',
            glAccountName: 'description for genldgAccountPlan 2.3.9.42.83.9.423-4'
          }
        }
      ]
    }

    return res.status(200).json(items)
  } catch (message) {
    return res.status(400).json({ message })
  }
})

reconciliationRoutes.get('/metric', async (req: any, res: any) => {
  logger.info('GET /' + req.params?.model)
  try {
    // const items = await reconciliationService.find({ model: modelName, searchOptions: req.query })
    // if (!items) {
    //   return res.status(400).json({ message: 'No content.' })
    // }

    // TODO
    const items = {
      data: [
        {
          reconDimensionGroup: 1,
          reconMetric: {
            reconMetricId: 1,
            reconMetricDescription: 'metric description'
          },
          product: {
            productCode: '12312',
            productDescription: 'product description'
          },
          glClass: 'CLASS00',
          reconBzdfPoint: [
            {
              reconBzdfMap: {
                reconBzdfMapId: 1,
                sourceTable: 'PORT_LOAN_POS',
                sourceTableColumn: 'OUTSTANDING'
              },
              mathOperator: {
                mathOperatorId: 9,
                mathOperatorName: 'DIFOF(Col1:ColN)'
              }
            }, {
              reconBzdfMap: {
                reconBzdfMapId: 4,
                sourceTable: 'PORT_LOAN_POS',
                sourceTableColumn: 'OUTSTANDING'
              },
              mathOperator: {
                mathOperatorId: 4,
                mathOperatorName: 'SUMOF(Col1:ColN)'
              }
            }, {
              reconBzdfMap: {
                reconBzdfMapId: 2,
                sourceTable: 'PORT_LOAN_POS',
                sourceTableColumn: 'UNPAID_PRINCIPAL'
              },
              mathOperator: {
                mathOperatorId: 3,
                mathOperatorName: 'SUMOF(ABSOL(Col1):ABSOL(ColN))'
              }
            }
          ]
        }, {
          reconDimensionGroup: 2,
          reconMetric: {
            reconMetricId: 6,
            reconMetricDescription: 'metric description'
          },
          product: {
            productCode: '12312',
            productDescription: 'product description'
          },
          glClass: 'CLASS00'
        }, {
          reconDimensionGroup: 3,
          reconMetric: {
            reconMetricId: 7,
            reconMetricDescription: 'metric description'
          },
          product: {
            productCode: '12312',
            productDescription: 'product description'
          },
          glClass: 'CLASS00'
        }
      ]
    }

    return res.status(200).json(items)
  } catch (message) {
    return res.status(400).json({ message })
  }
})

reconciliationRoutes.get('/:param', async (req: any, res: any) => {
  const params = req.params
  logger.info('GET /reconciliation')
  res.status(200).json(await reconciliationService.find({ model: modelName, data: params }))
})

reconciliationRoutes.post('/:search', async (req: any, res: any) => {
  const searchOptions = req.params.searchOptions
  logger.info(' /:search')
  logger.info(`POST /${modelName}/${searchOptions}`)
  try {
    res.status(200).json(await reconciliationService.find({ model: modelName, data: searchOptions }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

reconciliationRoutes.post('/', async (req: any, res: any) => {
  logger.info('POST /reconciliation')
  try {
    const result = await reconciliationService.create(req.body)
    res.status(200).json(result)
  } catch (error) {
    logger.error(error)
    return res.status(400).json(error)
  }
})

reconciliationRoutes.put('/', async (req, res) => {
  logger.info(`PUT /${modelName}`)
  try {
    res.status(200).json(await reconciliationService.update({ model: modelName, data: req.body }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

reconciliationRoutes.delete('/:param', async (req, res) => {
  const param = req.params.param
  logger.info(`DELETE /${modelName}/${param}`)
  try {
    res.status(200).json(await reconciliationService.delete({ model: modelName, data: param }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

export default reconciliationRoutes
