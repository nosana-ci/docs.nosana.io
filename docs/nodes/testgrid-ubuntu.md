# Ubuntu: Incentivized GPU Test Grid
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

### Nosana Test Grid Script
You will be able to run this one command in your command line and you will have a Nosana Node running on your machine.

```bash
bash <(wget -qO- https://nosana.io/testgrid.sh)
```

Note that this script requires the requirements mentioned above, it is configured to run in such a way that it does not require sudo.
You should never run any script from the internet with sudo privileges without double-checking it.
Even in this situation, do double-check the script before running it on your box.
You can read it here: [https://nosana.io/testgrid.sh](https://nosana.io/testgrid.sh)

## Advanced
### Run Podman in Docker
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