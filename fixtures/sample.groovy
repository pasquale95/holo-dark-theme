plugins {
    id 'java'
    id 'application'
}

group = 'com.example'
version = '1.0.0'

dependencies {
    implementation 'com.google.guava:guava:33.0.0-jre'
    testImplementation platform('org.junit:junit-bom:5.10.0')
}

tasks.named('test') {
    useJUnitPlatform()
    maxParallelForks = 4
}

// Line comment
/* Block comment */
/** Javadoc-style comment */
