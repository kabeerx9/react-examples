#!/bin/bash

# Add all changes
git add .

# Prompt the user for a commit message
echo "Enter commit message:"
read commit_message

# Commit with the user's message
git commit -m "$commit_message"

# Push changes to the remote repository
git push

