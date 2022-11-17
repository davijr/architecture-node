import userValidationJob from 'src/jobs/userValidationJob'

class JobQueue {
  jobs: any

  constructor () {
    this.jobs = [userValidationJob]
  }

  run () {}
}

export default new JobQueue()
