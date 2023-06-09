# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Clear existing records
User.destroy_all
Review.destroy_all
Restaurant.destroy_all

"seeding..."

User.create([
  { id: 1, username: 'adrian_s', password: 'encrypted_password', password_confirmation: 'encrypted_password', name: 'Adrian Sedano' },
  { id: 2, username: 'john_s', password: 'encrypted_password', password_confirmation: 'encrypted_password', name: 'Jane Smith' },
  { id: 3, username: 'mike_j', password: 'encrypted_password', password_confirmation: 'encrypted_password', name: 'Mike Johnson' }
])

# Seed data for Restaurants
Restaurant.create([
  { id: 1, name: 'Pizza Palace', location: '123 Main St, Cityville', image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Burger Bar', location: '456 Elm St, Townsville', image: 'https://images.pexels.com/photos/59943/pexels-photo-59943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Sushi Spot', location: '789 Oak St, Villagetown', image: 'https://images.pexels.com/photos/1028425/pexels-photo-1028425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
])

# Seed data for Reviews
Review.create([
  { id: 1, user_id: 1, restaurant_id: 1, description: 'Delicious pizza!', rating: 5 },
  { id: 2, user_id: 1, restaurant_id: 2, description: 'Great burgers!', rating: 4 },
  { id: 3, user_id: 2, restaurant_id: 1, description: 'Amazing pizza place!', rating: 5 },
  { id: 4, user_id: 3, restaurant_id: 3, description: 'Fantastic sushi!', rating: 4 }
])

"seeding complete!"