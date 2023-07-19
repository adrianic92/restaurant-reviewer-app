class UserSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :restaurants, through: :reviews
  attributes :id, :name, :username
end
