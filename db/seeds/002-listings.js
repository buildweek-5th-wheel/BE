
exports.seed = function(knex, Promise) {


      // Inserts seed entries
      return knex('listings').insert([
        {
          listing_name: 'Beautiful open field',
        description:"A beautiful plot of land, just outside a national park. Public bathrooms available with hot water showers.",
        image_url:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        user_id: 1
      },
        {listing_name: 'RV Park',
        description:"RV park with campsites. Electric hook up and firepits available.",
        image_url:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        user_id: 2},
        {
          listing_name: 'Parking near lake',
        description:"Scenic site next to a lake. Great fishing. Far from city lights for great starviewing at night.",
        image_url:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        user_id: 3
      },
        {
          listing_name: 'Field away from the city',
        description:"Open field available for parking overnight. Easy access from the highway.",
        image_url:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        user_id: 4
      },
        {
          listing_name: 'Family friendly RV park',
        description:"Large RV area with park nearby. Perfect for family events.",
        image_url:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        user_id: 5
      },
        {
          listing_name: 'Unique campsite',
        description:"Unique camping area. Plenty of spots overlooking a mountain view.",
        image_url:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        user_id: 6
      }
      ]);

};
