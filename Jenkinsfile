pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        s3Upload(bucket: 'myrandombucketcubet', file: 'index.html')
        s3Upload(bucket: 'myrandombucketcubet', pathStyleAccessEnabled: true, file: 'styles.css')
        s3Upload(bucket: 'myrandombucketcubet/images', file: 'images/greyBackground.png')
      }
    }
  }
  environment {
    Stage = 'Dev'
  }
}