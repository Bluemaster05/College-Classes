# Logan Gardner, Worked with Noah, Micah

"""Warmup 9 - Library
Prof. O
2024-10-29
"""

class Item:
    def __init__(self, loc_call_num: str, title: str):
        self.loc_call_num = loc_call_num
        self.title = title

class Book(Item):
    def __init__(self, loc_call_num: str, title: str, num_pages: int):
        super().__init__(loc_call_num, title)
        self.num_pages = num_pages

class Periodical(Item):
    def __init__(self, loc_call_num: str, title: str, date: str):
        super().__init__(loc_call_num, title)
        self.date = date

class VideoDisc(Item):
    def __init__(self, loc_call_num: str, title: str, rating: str):
        super().__init__(loc_call_num, title)
        self.rating = rating

class EBook(Book):
    def __init__(self, loc_call_num: str, title: str, url: str):
        super().__init__(loc_call_num, title, 0)
        self.url = url