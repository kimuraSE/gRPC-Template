package main

import (

	"context"
	"fmt"
	"log"
	"net"
	pb "server/pb"
	"database/sql"
	"google.golang.org/grpc"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	_ "github.com/go-sql-driver/mysql"
)



// type server struct{
// 	*pb.Unimplementedサービス名
// }



// func (*server) メソッド名(ctx context.Context, in *pb.req) (*pb.res, error) {
// 	 return &pb.CreateResponse{ キー名：値 },nil
// }



func main(){
	lis,err := net.Listen("tcp","0.0.0.0:50051")
	if err != nil{
		log.Fatalf("failed to listen: %v",err)
	}

	s:=grpc.NewServer()

	// pb.RegisterBlogServiceServer(s,&server{})

	fmt.Println("server is running")
	
	if err := s.Serve(lis);err!=nil{
		log.Fatalf("failed to serve")
	}
}

