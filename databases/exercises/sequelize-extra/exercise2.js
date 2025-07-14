import { User, Post } from "./exercise1.js";


const user = await User.create({
        name: "Bob",
        email: "bob@example.com"
});

const posts = [
    { title: "Post 1", content: "Content 1", userId: user.id },
    { title: "Post 2", content: "Content 2", userId: user.id },
    { title: "Post 3", content: "Content 3", userId: user.id }
];

await Post.bulkCreate(posts);


console.log(`Name: ${user.toJSON().name}. id: ${user.id}. posts:`);
console.table(posts.map(post => post.toJSON()));