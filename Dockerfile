FROM php:8.1.3-apache

COPY index.php /var/www/html/
COPY init_container.sh /opt/

EXPOSE 80 

ENTRYPOINT [ "/opt/init_container.sh" ]