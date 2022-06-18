FROM node:16.13.1-buster
WORKDIR /usr/src/app

COPY /startup.sh /startup.sh
RUN chmod 744 /startup.sh
CMD ["/startup.sh"]