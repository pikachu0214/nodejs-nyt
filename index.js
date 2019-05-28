//nyt article metadata
fetch('http://localhost:4000/metadata')
    .then(req => req.json())
    .then(res => console.log(res))


//nyt article metadata
fetch('http://localhost:4000/article')
    .then(req => req.json())
    .then(res => console.log(res))

//nyt bestseller
fetch('http://localhost:4000/list')
    .then(req => req.json())
    .then(res => console.log(res))


//nyt most popular by emailed
fetch('http://localhost:4000/email')
    .then(req => req.json())
    .then(res => console.log(res))


//nyt most popular by shared
fetch('http://localhost:4000/shared')
    .then(req => req.json())
    .then(res => console.log(res))

//nyt most popular by viewed
fetch('http://localhost:4000/viewed')
    .then(req => req.json())
    .then(res => console.log(res))

//nyt reviews
fetch('http://localhost:4000/reviews')
    .then(req => req.json())
    .then(res => console.log(res))


