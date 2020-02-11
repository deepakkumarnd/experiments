loop do
  count = 0

  begin
    Thread.new do
      count += 1
      sleep
    end
  rescue ThreadError
    puts "Total number of threads supporetd by your system is #{Thread.list.size}"
    # Kill all the threads, killing the first item in Thread.list will stop the 
    # main program and stops the program
    Thread.list.reverse.each { |t| t.kill }
  end
end