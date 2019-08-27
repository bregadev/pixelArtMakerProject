pipeline {
  agent any
  stages {
    stage('Initial') {
      steps {
        s3Upload(bucket: 'myrandombucketcubet', file: '*')
      }
    }
  }
}