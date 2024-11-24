# Stage 1: Set up the build environment
FROM gradle:8 AS builder

WORKDIR /build

COPY . .

RUN gradle dependencies

# Stage 2: Run unit tests
FROM builder AS test

WORKDIR /build

RUN gradle test

# Stage 3: Build the application
FROM builder AS package

WORKDIR /build

RUN gradle build

# Stage 4: Create the final image
FROM alpine:latest AS final

WORKDIR /app

# Install required packages
RUN apk add --no-cache openjdk21

# Copy the built JAR from the previous stage
COPY --from=package /build/build/libs/rest-service.jar app.jar

# Set the user
ARG UID=1000
RUN adduser -D -u "${UID}" appuser
USER appuser

# Expose the port
EXPOSE 8080

# Set the entrypoint to run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]