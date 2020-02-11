require 'benchmark'

class PrimeMiner
  
  def prime?(n)
    if n < 2
      return false
    elsif n == 2
      return true
    end

    return false if n % 2 == 0

    it = 3
    prime = true

    while(it <= n/it)
      if n % it == 0
        prime = false
        break
      end

      it += 2
    end

    prime
  end

  def mine_primes(range)
    @primes = range.select { |n| prime? n }
    puts "Found #{@primes.length} prime numbers in the range #{range}"
  end
end

Thread.new do
  loop do
    puts "Threads: #{Thread.list.length}"
    sleep(1)
  end
end

puts Benchmark.measure {
  workers = []
  [1000000..2000000, 2000000..3000000, 3000000..4000000, 4000000..5000000, 5000000..6000000].each do |range|
    workers << Thread.new do
      PrimeMiner.new.mine_primes(range)
    end
  end

  workers.each(&:join)
}

# sleep

# Benchmark results

# Machine: MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports), 2.3 GHz Intel Core i5, 8 GB 2133 MHz LPDDR3

# Using jruby 9.2.6.0 (2.5.3) 2019-02-11 15ba00b Java HotSpot(TM) 64-Bit Server VM 12.0.1+12 on 12.0.1+12 +jit [darwin-x86_64]
# 26.110000   0.260000  26.370000 ( 25.098953)

# Using ruby 2.4.6p354 (2019-04-01 revision 67394) [x86_64-darwin18]
# 20.590000   0.120000  20.710000 ( 21.173924)

# Using ruby 2.6.5p114 (2019-10-01 revision 67812) [x86_64-darwin18]
# 18.099336   0.071077  18.170413 ( 18.355969)

