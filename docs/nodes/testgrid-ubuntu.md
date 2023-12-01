# Ubuntu - GPU Nosana Node

This guide will help you setup a Nosana Node on Windows and register for the Test Grid.
1. [Install Docker](#docker)
2. [Install NVIDIA drivers and container toolkit](#nvidia)
3. [Run the Nosana Node and register for Test Grid](#nosana-test-grid-script)

Make sure you have Ubuntu version **20.04** or higher. You can check your ubuntu version with:

```bash
lsb_release -a
```
## Docker
The first one is to make sure Docker is installed and the proper privileges have been set.

Make sure you have Docker installed and that it is added to its own user group. Please follow these links to install and setup Docker:

- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Manage Docker as a non-root user.](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

This will make sure that we can spin up the Nosana Node without any root privileges.

## NVIDIA
### NVIDIA Driver installation
Download and install the correct driver on: https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu

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

#### Linux: Configure the NVIDIA Container Toolkit
Since we are going to run Podman inside of Docker, follow the Docker configuration instructions:
https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-docker

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```
```bash
sudo systemctl restart docker
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

The script consists of a couple tests, where we check if all the previous steps in this guide have been successfully completed. When all checks are completed your node will start up.

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
### Run Podman in Docker
If we are natively running Ubuntu, we can just use Docker to start our Podman instance. This is also already done by the `testgrid.sh` script in the final step, so this step is optional:
```bash 
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

Check if you have GPU support inside Podman containers:
```
docker exec -it podman bash
podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable ubuntu nvidia-smi -L
```
If this doesn't work, make sure you have the NVIDIA drivers installed and the nvidia-ctk [installed](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) and [configured](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-docker)

Verify that Podman is running correctly:
```bash
curl http://localhost:8080/v4.5.0/libpod/info
```

### Starting the Nosana Node with custom parameters:
You can also decide to start the Nosana Node yourself to be able to customize some parameters:
* If your podman is running somewhere else, you can use the `--podman` paramater to point to your podman service.
* If you want to use your own solana key, you can use `--volume` to map your key to `/root/.nosana/nosana_key.json` inside the docker container
```bash
docker run \
      --pull=always \
      --network host  \
      --interactive \
      --volume ~/.config/solana/id.json:/root/.nosana/nosana_key.json \
      nosana/nosana-node \
         --podman http://localhost:8080  \
         join-test-grid
```         
