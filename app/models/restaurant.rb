class Restaurant < ApplicationRecord
    has_many :reviews, dependent: :delete_all
    has_many :users, through: :reviews

    validates :name, uniqueness: true
end
