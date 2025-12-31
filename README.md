### 本地调试

```shell

npm run dev

```

### docker 打包

```shell

docker build -t h5-oidc:v1 .

```

### docker 运行

```shell

docker run -d -p 9080:80 --name vue-container h5-oidc:v1

```
