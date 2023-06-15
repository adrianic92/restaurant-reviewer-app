class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :rating, presence: true, numericality: true, inclusion: { in: 1..5 }
  validates :user_id, presence: true
  validates :restaurant_id, presence: true
  validates :description, presence: true

end
