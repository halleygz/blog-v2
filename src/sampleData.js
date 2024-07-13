const user = {
    _id: id,
    fullName: fullName,
    username: username,
    email: email,
} // <-- push this to firebase with collection name user

const sinp = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad t mollit anim id est laborum tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
console.log(sinp.length)
const blog = {
    _id: id,
    author: user.username,
    createdAt: Date.now(),
    updatedAt: "",
    title: "Some title",
    content: "",
    snippetContent: "", // make this a sliced part of the contents's first 300 character
    tags: ['tag1', 'tag2', 'tag3'],
    views: 0,
    comments: [
        {
            commenter: user[username],
            createdAt: Date.now(),
            comment: ""
        }
    ]
}