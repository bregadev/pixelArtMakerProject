pipeline {
  agent any
  stages {
    stage('Initial') {
      steps {
        s3Upload(bucket: 'myrandombucketcubet', file: 'index.html')
        s3Upload(bucket: 'myrandombucketcubet', pathStyleAccessEnabled: true, file: 'styles.css')
      }
    }
  }
  environment {
    Stage = 'Dev'
  }
}