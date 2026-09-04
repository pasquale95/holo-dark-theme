module Greeting
  DEFAULT = "Hello"

  class Greeter
    attr_reader :name

    def initialize(name)
      @name = name
    end

    def greet
      "#{DEFAULT}, #{@name}!"
    end
  end
end

greeter = Greeting::Greeter.new("World")
puts greeter.greet if greeter.name

# Comment: greeter module
=begin
Block comment
spanning lines
=end
