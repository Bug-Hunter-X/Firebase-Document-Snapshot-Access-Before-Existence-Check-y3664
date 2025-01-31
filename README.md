# Firebase Document Snapshot Access Before Existence Check

This repository demonstrates a common error when working with Firebase document snapshots: attempting to access data before verifying the document's existence using `snapshot.exists`.  Incorrect handling can lead to unexpected errors and application crashes.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected implementation.

**Problem:** Accessing properties of a Firebase document snapshot without first confirming its existence (`snapshot.exists`) can throw errors if the document doesn't exist.  The code will fail silently if not properly handled.

**Solution:** Always check the `snapshot.exists` property before accessing any data within the snapshot.  Handle the case where the document doesn't exist gracefully to prevent crashes and improve user experience.