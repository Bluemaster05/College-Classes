# Justify
# Logan Gardner CPTR-215 Lecture
#9-10-24

def justify(text: str, num_chars: int) -> list[str]:
    """Justifies text into a list of lines, each of which (except the last one)
    is the same length by adding spaces between words (starting from the right).
    
    >>> justify("", 21)
    this is stuff
    """
    lines = []
    words = text.split()
    words_in_line = []
    for word in words:
        # Does word fit in line? add it  to line, otherwise,add new line to lines, then start new line
        if len(" ".join(words_in_line + [word])) <= num_chars:
            words_in_line.append(word)
        else:
            lines.append(" ".join(words_in_line))
            words_in_line = []
import doctest

doctest.testmod()
