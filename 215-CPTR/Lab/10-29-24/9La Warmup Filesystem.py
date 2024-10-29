# Logan Gardner, Worked with Noah, Micah
class FSO():
    pass

class File(FSO):
    pass

class Folder(FSO):
    def __init__(self, files: list[FSO]) -> None:
        super().__init__()
        self.files = files