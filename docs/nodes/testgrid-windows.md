# Windows - GPU Nosana Node

Welcome to the step-by-step guide on installing the Nosana Node on your Windows system. This documentation has been designed to make the installation process straightforward and efficient, even for those who aren't tech-savvy. Follow along, and you'll have your Nosana Node up and running in no time.

1. [Install Ubuntu 22.04 on WSL2](#install-ubuntu-22-04-on-wsl2)
2. [Install Docker](#docker)
3. [Install NVIDIA drivers and container toolkit](#nvidia)
4. [Install Podman v4](#podman)
5. [Run the Nosana Node and register for Test Grid](#nosana-test-grid-script)

## Guide: Installing Ubuntu 22.04 on WSL2

For Windows users, it's essential to set up Ubuntu 22.04 specifically on WSL2.

::: warning

Ensure you're installing Ubuntu 22.04 on WSL2. Unfortunately, Ubuntu 20.04 is not compatible with WSL2.

:::

For detailed instructions on how to install WSL and run Ubuntu 22.04, follow the tutorial linked below:

[How to Install Ubuntu on WSL2](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview)

Once installed, you can verify your WSL2 Ubuntu version by running the following command:

```sh:no-line-numbers
lsb_release -a
```

Please confirm that you have installed version **22.04**.

## Docker

To ensure a successful setup, follow these steps to install and configure Docker:

1. Install Docker Desktop with the WSL2 backend by visiting this link: [Install Docker Desktop with WSL2 backend](https://docs.docker.com/desktop/install/windows-install/).

2. After installation, make sure Docker is added to its own user group.


## NVIDIA

To fully utilize the GPU on the grid, we will need to install both the NVIDIA drivers and NVIDIA's CUDA Toolkit.

### NVIDIA Driver Installation Guide

To use NVIDIA drivers, download and install the appropriate driver from the official NVIDIA website: [NVIDIA Driver Downloads](https://www.nvidia.com/download/index.aspx).

To verify if the drivers are correctly installed, open a terminal and run the following command:

```sh:no-line-numbers
nvidia-smi
```

If the drivers are correctly installed, you should see detailed information about your GPU, similar to the following example output:

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




These commands will help you generate the necessary configuration file and verify the CDI support.

### Install the NVIDIA Container Toolkit

To install the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) (`nvidia-ctk`), run the following commands:
```sh:no-line-numbers
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list \
  && \
    sudo apt-get update
```
Then we can install the NVIDIA Container Toolkit package:
```sh:no-line-numbers
sudo apt-get install -y nvidia-container-toolkit
```

#### Configure the NVIDIA Container Toolkit

For configuring the NVIDIA Container Toolkit to run Podman v4 natively on WSL2 (as Podman in Docker is not supported on WSL2), please follow the instructions for CDI configuration. You can find these instructions at https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html.

Once you have completed the configuration, run the following commands:

```sh:no-line-numbers
sudo nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml
```

```sh:no-line-numbers
nvidia-ctk cdi list
```

## Podman

The Nosana Node connects to Podman and runs your containers inside of it. On WSL2, you'll need to natively install Podman >v4.1:

```sh:no-line-numbers
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/unstable/xUbuntu_22.04/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:unstable.list
curl -fsSL https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/unstable/xUbuntu_22.04/Release.key | sudo gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/devel_kubic_libcontainers_unstable.gpg > /dev/null
sudo apt update
sudo apt install podman
```

Check if you have Podman version 4 installed and if you have GPU support:

```
podman --version
podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable ubuntu nvidia-smi -L
```

If this doesn't work, make sure you have the NVIDIA drivers installed and the nvidia-ctk [installed](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) and [configured](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html)

If you see `Error: container create failed (no logs from conmon)...` when running the command, follow the steps [here](/nodes/troubleshoot.html#podman) to resolve issue

## Nosana Test Grid Script

With just a single command in your command line, you can easily set up a Nosana Node on your machine. Simply run the following command:

```sh:no-line-numbers
bash <(wget -qO- https://nosana.io/register.sh)
```

Please note that this script has certain requirements and is specifically designed to run without the need for sudo privileges. It's crucial to exercise caution when running any script from the internet with sudo privileges. Even in this case, it's advisable to thoroughly review the script before executing it on your system. You can review the script here: [https://nosana.io/register.sh](https://nosana.io/register.sh)

The script performs a series of tests to verify the successful completion of the previous steps outlined in the guide.

You will see your node's information displayed in the following format.

```
  _   _                             
 | \ | | ___  ___  __ _ _ __   __ _ 
 |  \| |/ _ \/ __|/ _` | '_ \ / _` |
 | |\  | (_) \__ \ (_| | | | | (_| |
 |_| \_|\___/|___/\__,_|_| |_|\__,_|
                                    
Reading keypair from ~/.nosana/nosana_key.json

Network:	    mainnet
Wallet:		    <NODE_ADDRESS>
SOL balance:	0E-9 SOL
NOS balance:	0 NOS
Provider:	    podman
```


### Test Grid Registration Instructions

When running the script it'll ask for some information: email, Discord & Twitter/X handle (optional). After filling in the information and agreeing to the terms & conditions, a benchmark will start. In this benchmark we will check the hardware of your node. 

If the benchmark succeeds, you should see the following output:

```
Benchmark finished
================================
Thank you for registering for Nosana Node. 
We'll review your registration and you will get an email from us if you are selected.
```

Congratulations! :tada: You have completed the registration. If you are selected for Test Grid you will receive an email with more information.

::: warning

To find your Node's Solana key, navigate to `~/.nosana/nosana_key.json`. It is **essential** to back up this file to ensure its safety.

:::

## Advanced (optional)

### Run Podman API

This command can be used to start Podman service on port 8080, so our Nosana Node can reach it.
This is also already done by the `register.sh` script in the final step, so this step is optional:

```sh:no-line-numbers
podman system service --time 0 tcp:0.0.0.0:8080&
```

To validate Podman's proper functioning, use:

```sh:no-line-numbers
curl http://localhost:8080/v4.5.0/libpod/info
```

## Launching the Nosana Node with Custom Parameters

You can manually launch the Nosana Node to modify certain parameters:
* Use the `--podman` parameter to direct to your Podman service if it's running elsewhere.
* Use `--volume` to map your solana key to `/root/.nosana/nosana_key.json` within the Docker container if you wish to use your own key.

```sh:no-line-numbers
docker run \
      --pull=always \
      --network host  \
      --interactive \
      --volume ~/.config/solana/id.json:/root/.nosana/nosana_key.json \
      nosana/nosana-node \
         --podman http://$(ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'):8080 \
         join-test-grid
```

## Troubleshoot
If you have questions or when you have error messages, please take a look at our [Troubleshoot Guide](/nodes/troubleshoot) or join our [Discord](https://discord.gg/nosana-ai) for help.
