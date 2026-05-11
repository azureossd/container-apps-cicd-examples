FROM php:8.5.6-apache

COPY index.php /var/www/html/
COPY init_container.sh /opt/

EXPOSE 80 

ENTRYPOINT [ "/opt/init_container.sh" ]