"""Warmup 9 - Widgets
Prof. O
2024-10-29
"""

class Widget:
    pass

class Button(Widget):
    pass

class Label(Widget):
    pass

class Panel(Widget):
    def __init__(self, items: list[Widget]):
        self.items = items