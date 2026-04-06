export const getPostsByThreadId = (req, res) => {
    res.send('Posts by thread id');
}

export const createPost = (req, res) => {
    res.send('Post created');
}

export const deletePost = (req, res) => {
    res.send('Post deleted');
}


export const updatePost = (req, res) => {
    res.send('Post updated');
}

export const likePost = (req,res ) => {
    res.send('Post liked');
}

export const dislikePost = (req, res) => {
    res.send('Post disliked');
}
