# Getting Started

Welcome to the Nosana GPU Grid, a platform dedicated to our GPU Hosts, featuring a wide variety of GPU devices.

## GPU Hosts

GPU Hosts run software (call the "Nosana Node" software) that will connect your hardware to the grid.
In order to register for the Nosana Grid, your device needs to have access to a NVIDIA GPU.

::: warning

We highly recommend to run this in a virtual environment, and to use a Solana address with only a minimal amount of SOL.

:::

## Hardware Requirements

- Internet connection
- RAM: 4GB+
- One of the following NVIDIA GPUs:

|                   |                  |                   |                  |                   |
|-------------------|------------------|-------------------|------------------|-------------------|
| NVIDIA RTX 4090   | NVIDIA RTX 4080  | NVIDIA RTX 4070Ti | NVIDIA RTX 4070  | NVIDIA RTX 4060Ti |
| NVIDIA RTX 4060   | NVIDA RTX 3090Ti | NVIDA RTX 3090    | NVIDA RTX 3080Ti | NVIDA RTX 3080    |
| NVIDIA RTX 3070Ti | NVIDA RTX 3070   | NVIDA RTX 3060    | NVIDA RTX 3060Ti | NVIDIA RTX A4000  |
| NVIDIA RTX A4500  | NVIDIA RTX A5000 | NVIDIA RTX A5500  | NVIDIA RTX A6000 |                   |

<!-- ## Software Requirements
You will need to install the following to get started as a GPU Host:

- [Ubuntu (>20.04) or Windows (with Ubuntu 22.04 on WSL2)](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#3-download-ubuntu)
- [Docker (Required)](https://docs.docker.com/desktop/linux/install/)
  - [Podman (Optional - Required for WSL2)](https://software.opensuse.org//download.html?project=devel%3Akubic%3Alibcontainers%3Aunstable&package=podman)
- [NVIDIA Drivers (Required)](https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu)
- [NVIDIA Container Toolkit (Required)](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [Solana Tool Suite (Optional)](https://docs.solana.com/cli/install-solana-cli-tools) -->

## Installation Guides

These guides provide instructions on how to set up your GPU Host and engage with the Nosana Grid. Please choose the guide that corresponds to your operating system:

1. [Windows (WSL2)](/hosts/grid-windows): This guide is suitable for you if you're running Windows. WSL2 stands for Windows Subsystem for Linux 2, which allows you to run Linux on your Windows machine. Following this guide, you'll be able to set up your GPU Host within this environment.

2. [Ubuntu](/hosts/grid-ubuntu): If you're running Ubuntu, a popular distribution of Linux, you should follow this guide.

## Host your GPU

After you have successfully setup your GPU Host and registered for the Nosana Grid, you can now start up your host and join the Nosana Grid!

* [**Run your GPU Host**](/hosts/grid-run)
