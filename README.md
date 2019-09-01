### Software Setup

https://raspberrypi.stackexchange.com/questions/93311/switch-between-wifi-client-and-access-point-without-reboot/93312#93312

Dependencies: node, forever && forever-service

##### Node for PiZW:
```
    $ curl -o node-v9.7.1-linux-armv6l.tar.gz https://nodejs.org/dist/v9.7.1/node-v9.7.1-linux-armv6l.tar.gz && tar -xzf node-v9.7.1-linux-armv6l.tar.gz && sudo cp -r node-v9.7.1-linux-armv6l/* /usr/local/
```

##### Node for Pi3B+:
```
    $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - && sudo apt-get install -y nodejs
```

##### Both:
```
npm install && sudo npm install -g forever forever-service
```

### Forever Service

##### install:
```
$ sudo forever-service install smart-outlet --script index.js
```

##### delete:
```
$ sudo service smart-outlet stop && sudo forever-service delete smart-outlet
```

##### Commands to interact with service
Start   - "sudo service smart-outlet start"
Stop    - "sudo service smart-outlet stop"
Status  - "sudo service smart-outlet status"
Restart - "sudo service smart-outlet restart"