docker build --no-cache -f SQL\Dockerfile.PostgreSql -t singlespasample/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t singlespasample/app ../..
