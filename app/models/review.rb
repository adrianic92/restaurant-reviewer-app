class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :rating, presence: true, numericality: true, inclusion: { in: 1..5 }
  validates :restaurant_id, uniqueness: { scope: :user_id}
  validates :description, presence: true

end
