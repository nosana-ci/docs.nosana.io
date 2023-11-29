# Incentivized GPU Test Grid
The Nosana Node is the software that you run to connect your hardware to the Grid.
In order to register for the Test Grid, you'll need to run a Nosana Node with a NVIDIA GPU.

::: warning

At the moment the Nosana Node is in pre-release. Nodes should only be experimented with on sandboxed hardware with throwaway key pairs. If you are looking to earn stable earnings on your hardware, we recommend you to wait until the release of V1.

:::

## Hardware Requirements
- RAM: 4GB+
- One of the following Nvidia GPUs:

| |  |  |  | |
|-----------------------------|-----------------------------|---------|---------|---------------------------------------------------------------------------------------------------|
| NVIDIA RTX 4090 | NVIDIA RTX 4080 | NVIDIA RTX 4070Ti    | NVIDIA RTX 4070   | NVIDIA RTX 4060Ti |
| NVIDIA RTX 4060 | NVIDA RTX 3090Ti | NVIDA RTX 3090    | NVIDA RTX 3080Ti   | NVIDA RTX 3080 |
| NVIDIA RTX 3070Ti | NVIDA RTX 3070 | NVIDA RTX 3060Ti    | NVIDA RTX 3060Ti   | NVIDIA RTX A4000 |
| NVIDIA RTX A4500 | NVIDIA RTX A5000 | NVIDIA RTX A5500    | NVIDIA RTX A6000   |   |

## Software Requirements
You will need to install the following to get started with a Nosana Node:

- [Ubuntu (>20.04) or Windows (with Ubuntu 22.04 on WSL2)](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#3-download-ubuntu)
- [Docker (Required)](https://docs.docker.com/desktop/linux/install/)
  - [Podman (Optional - Required for WSL2)](https://software.opensuse.org//download.html?project=devel%3Akubic%3Alibcontainers%3Aunstable&package=podman)
- [NVIDIA Drivers (Required)](https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu)
- [NVIDIA Container Toolkit (Required)](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [Solana Tool Suite (Optional)](https://docs.solana.com/cli/install-solana-cli-tools)

## Windows or native Ubuntu
Please follow one of the following guides to spin up your Nosana Node and join the Test Grid:
* [Windows Guide (WSL2)](/nodes/testgrid-windows)
* [Ubuntu Guide (Native)](/nodes/testgrid-ubuntu)
