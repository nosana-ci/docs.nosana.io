# Ubuntu - GPU Nosana Node

Greetings! This is your comprehensive guide to setting up the Nosana node on an Ubuntu system. Whether you are a seasoned developer or new to the Linux world, this easy-to-follow tutorial will assist you in getting your Nosana node operational on your Ubuntu setup. Let's dive in and start the process.

1. [Install Docker](#docker)
2. [Install NVIDIA drivers and container toolkit](#nvidia)
3. [Run the Nosana Node and register for Test Grid](#nosana-test-grid-script)

Make sure you have Ubuntu version **20.04** or higher. You can check your ubuntu version with:

```shell
lsb_release -a
```

## Docker

Before proceeding with the installation and configuration of Docker, it is important to ensure that the appropriate privileges have been assigned. To do so, please refer to the following links for detailed instructions on properly installing and configuring Docker:

- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

By following these steps, you will be able to run the Nosana Node without the need for root privileges.

## NVIDIA

To fully utilize the GPU on the grid, we will need to install both the NVIDIA drivers and the NVIDIA toolkit.

## NVIDIA Driver Installation Guide

Follow these steps to install the NVIDIA drivers on your system:

1. Visit the official NVIDIA website or the link provided (https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu) to download the correct driver.
2. Once the download is complete, run the installer and follow the instructions provided.
3. After installation, check that the correct driver is installed by using the command `nvidia-smi` in the terminal.
4. If the command displays the correct driver information, the installation was successful. If not, try reinstalling the driver or seeking further assistance.

Example output:

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.54       Driver Version: 526.56       CUDA Version: 12.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  On   | 00000000:01:00.0 Off |                  N/A |
| N/A   43C    P5     9W /  N/A |      0MiB /  4096MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

### Guide to Install NVIDIA Container Toolkit

To install the NVIDIA Container Toolkit (`nvidia-ctk`), follow the step-by-step instructions provided at this link: [NVIDIA Container Toolkit Installation Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html).

#### Configuring the NVIDIA Container Toolkit on Linux

As we aim to run Podman within Docker, adhere to the Docker configuration instructions detailed here: [Configuring Docker](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-docker).

Execute the following commands in your terminal:

```shell
sudo nvidia-ctk runtime configure --runtime=docker
```

Subsequently, restart Docker with:

```shell
sudo systemctl restart docker
```

## Nosana Test Grid Script

With just a single command in your command line, you can easily set up a Nosana Node on your machine. Simply run the following command:

```shell
bash <(wget -qO- https://nosana.io/testgrid.sh)
```

Please note that this script has certain requirements and is specifically designed to run without the need for sudo privileges. It's crucial to exercise caution when running any script from the internet with sudo privileges. Even in this case, it's advisable to thoroughly review the script before executing it on your system. You can review the script here: [https://nosana.io/testgrid.sh](https://nosana.io/testgrid.sh)

The script performs a series of tests to verify the successful completion of the previous steps outlined in the guide. Once all the checks pass, your node will start up.

You will see your node's information displayed in the following format. As long as there are no error messages, your node will automatically join the Test Grid market, where it will receive a Test Grid benchmark job. It's important to keep the node running during this process!

```shell
  _ __   ___  ___  __ _ _ __   __ _
 | '_ \ / _ \/ __|/ _` | '_ \ / _` |
 | | | | (_) \__ \ (_| | | | | (_| |
 |_| |_|\___/|___/\__,_|_| |_|\__,_|

  Validator  <NODE ADDRESS>
  Network    Solana :devnet
  Market     <MARKET ADDRESS>
  Balance    0E-9 SOL
  Tokens     0.000000 NOS
  Slashed    0.00 NOS
  NFT        11111111111111111111111111111111
  Owned      0 NFT
```

### Test Grid Registration Instructions

Upon successful completion of the Test Grid benchmark job, you will receive a code in the logs. This code is required for your registration. Please follow the steps below:

1. Check the logs for the following message:
   ```
   Job Succeeded: https://explorer.nosana.io/jobs/<JOB_ID>?network=devnet
   Test Grid Registration code: <CODE>
   ```

2. Copy the Test Grid Registration code `<CODE>`.

Congratulations! :tada: You have completed the technical part of the registration.

::: info

To find your Node's Solana Key, navigate to `~/.nosana/nosana_key.json`. It is essential to back up this file to ensure its safety.

:::

## Optional: Run Podman in Docker

If you're running Ubuntu natively, you can use Docker to initiate your Podman instance. The `testgrid.sh` script accomplishes this in the final step, making this a non-mandatory step:

```shell
    docker run -d \
      --pull=always \
      --gpus=all \
      --name podman \
      --device /dev/fuse \
      --privileged \
      -e ENABLE_GPU=true \
      -p 8080:8080 \
      nosana/podman podman system service --time 0 tcp:0.0.0.0:8080
```

To confirm GPU support within Podman containers, execute:

```
docker exec -it podman bash
podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable ubuntu nvidia-smi -L
```

If unsuccessful, ensure NVIDIA drivers and the nvidia-ctk are [installed](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) and [configured](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-docker)

To validate Podman's proper functioning, use:

```shell
curl http://localhost:8080/v4.5.0/libpod/info
```

## Launching the Nosana Node with Custom Parameters

You can manually launch the Nosana Node to modify certain parameters:
* Use the `--podman` parameter to direct to your Podman service if it's running elsewhere.
* Use `--volume` to map your solana key to `/root/.nosana/nosana_key.json` within the Docker container if you wish to use your own key.

```shell
docker run \
      --pull=always \
      --network host  \
      --interactive \
      --volume ~/.config/solana/id.json:/root/.nosana/nosana_key.json \
      nosana/nosana-node \
         --podman http://localhost:8080  \
         join-test-grid
```
