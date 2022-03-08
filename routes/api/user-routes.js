const router = require('express').Router();
const {
    getAllUser,
    getUserByID,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get()
    .post()

// /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser)
    
// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .put(updateUser)
    .get(getUserByID)
    .delete(deleteUser)

// api/users/:userId/friends/:friendsdId
router 
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)




module.exports = router;