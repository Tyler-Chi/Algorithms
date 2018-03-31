  # Write an array method that returns `true` if two elements of the array sum
# to 0 and `false` otherwise

class Array
  
  def sum_to_zero
    
    hash = Hash.new(0)
    
    self.each do |el|
      hash[el] += 1
    end
    
    hash.keys.each do |key|
      if (hash[key * -1 ] > 0)
        
        print hash
        
        return true
      end
    end
    
  
    
  return false
  
  end

end

a = [1,2,3,6,2,-1]

a.sum_to_zero



