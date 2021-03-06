# What is Git?

Git is an open source distributed version control system.

- Open Source: software for which the original source code is made freely available and may be redistributed and modified.

- Control System: This basically means that Git is a content tracker. So Git can be used to store content. This is often code but can also be writing, pictures or any other type of file.

- Version Control System: The content which is stored in Git keeps changing as more content is added. Also, many developers can add content in parallel. So having a Version Control System helps handle this by maintaining a history of what changes have happened.

- Distributed Version Control System: Git has a remote version that is stored on a server and a local version that is stored on the computer of each developer. This means that the code is not just stored in a central server, but the full copy of the code is present on all the developers' computers.

# What is GitHub?

GitHub is a for-profit company that offers a cloud-based Git hosting service. Projects on GitHub can be accessed and manipulated using the standard Git command-line interface and all of the standard Git commands work with it.

# Repository (repo)

A Git repository is the .git/ folder inside a project. This repository tracks all changes made to files in your project, building a history over time. You typically obtain a Git repository in one of two ways:

1. You can take a local directory on your computer that is currently not under version control, and turn it into a Git repository.

2. You can clone an existing Git repository from Github.com (or other Git hosting service) as per second response:

https://stackoverflow.com/questions/3311774/how-to-convert-existing-non-empty-directory-into-a-git-working-directory-and-pus

In either case, you end up with a Git repository on your local machine, ready for work. Repositories are referred to as "repos" .

You choose which files on your local machine are added to the repository. Then you choose when you commit changes to these files.

# Git Commands

## Fork

A fork is a copy of a repository to your personal account. Forking a repository allows you to freely experiment with changes without affecting the original project. Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea

Forks are a feature of Github not Git. Main use case- work on someone else's repository without affecting it. Common in open source development.

## Clone

The clone command downloads an existing Git repository to your local computer. You will then have a full-blown, local version of that Git repo and can start working on the project. Typically, the "original" repository is located on GitHub. That remote repository's URL is then later referred to as the "origin".

## Branch

A Git branch is essentially an independent line of development. You can take advantage of branching when working on new features or bug fixes because it isolates your work from that of other team members. Different branches can be merged into any one branch as long as they belong to the same repository.

## Commit

The commit command is used to save your changes to the local repository. Each commit will store the changes that have occurred since the last commit. This allows us to save our repository often so we don't lose work. But most importantly, we can go see the old versions of the files in our project and be able to turn back changes to a specific commit.

## Push

The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repository.

## Pull

The git pull is a Git command used to update the local version of a repository from a remote. By default, git pull updates the current local working branch (currently checked out branch) and updates the remote tracking branches for all other branches.

## Merge

Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch

## Status

The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

Git documentation: https://git-scm.com/docs

# Lambda Process

1. Fork - You will 'Fork' the repository to create your own version. This keeps you from changing the assignment files for the whole class.
1. Add Collaborator - You can optionally add someone as a collaborator so they are able to see your commits and provide you feedback.
1. Clone - You will clone the repo to have a copy to work with on your personal computer.
1. Branch - Checkout a branch and name it using the firstName-lastName format.
1. Complete Assignment - Do all the work on your assignment on your personal computer. Commit your work regularly.
1. Push- Push your local changes to your remote repo branch.
   Create a Pull Request - This pull request will be made with your student branch against the Fork you created in the beginning. Submit this link to Canvas.

# Upstream Branches

https://devconnected.com/how-to-set-upstream-branch-on-git/

Upstream branches define the branch tracked on the remote repository by your local remote branch (also called the remote tracking branch)

The easiest way to set the upstream branch is to use the ???git push??? command with the ???-u??? option for upstream branch.

$ git push -u <remote> <branch>

The u stands for upstream.
The remote is usually called origin.
It creates the branch remotely and then pushes to it.

You can check tracking branches by running the ???git branch??? command with the ???-vv??? option.

git branch -vv

\* branch 808b598 Initial commit
master 808b598 [origin/master] Initial commit

We can set the upstream branch using the ???git push??? command.

git push -u origin branch

$ git branch -vv \* branch 808b598 [origin/branch]Initial commit
master 808b598 [origin/master] Initial commit

Great!
We have successfully set the upstream branch for our newly created branch.

# Best practices

Branching

You should delete branches when you're done using them. Similarly, you should never work on a branch for more than a few continuous days, always break a project down into lots and lots of smaller branches, and push and pull often. This will save you work when it comes to merge conflicts working with lots of developers later on.

Commenting

When you write code, you should get in the habit of adding meaningful comments to your code explaining why you wrote what you wrote

Committing

Developers like git because it is a version control system. Inherit to git is the idea that you never lose any progress! Gone are the days of pulling your hair out at 2am looking for v1 or v2 files that you maybe emailed to someone else, they're all saved in the version history. As such, there are a few best practices that you may have used with, for example, word documents that don't translate.

First of all, keeping old content is totally unnecessary. If you ever need to refer to content from a previous version, you can do so by looking at version history.

Second, you need to commit often and use meaningful commit messages. In order to go back and look at an old version of your code, you'll need to know which specific commit you want to look at. That means a commit message like "deleted unnecessary assets from images folder" will be a lot more helpful than something vague like "styling updates".
