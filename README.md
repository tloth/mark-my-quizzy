# Mark My Quizzy

> Made with tender loving care by [Anna :fish:](https://github.com/tloth) and [Joko :sunflower:](https://github.com/jokosanyang)

## :sunny: Overview

The world is in a... state. We need something to keep us entertained and cheerful until we can leave our homes and gather with our friends in close groups again. And what better way than hosting a remote spring-themed quiz for all of our friends and loved ones?

Usually, our quizzes have a crucial pen and paper and swap-with-the-team-next-to-you element to them. Alas, not this time.

Luckily though, we are not only **quiz queens** and **marathon quaranteeners**, but also **delightful devs**, so we decided to **create** an app to provide an interactive peer marking experience for our quizees.

The goal was to make it **reusable**, **easy to use** and **beautiful**.

To see for yourself what we ended up with, visit the site on: https://jaquizzy.netlify.app/

## :rose: How to use

### The database

This app connects to an Airtable database. You can access the required template [here](https://airtable.com/shryctthF9P2RLxbM) by clicking **Copy base** in the top right hand corner. Once copied into your own workspace, you can edit the fields of the quiz submission form and add in your own question names/categories.

The [Airtable docs](https://support.airtable.com/hc/en-us/sections/360003922433) are really helpful when it comes to understanding the interface.

### Running the project

```
git clone https://github.com/tloth/mark-my-quizzy.git
```

Add your `AIRTABLE_API_KEY` to a `.env` file.

```
yarn install
yarn start
```

That's it! It's ready to view on http://localhost:3000 with `netlify-lambda` proxying the Netlify Functions requests to http://localhost:9000

## :baby_chick: The plan

The idea was simple. Three pages:

- A welcome page with a form.
- A marking page with another team's prefilled answers.
- A results page with live scores.

| Rough designs                        |                                      |
| ------------------------------------ | ------------------------------------ |
| ![](https://i.imgur.com/qKWw8YD.jpg) | ![](https://i.imgur.com/BCjN4sy.jpg) |

With a week to go, we got to work.

## :hibiscus: Finished result

![Screenshot from the website](https://i.imgur.com/Z3VNrlL.jpg)

## :tulip: Technologies used

- React
- Typescript
- Airtable
- @reach/router
- Netlify functions
- styled components
