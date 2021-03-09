package main

import (
	"bytes"
	"embed"
	"flag"
	"log"
	"net/http"
	"path/filepath"
	"time"

	"github.com/russross/blackfriday"
)

//go:embed docs
var dfs embed.FS

func handler(w http.ResponseWriter, r *http.Request) {
	path := filepath.Join("docs", r.URL.Path) + ".md"
	buf, err := dfs.ReadFile(path)
	if err != nil {
		http.Error(w, "fail", 500)
		return
	}
	md := blackfriday.Run(buf)
	http.ServeContent(w, r, path, time.Time{}, bytes.NewReader(md))
}

func main() {
	flagAcme := flag.Bool("acme", false, "use Let's Encrypt ACME")
	flagAddr := flag.String("addr", ":8888", "address to listen on")
	flag.Parse()
	if *flagAcme {
	}

	mux := &http.ServeMux{}
	mux.HandleFunc("/", handler)

	srv := &http.Server{
		Addr:         *flagAddr,
		Handler:      mux,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  120 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
