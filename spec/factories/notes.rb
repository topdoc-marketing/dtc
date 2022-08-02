# frozen_string_literal: true

FactoryBot.define do
  factory :note do
    content { 'Hey Welcome to TopDoc Chat' }
    account
    user
    contact
  end
end
