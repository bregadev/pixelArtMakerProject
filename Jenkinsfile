pipeline {
  agent none
  stages {
    stage('Initial') {
      steps {
        s3FindFiles(bucket: 'myrandombucketcubet', pathStyleAccessEnabled: true, onlyFiles: true)
      }
    }
  }
  environment {
    Stage = 'Dev'
  }
}