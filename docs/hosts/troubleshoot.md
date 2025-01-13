# Troubleshooting Guide

This guide is created to aid users in resolving issues with their GPU-equipped Nosana Node configuration on both Linux and Windows operating systems.

## Error Messages

### Nvidia

::: warning nvidia-smi: command not found
::: details Solution
It means that you do not have NVIDIA drivers installed. To install them, download and install the correct drivers from the NVIDIA website: https://www.nvidia.com/download/index.aspx
:::

::: warning Error: setting up CDI devices: unresolvable CDI devices nvidia.com/gpu=all
::: details Solution
It means that you did not install and configure the Nvidia Container Toolkit correctly:

- [Nvidia instruction for WSL2 (Windows)](https://docs.nosana.com/nodes/testgrid-windows.html#install-the-nvidia-container-toolkit)
- [Nvidia instructions for Ubuntu (Native)](https://docs.nosana.com/nodes/testgrid-ubuntu.html#guide-to-install-nvidia-container-toolkit)
  :::

### Docker

::: warning The command 'docker' could not be found in this WSL 2 distro.
::: details Solution
Ensure that you have [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) installed and that it is running. If you still have this error message, check if Docker Desktop is using the WSL2 Backend (not Hyper-V). Follow this guide to turn on the WSL2 backend for Docker Desktop: https://docs.docker.com/desktop/wsl/.

Also check with Command Prompt or Powershell to make sure you have WSL version 2 installed:

```
wsl -l -v
```

Also make sure your Ubuntu 22.04 distro is the default WSL distribution. The Docker-WSL integration is enabled on the default WSL distribution. To change your default WSL distro, run:

```
wsl --set-default <distro name>
```

:::

### Podman

::: warning Error: Could not connect to Podman
::: details Solution
When you see this error go in Docker Desktop to -> Settings -> Docker engine, please add this line `"bip":"192.168.200.1/24",` somewhere after the first bracket, like this:

```
{
  "bip":"192.168.200.1/24",
}
```

Then click appy and restart Docker.
:::

::: warning Error: container create failed (no logs from conmon): conmon bytes "": readObjectStart: expect { or n, but found , error found in #0 byte of ...||..., bigger context ...||...
::: details Solution
This error is caused by the latest version of `conmon` having known issues, downgrade `conmon` to resolve this, like this:

```
wget https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_22.04/amd64/conmon_2.1.2~0_amd64.deb -O /tmp/conmon_2.1.2.deb
sudo apt install /tmp/conmon_2.1.2.deb
```

Then you can rerun the podman command

```
podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable ubuntu nvidia-smi -L
```
