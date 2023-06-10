# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Clear existing records

puts "seeding..."

User.create([
  { username: 'adrian_s', password: 'encrypted_password', password_confirmation: 'encrypted_password', name: 'Adrian Sedano' },
  { username: 'john_s', password: 'encrypted_password', password_confirmation: 'encrypted_password', name: 'Jane Smith' },
  { username: 'mike_j', password: 'encrypted_password', password_confirmation: 'encrypted_password', name: 'Mike Johnson' }
])

# Seed data for Restaurants
Restaurant.create([
  { name: 'Pizza Palace', location: '123 Main St, Cityville', image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Burger Bar', location: '456 Elm St, Townsville', image: 'https://images.pexels.com/photos/59943/pexels-photo-59943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Sushi Spot', location: '789 Oak St, Villagetown', image: 'https://images.pexels.com/photos/1028425/pexels-photo-1028425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
])

# Seed data for Reviews
Review.create([
  { user_id: 1, restaurant_id: 1, description: 'Delicious pizza!', rating: 5 },
  { user_id: 1, restaurant_id: 2, description: 'Great burgers!', rating: 4 },
  { user_id: 2, restaurant_id: 1, description: 'Amazing pizza place!', rating: 5 },
  { user_id: 3, restaurant_id: 3, description: 'Fantastic sushi!', rating: 4 }
])

puts "seeding complete!" 