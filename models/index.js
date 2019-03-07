const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    User.beforeValidate(pageInstance, obj) => {
        function generateSlug(title) {
            return title.replace(/\s+/g, '_').replace(/\W/g, '')
        }
        Page.slug = generateSlug(Page.title)
    },

    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        isUrl: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})


module.exports = {
  db,
  Page,
  User
}