# Troubleshooting Guide
This guide is created to aid users in resolving issues with their GPU-equipped Nosana Node configuration on both Linux and Windows operating systems.

## Error Messages
::: warning nvidia-smi: command not found
::: details Solution
It means that you do not have NVIDIA drivers installed. To install them, download and install the correct drivers from the NVIDIA website: https://www.nvidia.com/download/index.aspx
:::

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

::: warning Error: setting up CDI devices: unresolvable CDI devices nvidia.com/gpu=all
::: details Solution
It means that you did not install and configure the Nvidia Container Toolkit correctly: 
* [Nvidia instruction for WSL2 (Windows)](https://docs.nosana.io/nodes/testgrid-windows.html#install-the-nvidia-container-toolkit)
* [Nvidia instructions for Ubuntu (Native)](https://docs.nosana.io/nodes/testgrid-ubuntu.html#guide-to-install-nvidia-container-toolkit)
:::

