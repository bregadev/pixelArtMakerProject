pipeline {
  agent {
    node {
      label 'NoSeQue'
    }

  }
  stages {
    stage('Initial') {
      steps {
        s3Upload(bucket: 'myrandombucketcubet', file: 'index.html')
      }
    }
  }
  environment {
    Stage = 'Dev'
  }
}