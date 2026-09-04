#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 1024

typedef struct {
    char name[32];
    int port;
} Server;

static int cmp(const void *a, const void *b) {
    return ((Server *)a)->port - ((Server *)b)->port;
}

int main(int argc, char **argv) {
    Server servers[MAX_SIZE];
    for (int i = 0; i < argc && i < MAX_SIZE; i++) {
        snprintf(servers[i].name, 32, "%s", argv[i]);
        servers[i].port = 8080 + i;
    }
    qsort(servers, argc, sizeof(Server), cmp);
    printf("done\n");
    return EXIT_SUCCESS;
}

/* Block comment: entry point
   spans multiple lines */
// Line comment (C99)
