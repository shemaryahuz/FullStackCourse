import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
    process.env.DB_NAME || "sequelize_test",
    process.env.DB_USER || "root",
    process.env.DB_PASS || "",
    {
        dialect: "mysql",
        logging: false
    }
);

sequelize.sync({force: true});

const User = sequelize.define(
    "User",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    }
);

const Post = sequelize.define(
    "Post",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
);

User.hasMany(Post);
Post.belongsTo(User);

async function createData() {
    try {
        const user = await User.create({
            name: "Alice",
            email: "example@email.com"
        });
        const post = await Post.create({
            title: "My Post",
            content: "Post Content",
            userId: user.id
        });
        console.log("User created:", user.toJSON());
        console.log("Post created:", post.toJSON());
    } catch (error) {
        console.error("Error creating data:", error);
    }
}

createData();