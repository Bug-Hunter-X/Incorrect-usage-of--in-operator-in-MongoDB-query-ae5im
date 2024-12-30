```javascript
const query = { /* some query */ };

// Incorrect usage of $in operator with a single element array
db.collection.find({ field: { $in: [value] } });
```