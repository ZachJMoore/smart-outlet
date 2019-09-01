# Raspberry Pi powered outlet strip

See the blog post [here](https://zachjmoore.com/posts/how-to-make-a-raspberry-pi-powered-outlet-strip) for a simple guide on building your own and using this software.

If you have already done all the hardware setup and just want to quickly find the software setup, you can see the basic instructions below:

### Software Setup

Main dependencies: node, forever && forever-service

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
$ git clone https://github.com/ZachJMoore/smart-outlet.git && cd smart-outlet && npm install && sudo npm install -g forever forever-service
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

##### Commands to interact with the service (do this before rebooting or shutting off)
Start   - "sudo service smart-outlet start"
Stop    - "sudo service smart-outlet stop"
Status  - "sudo service smart-outlet status"
Restart - "sudo service smart-outlet restart"