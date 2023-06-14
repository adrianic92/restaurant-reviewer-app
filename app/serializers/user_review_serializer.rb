class UserReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating
end
