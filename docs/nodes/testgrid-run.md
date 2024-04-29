# Run your Node on Test Grid
## GPU Test Grid
This guide is for nodes that already successfully registered their node for the GPU Test Grid and got selected for Phase 1 or Phase 2. Congratulations for making it this far! Now its time to start up your node and start earning $NOS! If you got selected, your node received a special access NFT that can be used to join a GPU market on Test Grid.

::: info Backup your Solana Key

To find your Node's Solana key, navigate to `~/.nosana/nosana_key.json`. It is essential to back up this file to ensure its safety.
You can print your private key to the terminal and then copy it and store it in your password manager for example.
```shell
sudo cat ~/.nosana/nosana_key.json
```
:::

## Nosana Test Grid Script

With just a single command in your command line, you can easily run your Nosana Node on your machine. Simply run the following command:

```shell
bash <(wget -qO- https://nosana.io/testgrid.sh)
```
If everything is successful, your Nosana Node is now running in a docker container.

## Register for Test Grid

If you didn't register yet for testgrid, you can register for the next phases. These guides are instructing you on how to establish your Nosana Node and partake in the Test Grid. The choice of guide depends on your operating system:

1. [Windows (WSL2)](/nodes/testgrid-windows): This guide is suitable for you if you're running Windows. WSL2 stands for Windows Subsystem for Linux 2, which allows you to run Linux on your Windows machine. Following this guide, you'll be able to set up your Nosana Node within this environment.

2. [Ubuntu](/nodes/testgrid-ubuntu): If you're running Ubuntu, a popular distribution of Linux, you should follow this guide.


## Advanced (optional)
## Launching the Nosana Node with Custom Parameters

You can manually launch the Nosana Node to modify certain parameters:
* Use the `--podman` parameter to direct to your Podman service if it's running elsewhere.
* Use `--volume` to map your solana key to `/root/.nosana/nosana_key.json` within the Docker container if you wish to use your own key.

```shell
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
::: details Do I need to keep my node running at all times?
You don't have to keep your node running at all times. However, the more your node is running, the more jobs it'll be able to pick up, which equals more $NOS rewards.
:::

::: details Where can I see the status of my node?
You can see the status of your node by having a look in the logs. To view the logs run: 
```bash
docker logs -f nosana-node
```
:::

::: details Where can I see how much $NOS I’ve earned so far?
You can see how much you've earned by checking your $NOS balance. If you imported your private key in a wallet you can see the $NOS balance in the wallet. Else go to a [Solscan](https://solscan.io/) or [Solana Explorer](https://explorer.solana.com/) and fill in your node address to see your token balances.
:::

::: details Why is my node queued?
Not at all times will there be enough jobs for all the nodes in a market. In that case a queue will form. When there's a new job available the first node in the queue will automatically pick it up.
:::

::: details Which position in the queue is my node?
To see the market queue, go to the markets page on the [Nosana Explorer](https://explorer.nosana.io/markets). Choose the market you are assigned to, on the market page it'll show you the queue.
:::