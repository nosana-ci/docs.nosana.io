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

# Global configuration
global: # required
    image: <container_image> # required
    image_pull_secret: # optional this can be added if the image you are pulling needs authentication
      url: <url-to-registry> # required
      username: <username> # required
      password: # required
        type: nosana/secret # required
        endpoint: https://secrets.nosana.io # required
        value: <password-secret-key> # required


    # Trigger event that starts the pipeline, default will trigger on every commit on every branch
    trigger: # optional
        push: # optional
            branches:
                - <git_branch> # optional, default: all branches, glob patterns supported
                - <other_git_branch> # optional
            tags:
                - <tag_name> # optional, default: all tags, glob patterns supported
        pull_request:
            branches:
                - <git_branch> # optional, default: all branches, glob patterns supported
                - <other_git_branch> # optional

    # environment variables
    environment: # optional
        <key>: <value> # optional
        <other_key>: <other_value> # optional nth environment variable

    secrets: # optional
      - <secret-key> # optional

    # allow pipeline to continue if one job fails
    allow_failure: <boolean> # default: true

# List of jobs
jobs: # required

    - name: <job_name> # required
      image: <container_image> # optional, overrides global image
      image_pull_secret: # optional this can be added if the image you are pulling needs authentication
        url: <url-to-registry> # required
        username: <username> # required
        password: # required
          type: nosana/secret # required
          endpoint: https://secrets.nosana.io # required
          value: <password-secret-key> # required
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
                  path: <artifact_relative_path> # optional, default: <artifact_name>

      resources: # optional
          - name: <artifact_name> # optional
            path: <artifact_relative_path> # optional, default: '.'

      artifacts: # optional
          - name: <artifact_name> # required
            path: <artifact_relative_path> # optional, default: <artifact_name>

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
          - name: <artifact_name> # required
            path: <artifact_relative_path> # optional, default: '.'

      artifacts: # optional
          - name: <artifact_name> # required
            path: <artifact_relative_path> # optional, default: <artifact_name>
```
