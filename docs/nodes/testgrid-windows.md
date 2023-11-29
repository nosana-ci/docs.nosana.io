# Windows: Incentivized GPU Test Grid
## Install Ubuntu 22.02 on WSL2
If you are using Windows, you have to setup Ubuntu 22.04 on WSL2. **Ubuntu 20.04 won't work on WSL2**
Follow this tutorial on how to install WSL and run Ubuntu 22.04:

[Install Ubuntu on WSL2](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview)

You can test your WSL2 Ubuntu version with the following command:
```bash
lsb_release -a
```

Make sure you installed the **22.04** version

## Docker

The first one is to make sure Docker is installed and the proper privileges have been set.

Make sure you have Docker installed and that it is added to its own user group. Please follow these links to install and setup Docker:

- [Install Docker Desktop with WSL2 Backend](https://docs.docker.com/desktop/install/windows-install/)


## NVIDIA
Download and install the correct driver on: https://www.nvidia.com/download/index.aspx

To check that you have the correct drivers:
```bash
nvidia-smi
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

Next, start Podman service on port 8080, so our Nosana Node can reach it:
```bash
podman system service --time 0 tcp:0.0.0.0:8080&
```
Now verify that Podman is running correctly:
```bash
curl http://localhost:8080/v4.5.0/libpod/info
```

## Nosana Test Grid Script

You will be able to run this one command in your command line and you will have a Nosana Node running on your machine.

```bash
bash <(wget -qO- https://nosana.io/testgrid.sh)
```

Note that this script requires the requirements mentioned above, it is configured to run in such a way that it does not require sudo.
You should never run any script from the internet with sudo privileges without double-checking it.
Even in this situation, do double-check the script before running it on your box.
You can read it here: [https://nosana.io/testgrid.sh](https://nosana.io/testgrid.sh)

## Advanced
### Starting the Nosana Node with custom parameters:
```bash
docker run \
      --gpus=all \
      --network host  \
      --interactive \
      --volume ~/.config/solana/id.json:/root/.nosana/nosana_key.json \
      nosana/nosana-node \
         --network devnet \
         --podman http://localhost:8080  \
         join-test-grid
```         
