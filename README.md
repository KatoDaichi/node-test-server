# node-test-server
node.jsで作成したテスト用サーバー

# 構築参考
https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

# サーバー起動方法
以下のコマンドを実行
```
sh boot-test-server.sh
```

# サーバー接続方法
以下のURLにアクセス

http://localhost:49160


# サーバーをインターネットに公開する方法(外部公開しない場合は不要)

## 以下のツールをインストール
- windows

  - 参考：[ngrokの使い方（windows, mac）](https://qiita.com/Esfahan/items/74e71edfe17d9935d47e)

- mac
```
brew cask install ngrok
```

## 以下のコマンドを実行
```
ngrok http 49160
```

# サーバー停止方法
以下のコマンドを実行
```
sh stop-test-server.sh
```