/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

const express = require('express');
const Note = require('../models/note');

/////////////////////////////////////////////
// Create Route
/////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
// Router Middleware
/////////////////////////////////////////////

// Authorization Middleware

router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
});

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// Index Route

router.get("/", (req, res) => {
    // find all the notes
    Note.find({ username: req.session.username })
      // render a template after they are found
      .then((notes) => {
        console.log(notes);
        res.render("notes/Index", { notes });
      })
      // send error as json if they aren't
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
});

// New Route

router.get('/new', (req,res) => {
    res.render('notes/New')
})

// Delete Route

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    Note.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/notes')
    })
    .catch((error) => {
        res.status(400).json({ error });
    })
})

// Update Route

router.put('/:id', (req,res) => {
    const { id } = req.params;
    // req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

    Note.findByIdAndUpdate(id, req.body, { new: true })
    .then(() => {
        res.redirect(`/notes/${id}`)
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// Create Route

router.post("/", (req, res) => {
    // check if the readyToEat property should be true or false
    // req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    // add username to req.body to track related user
    req.body.username = req.session.username;
    // create the New fruit
    Note.create(req.body)
      .then((notes) => {
        // redirect user to Index page if successfully created item
        res.redirect("/notes");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
});

// Edit Route

router.get('/:id/edit', (req,res) => {
    const { id } = req.params;
    Note.findById(id)
    .then((note) => {
        res.render('notes/Edit', { note })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// Show Route

router.get('/:id', (req,res) => {
    // const id = req.params.id
    const { id } = req.params;

    Note.findById(id)
    .then((note) => {
        res.render('notes/Show', { note })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })

})

module.exports = router;