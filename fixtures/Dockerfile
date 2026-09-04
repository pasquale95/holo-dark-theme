FROM alpine:3.19 AS build

ARG VERSION=1.0
ENV PATH=/usr/local/bin:$PATH

RUN apk add --no-cache curl \
    && echo "done"

COPY --from=build /app /app

CMD ["sh", "-c", "exec /app/run"]

# Comment: build stage
