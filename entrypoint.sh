#!/bin/sh

nginx -g 'daemon off;' &
/usr/local/bin/nginx-prometheus-exporter -nginx.scrape-uri=http://localhost:8081/stub_status &
wait