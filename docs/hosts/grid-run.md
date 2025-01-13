# Host a GPU

This guide is for GPU Hosts that already successfully registered their GPU in the Nosana Grid. Congratulations for making it this far! Now its time to start up your host and start earning $NOS!

::: info Backup your Solana Key

To find your Hosts' Solana key, navigate to `~/.nosana/nosana_key.json`. It is essential to back up this file to ensure its safety.
You can print your private key to the terminal and then copy it and store it in your password manager for example.
```sh:no-line-numbers
sudo cat ~/.nosana/nosana_key.json
```
:::

## Nosana Start GPU Hosts Script

With just a single command in your command line, you can easily run your GPU Host on your machine. Simply run the following command:

```sh:no-line-numbers
bash <(wget -qO- https://nosana.com/start.sh)
```
If everything is successful, your GPU Hosts is now running in a docker container.

## Register for Nosana Grid

These guides are instructing you on how to establish your GPU Host and partake in the Nosana Grid. The choice of guide depends on your operating system:

1. [Windows (WSL2)](/hosts/grid-windows): This guide is suitable for you if you're running Windows. WSL2 stands for Windows Subsystem for Linux 2, which allows you to run Linux on your Windows machine. Following this guide, you'll be able to set up your GPU Host within this environment.

2. [Ubuntu](/hosts/grid-ubuntu): If you're running Ubuntu, a popular distribution of Linux, you should follow this guide.


## Advanced (optional)
## Launching the GPU Host with Custom Parameters

You can manually launch the GPU Host to modify certain parameters:
* Use the `--podman` parameter to direct to your Podman service if it's running elsewhere.
* Use `--volume` to map your solana key to `/root/.nosana/nosana_key.json` within the Docker container if you wish to use your own key.

```sh:no-line-numbers
docker run \
      --pull=always \
      --network host  \
      --interactive -t \
      --volume ~/.config/solana/id.json:/root/.nosana/nosana_key.json \
      nosana/nosana-cli nosana node start \
         --network mainnet \
         --rpc your-rpc-here \
         --podman http://$(ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'):8080
```

## FAQ
::: details Do I need to keep my host running at all times?
You don't have to keep your host running at all times. However, the more your host is running, the more jobs it'll be able to pick up, which equals more $NOS rewards.
:::

::: details Where can I see the status of my host?
You can see the status of your host by having a look in the logs. To view the logs run:
```sh:no-line-numbers
docker logs -f nosana-node
```
:::

::: details Where can I see how much $NOS I’ve earned so far?
You can see how much you've earned by checking your $NOS balance. If you imported your private key in a wallet you can see the $NOS balance in the wallet. Else go to a [Solscan](https://solscan.io/) or [Solana Explorer](https://explorer.solana.com/) and fill in your hosts' address to see your token balances.
:::

::: details Why is my host queued?
Not at all times will there be enough jobs for all the hosts in a market. In that case a queue will form. When there's a new job available the first host in the queue will automatically pick it up.
:::

::: details Which position in the queue is my host?
To see the market queue, go to the markets page on the [Nosana Dashboard](https://dashboard.nosana.com/markets). Choose the market you are assigned to, on the market page it'll show you the queue.
:::
