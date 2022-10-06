const router = require('express').Router;
const db = require('../models')

router.get('/', (req, res) => {
  db.Blog.find()
    .then((blogs) => {
      res.render('posts', {title: 'All Posts', posts: results})
    })
  })

router.get('/post/:id/comment', (req, res) => {
    res.render('post-comment', {title: 'Post a comment'})
})

router.post('/post/:id/comment', async (req, res) => {
     const id = req.params.id;
     const comment = new Comment({
      text: req.body.comment,
      post: id
    })
    await comment.save();
    const postRelated = await Post.findById(id);
    postRelated.comments.push(comment);
      await postRelated.save(function(err) {
      if(err) {console.log(err)}
      res.redirect('/')
    })

})


router.get('/post/:id', (req, res) => {
  Post.findById(req.params.id)
      .populate('comments')
      .exec(function(err, results) {
    if(err) {console.log(err)}
      res.render('post_details', {title: 'Post details', post: 
   results, comments: results.comments})
    })
  })

router.get('/new', (req, res) => {
  res.render('create-post', {title: 'Create a post'})
 })

router.post('/new', (req, res) => {
  const post = new Post({
   title: req.body.title,
   text: req.body.text
   });
   post.save(function(err) {
    if(err) {console.log(err)}
      res.redirect('/')
   })
  })


module.export = router