const db = require('../db/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
    getUserWithData
  };

  function find() {
    return db('bookings').select('*');
  }

  function add(booking) {
    return db('bookings')
    .insert(booking, 'booking_id')
      .then(ids => {
        // console.log("DID we get here?", ids)
        const [booking_id] = ids;
        return findById(booking_id);
      });
  }

  function findBy(filter) {
    return db('bookings').where(filter)
  }

  function findById(id) {
    return db('bookings')
      .where({ booking_id: id })
      .first();
  }

  function remove(id) {
    return db('bookings')
      .where({booking_id: id})
      .del()
  }

  function update(data, id){
    return db('bookings')
      .where({booking_id: id})
      .update(data)
  }


  function getUserWithData(id) {
    return db("users")
      .where({id})
      .first()
      .then( user =>{
          let myUser = { ...user };
          return (
            db("bookings as b")
              .leftJoin("listings as l", "b.listing_id", "l.listing_id")
              .select(
                "b.booking_id",
                "b.user_id",
                "b.listing_id",
                "l.listing_name",
                "l.user_id as listed_by",
                "b.startDate",
                "b.stopDate"
              )
              .then(bookings => {
                let myBookings = bookings.filter(e => e.user_id === parseInt(id));
                myUser.bookings = myBookings;
                return(
                  db("listings as l")
                  .where({user_id: id})
                  .then( listing => {

                    myUser.listings = listing;
                    return myUser;
                  })
                )
              })

          )
      })
    }
