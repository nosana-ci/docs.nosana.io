# Specification

Here you can find the specification for the YAML syntax used in Nosana pipelines.
Now in order to bring it all together, let's take a look at the full specification for the `.nosana-ci.yml` file.

As discussed in the previous section, the `.nosana-ci.yml` file is the main configuration file for your pipeline.
It is used to define the environment that the pipeline will run in, and the individual jobs that will be executed in the pipeline.

Use this resource to learn more about the YAML syntax used in the `.nosana-ci.yml` file.

```yaml
# .nosana-ci.yml
nosana: # required
    description: <pipeline_name> # required
    storage: <storage_backend> # optional, default: IPFS

# Global configuration
global: # required
    image: <container_image> # required (full url required)

    # Trigger event that starts the pipeline, default will trigger on every commit on every branch
    trigger: # optional
        branch: # optional
            - <git_branch> # optional, default: all branches
            - <other_git_branch> # optional

    # environment variables
    environment: # optional
        <key>: <value> # optional
        <other_key>: <other_value> # optional nth environment variable

    # allow pipeline to continue if one job fails
    allow_failure: <boolean> # default: true

# List of jobs
jobs: # required

    - name: <job_name> # required
      image: <container_image> # optional, overrides global image
      environment: # optional
          <key>: <value> # optional, overrides global environment
      allow_failure: <boolean> # optional, overrides global allow_failure
      commands: # required
          - <shell_command> # required
          - <other_shell_command> # optional
          - cmd: <other_shell_command>
            working_dir: <working_dir> # optional, directory to run command in
            allow_failure: <boolean> # optional, overrides global allow_failure
            artifacts: # optional
                - name: <artifact_name> # required
                  path: <artifact_relative_path> # required

      resources: # optional
          - <artifact_name> # optional
          - <other_artifact_name> # optional

      artifacts: # optional
          - name: <artifact_name> # required
            path: <artifact_relative_path> # required

      # Optional nth job
    - name: <job_name> # required
      image: <container_image> # optional, overrides global image
      environment: # optional
          <key>: <value> # optional, overrides global environment
      allow_failure: <boolean> # optional, overrides global allow_failure
      commands: # required
          - <shell_command> # required
          - <other_shell_command> # optional

      resources: # optional
          - <artifact_name> # required
          - <other_artifact_name> # optional

      artifacts: # optional
          - name: <artifact_name> # required
            path: <artifact_relative_path> # required
```
