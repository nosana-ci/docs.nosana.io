# Windows - GPU Nosana Node
Welcome to the step-by-step guide on installing the Nosana node on your Windows system. This documentation has been designed to make the installation process straightforward and efficient, even for those who aren't tech-savvy. Follow along, and you'll have your Nosana node up and running in no time.
1. [Install Ubuntu 22.02 on WSL2](#install-ubuntu-22-02-on-wsl2)
2. [Install Docker](#docker)
3. [Install NVIDIA drivers and container toolkit](#nvidia)
4. [Install Podman v4](#podman)
5. [Run the Nosana Node and register for Test Grid](#nosana-test-grid-script)

## Install Ubuntu 22.02 on WSL2
If you are using Windows, you have to setup Ubuntu 22.04 on WSL2. 

::: warning

Make sure you'll install Ubuntu 22.04 on WSL2, Ubuntu 20.04 will **not** work on WSL2

:::


Follow this tutorial on how to install WSL and run Ubuntu 22.04:

[Install Ubuntu on WSL2](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview)

You can test your WSL2 Ubuntu version with the following command:
```bash
lsb_release -a
```

Make sure you installed the **22.04** version

## Docker

The first one is to make sure Docker is installed and the proper privileges have been set.

Make sure you have Docker installed and that it is added to its own user group. Please follow this link to install and setup Docker:

- [Install Docker Desktop with WSL2 backend](https://docs.docker.com/desktop/install/windows-install/)


## NVIDIA
Download and install the correct driver on: https://www.nvidia.com/download/index.aspx

To check that you have the correct drivers:
```bash
nvidia-smi
```
If you have the drivers installed correctly, you should be seeing information about your GPU. Example output:
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

### Install the NVIDIA Container Toolkit
Follow the installation instructions on https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html to install the NVIDIA Container Toolkit (`nvidia-ctk`)

#### Configure the NVIDIA Container Toolkit
Since we are going to run Podman v4 natively on WSL2 (Podman in Docker is not supported on WSL2), follow the configuration instructions for the CDI:
https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html

```bash
sudo nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml
```
```bash
nvidia-ctk cdi list
```

## Podman
The Nosana Node connects to Podman and runs your containers inside of it. On WSL2, you'll need to natively install Podman >v4.1:
```bash
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

## Nosana Test Grid Script

You will be able to run this one command in your command line and you will have a Nosana Node running on your machine.

```bash
bash <(wget -qO- https://nosana.io/testgrid.sh)
```

Note that this script requires the requirements mentioned above, it is configured to run in such a way that it does not require sudo.
You should never run any script from the internet with sudo privileges without double-checking it.
Even in this situation, do double-check the script before running it on your box.
You can read it here: [https://nosana.io/testgrid.sh](https://nosana.io/testgrid.sh)

The script consists of a couple tests, here we check if all the previous steps in this guide have been successfully completed. When all checks are completed your node will start up.

You should see your node's information in the format below. When there are no error messages, your node will automatically join the Test Grid market, where it'll pick up a Test Grid benchmark job. It is important to keep the node running while it's in this process!
```bash
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

### Test Grid Registration code
When the Test Grid benchmark job succeeds, a code will appear in the logs, you will need this code to complete your registration.

```bash
Job Succeeded: https://explorer.nosana.io/jobs/<JOB_ID>?network=devnet
Test Grid Registration code: <CODE>
```

Congrats! :tada: You've successfully completed the technical part of the registration.

::: info

You can find your Node's Solana Key in `~/.nosana/nosana_key.json`. Make sure you backup this file!

:::

## Advanced (optional)
### Run Podman API
This command can be used to start Podman service on port 8080, so our Nosana Node can reach it.
This is also already done by the `testgrid.sh` script in the final step, so this step is optional:

```bash
podman system service --time 0 tcp:0.0.0.0:8080&
```
Now verify that Podman is running correctly:
```bash
curl http://localhost:8080/v4.5.0/libpod/info
```

### Starting the Nosana Node with custom parameters:
You can also decide to start the Nosana Node yourself to be able to customize some parameters:
* If your podman is running somewhere else, you can use the `--podman` paramater to point to your podman service.
* If you want to use your own solana key, you can use `--volume` to map your key to `/root/.nosana/nosana_key.json` inside the docker container
```bash
docker run \
      --network host  \
      --interactive \
      --volume ~/.config/solana/id.json:/root/.nosana/nosana_key.json \
      nosana/nosana-node \
         --podman http://$(ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'):8080 \
         join-test-grid
```
