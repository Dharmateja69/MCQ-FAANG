export const topics = [
    {
        title: "Java Basics",
        subtopics: [
            { id: "intro-java", name: "Introduction to Java" },
            { id: "history-features", name: "History and Features of Java" },
            { id: "jvm-jre-jdk", name: "JVM, JRE, and JDK" },
            { id: "program-structure", name: "Java Program Structure" },
            { id: "data-types", name: "Data Types and Variables" },
            { id: "operators", name: "Operators in Java" },
            { id: "control-statements", name: "Control Statements (if, switch, loops)" },
            { id: "arrays", name: "Arrays in Java" },
            { id: "strings", name: "String and StringBuffer/StringBuilder" },
            { id: "methods", name: "Methods in Java" },
            { id: "constructors", name: "Constructors and Constructor Overloading" },
            { id: "static-keyword", name: "Static Keyword" },
            { id: "this-super", name: "this and super Keyword" },
        ]
    },
    {
        title: "Object-Oriented Programming (OOP)",
        subtopics: [
            { id: "class-object", name: "Class and Object in Java" },
            { id: "encapsulation", name: "Encapsulation in Java" },
            { id: "abstraction", name: "Abstraction in Java" },
            { id: "inheritance", name: "Inheritance in Java" },
            { id: "polymorphism", name: "Polymorphism in Java (Compile-time & Runtime)" },
            { id: "overloading-overriding", name: "Method Overloading and Overriding" },
            { id: "interfaces", name: "Interfaces in Java" },
            { id: "abstract-classes", name: "Abstract Classes and Methods" },
            { id: "access-modifiers", name: "Access Modifiers (private, protected, public, default)" },
            { id: "packages", name: "Packages in Java" },
            { id: "final-finally-finalize", name: "final, finally, finalize" },
        ]
    },
    {
        title: "Exception Handling",
        subtopics: [
            { id: "exceptions", name: "Exception Handling" },
            { id: "try-catch", name: "try, catch, throw, throws, finally" },
            { id: "custom-exceptions", name: "Custom Exceptions" },
        ]
    },
    {
        title: "Java Language Features",
        subtopics: [
            { id: "wrapper-classes", name: "Wrapper Classes" },
            { id: "autoboxing", name: "Autoboxing and Unboxing" },
            { id: "enum", name: "Enum in Java" },
            { id: "inner-classes", name: "Nested and Inner Classes" },
            { id: "cli-args", name: "Command Line Arguments" },
            { id: "varargs", name: "Varargs in Java" },
            { id: "object-methods", name: "Object Class Methods" },
            { id: "gc", name: "Garbage Collection" },
        ]
    },
    {
        title: "Collections Framework",
        subtopics: [
            { id: "collections-overview", name: "Collections Framework Overview" },
            { id: "interfaces", name: "List, Set, Map Interfaces" },
            { id: "list-types", name: "ArrayList, LinkedList, HashSet, TreeSet" },
            { id: "map-types", name: "HashMap, TreeMap, LinkedHashMap" },
            { id: "iterators", name: "Iterator and ListIterator" },
            { id: "comparator", name: "Comparable vs Comparator" },
            { id: "collections-utils", name: "Collections Utility Class" },
        ]
    },
    {
        title: "Multithreading and Concurrency",
        subtopics: [
            { id: "multithreading", name: "Multithreading in Java" },
            { id: "thread-lifecycle", name: "Thread Lifecycle" },
            { id: "runnable", name: "Runnable Interface" },
            { id: "synchronization", name: "Thread Synchronization" },
            { id: "inter-thread", name: "Inter-thread Communication" },
            { id: "deadlock", name: "Deadlock in Java" },
        ]
    },
    {
        title: "Java I/O and Networking",
        subtopics: [
            { id: "io", name: "Java I/O (File Handling, Reader/Writer, Streams)" },
            { id: "serialization", name: "Serialization and Deserialization" },
            { id: "networking", name: "Java Networking Basics (Socket, URL)" },
        ]
    },
    {
        title: "Java 8 and Beyond",
        subtopics: [
            { id: "java8-features", name: "Introduction to Java 8 Features" },
            { id: "lambda", name: "Lambda Expressions" },
            { id: "functional-interfaces", name: "Functional Interfaces" },
            { id: "method-references", name: "Method References" },
            { id: "stream-api", name: "Stream API" },
            { id: "optional", name: "Optional Class" },
            { id: "date-time", name: "Date and Time API (java.time)" },
            { id: "annotations", name: "Annotations" },
            { id: "reflection", name: "Java Reflection" },
            { id: "modules", name: "Java Modules (Java 9+)" },
            { id: "records", name: "Records in Java (Java 14+)" },
            { id: "sealed-classes", name: "Sealed Classes (Java 17+)" },
        ]
    },
    {
        title: "Servlets and JSP",
        subtopics: [
            { id: "servlets-intro", name: "Introduction to Servlets" },
            { id: "servlet-lifecycle", name: "Servlet Lifecycle (init, service, destroy)" },
            { id: "servlet-req-res", name: "ServletRequest and ServletResponse" },
            { id: "dispatcher-redirect", name: "RequestDispatcher and Response Redirection" },
            { id: "session", name: "Session Management in Servlets (Cookie, URL Rewriting, HttpSession)" },
            { id: "jsp-intro", name: "Introduction to JSP (Java Server Pages)" },
            { id: "jsp-Directives", name: "JSP Directives" },
            { id: "jsp-Scriptlets", name: " Scriptlets" },
            { id: "jsp-Expressions", name: "Expressions" },
            { id: "jsp-objects", name: "Implicit Objects in JSP" },
            { id: "jsp-lifecycle", name: "JSP Lifecycle" },
            { id: "jstl", name: "JSTL (JSP Standard Tag Library)" },
        ]
    },
    {
        title: "JDBC and Hibernate",
        subtopics: [
            { id: "jdbc", name: "JDBC (Java Database Connectivity)" },
            { id: "statements", name: "Statement vs PreparedStatement vs CallableStatement" },
            { id: "connection-pool", name: "Connection Pooling" },
            { id: "hibernate-intro", name: "Hibernate Introduction" },
            { id: "hibernate-config", name: "Hibernate Configuration and Mapping" },
            { id: "hibernate-annotations", name: "Hibernate Annotations and CRUD Operations" },
            { id: "hql", name: "HQL (Hibernate Query Language)" },
            { id: "hibernate-cache", name: "Hibernate Caching Mechanisms" },
        ]
    },
    {
        title: "Spring Framework",
        subtopics: [
            { id: "spring-overview", name: "Spring Framework Overview" },
            { id: "spring-core", name: "Spring Core (IoC Container, Dependency Injection)" },
            { id: "bean-scope", name: "Spring Bean Scopes and Lifecycle" },
            { id: "spring-aop", name: "Spring AOP (Aspect-Oriented Programming)" },
            { id: "spring-jdbc", name: "Spring JDBC and ORM Integration" },
            { id: "spring-mvc", name: "Spring MVC Architecture" },
        ]
    },
    {
        title: "Spring Boot",
        subtopics: [
            { id: "springboot-intro", name: "Spring Boot Introduction" },
            { id: "starter-autoconfig", name: "Spring Boot Starter Projects & Auto-Configuration" },
            { id: "rest-apis", name: "Spring Boot REST APIs (GET, POST, PUT, DELETE)" },
            { id: "validation", name: "Spring Boot Validation" },
            { id: "Exception", name: "Exception Handling" },
            { id: "mysql-postgres", name: "Spring Boot with MySQL/PostgreSQL" },
            { id: "security", name: "Spring Boot Security (Basic Auth, JWT)" },
        ]
    },
    {
        title: "Microservices and Deployment",
        subtopics: [
            { id: "microservices", name: "Microservices Architecture Overview" },
            { id: "spring-cloud", name: "Spring Cloud Basics" },
            { id: "eureka", name: "Service Discovery with Eureka" },
            { id: "api-gateway", name: "API Gateway with Zuul / Spring Cloud Gateway" },
            { id: "communication", name: "Inter-Service Communication (Feign, RestTemplate)" },
            { id: "circuit-breaker", name: "Circuit Breaker with Resilience4j / Hystrix" },
            { id: "config-server", name: "Configuration Management with Spring Cloud Config" },
            { id: "docker", name: "Dockerizing Spring Boot Microservices" },
            { id: "deployment", name: "Deploying Spring Boot Microservices on Cloud (Heroku/AWS)" },
        ]
    }
];
