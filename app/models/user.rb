class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :restaurants, through: :reviews
    validates :name, presence: true
    validates :username, presence: true
    validates :password, confirmation: true, presence: true
    validates :password_confirmation, presence: true
end
