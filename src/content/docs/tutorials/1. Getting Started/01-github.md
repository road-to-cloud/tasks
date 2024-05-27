---
title: GitHub
---

If you don't yet have a GitHub account, you can create one at [GitHub](https://github.com/).

## Create a Repository

Click the [`New`](https://github.com/new) button to create a new repository.

- Set a simple repository name, e.g. `python-gh-actions`.
- Optionally, add a description.
- Make the repository public.
  - As of may 2024, [GitHub Actions are only free for public repositories](https://github.com/pricing).
- Check "Add a README file".
- Done!

## Clone the Repository

### Setting up SSH

:::note
GitHub offers multiple ways to clone repositories. The following instructions are for SSH. If you prefer HTTPS, you can find the URL in the same place.
Check out the [GitHub documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for more information.
:::

First check if you already have a SSH key:

```bash
ls -al ~/.ssh
```

If you see a file named `id_rsa.pub`, or similar, you already have a SSH key. If not, you can generate one:

```bash
ssh-keygen -t ed25519
```

Copy the SSH key to your clipboard:

```bash
cat ~/.ssh/id_*.pub
```

Add the SSH key to your GitHub account:

- Go to your [GitHub SSH settings](https://github.com/settings/ssh/new).
- Add a title, e.g. "My laptop".
- Paste the key into the "Key" field.

### Cloning the Repository

- Get the repository URL by clicking the green "Code" button.
- Select the "SSH" tab and copy the URL.
- Clone the repository to your local machine:

```bash
# git clone ...
# Replace <username> with your GitHub username, and the repo name if you changed it
git clone git@github.com:<username>/python-gh-actions.git
cd python-gh-actions
```

Validate that you have successfully cloned the repository:

```bash
cat README.md
```
