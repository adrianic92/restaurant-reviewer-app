class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :user_id, :restaurant_id, :restaurant_name, :user_name
  belongs_to :user
  belongs_to :restaurant

  def restaurant_name
    object.restaurant.name
  end

  def user_name
    object.user.name
  end

end
