const mongoose = require('mongoose')

const Post = require('./models/Post')

 mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Post.findByIdAndDelete('5e96fa1442618157ecd97915', (error, post) =>  {
console.log(error, post)
})



// Post.find({
//     title: 'Benim ikinci postum'
// },(error, post) => {
//     console.log(error, post);
// })






// Post.create({
//     title: 'Benim ikinci postum',
//     content:'Post ikinci ,lorem icerigim'
// }, (error, post) => {
//     console.log(error, post)
// })