Shopping Portal AngularJS
========================

### Setting the Properties
Supply the necessary values.
```
# E.g. ess.api.root=http://localhost:8080/ess/v1
ess.api.root=<value>
```

It was intended that the application run on a different port. 
```
server.port=9292
```

### Running with Spring Boot

See reference for executing with gradle on a different OS.
https://docs.gradle.org/current/userguide/gradle_wrapper.html

The following command will run the app.
`./gradlew clean bootRun`

Index page: http://localhost:9292/
