# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.create(title: "Task 1", note: "This is the first task", completed: FALSE, deadline: '31-12-2020 12:00:00')
Task.create(title: "Task 2", note: "This is the second task", completed: FALSE, deadline: '01-01-2021 12:00:00')
