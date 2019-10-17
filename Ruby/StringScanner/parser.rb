require 'strscan'

template = """
Our favorite language is ((a gemstone)).
"""

class Lexer
  def initialize(template)
    @template = template
  end

  def parse
    scanner = StringScanner.new(@template)
    tokens = []

    untill scanner.eos?
      scanner.scan /((/
    end

  end
end