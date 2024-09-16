# Dockerfile para o MySQL
FROM mysql:8.0

# Copiar o script SQL para o diretório de inicialização
COPY ./db_data/init.sql /docker-entrypoint-initdb.d/

# O MySQL automaticamente executa scripts no diretório /docker-entrypoint-initdb.d/