

words = ['exe','mac','lin','am']

sentence = 'exemaclina1m'


def valid(words,sentence)

    words.each do |word|

        if (sentence == word)
            return true
        end

        if (sentence.slice(0,word.length) == word)

            if (valid(words,sentence.slice(word.length,sentence.length)))
                return true
            end

        end


        # puts word

    end

    return false

end


class Node

    attr_accessor :value, :child1, :child2

    def initialize(value, child1, child2)
        @value = value
        @child1 = child1
        @child2 = child2
    end



end

node1 = Node.new(10,11,nil)

puts [1,2,3].max