package main

import (
	"fmt"
	"errors"
)

type Server struct {
	Name string `json:"name"`
	Port int
}

var ErrClosed = errors.New("closed")

func (s *Server) Start(ctx context.Context) error {
	defer close(s.done)
	for i := 0; i < s.Port; i++ {
		select {
		case <-ctx.Done():
			return ErrClosed
		default:
			fmt.Printf("%d\n", i)
		}
	}
	return nil
}

// Package comment: server bootstrap
/*
 Multi-line block comment
*/
