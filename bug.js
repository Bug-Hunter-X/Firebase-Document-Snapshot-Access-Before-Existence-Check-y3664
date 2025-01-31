The Firebase SDK might throw an error if you try to access a property of a document snapshot before the `snapshot.exists` property is checked. This can happen if you use asynchronous operations and try to access the data before the data has been fully loaded.  For example:

```javascript
// Incorrect way
db.collection('users').doc('someId').get().then(snapshot => {
  console.log(snapshot.data().name); // Error if snapshot.exists is false
});

// Correct way
db.collection('users').doc('someId').get().then(snapshot => {
  if (snapshot.exists) {
    console.log(snapshot.data().name);
  } else {
    console.log('Document does not exist.');
  }
});
```