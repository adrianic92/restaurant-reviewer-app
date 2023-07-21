class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :rating, presence: true, numericality: true, inclusion: { in: 1..5 }
  validates :restaurant_id, uniqueness: true
  validates :description, presence: true

end
