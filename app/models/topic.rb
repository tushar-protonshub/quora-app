class Topic < ApplicationRecord
  # Validations
  validates :name, presence: true

  # Associations
  has_and_belongs_to_many :users
  has_and_belongs_to_many :questions

  # PG Search
  include PgSearch
  pg_search_scope :search_by_name, against: :name, :using => {
    :tsearch => {:prefix => true}
  }
end
