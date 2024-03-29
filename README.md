# myBlog_Frontend

Make my own blog project.

## features

- Auth

  - Sign in / up email with verification
  - Social login with google, facebook, twitter
  - Reset password when using email

- Blog home

  - Get blog posts list by user nickname
  - View post thumbnail With images
  - Get post data using infinite scroll
  - Sort posts by category
  - View post tags
  - About page for introduce
  - Search posts by title and tag
    - (Search by starting point only due to firebase query policy)[https://firebase.google.com/docs/firestore/solutions/search]

- Post read

  - Read post written by markdown
  - View table on contents in sidebar
  - Like posts
  - Share post link on facebook, twitter
  - Copy post link on read

- Post edit & write

  - Set title and thumbnail data
  - Write blog posts using markdown
  - Drag & Drop image to fit the cursor during post edit
  - Set category group
  - Set tags group by comma

- Setting

  - Edit profile images
  - Edit user description
  - Edit user email address
  - Link and unlink social account
  - Withdrawal

## project stack

- React
- React Router
- Typescript
- Recoil
- Bootstrap
- react-md-editor
- Jest
- React Testing Library
- Cypress
- Firebase
  - Authentication
  - Firestore Database
  - Storage
  - Hosting

## demonstration

[Link](https://myblog-project.firebaseapp.com/)

[My page](https://myblog-project.firebaseapp.com/home/Minnie)

