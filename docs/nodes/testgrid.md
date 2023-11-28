# Incentivized GPU Test Grid
### A multi-phase test grid for developers, data scientists, and AI enthusiasts.

Join us as an early adopter and build the foundation for the world's biggest GPU-compute grid. With a total prize pool of 3 million $NOS tokens, this program is our way of recognizing and rewarding the contributions of our community as we work together to make AI more accessible and powerful than ever before.

## Hardware Requirements
In order to register for the Test Grid, you'll need to run a Nosana Node with a Nvidia GPU.
We'd recommend a gigabit connection and further more we have the following requirements:
- RAM: 4GB+
- One of the following Nvidia GPU:

| |  |  |  | |
|-----------------------------|-----------------------------|---------|---------|---------------------------------------------------------------------------------------------------|
| NVIDIA RTX 4090 | NVIDIA RTX 4080 | NVIDIA RTX 4070Ti    | NVIDIA RTX 4070   | NVIDIA RTX 4060Ti |
| NVIDIA RTX 4060 | NVIDA RTX 3090Ti | NVIDA RTX 3090    | NVIDA RTX 3080Ti   | NVIDA RTX 3080 |
| NVIDIA RTX 3070Ti | NVIDA RTX 3070 | NVIDA RTX 3060Ti    | NVIDA RTX 3060Ti   | NVIDIA RTX A4000 |
| NVIDIA RTX A4500 | NVIDIA RTX A5000 | NVIDIA RTX A5500    | NVIDIA RTX A6000   |   |

## Software Requirements
You will need to install the following to get started with a Nosana Node:

- [Linux (also works on Windows with Ubuntu 22.04 on WSL2)](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#3-download-ubuntu)
- [Docker (Required)](https://docs.docker.com/desktop/linux/install/)
- [Nvidia Drivers (Required)](https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu)
- [Nvidia Container Toolkit (Required)](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [Solana Tools Suite (Optional)](https://docs.solana.com/cli/install-solana-cli-tools)
- [Podman (Optional - Required for WSL2)](https://software.opensuse.org//download.html?project=devel%3Akubic%3Alibcontainers%3Aunstable&package=podman)

### Windows: Install Ubuntu 22.02 on WSL2
If you are using Windows, you have to setup Ubuntu 22.04 on WSL2. **Ubuntu 20.04 won't work on WSL2**
Follow the following tutorial on how to install WSL and run Ubuntu 22.04 on it:

[Install Ubuntu on WSL2](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview)

You can test your Ubuntu version with the following command:
```bash
lsb_release -a
```
### Docker

The first one is to make sure Docker is installed and the proper privileges set.
Right now, these instructions will only work on macOS and Linux; maybe, WSL should work but has not been tested.

Make sure you have Docker installed and that it is added to its own user group. Please follow these links to install and setup Docker:

- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Manage Docker as a non-root user.](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

This will make sure that we can spin up the Nosana Node without any root privileges.

### NVIDIA
#### Windows: Nvidia Drivers installation on WSL2
Download and install the correct driver on: https://www.nvidia.com/download/index.aspx

#### Linux: Nvidia Drivers installation
Download and install the correct driver on: https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu

To check that you have the correct drivers:
```bash
nvidia-smi
```

#### Install Nvidia Container Toolkit
Follow the installation instructions on https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html to install the Nvidia Container Toolkit (`nvidia-ctk`)

##### Windows: Configure Nvidia Container Toolkit
Since we are going to run podman v4 natively on WSL2 (podman in docker is not supported on WSL2), follow the configuration instructions for CDI:
https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html

```bash
sudo nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml
```
```bash
nvidia-ctk cdi list
```

##### Linux: Configure Nvidia Container Toolkit
Since we are going to run podman inside docker, follow the docker configuration instructions:
https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-docker

```bash
sudo nvidia-ctk runtime configure --runtime=containerd
```
```bash
sudo systemctl restart docker
```
### Windows: Podman
The Nosana Node connects to Podman and runs your containers inside of it. for native Linux, we can just run Podman inside Docker (the `testgrid.sh` script in the next steps takes care of this), but on WSL2, you'll need to natively install Podman >v4.1:
```bash
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/unstable/xUbuntu_22.04/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:unstable.list
curl -fsSL https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/unstable/xUbuntu_22.04/Release.key | sudo gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/devel_kubic_libcontainers_unstable.gpg > /dev/null
sudo apt update
sudo apt install podman
```
Check if you have podman version 4 install with and check if we have GPU support:
```
podman --version
podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable ubuntu nvidia-smi -L
```
If this doesn't work, make sure you have the nvidia drivers installed and the nvidia-ctk [installed](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) and [configured](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html)

Next, start podman service on port 8080, so our Nosana Node can reach it:
```bash
podman system service --time 0 tcp:0.0.0.0:8080&
```
Now verify that Podman is running correctly:
```bash
curl http://localhost:8080/v4.5.0/libpod/info
```

### Nosana Test Grid Script

You will be able to run this one command in your command line and you will have a Nosana Node running on your machine.

```bash
curl -fsSL https://nosana.io/testgrid.sh | bash
```

Note that this script requires the requirements mentioned above, it is configured to run in such a way that it does not require sudo.
You should never run any script from the internet with sudo privileges without double-checking it.
Even in this situation, do double-check the script before running it on your box.
You can read it here: [https://nosana.io/testgrid.sh](https://nosana.io/testgrid.sh)

## Advanced
### Linux: Run Podman in Docker
If we are natively running Ubuntu, we can just use Docker to start our Podman instance. This is also already done by the `testgrid.sh` script in the final step, so this step is optional:
```bash 
    docker run -d \
      --gpus=all \
      --name podman \
      --device /dev/fuse \
      --privileged \
      -e ENABLE_GPU=true \
      -p 8080:8080 \
      nosana/podman podman system service --time 0 tcp:0.0.0.0:8080
```

### Starting the Nosana Node with custom paramters:
```bash
docker run \
      --gpus=all \
      --network host  \
      --interactive \
      --volume ~/.config/solana/id.json:/root/nosana_key.json \
      nosana/nosana-node \
         --network devnet \
         --podman http://localhost:8080  \
         join-test-grid
```         
